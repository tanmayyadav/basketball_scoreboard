

let home = document.getElementById("homescore")
let away = document.getElementById("awayscore")

let homesc = 0
let awaysc = 0

function plus1() {
    homesc += 1
    home.textContent = homesc
}

function plus2() {
    homesc += 2
    home.textContent = homesc
}

function plus3() {
    homesc += 3
    home.textContent = homesc
}

function plus11() {
    awaysc += 1
    away.textContent = awaysc
}

function plus22() {
    awaysc += 2
    away.textContent = awaysc
}

function plus33() {
    awaysc += 3
    away.textContent = awaysc
}