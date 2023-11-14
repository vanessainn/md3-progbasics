'use strict';

let text = '';

switch (new Date().getMonth()) {
    case 0:
        document.getElementById('output_image').src = 'images/januar.jpeg';
        text = 'Januar';
        break;
    case 1:
        document.getElementById('output_image').src = 'images/februar.jpeg';
        text = 'Februar';
        break;
    case 2:
        document.getElementById('output_image').src = 'images/märz.jpeg';
        text = 'März';
        break;
    case 3:
        document.getElementById('output_image').src = 'images/april.jpeg';
        text = 'April';
        break;
    case 4:
        document.getElementById('output_image').src = 'images/mai.jpeg';
        text = 'Mai';
        break;
    case 5:
        document.getElementById('output_image').src = 'images/juni.jpeg';
        text = 'Juni';
        break;
    case 6:
        document.getElementById('output_image').src = 'images/juli.jpeg';
        text = 'Juli';
        break;
    case 7:
        document.getElementById('output_image').src = 'images/august.jpeg';
        text = 'August';
        break;
    case 8:
        document.getElementById('output_image').src = 'images/september.jpeg';
        text = 'September';
        break;
    case 9:
        document.getElementById('output_image').src = 'images/oktober.jpeg';
        text = 'Oktober';
        break;
    case 10:
        document.getElementById('output_image').src = 'images/november.jpeg';
        text = 'November';
        break;
    case 11:
        document.getElementById('output_image').src = 'images/dezember.jpeg';
        text = 'Dezember';
        break;
}

document.getElementById('output_title').innerHTML = text;