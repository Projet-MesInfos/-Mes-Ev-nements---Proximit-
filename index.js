  $(document).ready(function() {

    var divContainer = $("#DivDomApi");

// input

      var apiOpenData = 'https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=';
      var row = '&rows=30';
      var apiP = '&pretty=false';
      var apiT = '&timezone=UTC';
      var input = $("#inputChercher");

      $("#iconSearche").on("click", function() {
          var url = apiOpenData + input.val() + row + apiP + apiT;

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
