const STABLE_VERSION = 'https://script.google.com/macros/s/AKfycby6r6Jue2ngJrHgvflhwNjZMNf7L4tnM7xCHVKdJPL3jdDoO1JitQoDBPiVRsU2_xl9HQ/exec'
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)

async function check_game() {
    const userId = urlParams.get('u');
    console.log(userId)
    const request = await fetch(STABLE_VERSION, {
        method: 'POST',
        mode: 'no-cors',
        parameters: {
            u: userId
        }
    }).then(response => {
        console.log(response)
        if (response["hasGame"]) {
            console.log('Entrei no hasGame')
            window.location.href = `${STABLE_VERSION}?u=${userId}`
        }
    });
}

check_game()

function newGame(st) {
    window.location.href = `${STABLE_VERSION}?u=${urlParams.get('u')}&st=${st}`
}
