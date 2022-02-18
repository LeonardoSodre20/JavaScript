const containerMain = document.querySelector('.container-main')

const mouseEnter = () => {
    containerMain.style.background = 'blue'
    containerMain.style.transition = '0.5s'
    containerMain.style.border = '2px solid black'
}

const mouseOut = () => {
    containerMain.style.background = 'red'
    containerMain.style.transition = '0.5s'
}

containerMain.addEventListener('mouseenter', () => mouseEnter())

containerMain.addEventListener('mouseout', () => mouseOut())

