const STABLE_VERSION = 'https://script.google.com/macros/s/AKfycbxYPo01qUwYPvt3KFljmqDWTiEovuhToaHWcu7ilo1YGpS4dc7N2XU9H5IseQAbpD64Sg/exec'
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
        .then( response => response.json() )
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
