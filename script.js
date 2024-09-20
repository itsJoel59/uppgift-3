const clickHereBtn = document.querySelector("#button1");
const title = document.querySelector("#title");

clickHereBtn.addEventListener(
    "click",
    function(event){
        title.innerHTML = "Goodbye World!";
    },
    false
);