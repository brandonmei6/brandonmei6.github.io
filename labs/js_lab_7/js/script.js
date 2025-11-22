
function init() {


    const button = document.getElementById("entrybutton");
    const input = document.getElementById("entryinput");
    const output = document.getElementById("textoutput");

    button.addEventListener("click", function() {
        const message = input.value;
        if (message === "") 
        {
            alert("Please enter a message");
        } 
        else
        {
            alert("Brandon Mei: " + message);
            output.textContent = message;
        }
    });
}


