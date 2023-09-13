// Banco de dados fictício de destinos de viagem
export const database = [
  {
    nome: "Paris",
    descricao:
      "A cidade do amor, conhecida por sua arquitetura icônica e culinária deliciosa.",
    pontosTuristicos: [
      "Torre Eiffel",
      "Museu do Louvre",
      "Catedral de Notre-Dame",
    ],
    atividades: [
      "Passeio de barco pelo rio Sena",
      "Degustação de vinhos",
      "Visita a Montmartre",
    ],
  },
  {
    nome: "Tóquio",
    descricao:
      "A capital do Japão, uma mistura única de tradição e modernidade.",
    pontosTuristicos: [
      "Templo Senso-ji",
      "Bairro de Shinjuku",
      "Tokyo Disneyland",
    ],
    atividades: [
      "Passeio no Jardim Imperial",
      "Compras no mercado de Tsukiji",
      "Visita ao Museu Ghibli",
    ],
  },
  {
    nome: "Cancún",
    descricao:
      "Um paraíso tropical com praias de areia branca e águas cristalinas.",
    pontosTuristicos: ["Praias de Cancún", "Ruínas de Tulum", "Parque Xcaret"],
    atividades: [
      "Mergulho com snorkel em cenotes",
      "Passeio de catamarã",
      "Festa em Coco Bongo",
    ],
  },
];

// Função para buscar informações de um destino pelo nome
function buscarDestino(nomeDestino) {
  return database.find(
    (destino) => destino.nome.toLowerCase() === nomeDestino.toLowerCase()
  );
}

// Exemplo de uso:
const destinoPesquisado = buscarDestino("Paris");
if (destinoPesquisado) {
  console.log(`Nome: ${destinoPesquisado.nome}`);
  console.log(`Descrição: ${destinoPesquisado.descricao}`);
  console.log("Pontos Turísticos:");
  destinoPesquisado.pontosTuristicos.forEach((ponto) =>
    console.log(`- ${ponto}`)
  );
  console.log("Atividades:");
  destinoPesquisado.atividades.forEach((atividade) =>
    console.log(`- ${atividade}`)
  );
} else {
  console.log("Destino não encontrado.");
}
