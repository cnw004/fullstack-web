var url = "https://dog.ceo/api/breeds/list/all";
var imageURL = "https://dog.ceo/api/breed/";
// fetch(url)
//   .then(resp => {
//     return resp.json()
//   })
//   .then(json => {
//     document.getElementById("dogList")
//       .innerHTML = "<ol>" +
//       () => {
//         var string = "";
//         for(var key in json.message){
//           string += "<li>" + key + "</li>"
//         }
//         return string
//       } + "</ol>"
//   })


function showDog(dogName){
  console.log("HERE");
  console.log(imageURL +  dogName + "/images/random")
  fetch(imageURL +  dogName + "/images/random")
    .then(resp => {
      return resp.json()
    })
    .then(json => {
      console.log(json);
      console.log(json.message.value);
      document.getElementById("card-img-holder").src = json.message;
      document.getElementById("card-title-holder").textContent = dogName;
      
    })
}

fetch(url)
  .then(resp => {
    return resp.json()
  })
  .then(json => {
    document.getElementById("dogList")
      .innerHTML = "<ol>" + (() => {
        var string = "";
        for(var key in json.message){
          string += "<li id=" + key + " onclick='showDog(this.id);'>" + key + "</li>"
        }
        return string
        // return Object.keys(json.message)
      })()
       + "</ol>"
  })
  .catch(error => {
    console.log("I HATE YOU, HERES AN ERROR " + error)
  })


