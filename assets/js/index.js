const printed = document.querySelector('#printed');
const digital = document.querySelector('#digital');

function showDetails(target) {
    if(target === 'printed') {
        printed.classList.toggle('active');

        setTimeout(function() {
            printed.querySelector('.details').style.transform = printed.classList.contains('active') ? 
            'translateY(0%)' : 'translateY(-100%)';
        })
    }
    if(target === 'digital') {
        digital.classList.toggle('active');

        setTimeout(function() {
            digital.querySelector('.details').style.transform = digital.classList.contains('active') ? 
            'translateY(0%)' : 'translateY(-100%)';
        })
    }
}