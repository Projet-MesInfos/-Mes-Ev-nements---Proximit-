$(document).ready(function() {

    var divContainer = $("#DivDomApi");
    // le lien d'api
    // la filtrages des villes

    var glob = function(json) {

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
  };


    $("#cityLyon").on("click", function() {

      divContainer.empty();

        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%20%22Lyon%22%2C%20%222017%22%20%22mars%22%20&rows=30&start=12&pretty=false&timezone=UTC", function(json){
        glob(json); }); });

    $("#cityLille").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%20%22Lille%22%2C%20%222017%22%2C%20%22mars%22&rows=30&start=2&pretty=false&timezone=UTC", function(json) {
          glob(json); }) });

    $("#cityBretagne").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%20%22Bretagne%22%2C%20%222017%22%2C%20%22mars%22&rows=30&start=2&pretty=false&timezone=UTC", function(json) {
          glob(json); }); });

    $("#cityMarseille").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%20%22Marseille%22%2C%20%222017%22%2C%20%22mars%22&rows=30&start=6&pretty=false&timezone=UTC", function(json) {
          glob(json); }); });

    $("#cityNantes").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%20%22Nantes%22%2C%20%222017%22%2C%20%22mars%22&rows=30&start=5&pretty=false&timezone=UTC", function(json) {
          glob(json);  }); });

    $("#cityTours").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%20%22Tours%22%2C%20%222017%22%2C%20%22mars%22&rows=30&start=3&pretty=false&timezone=UTC", function(json) {
          glob(json);  });  });

    $("#cityMontpellier").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%20%22Montpellier%22%2C%20%222017%22%2C%20%22mars%22&rows=30&start=3&pretty=false&timezone=UTC", function(json) {
          glob(json);  });  });

    $("#cityBordeaux").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%20%22Bordeaux%22%2C%20%222017%22%2C%20%22mars%22&rows=30&start=3&pretty=false&timezone=UTC", function(json) {
          glob(json);      });  });

    $("#cityNice").on("click", function() {
      divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%20%22Nice%22%2C%20%222017%22%2C%20%22mars%22&rows=30&pretty=false&timezone=UTC", function(json) {
glob(json);
    });
});
});
