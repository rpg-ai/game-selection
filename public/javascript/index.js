const STABLE_VERSION = 'https://script.google.com/macros/s/AKfycbwF51GKSZUOPqY6Tck1e0NO1y4CQwy88oPSgrO4U93PmjWCEILFieYNCzyu1VwrL7TFJQ/exec'
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
