//const STABLE_VERSION = 'https://script.google.com/macros/s/AKfycbyLoPEIhYu95I8UVIeq2fHBnOg-vD96Lit_jDlSiw54FmTQuFdX5wE43XyzO7Ss229Z/exec';
const STABLE_VERSION = 'https://script.google.com/macros/s/AKfycbyfV9DWqt0RA1UC2S_P-Sm9CnlQb1rZj_6R2vGEacuR1eyNHZQRLLdsVS5LvuukFYdmcQ/exec'
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString)

function newGame(st) {
    window.location.href = `${STABLE_VERSION}?/u=${urlParams.get('u')}&st=${st}`
}