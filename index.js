$(document).ready(function() {

    var divContainer = $(".links");

    $("#btn").on("click", function() {
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%20%22%C3%8Ele-de-France%22%2C%20%22Concert%22%2C%20%222017%22&rows=30&start=22&pretty=false&timezone=UTC", function(json) {
            // $(".links").html(JSON.stringify(json));
            console.log(json);

            json.records.forEach(function(item) {

                title = $("<h3></h3>");
                divContainer.append(title);
                title.append(" " +item.record.fields.title);
                creImg = $("<img/>");
                creHref = creImg.attr("src", item.record.fields.image_thumb);
                divContainer.append(creImg);
                DatStart = $("<p>Date de début:</p>");
                divContainer.append(DatStart);
                DatStart.append(" " +item.record.fields.date_start);
                DatEnd = $("<p>Date de fin:</p>");
                divContainer.append(DatEnd);
                DatEnd.append(" " +item.record.fields.date_end);
                adress = $("<p>Adresse:</p>");
                divContainer.append(adress);
                adress.append(" " +item.record.fields.address);
                prix = $("<p>Le prix:</p>");
                divContainer.append(prix);
                prix.append(" " +item.record.fields.pricing_info);
                creLink = $("<a>Le lien vers le site: </a>");
                creHref = creLink.attr("href", item.record.fields.link)
                divContainer.append(creLink);
                explication = $("<p>Description:</p>");
                divContainer.append(explication);
                explication.append(" " +"<br>" +item.record.fields.description);


            });

        });

    });
});
