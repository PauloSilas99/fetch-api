const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultado = document.querySelector('.resultadoCep');
const data = document.querySelector('.data');

const rua = document.querySelector('.rua');
const bairro = document.querySelector('.bairro');
const uf = document.querySelector('.uf');
const cidade = document.querySelector('.cidade');
const cepConfirm = document.querySelector('.cep');
const ddd = document.querySelector('.ddd');

btnCep.addEventListener('click',handleclick);
function handleclick(e){
    e.preventDefault();
    const cep = inputCep.value;
    buscaCep(cep)
}

function buscaCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(body => {
            if (body.erro) {
                resultado.innerHTML = "CEP não encontrado";
            }else{
            rua.innerHTML = 'Logradouro : ' + body.logradouro;
            bairro.innerHTML = 'Bairro : ' + body.bairro;
            uf.innerHTML = 'UF : ' + body.uf;
            cidade.innerHTML = 'Cidade : ' + body.localidade;
            cepConfirm.innerHTML = 'Cep : ' + body.cep;
            ddd.innerHTML = 'DDD : ' + body.ddd;
            }
        })
        .catch(error => {
            console.error('Erro ao buscar o CEP:', error);
            resultado.innerHTML = "Erro ao buscar o CEP.";
        });
}


data.innerHTML = dataAtual(); 
function dataAtual() {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
}

