document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('[data-addresstype]').forEach(function (elem) {
        elem.addEventListener('input',function() {
            const addressType = elem.dataset.addresstype;
            if(elem.value.length === 8 && !isNaN(elem.value)){
                const xhr = new XMLHttpRequest();
                const url= "https://viacep.com.br/ws/"+elem.value+"/json/"

                xhr.open('GET',url)
                xhr.onreadystatechange = function() {
                    if(xhr.readyState===4){
                        if(xhr.status ===200){
                            const address = JSON.parse(xhr.responseText)
                            if(!address.erro){

                                for (let fields in address){
                                    const field = document.querySelector('[data-address="'+addressType+'"][data-field="'+fields+'"]');
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
                resetForm(addressType)
            }
        })
    })
});

function resetForm(form){
    document.querySelectorAll('[data-address="'+form+'"][data-reset="true"]').forEach(function (elem){
        elem.value='';
    });
}