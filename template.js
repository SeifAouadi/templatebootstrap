$(document).ready(function () {
  $.getJSON("https://cors.io/?https://api.myglamapp.pl/api/categories?language=EN", function (Api) {

    var slider = ``;
    var start = 0;
    var end = Api.data.length / 2;
    




    for (j = 0; j < 2; j++) {
      if (j === 0)
        var active = "active"
      else
        var active = "";

      slider += `
  <div  class="carousel-item ${active} .d-block">
  <div  class ="row">`;





      for (var i = start; i < end; i++) {
        var tabS = Api.data[i].Services;
        for (k = 0; k < tabS.length; k++) {

          var label_Services = tabS[k].label_service;

        }
        slider += `<div class="col-sm-4 clearfix  .d-block">
                <img src="http://${Api.data[i].imagePath}" class="img-fluid">
                <h2>${Api.data[i].label}</h2>
                <h3>${Api.data[i].description}</h3>
                <h3>${label_Services}</h3>
                
                </div>   
  `
      }







      start = i - 1;
      
      end = Api.data.length
      slider += `</div>
            </div>`

    }
    slider += `
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
  <span class="carousel-control-prev-icon" ></span>
  <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
  <span class="carousel-control-next-icon" aria-hidden="true"></span>
  <span class="sr-only">Next</span>
  </a>
  <br>`
    document.getElementById("card").innerHTML = slider;




  });


});
