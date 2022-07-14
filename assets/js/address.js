document.addEventListener('DOMContentLoaded', function() {
    const cepField = document.getElementById('cep')

    cepField.addEventListener('input',function() {
        if(cepField.value.length === 8 && !isNaN(cepField.value)){
            const xhr = new XMLHttpRequest();
            const url= "https://viacep.com.br/ws/"+cepField.value+"/json/"

            xhr.open('GET',url)
            xhr.onreadystatechange = function() {
                if(xhr.readyState===4){
                    if(xhr.status ===200){
                        const address = JSON.parse(xhr.responseText)
                        if(!address.erro){
                            for (let fields in address){
                                const field = document.querySelector('[data-field="'+fields+'"]');
                                if(field){
                                    field.value = address[fields]
                                }
                            }
                            return;
                        }
                        console.log('Cep Não Encontrado!')
                    }else{
                        console.log('ocorreu um erro durante a busca do CEP')
                    }
                }
            }
            xhr.send();
        }else{
            resetForm()
        }
    })
});

function resetForm(){
    document.querySelectorAll('[data-reset="true"]').forEach(function (elem){
        elem.value='';
    });
}