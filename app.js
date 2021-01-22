var submitButton = document.querySelector('#app form button');
var zipCodeField = document.querySelector('#app form input');
var content = document.querySelector('#app maim');

submitButton.addEventListener('click', run);

function run(event) {
    event.preventDefault();

    var zipCode = zipCodeField.value;
    zipCode = zipCode.replace(' ', '');
    zipCode = zipCode.replace('.', '');
    zipCode = zipCode.trim(); //Remove spaces

    console.log(zipCode)
}