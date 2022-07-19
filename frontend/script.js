$(".theme-switch").on("click", () => {
    $("body").toggleClass("light-theme");
});

$(".theme-switch").on("click", () => {
    var textdark = document.querySelector('label').innerText;
    if (textdark === 'Dark') {
        document.querySelector('label').innerHTML = 'Light';
    } else {
        document.querySelector('label').innerHTML = 'Dark';
    }
});