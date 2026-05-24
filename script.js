// Mensagem de boas-vindas
window.onload = () => {
  console.log("Bem-vindo ao MERCADO DO FITY!");
  carregarGaleria();
};

// Lista de imagens da galeria
const imagensGaleria = [
  "fachada.jpeg",
  "interior.jpeg",
  "produtos.jpeg",
  "banner.jpeg"
];

// Função para carregar imagens dinamicamente
function carregarGaleria() {
  const galeria = document.getElementById("galeria-fotos");
  imagensGaleria.forEach(img => {
    const imagem = document.createElement("img");
    imagem.src = `img/${img}`;
    imagem.alt = `Foto ${img}`;
    galeria.appendChild(imagem);
  });
}

// Função do formulário de contato
function enviarMensagem(event) {
  event.preventDefault();
  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;
  const mensagem = document.getElementById('mensagem').value;

  alert(`Obrigado pelo contato, ${nome}!\n\nTelefone: ${telefone}\nMensagem: ${mensagem}\n\nEm breve retornaremos.`);
}

