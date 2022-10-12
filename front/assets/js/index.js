/*
Utilisez l'API Fetch pour collecter les données dans le backend.
Les fichiers à récupérer sont :
../back/guitars.json
../back/populars.json
../back/studio.json
Les images à insérer sont dans le répertoire ../back/images/,
vous trouverez leurs noms et descriptions dans les JSON téléchargés.
*/
/* Exemple de code d'utilisation de fetch :
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
  .then(function (objJS) {
    for (let object of objJS) {
      document.querySelector('#guitare').innerHTML += `<img src="../back/images/${object.imageUrl}"/>`; 
      document.querySelector('#guitare').innerHTML += `${object.price}`; 
      document.querySelector('#guitare').innerHTML += `${object.name}`; 
      console.log(object.price)
    }
    // Utilisation des données dé-jsonifiées dans l'objet data
    //console.table(data);
    // Regardez la structure du json, comprenez son contenu, intégrez-le
    // dans votre HTML.
  })
  .catch(function(error) {
    // Gestion des erreurs
    console.error(error.message);
    
  });

  
