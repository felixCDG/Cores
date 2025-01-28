"use strict"

const botaoTrocarCor = document.getElementById('trocar-cor')

function trocaCor() {
    const cor = document.getElementById('cor').value
    document.documentElement.style.setProperty('--cor-body', cor)
}

botaoTrocarCor.addEventListener('click', trocaCor)