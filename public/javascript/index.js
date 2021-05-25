const STABLE_VERSION = 'https://script.google.com/macros/s/AKfycbyLoPEIhYu95I8UVIeq2fHBnOg-vD96Lit_jDlSiw54FmTQuFdX5wE43XyzO7Ss229Z/exec';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)
console.log(urlParams.get('u'))

function newGame(st) {
    window.location.href = `${STABLE_VERSION}?/u=${urlParams.get('u')}&st=${st}`
}