async function randomArt() {
    const artInstituteAPI = await fetch("https://api.artic.edu/api/v1/artworks?limit=100"); //limit of one hundred
    const data = await artInstituteAPI.json();
    return data.data;
}

async function displayRandomArt() {
    const artworks = await randomArt();
    const randomIndex = Math.floor(Math.random() * artworks.length); //uses random to display a painting for the amount of paintings
    const randomArtwork = artworks[randomIndex];
    
   let image_id = randomArtwork.image_id;
   let image_url = `https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg`;

    document.getElementById("title").innerText = randomArtwork.title;
    document.getElementById("artist").innerText = randomArtwork.artist_display;
    document.getElementById("date").innerText = randomArtwork.date_display;
   
    let artworkImage = document.getElementById('img');
    artworkImage.src = image_url;

    console.log(image_url); //used to verify that image is the correct one
    
   
}

displayRandomArt().then(r =>{} );
