function chargebattery() {
  const a = document.getElementById('charging')
  a.innerHTML = 'battery_1_bar'
  setTimeout(function () {
    a.innerHTML = 'battery_2_bar'
  }, 1000)
  setTimeout(function () {
    a.innerHTML = 'battery_3_bar'
  }, 2000)
  setTimeout(function () {
    a.innerHTML = 'battery_4_bar'
  }, 3000)
  setTimeout(function () {
    a.innerHTML = 'battery_5_bar'
  }, 4000)

  setTimeout(function () {
    a.innerHTML = 'battery_6_bar'
  }, 5000)

  setTimeout(function () {
    a.innerHTML = 'battery_50'
  }, 6000)
}
setInterval(chargebattery, 7000)
