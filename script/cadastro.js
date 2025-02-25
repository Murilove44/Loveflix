document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".form").addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio automático do formulário

        // Captura os valores dos inputs
        const primeiroNome = document.querySelector("input[type='text']").value.trim();
        const ultimoNome = document.getElementById("ultimo").value.trim();
        const email = document.querySelector("input[type='email']").value.trim();
        const senha = document.querySelector("input[type='password']").value.trim();
        const confirmarSenha = document.querySelectorAll("input[type='password']")[1].value.trim();

        // Verifica se todos os campos estão preenchidos
        if (!primeiroNome || !ultimoNome || !email || !senha || !confirmarSenha) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        // Valida formato do e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, insira um e-mail válido!");
            return;
        }

        // Valida se a senha tem pelo menos 6 caracteres
        if (senha.length < 6) {
            alert("A senha deve ter pelo menos 6 caracteres!");
            return;
        }

        // Confere se as senhas são iguais
        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        // Se passar em todas as verificações
        alert("Cadastro realizado com sucesso!");
        window.location.href = "LoveFlix.html"; // Redireciona para a página principal
    });
});
