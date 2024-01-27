const wrapper = document.querySelector('.wrapper')

const request = new XMLHttpRequest()
request.open('GET', 'persons.json')
request.setRequestHeader('Content-type','application/json')
request.send()

request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        console.log(data)
    data.forEach((person) => {
        const {name, age, photo} = person
        const personCard = document.createElement('div')
        personCard.setAttribute('class', 'personCard')
        console.log(personCard)
        personCard.innerHTML = `
    <div class="userPhoto">
        <img src="${photo}" alt="${name}">
    </div>
    <h2>${name}</h2>
    <p>age: ${age}</p>
    `
        wrapper.append(personCard)
    })
    }
)



const footballers = new XMLHttpRequest()
footballers.open('GET', 'any.json')
footballers.setRequestHeader('Contents-type','application/json')
footballers.send()

footballers.addEventListener('load', () => {
        const data = JSON.parse(footballers.response)
        console.log(footballers)
        data.forEach((person) => {
            const {name, age, photo, position, speed, drb, mmr} = person
            const footballersCard = document.createElement('div')
            footballersCard.setAttribute('class', 'footballersCard')
            console.log(footballersCard)
            footballersCard.innerHTML = `
    <div class="userPhoto">
        <img src="${photo}" alt="${name}">
    </div>
    <h2>${name}</h2>
    <p>age: ${age}</p>
    <p>position: ${position}</p>
    <p>speed: ${speed}</p>
    <p>drb: ${drb}</p>
    <p>mmr: ${mmr}</p>
    `
            wrapper.append(footballersCard)
        })
    }
)










