const form = document.getElementById("invite-form");

const submitButton = document.getElementById("submit-button");

const successMessage = document.getElementById("success-message");

const errorMessage = document.getElementById("error-message");

const fields = {
  nome: document.getElementById("seu_nome"),
  presenca: document.getElementById("presenca"),
  relacao: document.getElementById("sobre_voce"),
  contato: document.getElementById("contato"),
  mensagem: document.getElementById("mensagem")
};


// INICIALIZA O EMAILJS
emailjs.init({
  publicKey: "1qEZ3KCN4eGV90SNT"
});


// Esconde as mensagens
function hideMessages() {
  successMessage.classList.remove("visible");
  errorMessage.classList.remove("visible");
}


// Mostra mensagem de erro
function showError() {
  successMessage.classList.remove("visible");
  errorMessage.classList.add("visible");
}


// Mostra mensagem de sucesso
function showSuccess() {
  errorMessage.classList.remove("visible");
  successMessage.classList.add("visible");
}


// Quando o usuário alterar algum campo,
// as mensagens desaparecem
Object.values(fields).forEach((field) => {

  field.addEventListener("input", () => {
    hideMessages();
  });

  field.addEventListener("change", () => {
    hideMessages();
  });

});


// Envio do formulário
form.addEventListener("submit", async (event) => {

  event.preventDefault();

  hideMessages();


  // Verifica os campos obrigatórios
  if (!form.checkValidity()) {

    form.reportValidity();

    showError();

    return;
  }


  submitButton.disabled = true;


  try {

    // ENVIA O FORMULÁRIO PELO EMAILJS
    await emailjs.sendForm(
      "service_3t6rrir",
      "template_cun9ymd",
      form
    );


    // Se chegou aqui, o envio deu certo
    showSuccess();


    // Limpa o formulário
    form.reset();


  } catch (error) {

    console.error("Erro ao enviar:", error);

    showError();

  } finally {

    submitButton.disabled = false;

  }

});


// Quando a página carregar
document.addEventListener("DOMContentLoaded", () => {

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

});
