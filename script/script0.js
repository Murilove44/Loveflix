document.getElementById('loginBtn').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const email = document.getElementById('logemail')?.value;
    const senha = document.getElementById('logpass').value;

    if (email && senha) {
        window.location.href = 'LoveFlix.html'; // Redireciona para a página
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});

// Redirecionamento para a página de cadastro
document.getElementById('cadastroBtn').addEventListener('click', function() {
    window.location.href = 'cadastro.html';
});
