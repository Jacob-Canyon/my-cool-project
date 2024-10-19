


// Define the API URL
const apiUrl = 'https://api.tcgdex.net/v2/en/cards/swsh3-136';
const nameElement = document.getElementById("name");

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    imageCard(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

function imageCard(data) {
  const imageDis = document.getElementById("card");
  let dyanmicImage = document.createElement('img');


  dyanmicImage.src = `${data.image}high.webp`;

  imageDis.appendChild(dyanmicImage);
}