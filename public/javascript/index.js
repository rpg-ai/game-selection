const STABLE_VERSION = 'https://script.google.com/macros/s/AKfycbxYPo01qUwYPvt3KFljmqDWTiEovuhToaHWcu7ilo1YGpS4dc7N2XU9H5IseQAbpD64Sg/exec'
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)

function check_game() {
    const params = {
        u: urlParams.get('u')
    }
    fetch(`${STABLE_VERSION}`,
        {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(params)
    }).then(
        response => {
            // console.log(response.json())
            if (response['hasGame']) {
                window.location.href = `${STABLE_VERSION}?u=${urlParams.get('u')}`
            }

            return response
        }
    );
}

let requestResponse = check_game();

function newGame(st) {
    window.location.href = `${STABLE_VERSION}?u=${urlParams.get('u')}&st=${st}`
}
