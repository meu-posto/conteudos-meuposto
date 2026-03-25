const phoneInput = document.getElementById('celular');
const maskOptions = {
  mask: '(00) 00000-0000'
};
const mask = IMask(phoneInput, maskOptions);

const scriptURL =
  "https://script.google.com/macros/s/AKfycbyB2fxBRo0Hu6nUApuT_Dm4ST6Th8I_LjnCrhlT04fiuYidcHzjM5kExO0d_LqfKosfqQ/exec";
const form = document.forms["submit-to-google-sheet"];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  // Mostra o pop-up de carregamento ANTES de enviar a requisição
  swal({
    title: 'Aguarde...',
    text: 'Enviando suas informações.',
    allowOutsideClick: false,
    onOpen: () => {
      swal.showLoading();
    }
  });

  fetch(scriptURL, { method: "POST", body: formData, mode: "no-cors" })
    .then((response) => {
      // Mostra a mensagem de sucesso DEPOIS que a requisição for concluída
      swal({
        title: 'Enviado!',
        text: 'Seus dados foram enviados com sucesso.',
        type: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        form.reset(); // Limpa o formulário
      });
    })
    .catch((error) => {
      // Mostra a mensagem de erro se algo falhar
      console.error('Error!', error.message);
      swal({
        title: 'Erro!',
        text: 'Não foi possível enviar suas informações. Tente novamente.',
        type: 'error',
        confirmButtonText: 'OK'
      });
    });
});
