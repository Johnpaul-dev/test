const stated = document.getElementById("header");
let latitude = "";
let longitude = "";

//http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key} f24baf01aff33594366c6279cff93512

const weather = () => {
    fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=f24baf01aff33594366c6279cff93512`)
    .then(res => res.json())
    .then(data => 
          console.log(data)
        )
    console.log("me")
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

getLocation();

