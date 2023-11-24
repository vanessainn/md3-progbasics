'use strict';

const forSchleife = document.querySelector('.for-schleife');
const whileSchleife = document.querySelector('.while-schleife');
const doWhileSchleife = document.querySelector('.do-while-schleife');

// For-Schleife

let ausgabe = 150;
const anzahlAusgabe = 15;

for (let i = 0; i <= anzahlAusgabe; i++) {
    if (i % 3 === 0) {
        document.querySelector('.for-schleife').innerHTML += `<span style="color: violet;">${ausgabe}</span><br>`;
    } else {
        document.querySelector('.for-schleife').innerHTML += ausgabe + '<br>';
    } ausgabe -= 21;
    if (i % 3 === 1) {
        document.querySelector('.for-schleife').innerHTML += `<span style="color: violet;">${ausgabe}</span><br>`;
    } else {
        document.querySelector('.for-schleife').innerHTML += ausgabe + '<br>';
    } ausgabe += 2;
}

// While-Schleife

let a = 0;
let ausgabe2 = 150;

while (a <= 15) {
    if (a % 3 === 0) {
        document.querySelector('.while-schleife').innerHTML += `<span style="color: violet;">${ausgabe2}</span><br>`;
    } else {
        document.querySelector('.while-schleife').innerHTML += ausgabe2 + '<br>';
    }
    ausgabe2 -= 21;
    if (a % 3 === 1) {
        document.querySelector('.while-schleife').innerHTML += `<span style="color: violet;">${ausgabe2}</span><br>`;
    } else {
        document.querySelector('.while-schleife').innerHTML += ausgabe2 + '<br>';
    }
    ausgabe2 += 2;
    a++;
}

// Do-While-Schleife

let b = 0;
let ausgabe3 = 150;

do {
    b++;
    if (b % 3 === 1) {
        document.querySelector('.do-while-schleife').innerHTML += `<span style="color: violet;">${ausgabe3}</span><br>`;
    } else {
        document.querySelector('.do-while-schleife').innerHTML += ausgabe3 + '<br>';
    } ausgabe3 -= 21;
    if (b % 3 === 2) {
        document.querySelector('.do-while-schleife').innerHTML += `<span style="color: violet;">${ausgabe3}</span><br>`;
    } else {
        document.querySelector('.do-while-schleife').innerHTML += ausgabe3 + '<br>';
    } ausgabe3 += 2;
    } while (b <= 15);
