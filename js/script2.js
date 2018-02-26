// document.getElementById("sayItButton")
//   .onclick = handleButtonClick;

document.getElementById("sayItButton")
  .addEventListener('click', handleButtonClick);

function handleButtonClick(event){

  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;

    if (firstName && lastName === ""){
    document.getElementById("content")
      .textContent = "Click the button!"
  }else{
    var message = "<h2>Hello " + firstName + " " + lastName + "!</h2>";

    document
      .getElementById("content")
      .innerHTML = message;
    document.querySelector("title").textContent = firstName + " " + lastName + "'s DOM Test'";
  }

}
