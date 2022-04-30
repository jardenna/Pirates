const opladBatteri = () => {
  const bat = document.getElementById('charging')

  setTimeout(function () {
    bat.innerHTML = 'battery_1_bar'
  }, 1000)

  setTimeout(function () {
    bat.innerHTML = 'battery_2_bar'
  }, 2000)

  setTimeout(function () {
    bat.innerHTML = 'battery_3_bar'
  }, 3000)
  setTimeout(function () {
    bat.innerHTML = 'battery_4_bar'
  }, 4000)

  setTimeout(function () {
    bat.innerHTML = 'battery_full'
  }, 5000)
}
opladBatteri()
