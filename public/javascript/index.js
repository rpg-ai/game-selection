const STABLE_VERSION = 'https://script.google.com/macros/s/AKfycby6r6Jue2ngJrHgvflhwNjZMNf7L4tnM7xCHVKdJPL3jdDoO1JitQoDBPiVRsU2_xl9HQ/exec'
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)

async function check_game() {
    const params = {
        u: urlParams.get('u'),
    };
    const options = {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify( params )
    };
    const request = await fetch(STABLE_VERSION, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            if (response["hasGame"]) {
                console.log('Entrei no hasGame')
                window.location.href = `${STABLE_VERSION}?u=${urlParams.get('u')}`
            }
        })
}

check_game()

function newGame(st) {
    window.location.href = `${STABLE_VERSION}?u=${urlParams.get('u')}&st=${st}`
}
