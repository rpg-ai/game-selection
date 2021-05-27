const STABLE_VERSION = 'https://script.google.com/macros/s/AKfycbxYPo01qUwYPvt3KFljmqDWTiEovuhToaHWcu7ilo1YGpS4dc7N2XU9H5IseQAbpD64Sg/exec'
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)

function check_game() {
    fetch(`${STABLE_VERSION}?u=${urlParams.get('u')}`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
    }).then(
        response => {
            console.log(response)
            if (response['hasGame']) {
                window.location.href = `${STABLE_VERSION}?u=${urlParams.get('u')}`
            }
        }
    );
}

check_game();

function newGame(st) {
    window.location.href = `${STABLE_VERSION}?u=${urlParams.get('u')}&st=${st}`
}
