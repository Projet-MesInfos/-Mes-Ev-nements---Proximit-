$(document).ready(function() {

    $("#concertGeneral").on("click", function() {
        containerApi.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%20%22%C3%8Ele-de-France%22%2C%20%22Concert%22%2C%20%222017%22%20%22mai%22%20&rows=100&start=1&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Concert');
        });
    });
    
    $("#concertGratuit").on("click", function() {
        containerApi.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%20%22mai%22%20&gratuit%22&rows=100&start=4&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Concert gratuit');
        });
    });

    $("#concertRock").on("click", function() {
        containerApi.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%20%22mai%22%20%2C%20%22Rock%22&rows=100&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Concert rock');
        });
    });

    $("#concertElectro").on("click", function() {
        containerApi.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%20%22mai%22%20%2C%20%22Electro%22&rows=100&start=1&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Concert electro');
        });
    });

    $("#concertHouse").on("click", function() {
        containerApi.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%20%22mai%22%20%2C%20%22House%22&rows=100&start=4&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Concert house');
        });
    });

    $("#concertJazz").on("click", function() {
        containerApi.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%20%22mai%22%20%2C%20%22Jazz%22&rows=100&start=2&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Concert jazz');
        });
    });

    $("#concertFunk").on("click", function() {
        containerApi.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%20%22mai%22%20%2C%20%22Funk%22&rows=100&start=3&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Concert funk');
        });
    });

    $("#concertBlues").on("click", function() {
        containerApi.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%20%22mai%22%20%2C%20%22Blues%22&rows=100&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Concert blues');
        });
    });

    $("#concertPop").on("click", function() {
        containerApi.empty();
        $.getJSON("https://public.opendatasoft.com/api/v2/catalog/datasets/evenements-publics-cibul/records?q=%22%C3%8Ele-de-France%22%2C%20%22concert%22%2C%20%222017%22%20%22mai%22%20%2C%20%22Pop%22&rows=100&pretty=false&timezone=UTC", function(json) {
            glob(json);
            $("#inputChercher").empty();
            $("#inputChercher").val('Concert pop');
        });
    });

});
