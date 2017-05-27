var containerApi = $("#container-api");

// la template
var glob = function(json) {
    console.log(json);
    json.records.forEach(function(item) {
        var itemContainer = $("<div class='evenements'></div>");
        itemContainer.html(`<div class="card">
            <div id="disc-hidden" class="disc-hidden"></div>
            <div class="div_vide"> </div>
                <img class="img-fluid image-api" id="image-api" alt="image">
                <div class="card-block">
                  <h4 class="title" id="title-api"></h4>
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
        link.attr("href", item.record.fields.link.replace("event", "events"));

        itemContainer.find("#disc-hidden").html(item.record.fields.description);

        containerApi.append(itemContainer);

        $(".div_vide").mouseover(function(event) {
            $(event.target.parentElement).find(".disc-hidden").css("display", "block");
            $('.disc-hidden').addClass('animated flipInY');

         });

        $(".div_vide").mouseout(function() {
            $(".disc-hidden").css("display", "none");
         });

    });
};

// api évenements
$("#cinemaGeneral").on("click", function() {
    containerApi.empty();
    $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22cin%C3%A9ma%22%2C%20%222017%22%2C%20%22mai%22&rows=100&pretty=false&timezone=UTC", function(json) {
        glob(json);
        $("#inputChercher").empty();
        $("#inputChercher").val('Cinemas');
    });
});

$("#cinemaGratuit").on("click", function() {
    containerApi.empty();
    $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22cinema%22%2C%20%222017%22%2C%20%22mai%22%2C%20%22Entr%C3%A9e%20libre%22&rows=100&pretty=false&timezone=UTC", function(json) {
        glob(json);
        $("#inputChercher").empty();
        $("#inputChercher").val('Cinema gratuit');
    });
});

$("#theatreGeneral").on("click", function() {
    containerApi.empty();
    $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22th%C3%A9%C3%A2tre%20%22%2C%20%222017%22%2C%20%22mai%22&rows=100&start=1&pretty=false&timezone=UTC", function(json) {
        glob(json);
        $("#inputChercher").empty();
        $("#inputChercher").val('Théatre');
    });
});

$("#theatreGratuit").on("click", function() {
    containerApi.empty();
    $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22th%C3%A9%C3%A2tre%20%22%2C%20%222017%22%2C%20%22mai%22%2C%20%22Entr%C3%A9e%20libre%22&rows=100&start=4&pretty=false&timezone=UTC", function(json) {
        glob(json);
        $("#inputChercher").empty();
        $("#inputChercher").val('Theatre gratuit');
    });
});

$("#spectacleGeneral").on("click", function() {
    containerApi.empty();
    $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22spectacle%22%2C%20%222017%22%2C%20%22mai%22&rows=100&start=4&pretty=false&timezone=UTC", function(json) {
        glob(json);
        $("#inputChercher").empty();
        $("#inputChercher").val('Spectacles');
    });
});

$("#spectacleGratuit").on("click", function() {
    containerApi.empty();
    $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22spectacle%22%2C%20%222017%22%2C%20%22mai%22%2C%20%22Entr%C3%A9e%20libre%22&rows=100&pretty=false&timezone=UTC", function(json) {
        glob(json);
        $("#inputChercher").empty();
        $("#inputChercher").val('Sepectacle gratuit');
    });
});

$("#danseGeneral").on("click", function() {
    containerApi.empty();
    $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22danse%20%22%2C%20%222017%22%2C%20%22mai%22&rows=100&start=3&pretty=false&timezone=UTC", function(json) {
        glob(json);
        $("#inputChercher").empty();
        $("#inputChercher").val('Danses');
    });
});

$("#danseGratuit").on("click", function() {
    containerApi.empty();
    $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22danse%20%22%2C%20%222017%22%2C%20%22mai%22%2C%20%22Entr%C3%A9e%20libre%22&rows=100&pretty=false&timezone=UTC", function(json) {
        glob(json);
        $("#inputChercher").empty();
        $("#inputChercher").val('Danse gratuit');
    });
});

$("#animationGeneral").on("click", function() {
    containerApi.empty();
    $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22animation%22%2C%20%222017%22%2C%20%22mai%22&rows=100&start=3&pretty=false&timezone=UTC", function(json) {
        glob(json);
        $("#inputChercher").empty();
        $("#inputChercher").val('Animations');
    });
});

$("#animationGratuit").on("click", function() {
    containerApi.empty();
    $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22animation%22%2C%20%222017%22%2C%20%22mai%22%2C%20%22Entr%C3%A9e%20libre%22&rows=100&pretty=false&timezone=UTC", function(json) {
        glob(json);
        $("#inputChercher").empty();
        $("#inputChercher").val('Animation gratuit');
    });
});

$("#sportGeneral").on("click", function() {
    containerApi.empty();
    $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22sport%22%2C%20%222017%22%2C%20%22mai%22&rows=100&start=5&pretty=false&timezone=UTC", function(json) {
        glob(json);
        $("#inputChercher").empty();
        $("#inputChercher").val('Sports');
    });
});

$("#sportGratuit").on("click", function() {
    containerApi.empty();
    $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22sport%22%2C%20%222017%22%2C%20%22mai%22%2C%20%22Entr%C3%A9e%20libre%22&rows=100&start=2&pretty=false&timezone=UTC", function(json) {
        glob(json);
        $("#inputChercher").empty();
        $("#inputChercher").val('Sport gratuit');
    });
});
