function generateRandomNumber(num) {

    return Math.random(Math.floor() * num)
}

const knockingJokes = {
    knock: ['Knock',',Knock'],
    doorKnock: ["Who's there"],
    personAnswer: ['Nobel'],
    whoAnswer: ['Nobel', 'who?'],
    answer: ["Nobel...that's Why I knocked"]
}

let knockKnock = []

for(let prop in knockingJokes) {
    let optionIdx = generateRandomNumber(knockingJokes[prop].length)
    switch(prop) {
        case 'knock':
            knockKnock.push(`Here is a knock knock joke for you: "${knockingJokes[prop][optionIdx]}".`)
            break
        case 'doorKnock':
            knockKnock.push(`answer the door: "${knockingJokes[prop][optionIdx]}".`)
            break
        case 'personAnswer':
            knockKnock.push(`I answer the door: "${knockingJokes[prop][optionIdx]}".`)
            break
        case 'whoAnswer':
            knockKnock.push(`who are you: "${knockingJokes[prop][optionIdx]}". `)
            break
        case 'answer':
            knockKnock.push(`I answer again: "${knockingJokes[prop][optionIdx]}".`)
            break
        default:
            knockKnock.push('There is not enough jokes flowing around.')
    }
}

function formatKnock(knock) {
    const formatted = knockKnock.join('\n')
    console.log(formatted)
}

formatKnock(knockKnock);