const adviceButton = document.querySelector('.advice-btn')
const adviceId = document.querySelector('.advice-id')
const adviceContent = document.querySelector('.advice-content')


const fetchData = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    const { slip } = data
    adviceId.textContent = `${slip.id}`
    adviceContent.textContent = `${slip.advice}`
}

fetchData()
adviceButton.onclick = fetchData