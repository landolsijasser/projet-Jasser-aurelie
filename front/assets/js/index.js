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
      let div = document.createElement("div"); 
      guitars.appendChild(div); 
      div.classList.add("styleGuitare");
      const jsNameGuitar = `${jsImage.name}`;
      const jsPriceGuitar = `${jsImage.price}`+ "e ou " + `${jsImage.monthly}` + "e / mois";
      let nbStars = `${jsImage.stars}`;
      //console.log(nbStars);
      div.innerHTML += `<img src="../back/images/${jsImage.imageUrl}">`;  
      addProperty(div,jsNameGuitar);
      addProperty(div,jsPriceGuitar);
      let etoiles = document.createElement("div");
      div.appendChild(etoiles);
      etoiles.classList.add("stars");
      for (let i=0; i<nbStars; i++) {
        etoiles.innerHTML +=`<i style= "color:blue" class="fa-solid fa-star"></i>`;
      }
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
      let div = document.createElement("div"); 
      let info = document.createElement("div");
      let nbStars = `${jsPopular.stars}`;
      const jsNamePopu = `${jsPopular.name}`;
      const jsPricePopu = `${jsPopular.price}`+ "e ou " + `${j=jsPopular.monthly}` + "e / mois";

      popular.appendChild(div); 

      div.innerHTML += `<img src="../back/images/${jsPopular.imageUrl}">`;  
      div.appendChild(info);
      addProperty(info,jsNamePopu);
      addProperty(info,jsPricePopu);
  
      div.classList.add("stylePop");

      info.classList.add("infoPop");

      let etoiles = document.createElement("div");
      info.appendChild(etoiles);
      etoiles.classList.add("stars");
      for (let i=0; i<nbStars; i++) {
        etoiles.innerHTML +=`<i style= "color:blue" class="fa-solid fa-star"></i>`;
      }
      //console.log(info);
      
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
      let div = document.createElement("div");
      studio.appendChild(div); 
      div.innerHTML += `<img src="../back/images/${jsStudio.imageUrl}">`;       
      addProperty(div,nameMateriel);
     
      div.classList.add("studio");
       
    }
  })
  .catch(function(error) {
    // Gestion des erreurs
    console.error("Something goes wrong!");
    console.error(error);
  });