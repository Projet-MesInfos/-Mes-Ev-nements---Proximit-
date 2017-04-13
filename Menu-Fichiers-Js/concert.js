$(document).ready(function() {

    $("#concertGeneral").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%20%22%C3%8Ele-de-France%22%2C%20%22Concert%22%2C%20%222017%22%20%22avril%22%20&rows=30&start=1&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Tout les concerts');

        });
    });
    $("#concertGratuit").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%20%22avril%22%20&gratuit%22&rows=30&start=4&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Concert gratuit');
        });
    });

    $("#concertDixEuro").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%2C%20%2210%E2%82%AC%22&rows=30&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Concert 10€');
        });
    });

    $("#concertVingtEuro").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%2C%20%2220%E2%82%AC%22%2C%2230%E2%82%AC%22&rows=30&start=6&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Concert 20€');
        });
    });

    $("#concertPlus").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%2C%20%2240%E2%82%AC%22&rows=30&start=3&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Autres prix');
        });
    });

    $("#concertRock").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%20%22avril%22%20%2C%20%22Rock%22&rows=30&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Concert rock');
        });
    });

    $("#concertElectro").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%20%22avril%22%20%2C%20%22Electro%22&rows=30&start=1&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Concert electro');
        });
    });

    $("#concertHouse").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%20%22House%22&rows=30&start=4&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Concert house');
        });
    });

    $("#concertJazz").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%20%22avril%22%20%2C%20%22Jazz%22&rows=30&start=2&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Concert jazz');
        });
    });

    $("#concertFunk").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%20%22avril%22%20%2C%20%22Funk%22&rows=30&start=3&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Concert funk');
        });
    });

    $("#concertBlues").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%20%22avril%22%20%2C%20%22Blues%22&rows=30&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Concert blues');
        });
    });

    $("#concertPop").on("click", function() {
        divContainer.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%20%22avril%22%20%2C%20%22Pop%22&rows=30&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Concert pop');
        });
    });

});
