function highlight() {
    var words = $('p'),
        wordsSpan = words.text()
            .trim()
            .split(" ")
            .map(function (char) {
                return $('<span>' + " " + char + " " + '</span>');
            })
    // .join()
    words.html(wordsSpan);

    var input = document.getElementById("wps").value;
    document.getElementById("wpm").innerHTML = input * 60;

    function loop() {
        for (i in wordsSpan) {
            (function (i) {
                setTimeout(function () {
                    wordsSpan[i].css('backgroundColor', 'yellow');
                }, (1000 / input) * i)
            })(i);
        };
    };
    loop();
}