document.addEventListener('DOMContentLoaded', function (){
    const cpfField = document.getElementById('cpf')
    const cepField = document.getElementById('cep')
    const passwordField = document.getElementById('password')

    cepField.addEventListener('input',function (){
        if(cepField.value.length === 8 && !isNaN(cepField.value)){
            const xhr = new XMLHttpRequest();
            const url= "https://viacep.com.br/ws/"+cepField.value+"/json/"

            xhr.open('GET',url)
            xhr.onreadystatechange = function (){
                if(xhr.readyState===4){
                    if(xhr.status ===200){
                        const address = JSON.parse(xhr.responseText)
                        if(!address.erro){
                            console.log('Rua =>',address.logradouro)
                            console.log('Bairro =>',address.bairro)
                            console.log('Cidade =>',address.localidade)
                            console.log('Estado =>',address.uf)
                            return;
                        }

                        console.log('Cep Não Encontrado!')
                    }else{
                        console.log('ocorreu um erro durante a busca do CEP')
                    }
                }
            }

            xhr.send();
        }
    })
});