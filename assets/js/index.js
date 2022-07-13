document.addEventListener('DOMContentLoaded', function (){
    document.querySelectorAll('.options button').forEach(function (elem){
        elem.addEventListener('click',function (e){
            const container = document.querySelector('[data-type="'+e.currentTarget.dataset.subscription+'"]')
            container.classList.toggle('active')
            setTimeout(function() {
                container.querySelector('.details').style.transform = container.classList.contains('active') ?
                    'translateY(0%)' : 'translateY(-100%)';
            })
        })
    })
})