$(document).ready(function() {

    var divContainer = $("#DivDomApi");

    // input

    var apiOpenDataa = 'https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=';
    var dateA = '%22%2C%20%222017';
    var roww = '&rows=30';
    var startt = '&start=2';
    var apiPp = '&pretty=false';
    var apiTt = '&timezone=UTC';
    var inputt = $("#inputChercher");

    $("#buttonSearche").on("click", function() {
        divContainer.empty();
        var urll = apiOpenDataa + inputt.val() + dateA + roww + startt + apiPp + apiTt;

        $.getJSON(urll, function(json) {

            json.records.forEach(function(item) {
                creImg = $("<img/>");
                creHref = creImg.attr("src", item.record.fields.image);
                apiImage = creImg.attr("class", "apiImage");
                divContainer.append(creImg);

                divTitle = $("<div></div>");
                title = $("<h5></h5>");
                divTitle.append(title);
                divContainer.append(divTitle);
                divTitle.attr("class", "apiDivTitle");
                title.attr("class", "apiTitle");
                title.append(" " + item.record.fields.title);

                divDateStart = $("<div></div>");
                dateStart = $("<h5>Date de début:</h5>");
                divDateStart.append(dateStart);
                divContainer.append(divDateStart);
                divDateStart.attr("class", "apiDivDateStart");
                dateStart.attr("class", "apiDateStart");
                dateStart.append(" " + item.record.fields.date_start);

                divDateEnd = $("<div></div>");
                dateEnd = $("<h5>Date de fin:</h5>");
                divDateEnd.append(dateEnd);
                divContainer.append(divDateEnd);
                divDateEnd.attr("class", "apiDivDateEnd");
                dateEnd.attr("class", "apiDateEnd");
                dateEnd.append(" " + item.record.fields.date_end);

                divAdresse = $("<div></div>");
                adresse = $("<h5>City: </h5>");
                divAdresse.append(adresse);
                divContainer.append(divAdresse);
                divAdresse.attr("class", "apiDivAdresse");
                adresse.attr("class", "apiAdresse");
                adresse.append(" " + item.record.fields.city);

                divPrix = $("<div></div>");
                prix = $("<h5>Le prix:</h5>");
                divPrix.append(prix);
                divContainer.append(divPrix);
                divPrix.attr("class", "apiDivPrix");
                prix.attr("class", "apiPrix");
                prix.append(" " + item.record.fields.pricing_info);

                divDescription = $("<div></div>");
                description = $("<h5>Description:</h5>");
                divDescription.append(description);
                divContainer.append(divDescription);
                divDescription.attr("class", "apiDivDescription");
                description.attr("class", "apiDescription");
                description.append(" " + item.record.fields.description);

                creLink = $("<a>Le lien vers le site: </a>");
                creLink.attr("class", "creLink");
                divContainer.append(creLink);
                creLink.attr("href", item.record.fields.link);

            });

        });
    });

    var apiOpenData = 'https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=';
    var dateC = '%22%2C%20%222017%22%20%22mars';
    var row = '&rows=30';
    var start = '&start=2';
    var apiP = '&pretty=false';
    var apiT = '&timezone=UTC';
    var input = $("#idSuccess");

    $("#button-address").on("click", function() {
        divContainer.empty();
        var url = apiOpenData + input.val() + dateC + row + start + apiP + apiT;

        $.getJSON(url, function(json) {

            json.records.forEach(function(item) {
                creImg = $("<img/>");
                creHref = creImg.attr("src", item.record.fields.image);
                apiImage = creImg.attr("class", "apiImage");
                divContainer.append(creImg);

                divTitle = $("<div></div>");
                title = $("<h5></h5>");
                divTitle.append(title);
                divContainer.append(divTitle);
                divTitle.attr("class", "apiDivTitle");
                title.attr("class", "apiTitle");
                title.append(" " + item.record.fields.title);

                divDateStart = $("<div></div>");
                dateStart = $("<h5>Date de début:</h5>");
                divDateStart.append(dateStart);
                divContainer.append(divDateStart);
                divDateStart.attr("class", "apiDivDateStart");
                dateStart.attr("class", "apiDateStart");
                dateStart.append(" " + item.record.fields.date_start);

                divDateEnd = $("<div></div>");
                dateEnd = $("<h5>Date de fin:</h5>");
                divDateEnd.append(dateEnd);
                divContainer.append(divDateEnd);
                divDateEnd.attr("class", "apiDivDateEnd");
                dateEnd.attr("class", "apiDateEnd");
                dateEnd.append(" " + item.record.fields.date_end);

                divAdresse = $("<div></div>");
                adresse = $("<h5>City: </h5>");
                divAdresse.append(adresse);
                divContainer.append(divAdresse);
                divAdresse.attr("class", "apiDivAdresse");
                adresse.attr("class", "apiAdresse");
                adresse.append(" " + item.record.fields.city);

                divPrix = $("<div></div>");
                prix = $("<h5>Le prix:</h5>");
                divPrix.append(prix);
                divContainer.append(divPrix);
                divPrix.attr("class", "apiDivPrix");
                prix.attr("class", "apiPrix");
                prix.append(" " + item.record.fields.pricing_info);

                divDescription = $("<div></div>");
                description = $("<h5>Description:</h5>");
                divDescription.append(description);
                divContainer.append(divDescription);
                divDescription.attr("class", "apiDivDescription");
                description.attr("class", "apiDescription");
                description.append(" " + item.record.fields.description);

                creLink = $("<a>Le lien vers le site: </a>");
                creLink.attr("class", "creLink");
                divContainer.append(creLink);
                creLink.attr("href", item.record.fields.link);

            });

        });
    });

    var timerIn = 200;
    var timerOut = 200;
    $('ul.nav li.dropdown').hover(function() {
        $(this).find('> .dropdown-menu').stop(true, true).fadeIn(timerIn);
        $(this).addClass('open');
    }, function() {
        $(this).find('> .dropdown-menu').stop(true, true).fadeOut(timerOut);
        $(this).removeClass('open');
    });
});

// Cozy address

var address = null;
getAddress().then(function(address) {
    console.log(address);
    var general = address.postcode + ', ' + address.city;
    $('#idSuccess').val(general.replace(/\n/, ' '));
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
