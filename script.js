const handSeconds = document.querySelector('.hand.seconds')
const handMinutes = document.querySelector('.hand.minutes')
const handHours = document.querySelector('.hand.hours')

const setRotation = (element, rotationPercentage) => {
    element.style.setProperty('--rotation', rotationPercentage * 360)
}
const setClock = () => {
    const currentDate = new Date()
    const percentageSeconds = currentDate.getSeconds() / 60
    const percentageMinutes =(percentageSeconds + currentDate.getMinutes()) / 60
    const percentageHours = (percentageMinutes + currentDate.getHours()) / 12

    setRotation(handSeconds, percentageSeconds)
    setRotation(handMinutes, percentageMinutes)
    setRotation(handHours, percentageHours)
}
setClock()
setInterval(setClock, 1000)