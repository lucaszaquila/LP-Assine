document.addEventListener('DOMContentLoaded', function (){
    const form = document.querySelector('form')
    document.querySelectorAll('#payment input[type="radio"]').forEach(function (elem) {
        elem.addEventListener('change',function (){
            document.querySelector('#payment-address').checked=1
            form.classList=this.value
        })
    })

    document.querySelector('#payment-address').addEventListener('change',function (elem){
        form.classList.toggle('address');
    })
})