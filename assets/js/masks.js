const masks = {
  cpf (value) {
    return value
        .replace(/\D+/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
  },

  phone (value) {
    return value
        .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1')
  },

  cep (value) {
    return value
        .replace(/\D+/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1')
  },

  date (value) {
    return value
        .replace(/\D+/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\/\d{2})\d+?$/, '$1')
  },
}

function Listeners() {
  document.querySelectorAll('input[data-js]').forEach($input => {
      const field = $input.dataset.js
      $input.removeEventListener('input', null, false)

      $input.addEventListener('input', e => {
          e.target.value = masks[field](e.target.value)
      }, false)
  })
}

Listeners();