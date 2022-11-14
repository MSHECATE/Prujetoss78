var images =
[ 
      "https://www.lux-review.com/wp-content/uploads/2020/03/Palma-de-Mallorca-1.jpg,",
 "https://lh5.googleusercontent.com/p/AF1QipNRH-9YE0VgSqJvcej9CSVRZPegu0Ayjx2oUY3k=s1600",
 "https://www.costacruises.nl/content/dam/costa/inventory-assets/ports/RIO/c035_rio_de_janeiro.jpg.image.1125.1446.low.jpg",
 "https://a.cdn-hotels.com/gdcs/production48/d552/fce632fb-e113-4af1-88ab-1d909fe0a8a0.jpg",
 "https://live.staticflickr.com/4327/35073384644_ab3fb681a5_b.jpg"
];
 var names =
 [
"Palma de Mallorka","Thassos","Rio De Janeiro","Sao Paulo","Manaus"
 ];
 var i = 0;
 function update()
 {
i++;
var numberOfFnomelugaresInArray = 5
if (i > numberOfFnomelugaresInArray )
 {
i = 0;
 }
var updatedImage = images[i];
var updatesName = names [i];
document.getElementById("imagens").src = updatedImage;
document.getElementById("nomelugares").innerHTML = updatesName;
 }
