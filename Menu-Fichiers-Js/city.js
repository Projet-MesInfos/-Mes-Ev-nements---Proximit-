
$(document).ready(function() {

    $("#cityLyon").on("click", function() {

        divContainer.empty();

        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%20%22Lyon%22%2C%20%222017%22%20%22avril%22%20&rows=30&start=8&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Lyon');

        });
    });

    $("#cityLille").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%20%22Lille%22%2C%20%222017%22%2C%20%22avril%22&rows=30&start=2&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Lile');
        })
    });

    $("#cityBretagne").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%20%22Bretagne%22%2C%20%222017%22%2C%20%22avril%22&rows=30&start=12&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Bretagne');
        });
    });

    $("#cityMarseille").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%20%22Marseille%22%2C%20%222017%22%2C%20%22avril%22&rows=30&start=7&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Marseille');
        });
    });

    $("#cityNantes").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%20%22Nantes%22%2C%20%222017%22%2C%20%22avril%22&rows=30&start=6&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Nantes');
        });
    });

    $("#cityTours").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%20%22Tours%22%2C%20%222017%22%2C%20%22avril%22&rows=30&start=3&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Tours');
        });
    });

    $("#cityMontpellier").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%20%22Montpellier%22%2C%20%222017%22%2C%20%22avril%22&rows=30&start=8&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Montpellier');
        });
    });

    $("#cityBordeaux").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%20%22Bordeaux%22%2C%20%222017%22%2C%20%22avril%22&rows=30&start=5&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Bordeaux');
        });
    });

    $("#cityNice").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%20%22Nice%22%2C%20%222017%22%2C%20%22avril%22&rows=30&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Nice');
        });
    });
});
