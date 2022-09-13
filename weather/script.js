//const stated = document.getElementById("header");
let latitude = "";
let longitude = "";

//http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key} f24baf01aff33594366c6279cff93512

const weather = () => {
   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f24baf01aff33594366c6279cff93512`)
    .then(res => res.json())
    .then(data => 
          console.log(data)
        )
    console.log(latitude, longitude)
} 

const getLocation = () => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

const onSuccess = (position) => {
    // console.log(position.coords);
    latitude = position.coords.latitude;
    longitude = position.coords.latitude;
    weather()
}

const onError = () => {
    console.log("error");
}

 getLocation()

