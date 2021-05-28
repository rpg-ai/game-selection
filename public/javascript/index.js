const STABLE_VERSION = 'https://script.google.com/macros/s/AKfycbzKPJPiXh4sg9LjMCyNlwBGB6Ikw-wWxOaweGQLs9AoeyASIBUwzZUlyboGuLH_TMJuNg/exec'
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)

async function check_game() {
    await fetch(`${STABLE_VERSION}?u=${urlParams.get('u')}`, {method: 'POST'})
        .then(response => response.json())
        .then(response => {
            if (response['hasGame']) {
                window.location.href = `${STABLE_VERSION}?u=${urlParams.get('u')}`
            }
        })
}

check_game();

function newGame(st) {
    window.location.href = `${STABLE_VERSION}?u=${urlParams.get('u')}&st=${st}`
}
