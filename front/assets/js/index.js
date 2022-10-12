//Variables globales
const guitars = document.getElementById('guitare');
const popular = document.getElementById('populaire');
const studio = document.getElementById('matériel');

/*
* Create element htmtl to integrate a property of the poduct
* @ param {elementId}  String that specifies the ID value.
* @ param {${object}} js Property in référence of the object JSON
*/
function addProperty(elementHtml,jsProperty){
  const name = document.createElement("p");
  const nameGuit = document.createTextNode(jsProperty);
  name.appendChild(nameGuit);
  elementHtml.appendChild(name);
}

/*
* Get and integrate in the front all the guitares with image, name and price
*
*/
fetch("../back/guitars.json")
  .then(function (obj) {
    if (obj.ok) {
      return obj.json();
    }
    else {
      throw new Error("le serveur ne répond pas");
    }
  })
  .then(function(jsImages) {
    for (let jsImage of jsImages) {   
      const div = document.createElement("div");
      guitars.appendChild(div);
      const jsNameGuitar = `${jsImage.name}`;
      const jsPriceGuitar = `${jsImage.price}`+ "e ou " + `${jsImage.monthly}` + "e / mois";
      let nbStars = `${jsImage.stars}`;
      console.log(nbStars);
      div.innerHTML += `<img src="../back/images/${jsImage.imageUrl}">`;  
      for (let i=0; i<nbStars; i++){
        guitars.innerHTML +=`<i style= "color:blue" class="fa-solid fa-star"></i>`;
      }
      addProperty(guitars,jsNameGuitar);
      addProperty(guitars, jsPriceGuitar);
      
     
      
    }
  }) 
  .catch(function(error) {
    // Gestion des erreurs
    console.error("Something goes wrong!");
    console.error(error);
  });

/*
* Get and integrate in the front all the popular guitares with image, name and price
*
*/
  fetch("../back/populars.json")
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(jsPopulars) {
    for (let jsPopular of jsPopulars) {
      const jsNamePop = `${jsPopular.name}`;
      const jsPricePop = `${jsPopular.price}`+ "e ou " + `${jsPopular.monthly}` + "e / mois";
      popular.innerHTML += `<img src="../back/images/${jsPopular.imageUrl}">`;       
      addProperty(popular,jsNamePop);
      addProperty(popular,jsPricePop);
    }
  })
  .catch(function(error) {
    // Gestion des erreurs
    console.error(error.message);
    
  });

  /*
  * get and integrate in the front all the popular guitares with image, name and price
  *
  */
  fetch("../back/studio.json")
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(jsStudios) {
    for (let jsStudio of jsStudios) {
      const nameMateriel = `${jsStudio.title}`;
      studio.innerHTML += `<img src="../back/images/${jsStudio.imageUrl}">`;       
      addProperty(studio,nameMateriel);
    }
  })
  .catch(function(error) {
    // Gestion des erreurs
    console.error("Something goes wrong!");
    console.error(error);
  });