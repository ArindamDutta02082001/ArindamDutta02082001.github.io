document.getElementById('i2').addEventListener('click', () => {
  async function F () {
    const city = document.getElementById('i1').value
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=740857a220614055cc6f1db9838f7f65'
    const res = await (await fetch(url)).json()
    // console.log(res)
    document.getElementById('insidew').innerHTML = `${res.name}`
    document.getElementById('insidet').innerHTML = Math.round(`${res.main.temp}` - 273.15) + 'deg Celcius'
  }
  F()
  // console.log(res.name)
})
