fetch('http://localhost:3000/albums')
    .then(response => response.json()) //On récupère la réponse de la requête
    .then(albums => { //On transforme le JSON en objet JS
        console.log(albums); //On affiche la liste des albums
    });

fetch('http://localhost:3000/members')
    .then(response => response.json()) //On récupère la réponse de la requête
    .then(members => { //On transforme le JSON en objet JS
        console.log(members); //On affiche la liste des albums
    });

fetch('http://localhost:3000/concertTours')
    .then(response => response.json()) //On récupère la réponse de la requête
    .then(concertTours => { //On transforme le JSON en objet JS
        console.log(concertTours); //On affiche la liste des albums
    });

fetch('http://localhost:3000/labels')
    .then(response => response.json()) //On récupère la réponse de la requête
    .then(labels => { //On transforme le JSON en objet JS
        console.log(labels); //On affiche la liste des albums
    });
