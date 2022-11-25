const handSeconds = document.querySelector('.hand.seconds')
const handMinutes = document.querySelector('.hand.minutes')
const handHours = document.querySelector('.hand.hours')

const setRotation = (element, rotationPercentage) => {
    element.style.setProperty('--rotation', rotationPercentage * 360)
}

function setClock(){
    const currentData = new Date()

    const secondsPercentage = currentData.getSeconds() / 60
    const minutesPercentage = (secondsPercentage + currentData.getMinutes()) / 60
    const hoursPercentage = (minutesPercentage + currentData.getHours()) / 12

    setRotation(handSeconds, secondsPercentage )
    setRotation(handMinutes, minutesPercentage)
    setRotation(handHours, hoursPercentage)
}
setClock()
setInterval(setClock, 1000)
