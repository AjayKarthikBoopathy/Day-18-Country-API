//Original
//Display country name,Capital in the HTML page
//Display the country name,Capital and total Population inside the cards

var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
//to add multiple classes to the same element with DOM
row.classList.add("row","m-3");
container.append(row);

var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json())
.then((data1)=>foo(data1))                  //mb-3 is margin 3px
.catch((error)=>console.log(error));        //alt=Country Flags displays this name when image is not available

function foo(data1){
    console.log(data1);
    for(var i=0;i<data1.length;i++){
        row.innerHTML+=
        `<div class="row col-lg-4 col-md-6 col-sm-12">
          <div class="card border-secondary mb-3" style="width: 20rem; height: 27rem; margin-top:20px; margin-left:45px">
            <h5 class="card card-header card-title" style="background-color: black;">${data1[i].name}</h5>
                 
            <div class="card-body text-primary">
              <img src="${data1[i].flag}" class="card-img-top" style="height: 10rem; margin-bottom: 20px;" alt="Country Flags">
              
              <p class="card-text"> Capital: ${data1[i].capital}</p>
              <p class="card-text"> Region: ${data1[i].region}</p>
              <p class="card-text"> Country Code: ${data1[i].alpha3Code}</p>
              <button type="button" onclick="demo('${data1[i].capital}',${i})">Click for Weather</button>
              <p id="weatherDataTemp${i}" style="color:white; text-align: center; margin-top: 6px;"></p>
              <p id="weatherDataHumi${i}" style="color:white; text-align: center; line-height: 3px;"></p>
            </div>
          </div>
        </div>`
        }
        document.body.append(container);
}

async function demo(city,i){
 console.log(city);
 var res3=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7b29578d9f209cc5217213f14b481c5b`);
 const payload=await res3.json();
 console.log(payload);
 //alert(payload.main.temp);
  document.querySelector(`#weatherDataTemp${i}`).innerHTML=`Temperature: ${payload.main.temp} F`;
  document.querySelector(`#weatherDataHumi${i}`).innerHTML=`Humidity: ${payload.main.humidity}`;
}