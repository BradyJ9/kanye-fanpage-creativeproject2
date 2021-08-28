document.getElementById("api-button").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Button Pressed");
    const url = "https://api.kanye.rest";
    fetch(url)
        .then(function(response){
            return response.json();
        }).then(function(json) {
            console.log(json);
            document.getElementById("quote-p").innerText =
            "\"" + json["quote"] + "\" - Kanye West";
        });
});