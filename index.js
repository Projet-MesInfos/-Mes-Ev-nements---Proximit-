$(document).ready(function() {

    // button maison
    $("#btn-maison").on("click", function() {
        window.location.reload();
    });

    // keypresse enter-input
    $("#form-keypress").submit(function(event) {
        if ($("input:first").val() === "correct"){
        event.preventDefault();
        }
    });

    // menu hover
    var timerIn = 200;
    var timerOut = 200;
    $('li.nav-item.dropdown').hover(function() {
        $(this).find('> .dropdown-menu').stop(true, true).fadeIn(timerIn);
        $(this).addClass('open');
    }, function() {
        $(this).find('> .dropdown-menu').stop(true, true).fadeOut(timerOut);
        $(this).removeClass('open');
    });

    //  div container
    var containerApi = $("#container-api");

    // api dans l'input et les paramettres

    var apiOpenDataa = 'https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=';
    var roww = '&rows=100';
    var startt = '&start=2';
    var apiPp = '&pretty=false';
    var apiTt = '&timezone=UTC';
    var inputt = $("#inputChercher");

    var fetchEvents = function() {
        containerApi.empty();
        var urll = apiOpenDataa + inputt.val() + roww + startt + apiPp + apiTt;

        $.getJSON(urll, function(json) {
            json.records.forEach(function(item) {
                var itemContainer = $("<div class='evenements'></div>");
                itemContainer.html(`<div class="card">
                  <div id="disc-hidden"></div>
                <img id="image-api" class="img-fluid" alt="image">
                <div class="card-block">
                  <h4 id="title-api"></h4>
                  <p id="date-api"> </p>
                  <p id="ville-api"></p>
                  <p id="prix-api"> </p>
                </div>
              </div> <a id="link-api" target='_blank'> <button id="btn" class"btn btn-primar btn-card><i class="fa fa-info-circle" aria-hidden="true"></i></button></a>`);

                var image = itemContainer.find('#image-api');
                image.attr("src", item.record.fields.image);

                itemContainer.find("#title-api").html(item.record.fields.title.substring(0, 21));

                itemContainer.find("#date-api").html("Date:" +
                    " " + item.record.fields.date_start);

                itemContainer.find("#ville-api").html("Ville:" +
                    " " + item.record.fields.city);

              itemContainer.find("#prix-api").html("Prix:" +
                    " " + item.record.fields.pricing_info);
                    
                var link = itemContainer.find("#link-api");
                link.attr("href", item.record.fields.link);

                containerApi.append(itemContainer);
            });
        });
    }

    $("#buttonSearche").click(fetchEvents);

    // chercher l'adresse sur la plate-forme de cozy

    var address = null;
    getAddress().then(function(address) {
        var general = "Mai" +
        ' ' +
        "2017" +
        ', ' + (address.postcode || address.postCode || '') + ', ' + address.city;

        $('#inputChercher').val(general.replace(/\n/, ' '));
        fetchEvents();
    });
});

function getAddress() {
    // Initialise the cozy sdk.
    cozy.client.init();
    return getMaifAddress().catch(getEDFAddress);
}

function getEDFAddress() {
    // create an index, for the Client doctype, on the vendor field.
    return cozy.client.data.defineIndex('Client', ['vendor']).then(function(index) {
        // Query the cozy database, using the previous index, to found the data.
        return cozy.client.data.query(index, {
            selector: {
                vendor: 'EDF'
            }
        });
    }).then(function(data) {
        if (data.length === 0) {
            return Promise.reject(null);
        }
        // extract the data we need.
        return data[0].address;
    });
}

function getMaifAddress() {
    return cozy.client.data.defineIndex('Maifuser', ['_id']).then(function(index) {
        return cozy.client.data.query(index, {
            selector: {
                _id: ''
            }
        });
    }).then(function(data) {
        if (data.length === 0) {
            return Promise.reject(null);
        }

        var address = data[0].profile.MesInfos.foyer.address;
        // address.formated = address.street + '\n' + adress.postcode + ' ' + address.city;
        return address
    });
}
