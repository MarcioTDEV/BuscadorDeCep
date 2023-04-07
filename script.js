


const input = document.querySelector(".inputCEP")

const resultado = document.querySelector(".resultadoCEP")
input.focus()


document.addEventListener("keyup",({key})=>{
    if(key === 'Enter'){
        buscarCEP()
    }
})



function buscarCEP() {
    console.log(input.value)
    if (validaBuscarCEP()) {
        pesquisaCEP()
        input.focus()
        input.value = ''
    }
}

function exibirResultado(x) {
    if (x.erro === true) {
        alert("CEP inválido!")
        console.log(x)
        input.focus()
        input.value = ''
        return
    }
    
    resultado.innerHTML = `
    <h2> ${x.localidade}, ${x.uf} </h2>
    <div class='infoAdicionais'>
    <div class="logradouro">
    <h5>Logradouro</h5>
    <h3>${x.logradouro}</h3>
    </div>
    
    <div class='bairro'>
    <h5>Bairro</h5>
    <h3>${x.bairro}</h3>
    
    </div>
    
    
    </div>
    <h2> ${x.cep} </h2>
    `
}

function pesquisaCEP() {
    fetch(` https://viacep.com.br/ws/${input.value}/json/`)
    .then(data => data.json())
        .then(data => {
            exibirResultado(data)
        })
        
        
    }
    
    function validaBuscarCEP() {
        if (input.value.length !== 8) {
            alert('O CEP precisa conter 8 dígitos!')
            input.focus()
            return false
        }
        input.focus()
        return true
    }
    
    
    