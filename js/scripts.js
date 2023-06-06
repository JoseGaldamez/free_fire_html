window.onload = function () {
    document.onmousemove = function (e) {
        var x = -(e.clientX / 100);
        // lo mismo para Y
        var y = -(e.clientY / 100);
        var principal = document.getElementById("principal");
        principal.style.backgroundPosition = x + "px " + y + "px";
    };

    document
        .getElementById("button_message")
        .addEventListener("click", function () {
            document
                .getElementById("message")
                .classList.remove("animate__delay-2s");

            document
                .getElementById("message")
                .classList.add("animate__animated", "animate__bounceOutRight");
        });
};
