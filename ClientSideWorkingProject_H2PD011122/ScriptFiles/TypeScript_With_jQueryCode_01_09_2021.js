/// <reference path="../scripts/typings/jquery/jquery.d.ts" />
var Movie = /** @class */ (function () {
    function Movie(name) {
        this._name = name;
    }
    Movie.prototype.Play = function () {
        $("#container").html("Now Playing : " + this._name);
    };
    return Movie;
}());
window.onload = function () {
    $("#container").html("Please enter movie name");
    $("#btnPlay").click(function () {
        var movieName = $("#txtName").val();
        var movie = new Movie(movieName);
        movie.Play();
    });
};
//# sourceMappingURL=TypeScript_With_jQueryCode_01_09_2021.js.map