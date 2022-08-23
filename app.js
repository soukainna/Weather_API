
// const apikey = ''
 fetch(`https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${apikey}&units=metric`)
.then(res => res.json()
.then(data => {
    console.log(data)
    document.querySelector('#city').innerHTML = '<i class="fa-solid fa-location-dot"></i>' +'&nbsp;&nbsp;' + data.name
    document.querySelector('#temp').innerHTML = '<i class="fa-solid fa-temperature-low"></i>' + '&nbsp;&nbsp;' + data.main.temp + ' °'
    document.querySelector('#humidity').innerHTML = '<i class="fa-solid fa-droplet"></i>' + '&nbsp;&nbsp;' + data.main.humidity + ' %'
    document.querySelector('#wind').innerHTML = '<i class="fa-solid fa-wind"></i>' + '&nbsp;&nbsp;' + data.wind.speed + ' km/h'
})).catch(err => {console.log(err)})

document.querySelector('#form').addEventListener('submit', function(e){
    e.preventDefault()
    let ville = document.querySelector('#in').value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${apikey}&units=metric`)
    .then(res => res.json()
    .then(data => {
        console.log(data)
        document.querySelector('#city').innerHTML = '<i class="fa-solid fa-location-dot"></i>' +'&nbsp;&nbsp;' + data.name
        document.querySelector('#temp').innerHTML = '<i class="fa-solid fa-temperature-low"></i>' + '&nbsp;&nbsp;' + data.main.temp + ' °'
        document.querySelector('#humidity').innerHTML = '<i class="fa-solid fa-droplet"></i>' + '&nbsp;&nbsp;' + data.main.humidity + ' %'
        document.querySelector('#wind').innerHTML = '<i class="fa-solid fa-wind"></i>' + '&nbsp;&nbsp;' + data.wind.speed + ' km/h'
    })).catch(err => console.log(err))
})