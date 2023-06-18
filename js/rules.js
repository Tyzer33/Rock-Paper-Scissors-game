const btnOpen = document.querySelector('#open-rules')
const btnClose = document.querySelector('#close-rules')
const rules = document.querySelector('.overlay')

btnOpen.addEventListener('click', () => (rules.style.visibility = 'visible'))

btnClose.addEventListener('click', () => (rules.style.visibility = 'hidden'))
