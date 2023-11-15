'use strict';

let text = '';
let img = '';

switch (new Date().getMonth()) {
    case 0:
        img = 'images/januar.jpeg';
        text = 'Januar';
        break;
    case 1:
        img = 'images/februar.jpeg';
        text = 'Februar';
        break;
    case 2:
        img = 'images/märz.jpeg';
        text = 'März';
        break;
    case 3:
        img = 'images/april.jpeg';
        text = 'April';
        break;
    case 4:
       img = 'images/mai.jpeg';
        text = 'Mai';
        break;
    case 5:
        img = 'images/juni.jpeg';
        text = 'Juni';
        break;
    case 6:
        img = 'images/juli.jpeg';
        text = 'Juli';
        break;
    case 7:
        img = 'images/august.jpeg';
        text = 'August';
        break;
    case 8:
        img = 'images/september.jpeg';
        text = 'September';
        break;
    case 9:
        img = 'images/oktober.jpeg';
        text = 'Oktober';
        break;
    case 10:
        img = 'images/november.jpeg';
        text = 'November';
        break;
    case 11:
        img = 'images/dezember.jpeg';
        text = 'Dezember';
        break;
    default:
        img = 'images/nomonth.jpeg';
        text = 'It is not a month.';
        break;
}

document.getElementById('output_image').src = img;
document.getElementById('output_title').innerHTML = text;