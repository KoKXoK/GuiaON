const dadosPontos = {
  orla: {
    titulo: "Orla da Praia",
    desc: "A extensa orla de Praia Grande é o cartão-postal da cidade, com calçadão revitalizado, quiosques, ciclovia e jardins bem cuidados. Perfeita para caminhadas, esportes e contemplar o pôr do sol.",
    endereco: "Avenida Pres. Castelo Branco (Canto do Forte até Solemar)",
    horario: "24 horas",
    telefone: "—",
    preco: "Gratuito",
    fotos: ["orlapg.jpg"]
  },
  costa: {
    titulo: "Avenida Costa e Silva",
    desc: "Principal corredor comercial da cidade, a Costa e Silva concentra lojas, restaurantes, farmácias, bancos e grande movimento. É o ponto de encontro para compras e vida urbana no dia a dia.",
    endereco: "Avenida Costa e Silva – Boqueirão",
    horario: "Comércio: geralmente 09h às 18h",
    telefone: "—",
    preco: "—",
    fotos: ["acs.jpg"]
  },
  shopping: {
    titulo: "Shopping Litoral Plaza",
    desc: "O Litoral Plaza Shopping oferece dezenas de lojas, praça de alimentação diversificada, cinema e entretenimento para toda a família. É uma das principais opções de lazer e compras da região.",
    endereco: "Avenida Ayrton Senna, 1500 – Bairro Xixová",
    horario: "Seg-Sáb 10h às 22h, Dom 12h às 20h",
    telefone: "(13) 3473-1000",
    preco: "Entrada gratuita",
    fotos: ["lps.jpg"]
  },
  netuno: {
    titulo: "Estátua de Netuno",
    desc: "Muito mais do que um belo cenário para fotos, a Estátua de Netuno representa um capítulo importante da história de Praia Grande. Inaugurada em 1956, ela está ligada ao surgimento da Cidade Ocian.",
    endereco: "Avenida Pres. Castelo Branco - Bairro Ocian",
    horario: "24 horas",
    telefone: "—",
    preco: "Gratuito",
    fotos: ["netuno.jpg"]
  },
  portinho: {
    titulo: "Portinho",
    desc: "A Área de Lazer Ézio Dall'Acqua é um dos parques ecológicos mais tradicionais da Baixada Santista, oferecendo alternativa tranquila e arborizada à agitação das praias.",
    endereco: "Rua Paulo Sérgio Garcia, s/n - Bairro Sítio do Campo",
    horario: "Diariamente, 08h às 18h",
    telefone: "(13) 3496-2000",
    preco: "Gratuito",
    fotos: ["portin.jpg"]
  },
  palacio: {
    titulo: "Palácio das Artes",
    desc: "O maior complexo cultural de Praia Grande, unindo modernidade e história com o Teatro Serafim Gonzalez, Galeria de Artes Nilton Zanotti e Museu da Cidade.",
    endereco: "Avenida Presidente Costa e Silva, 1600 - Boqueirão",
    horario: "Ter-Sáb 10h às 18h",
    telefone: "(13) 3496-2020",
    preco: "Entrada gratuita (museu e exposições)",
    fotos: ["pda.jpeg"]
  },
  iemanja: {
    titulo: "Estátua de Iemanjá",
    desc: "A estátua de Iemanjá na orla da praia do bairro Vila Mirim é um dos principais pontos turísticos da cidade.",
    endereco: "Avenida Pres. Castelo Branco - Bairro Vila Mirim",
    horario: "24 horas",
    telefone: "—",
    preco: "Gratuito",
    fotos: ["iemanja.jpg"]
  },
  parque: {
    titulo: "Parque da Cidade",
    desc: "Ao lado do Terminal Tude Bastos, o Parque da Cidade é o refúgio perfeito para toda a família, unindo esporte, cultura e bem-estar.",
    endereco: "Rua José Bonifácio, s/n - Bairro Sítio do Campo",
    horario: "Diariamente, 06h às 22h",
    telefone: "(13) 3496-2000",
    preco: "Entrada gratuita",
    fotos: ["pqdcd.jpg"]
  },
  trilha: {
    titulo: "Trilha Itutinga-Pilões",
    desc: "Refúgio de Mata Atlântica no Jardim Melvi com cachoeiras e poços de águas cristalinas. Acesso controlado com agendamento prévio.",
    endereco: "Avenida Wilson de Oliveira, s/n - Bairro Jardim Melvi",
    horario: "Mediante agendamento",
    telefone: "(13) 3496-2000",
    preco: "Consulte no agendamento",
    fotos: ["ip.png"]
  }
};
const modalOverlay = document.getElementById('modalOverlay');
const modalDetalhe = document.getElementById('modalDetalhe');
const modalFechar = document.getElementById('modalFechar');
const modalGaleria = document.getElementById('modalGaleria');
const modalTitulo = document.getElementById('modalTitulo');
const modalDesc = document.getElementById('modalDesc');
const modalHorario = document.getElementById('modalHorario');
const modalTelefone = document.getElementById('modalTelefone');
const modalPreco = document.getElementById('modalPreco');
const modalEndereco = document.getElementById('modalEndereco');
function abrirModal(key) {
  const dados = dadosPontos[key];
  if (!dados) return;
  modalTitulo.textContent = dados.titulo;
  modalDesc.textContent = dados.desc;
  modalHorario.textContent = dados.horario;
  modalTelefone.textContent = dados.telefone;
  modalPreco.textContent = dados.preco;
  modalEndereco.textContent = dados.endereco;
  modalGaleria.innerHTML = '';
  dados.fotos.forEach(foto => {
    const img = document.createElement('img');
    img.src = foto;
    img.alt = dados.titulo;
    img.loading = 'lazy';
    modalGaleria.appendChild(img);
  });
  modalDetalhe.classList.add('active');
  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function fecharModal() {
  modalDetalhe.classList.remove('active');
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}
modalFechar.addEventListener('click', fecharModal);
modalOverlay.addEventListener('click', fecharModal);
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') fecharModal();
});
document.querySelectorAll('.linha-item').forEach((item, index) => {
  const keys = Object.keys(dadosPontos);
  if (keys[index]) {
    item.style.cursor = 'pointer';
    item.addEventListener('click', function() {
      abrirModal(keys[index]);
    });
  }
});
