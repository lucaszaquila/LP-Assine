const message = document.querySelector("#message");
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const fields = [...document.querySelectorAll("form input")];

  fields.forEach((field) => field.classList.remove("error"));
  message.classList = "";
  void message.offsetWidth;

  if (hasEmptyField(fields)) {
    message.classList = "error";
    message.innerHTML = "Por favor preencha todos os campos vazios.";

    fields.forEach((field) => {
      if (field.value.length === 0) {
        field.classList = "error";
      }
    });

    return;
  }

  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      message.innerText = "Resposta do servidor. EX: Cartão cadastrado com sucesso! Você irá ser redirecionado para a Central do Assinante em 5 segundos.";

      if (request.response.status) {
        message.classList = "success";
        setTimeout(() => {
          window.location.href = 'https://assine.atribuna.com.br/central/';
        }, 5000);

        return;
      }

      message.classList = "error";
      fields.forEach((field) => (field.classList = "error"));
    }
  };

  //   ENVIO DO FORM
  //   request.open('POST',"/url",true);
  //   request.responseType="json";
  //   request.send(new FormData(form));
});

const hasEmptyField = (array) => {
  return array.some((field) => {
    return field.value.length === 0;
  });
};
