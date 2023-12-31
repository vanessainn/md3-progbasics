'use strict';

function start() {

    let anzahl = document.getElementById('anzahl').value;

    let imageArray = ['images/monday.jpg', 'images/tuesday.jpg', 'images/wednesday.jpg', 'images/thursday.jpg', 'images/friday.jpg', 'images/saturday.jpg', 'images/sunday.jpg'];
    let titleArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let descriptionArray = ['50% auf alle nicht-alkoholischen Getränke', '10% auf alle alkoholischen Getränke', '30% auf alle Barilla Produkte', '20% auf Coca Cola', 'Nimm zwei, zahl eins - auf alle Bio Produkte', '60% auf alle vegane Produkte', '5% auf ALLES!'];

    for (let i = 1; i <= anzahl; i++) {
        for (let i = 0; i <=6; i++) {
        print_coupon(imageArray[i], titleArray[i], descriptionArray[i]);
        }
    }

    function print_coupon(image, title, description) {
        let couponContainer = document.createElement('div');
        couponContainer.classList.add('container');

        let imageElement = document.createElement('img');
        imageElement.src = image;
        couponContainer.appendChild(imageElement);

        let containerText = document.createElement('div');
        containerText.classList.add('container__text');

        let titleElement = document.createElement('h2');
        titleElement.innerHTML = title;
        containerText.appendChild(titleElement);

        let descriptionElement = document.createElement('p');
        descriptionElement.innerHTML = description;
        containerText.appendChild(descriptionElement);

        couponContainer.appendChild(containerText);

        document.body.appendChild(couponContainer);
    }
}


// print_coupon('monday.jpeg', 'Monday', '50% off all non-alcoholic beverages!', '1');
// print_coupon('tuesday.jpeg', 'Tuesday', '10% off all alcoholic beverages!', '2');
// print_coupon('wednesday.jpeg', 'Wednesday', '30% off all non-alcoholic beverages!', '3');
// print_coupon('thursday.jpeg', 'Thursday', '20% off all non-alcoholic beverages!', '4');
// print_coupon('friday.jpeg', 'Friday', '5% off all alcoholic beverages!', '5');
// print_coupon('saturday.jpeg', 'Saturday', '60% off all non-alcoholic beverages!', '6');
// print_coupon('sunday.jpeg', 'Sunday', '70% off all non-alcoholic beverages!', '7');


// function print_coupon(image, title, description, index) {
//     document.getElementById('image' + index).src = image;
//     document.getElementById('title' + index).innerHTML = title;
//     document.getElementById('description' + index).innerHTML = description;

// }

