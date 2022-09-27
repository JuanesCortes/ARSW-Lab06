//@author hcadavid

apimock = (function () {

    var mockdata = [];

    mockdata["johnconnor"] = [{author: "johnconnor", "points": [{"x": 150, "y": 120}, {"x": 215, "y": 115}], "name": "house"},
        {author: "johnconnor", "points": [{"x": 340, "y": 240}, {"x": 15, "y": 215}], "name": "gear"}];
    mockdata["maryweyland"] = [{author: "maryweyland", "points": [{"x": 130, "y": 110}, {"x": 105, "y": 105}], "name": "house2"},
        {author: "maryweyland", "points": [{"x": 130, "y": 110}, {"x": 105, "y": 105}], "name": "gear2"}];
    mockdata["FernandoDaVanci"] = [{author: "FernandoDaVanci", "points": [{"x": 140, "y": 140}, {"x": 115, "y": 115}], "name": "LaPelirojaRizada"},
        {author: "FernandoDaVanci", "points": [{"x": 90, "y": 100}, {"x": 666, "y": 007}], "name": "LaPrimeraCena"}];


    return {
        getBlueprintsByAuthor: function (author, callback) {
            callback(null, mockdata[author]);
        },

        getBlueprintsByNameAndAuthor: function (authorname,bpname, callback) {
            let blueprint = mockdata[authorname].find(function (blueprint) {
                return blueprint.name === bpname;
            });
            callback(null, blueprint);
        }
    };

})();

/*
 Example of use:
 var fun=function(list){
 console.info(list);
 }
 apimock.getBlueprintsByAuthor("johnconnor",fun);
 apimock.getBlueprintsByNameAndAuthor("johnconnor","house",fun);*/

