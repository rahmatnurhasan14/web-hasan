const txtElement = ['Wirausaha', 'Bisnis Kuliner', 'Bisnis Desainer T-shirt', 'Bisnis Seni Sketsa', 'Freelancer', 'Web Dev'];
let count = 0;
let txtIndex = 0;
let currentTxt = '';
let words = '';

(function tik() {

    if (count == txtElement.length) {
        count = 0;
    }

    currentTxt = txtElement[count];

    words = currentTxt.slice(0, ++txtIndex);
    document.querySelector('.efek-tik').textContent = words;

    if (words.length == currentTxt.length) {
        count++;
        txtIndex = 0;
    }

    setTimeout(tik, 500);


})();
