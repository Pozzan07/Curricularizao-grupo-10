  // ===============================
  // PERGUNTAS DO QUIZ
  // ===============================
  // Para editar uma pergunta:
  // 1. Mude o texto em "texto".
  // 2. Mude as respostas em "respostas".
  // 3. Deixe apenas uma resposta com certa: true.
  
  const perguntas = {
    facil: [
      {
        texto: "QUAL ANIMAL FOFO VIVE PERTO DOS RIOS DE BRUSQUE?",
        respostas: [
          { texto: "CAPIVARA", imagem: "capivara", certa: true },
          { texto: "ZOOBOTÂNICO", imagem: "zoo", certa: false },
          { texto: "PONTE ESTAIADA", imagem: "ponte", certa: false }
        ]
      },
      {
        texto: "QUAL LUGAR TEM MUITAS PLANTAS E ANIMAIS?",
        respostas: [
          { texto: "ZOOBOTÂNICO", imagem: "zoo", certa: true },
          { texto: "INDÚSTRIA TÊXTIL", imagem: "textil", certa: false },
          { texto: "AVIÃO DA CAIXA D'ÁGUA", imagem: "aviao", certa: false }
        ]
      },
      {
        texto: "QUAL PONTO TURÍSTICO TEM CABOS E PASSA SOBRE O RIO?",
        respostas: [
          { texto: "PONTE ESTAIADA", imagem: "ponte", certa: true },
          { texto: "CAPIVARA", imagem: "capivara", certa: false },
          { texto: "PARQUE DAS ESCULTURAS", imagem: "escultura", certa: false }
        ]
      },
      {
        texto: "QUAL OBJETO VOADOR FICA PERTO DA CAIXA D'ÁGUA?",
        respostas: [
          { texto: "AVIÃO DA CAIXA D'ÁGUA", imagem: "aviao", certa: true },
          { texto: "ZOOBOTÂNICO", imagem: "zoo", certa: false },
          { texto: "INDÚSTRIA TÊXTIL", imagem: "textil", certa: false }
        ]
      },
      {
        texto: "ONDE VEMOS ARTE AO AR LIVRE EM BRUSQUE?",
        respostas: [
          { texto: "PARQUE DAS ESCULTURAS", imagem: "escultura", certa: true },
          { texto: "PONTE ESTAIADA", imagem: "ponte", certa: false },
          { texto: "CAPIVARA", imagem: "capivara", certa: false }
        ]
      },
      {
        texto: "QUAL HISTÓRIA DE BRUSQUE TEM TECIDOS E ROUPAS?",
        respostas: [
          { texto: "INDÚSTRIA TÊXTIL", imagem: "textil", certa: true },
          { texto: "AVIÃO DA CAIXA D'ÁGUA", imagem: "aviao", certa: false },
          { texto: "ZOOBOTÂNICO", imagem: "zoo", certa: false }
        ]
      },
      {
        texto: "QUAL IMAGEM MOSTRA UMA PONTE BONITA?",
        respostas: [
          { texto: "PONTE ESTAIADA", imagem: "ponte", certa: true },
          { texto: "INDÚSTRIA TÊXTIL", imagem: "textil", certa: false },
          { texto: "ZOOBOTÂNICO", imagem: "zoo", certa: false }
        ]
      },
      {
        texto: "QUAL IMAGEM MOSTRA UMA CAPIVARA?",
        respostas: [
          { texto: "CAPIVARA", imagem: "capivara", certa: true },
          { texto: "AVIÃO DA CAIXA D'ÁGUA", imagem: "aviao", certa: false },
          { texto: "PARQUE DAS ESCULTURAS", imagem: "escultura", certa: false }
        ]
      },
      {
        texto: "QUAL LUGAR É BOM PARA VER A NATUREZA?",
        respostas: [
          { texto: "ZOOBOTÂNICO", imagem: "zoo", certa: true },
          { texto: "PONTE ESTAIADA", imagem: "ponte", certa: false },
          { texto: "INDÚSTRIA TÊXTIL", imagem: "textil", certa: false }
        ]
      },
      {
        texto: "QUAL IMAGEM MOSTRA ESCULTURAS COLORIDAS?",
        respostas: [
          { texto: "PARQUE DAS ESCULTURAS", imagem: "escultura", certa: true },
          { texto: "CAPIVARA", imagem: "capivara", certa: false },
          { texto: "AVIÃO DA CAIXA D'ÁGUA", imagem: "aviao", certa: false }
        ]
      }
    ],
  
    medio: [
      {
        texto: "QUAL PONTO TURÍSTICO É UM CARTÃO-POSTAL DE BRUSQUE?",
        respostas: [
          { texto: "PONTE ESTAIADA", imagem: "ponte", certa: true },
          { texto: "ZOOBOTÂNICO", imagem: "zoo", certa: false },
          { texto: "INDÚSTRIA TÊXTIL", imagem: "textil", certa: false }
        ]
      },
      {
        texto: "QUAL LUGAR ENSINA SOBRE FAUNA E FLORA?",
        respostas: [
          { texto: "ZOOBOTÂNICO", imagem: "zoo", certa: true },
          { texto: "AVIÃO DA CAIXA D'ÁGUA", imagem: "aviao", certa: false },
          { texto: "PARQUE DAS ESCULTURAS", imagem: "escultura", certa: false }
        ]
      },
      {
        texto: "QUAL CURIOSIDADE HISTÓRICA FICA NO ALTO, PERTO DA CAIXA D'ÁGUA?",
        respostas: [
          { texto: "AVIÃO DA CAIXA D'ÁGUA", imagem: "aviao", certa: true },
          { texto: "PONTE ESTAIADA", imagem: "ponte", certa: false },
          { texto: "CAPIVARA", imagem: "capivara", certa: false }
        ]
      },
      {
        texto: "QUAL ESPAÇO TEM OBRAS DE ARTE PARA PASSEAR?",
        respostas: [
          { texto: "PARQUE DAS ESCULTURAS", imagem: "escultura", certa: true },
          { texto: "INDÚSTRIA TÊXTIL", imagem: "textil", certa: false },
          { texto: "ZOOBOTÂNICO", imagem: "zoo", certa: false }
        ]
      },
      {
        texto: "QUAL ATIVIDADE AJUDOU A CIDADE A CRESCER COM TECIDOS?",
        respostas: [
          { texto: "INDÚSTRIA TÊXTIL", imagem: "textil", certa: true },
          { texto: "CAPIVARA", imagem: "capivara", certa: false },
          { texto: "AVIÃO DA CAIXA D'ÁGUA", imagem: "aviao", certa: false }
        ]
      },
      {
        texto: "QUAL ANIMAL SIMPÁTICO REPRESENTA A FAUNA REGIONAL?",
        respostas: [
          { texto: "CAPIVARA", imagem: "capivara", certa: true },
          { texto: "PARQUE DAS ESCULTURAS", imagem: "escultura", certa: false },
          { texto: "PONTE ESTAIADA", imagem: "ponte", certa: false }
        ]
      },
      {
        texto: "QUAL LUGAR TEM ÁRVORES, BICHINHOS E APRENDIZADO?",
        respostas: [
          { texto: "ZOOBOTÂNICO", imagem: "zoo", certa: true },
          { texto: "INDÚSTRIA TÊXTIL", imagem: "textil", certa: false },
          { texto: "AVIÃO DA CAIXA D'ÁGUA", imagem: "aviao", certa: false }
        ]
      },
      {
        texto: "QUAL MONUMENTO LEMBRA UM AVIÃO EM BRUSQUE?",
        respostas: [
          { texto: "AVIÃO DA CAIXA D'ÁGUA", imagem: "aviao", certa: true },
          { texto: "CAPIVARA", imagem: "capivara", certa: false },
          { texto: "PONTE ESTAIADA", imagem: "ponte", certa: false }
        ]
      },
      {
        texto: "QUAL IMAGEM COMBINA COM ARTE E CULTURA?",
        respostas: [
          { texto: "PARQUE DAS ESCULTURAS", imagem: "escultura", certa: true },
          { texto: "ZOOBOTÂNICO", imagem: "zoo", certa: false },
          { texto: "INDÚSTRIA TÊXTIL", imagem: "textil", certa: false }
        ]
      },
      {
        texto: "QUAL TEMA FALA SOBRE FÁBRICAS E PANOS?",
        respostas: [
          { texto: "INDÚSTRIA TÊXTIL", imagem: "textil", certa: true },
          { texto: "PONTE ESTAIADA", imagem: "ponte", certa: false },
          { texto: "CAPIVARA", imagem: "capivara", certa: false }
        ]
      }
    ],
  
    dificil: [
      {
        texto: "QUAL SÍMBOLO URBANO DE BRUSQUE USA CABOS PARA SUSTENTAR A PASSAGEM?",
        respostas: [
          { texto: "PONTE ESTAIADA", imagem: "ponte", certa: true },
          { texto: "PARQUE DAS ESCULTURAS", imagem: "escultura", certa: false },
          { texto: "ZOOBOTÂNICO", imagem: "zoo", certa: false }
        ]
      },
      {
        texto: "QUAL ESPAÇO AJUDA A PRESERVAR ANIMAIS E PLANTAS?",
        respostas: [
          { texto: "ZOOBOTÂNICO", imagem: "zoo", certa: true },
          { texto: "AVIÃO DA CAIXA D'ÁGUA", imagem: "aviao", certa: false },
          { texto: "INDÚSTRIA TÊXTIL", imagem: "textil", certa: false }
        ]
      },
      {
        texto: "QUAL CURIOSIDADE UNE MEMÓRIA DA CIDADE E UM AVIÃO EXPOSTO?",
        respostas: [
          { texto: "AVIÃO DA CAIXA D'ÁGUA", imagem: "aviao", certa: true },
          { texto: "CAPIVARA", imagem: "capivara", certa: false },
          { texto: "PONTE ESTAIADA", imagem: "ponte", certa: false }
        ]
      },
      {
        texto: "QUAL LUGAR APROXIMA AS CRIANÇAS DA ARTE PÚBLICA?",
        respostas: [
          { texto: "PARQUE DAS ESCULTURAS", imagem: "escultura", certa: true },
          { texto: "ZOOBOTÂNICO", imagem: "zoo", certa: false },
          { texto: "INDÚSTRIA TÊXTIL", imagem: "textil", certa: false }
        ]
      },
      {
        texto: "QUAL SETOR ECONÔMICO MARCOU A HISTÓRIA DE BRUSQUE?",
        respostas: [
          { texto: "INDÚSTRIA TÊXTIL", imagem: "textil", certa: true },
          { texto: "PONTE ESTAIADA", imagem: "ponte", certa: false },
          { texto: "CAPIVARA", imagem: "capivara", certa: false }
        ]
      },
      {
        texto: "QUAL MAMÍFERO GOSTA DE ÁGUA E PODE SER VISTO NA REGIÃO?",
        respostas: [
          { texto: "CAPIVARA", imagem: "capivara", certa: true },
          { texto: "AVIÃO DA CAIXA D'ÁGUA", imagem: "aviao", certa: false },
          { texto: "PARQUE DAS ESCULTURAS", imagem: "escultura", certa: false }
        ]
      },
      {
        texto: "QUAL TEMA MOSTRA A LIGAÇÃO ENTRE CIDADE, TRABALHO E TECIDOS?",
        respostas: [
          { texto: "INDÚSTRIA TÊXTIL", imagem: "textil", certa: true },
          { texto: "ZOOBOTÂNICO", imagem: "zoo", certa: false },
          { texto: "PONTE ESTAIADA", imagem: "ponte", certa: false }
        ]
      },
      {
        texto: "QUAL PONTO DE BRUSQUE PODE SER DESCRITO COMO OBRA DE ENGENHARIA?",
        respostas: [
          { texto: "PONTE ESTAIADA", imagem: "ponte", certa: true },
          { texto: "CAPIVARA", imagem: "capivara", certa: false },
          { texto: "AVIÃO DA CAIXA D'ÁGUA", imagem: "aviao", certa: false }
        ]
      },
      {
        texto: "QUAL LOCAL INCENTIVA O CUIDADO COM A NATUREZA?",
        respostas: [
          { texto: "ZOOBOTÂNICO", imagem: "zoo", certa: true },
          { texto: "PARQUE DAS ESCULTURAS", imagem: "escultura", certa: false },
          { texto: "INDÚSTRIA TÊXTIL", imagem: "textil", certa: false }
        ]
      },
      {
        texto: "QUAL ATRAÇÃO TRANSFORMA O PASSEIO EM EXPERIÊNCIA DE ARTE?",
        respostas: [
          { texto: "PARQUE DAS ESCULTURAS", imagem: "escultura", certa: true },
          { texto: "AVIÃO DA CAIXA D'ÁGUA", imagem: "aviao", certa: false },
          { texto: "CAPIVARA", imagem: "capivara", certa: false }
        ]
      }
    ]
  };