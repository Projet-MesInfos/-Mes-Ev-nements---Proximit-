$(document).ready(function() {

    $("#form-keypress").submit(function(event) {
        if ($("input:first").val() === "correct") {}
        event.preventDefault();
    });

    // menu hover
    var timerIn = 200;
    var timerOut = 200;
    $('ul.nav li.dropdown').hover(function() {
        $(this).find('> .dropdown-menu').stop(true, true).fadeIn(timerIn);
        $(this).addClass('open');
    }, function() {
        $(this).find('> .dropdown-menu').stop(true, true).fadeOut(timerOut);
        $(this).removeClass('open');
    });

    // chercher l api  et l afficher
    var divContainer = $("#DivDomApi");

    // input
    var apiOpenDataa = 'https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=';
    var roww = '&rows=30';
    var startt = '&start=2';
    var apiPp = '&pretty=false';
    var apiTt = '&timezone=UTC';
    var inputt = $("#inputChercher");

    var fetchEvents = function() {
        divContainer.empty();
        var urll = apiOpenDataa + inputt.val() + roww + startt + apiPp + apiTt;

        $.getJSON(urll, function(json) {

            json.records.forEach(function(item) {

                var itemContainer = $("<div class='evenements row'></div>");
                itemContainer.html(`
                <div class="col-md-5 col-xs-12" >
                  <div id="Api-Image" ></div>
                </div>
                <div class="col-md-7 col-xs-12" id="Details">
                  <div id="Api-Title" class="row"></div>
                  <div id="ApiDate-Start" class="row"></div>
                  <div id="ApiDate-End" class="row"></div>
                  <div id="Api-Adresse" class="row"></div>
                  <div id="Api-Prix" class="row"></div>
                  <div id="Api-Description" class="row"></div>
                </div>
              `);

                var imageApi = itemContainer.find('#Api-Image');
                creImg = $("<img/>");
                creImg.attr("src", item.record.fields.image);
                creImg.appendTo(imageApi);

                itemContainer.find("#Api-Title").html("<h3>" + item.record.fields.title + "</h3>");

                itemContainer.find("#ApiDate-Start").html("<h5>Date de début:" + item.record.fields.date_start + "</h5>")

                itemContainer.find("#ApiDate-End").html("<h5>Date de fin:" + item.record.fields.date_end + "</h5>");

                itemContainer.find("#Api-Adresse").html("<h5>City:" + item.record.fields.city + "</h5>")

                itemContainer.find("#Api-Prix").html("<h5>Le prix:" + item.record.fields.pricing_info + "</h5>")

                itemContainer.find("#Api-Description").html("<h5>Description:" + item.record.fields.description + "</h5><p><a  target='blank' href='" + item.record.fields.link + "'> Plus de details  </a></p>");

                divContainer.append(itemContainer);
            });
        });
    }

    $("#buttonSearche").click(fetchEvents);

    // chercher l'adresse chient sur cozy

    var address = null;
    getAddress().then(function(address) {
        var general = "Avril" +
        ' ' +
        "2017" +
        ', ' + (address.postcode || address.postCode || '') + ', ' + address.city;
        // var general = (address.postcode  || address.postCode || '') + Date() + ', ' + address.city;
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
