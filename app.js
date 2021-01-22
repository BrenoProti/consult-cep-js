var submitButton = document.querySelector('#app form button');
var zipCodeField = document.querySelector('#app form input');
var content = document.querySelector('#app main');

submitButton.addEventListener('click', run);

function run(event) {
    event.preventDefault();

    var zipCode = zipCodeField.value;
    zipCode = zipCode.replace(' ', '');
    zipCode = zipCode.replace('.', '');
    zipCode = zipCode.trim(); //Remove spaces

    console.log(zipCode)

    axios.get(`https://viacep.com.br/ws/${zipCode}/json/`).then(function(response) {
        console.log(response.data);
        content.innerHTML='';
        createLine(response.data.logradouro);
        createLine(response.data.complemento);
        createLine(response.data.bairro);
        createLine(response.data.localidade + ' - ' + response.data.uf);
    })
    .catch(function(error){
        content.innerHTML='';
        console.log(error)
        createLine("Ops.. Algo deu errado!");
        createLine("Verifique o CEP digitado e tente novamente...")
    })
}

function createLine(text) {
    var line = document.createElement('p');
    var text = document.createTextNode(text)

    line.appendChild(text)
    content.appendChild(line)
}