//const STABLE_VERSION = 'https://script.google.com/macros/s/AKfycbyLoPEIhYu95I8UVIeq2fHBnOg-vD96Lit_jDlSiw54FmTQuFdX5wE43XyzO7Ss229Z/exec';
const STABLE_VERSION = 'https://script.google.com/macros/s/AKfycbzsKj2srF9wXxkLUJYQxgb97CU4iHx54XiNevyzi8idVS6FG0E-2ADyBF_0g8LyVtzX/exec'
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)

function newGame(st) {
    window.location.href = `${STABLE_VERSION}?u=${urlParams.get('u')}&st=${st}`
}
