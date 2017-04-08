$(document).ready(function() {

    var divContainer = $("#DivDomApi");

    // le lien d'api
    // la filtrages des evenmeents general

var glob = function(json) {
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

     itemContainer.find("#Api-Description").html("<h5>Description:" + item.record.fields.description + "</h5><p><a href='"+ item.record.fields.link + "'> Plus de details  </a></p>");

     divContainer.append(itemContainer);
  });
};

    $("#cinemaGeneral").on("click", function() {

        divContainer.empty();

        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22cin%C3%A9ma%22%2C%20%222017%22%2C%20%22mars%22&rows=30&pretty=false&timezone=UTC", function(json) {
            glob(json);        });    });

    $("#cinemaGratuit").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22cinema%22%2C%20%222017%22%2C%20%22mars%22%2C%20%22Entr%C3%A9e%20libre%22&rows=30&pretty=false&timezone=UTC", function(json) {
            glob(json);        });    });

    $("#theatreGeneral").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22th%C3%A9%C3%A2tre%20%22%2C%20%222017%22%2C%20%22mars%22&rows=30&start=1&pretty=false&timezone=UTC", function(json) {
            glob(json);      });  });

    $("#theatreGratuit").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22th%C3%A9%C3%A2tre%20%22%2C%20%222017%22%2C%20%22mars%22%2C%20%22Entr%C3%A9e%20libre%22&rows=30&start=3&pretty=false&timezone=UTC", function(json) {
            glob(json);        });    });

    $("#spectacleGeneral").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22spectacle%22%2C%20%222017%22%2C%20%22mars%22&rows=30&start=3&pretty=false&timezone=UTC", function(json) {
            glob(json);        });    });

    $("#spectacleGratuit").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22spectacle%22%2C%20%222017%22%2C%20%22mars%22%2C%20%22Entr%C3%A9e%20libre%22&rows=30&pretty=false&timezone=UTC", function(json) {
            glob(json);        });    });

    $("#danseGeneral").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22danse%20%22%2C%20%222017%22%2C%20%22mars%22&rows=30&start=2&pretty=false&timezone=UTC", function(json) {
            glob(json);        });  });

    $("#danseGratuit").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22danse%20%22%2C%20%222017%22%2C%20%22mars%22%2C%20%22Entr%C3%A9e%20libre%22&rows=30&pretty=false&timezone=UTC", function(json) {
            glob(json);      });  });

    $("#animationGeneral").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22animation%22%2C%20%222017%22%2C%20%22mars%22&rows=30&start=3&pretty=false&timezone=UTC", function(json) {
            glob(json);      });  });

    $("#animationGratuit").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22animation%22%2C%20%222017%22%2C%20%22mars%22%2C%20%22Entr%C3%A9e%20libre%22&rows=30&pretty=false&timezone=UTC", function(json) {
            glob(json);      });  });

    $("#sportGeneral").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22sport%22%2C%20%222017%22%2C%20%22mars%22&rows=30&start=2&pretty=false&timezone=UTC", function(json) {
            glob(json);      });  });

    $("#sportGratuit").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22sport%22%2C%20%222017%22%2C%20%22mars%22%2C%20%22Entr%C3%A9e%20libre%22&rows=30&start=2&pretty=false&timezone=UTC", function(json) {
            glob(json);    });  });

});
