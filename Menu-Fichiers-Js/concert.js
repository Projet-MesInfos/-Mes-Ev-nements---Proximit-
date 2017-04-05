$(document).ready(function() {

    var divContainer = $("#DivDomApi");

// le lien d'api
// La filtrage des évenements concertPlus

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

     itemContainer.find("#Api-Description").html("<h6>Description:" + item.record.fields.description + "</h6><p><a href='"+ item.record.fields.link + "'> Plus de details  </a></p>");

     divContainer.append(itemContainer);
  });
};


    $("#concertGeneral").on("click", function() {

     divContainer.empty();

        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%20%22%C3%8Ele-de-France%22%2C%20%22Concert%22%2C%20%222017%22&rows=30&start=24&pretty=false&timezone=UTC", function(json) {
          glob(json);        });  });

    $("#concertGratuit").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%2C%20%22gratuit%22&rows=30&start=1&pretty=false&timezone=UTC", function(json) {
          glob(json);      });  });

    $("#concertDixEuro").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%2C%20%2210%E2%82%AC%22&rows=30&pretty=false&timezone=UTC", function(json) {
          glob(json);      });  });


    $("#concertVingtEuro").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%2C%20%2220%E2%82%AC%22%2C%2230%E2%82%AC%22&rows=30&start=5&pretty=false&timezone=UTC", function(json) {
          glob(json);      });  });

    $("#concertPlus").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%2C%20%2240%E2%82%AC%22&rows=30&pretty=false&timezone=UTC", function(json) {
          glob(json);      });  });

    $("#concertRock").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%20%22mars%22%20%2C%20%22Rock%22&rows=30&pretty=false&timezone=UTC", function(json) {
          glob(json);      });  });

    $("#concertElectro").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%2C%20%22Electro%22&rows=30&start=1&pretty=false&timezone=UTC", function(json) {
          glob(json);        });    });

    $("#concertHouse").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%2C%20%22House%22&rows=30&start=1&pretty=false&timezone=UTC", function(json) {
          glob(json);      });  });

    $("#concertJazz").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%2C%20%22Jazz%22&rows=30&start=2&pretty=false&timezone=UTC", function(json) {
          glob(json);      });  });

    $("#concertFunk").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%2C%20%22Funk%22&rows=30&start=3&pretty=false&timezone=UTC", function(json) {
          glob(json);        });  });

    $("#concertBlues").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%2C%20%22Blues%22&rows=30&pretty=false&timezone=UTC", function(json) {
          glob(json);        });  });

    $("#concertPop").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%2C%20%22Pop%22&rows=30&pretty=false&timezone=UTC", function(json) {
          glob(json);        });    });

});
