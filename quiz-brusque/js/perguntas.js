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
        texto: "QUAL O ANIMAL FOFINHO QUE É COMUM VER EM BRUSQUE?",
        respostas: [
          { texto: "CAPIVARA", imagem: "capivara", certa: true },
          { texto: "ELEFANTE", imagem: "zoo", certa: false },
          { texto: "GIRAFA", imagem: "ponte", certa: false }
        ]
      },
      {
        texto: "QUAL FESTA DIVERTIDA ACONTECE EM BRUSQUE?",
        respostas: [
          { texto: "FENARRECO", imagem: "zoo", certa: true },
          { texto: "CARNAVAL DO RIO", imagem: "textil", certa: false },
          { texto: "FESTA DA UVA", imagem: "aviao", certa: false }
        ]
      },
      {
        texto: "COMO SE CHAMA QUEM NASCE EM BRUSQUE?",
        respostas: [
          { texto: "BRUSQUENSE", imagem: "ponte", certa: true },
          { texto: "PARANAENSE", imagem: "capivara", certa: false },
          { texto: "MINEIRO", imagem: "escultura", certa: false }
        ]
      },
      {
        texto: "QUAL COMIDA FEITA COM PATO É FAMOSA NA FENARRECO?",
        respostas: [
          { texto: "MARRECO", imagem: "aviao", certa: true },
          { texto: "PIZZA", imagem: "zoo", certa: false },
          { texto: "HAMBURGUER", imagem: "textil", certa: false }
        ]
      },
      {
        texto: "QUAL DESSES LUGARES POSSUI VARIAS ESCULTURAS PARA VER?",
        respostas: [
          { texto: "PARQUE DAS ESCULTURAS", imagem: "escultura", certa: true },
          { texto: "PONTE ESTAIADA", imagem: "ponte", certa: false },
          { texto: "CAPIVARA", imagem: "capivara", certa: false }
        ]
      },
      {
        texto: "BRUSQUE É CONHECIDA POR VENDER MUITAS:?",
        respostas: [
          { texto: "ROUPAS", imagem: "textil", certa: true },
          { texto: "AVIÕES", imagem: "aviao", certa: false },
          { texto: "CARROS", imagem: "zoo", certa: false }
        ]
      },
      {
        texto: "QUAL DOCE RECHEADO É POPULAR EM BRUSQUE?",
        respostas: [
          { texto: "CUCA", imagem: "ponte", certa: true },
          { texto: "PIRULITO", imagem: "textil", certa: false },
          { texto: "PIZZA", imagem: "zoo", certa: false }
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
        texto: "QUAL O NOME DO TIME DE FUTEBOL QUE REPRESENTA BRUSQUE?",
        respostas: [
          { texto: "BRUSQUE", imagem: "escultura", certa: true },
          { texto: "FORTALEZA", imagem: "capivara", certa: false },
          { texto: "CRICIUMA", imagem: "aviao", certa: false }
        ]
      }
    ],
  
    medio: [
      {
        texto: "NA FENARRECO AS PESSOAS COMEM MUITO O QUÊ?",
        respostas: [
          { texto: "MARRECO", imagem: "ponte", certa: true },
          { texto: "BURRITO", imagem: "zoo", certa: false },
          { texto: "AMENDOIM", imagem: "textil", certa: false }
        ]
      },
      {
        texto: "BRUSQUE É FAMOSA POR FAZER MUITAS:",
        respostas: [
          { texto: "ROUPAS", imagem: "zoo", certa: true },
          { texto: "AVIÕES", imagem: "aviao", certa: false },
          { texto: "BORRACHAS", imagem: "escultura", certa: false }
        ]
      },
      {
        texto: "NO PARQUE ZOOBOTÂNICO DE BRUSQUE, QUAL ANIMAL ESPERTO E BRINCALHÃO PODEMOS VER PULANDO NAS ÁRVORES?",
        respostas: [
          { texto: "MACACO", imagem: "aviao", certa: true },
          { texto: "LEÃO", imagem: "ponte", certa: false },
          { texto: "ELEFANTE", imagem: "capivara", certa: false }
        ]
      },
      {
        texto: "QUAL O DOCE MAIS FAMOSO DA CIDADE?",
        respostas: [
          { texto: "CUCA", imagem: "escultura", certa: true },
          { texto: "BOLO", imagem: "textil", certa: false },
          { texto: "PIRULITO", imagem: "zoo", certa: false }
        ]
      },
      {
        texto: "QUEM É O MASCOTE DA NOSSA FESTA?",
        respostas: [
          { texto: "SR. E SRA MARRECOS", imagem: "textil", certa: true },
          { texto: "FULECO", imagem: "capivara", certa: false },
          { texto: "MONICA", imagem: "aviao", certa: false }
        ]
      },
      {
        texto: "BRUSQUE ESTÁ LOCALIZADA EM QUAL ESTADO:",
        respostas: [
          { texto: "SANTA CATARINA", imagem: "capivara", certa: true },
          { texto: "PARANÁ", imagem: "escultura", certa: false },
          { texto: "RIO DE JANEIRO", imagem: "ponte", certa: false }
        ]
      },
      {
        texto: "QUAL OBJETO VOADOR FICA PERTO DA CAIXA D'ÁGUA?",
        respostas: [
          { texto: "AVIÃO", imagem: "aviao", certa: true },
          { texto: "PONTE ESTAIADA", imagem: "textil", certa: false },
          { texto: "ROUPAS", imagem: "aviao", certa: false }
        ]
      },
      {
        texto: "QUAL MAMÍFERO GOSTA DE ÁGUA E PODE SER VISTO NA REGIÃO?",
        respostas: [
          { texto: "CAPIVARA", imagem: "capivara", certa: true },
          { texto: "HIPOPÓTAMO", imagem: "capivara", certa: false },
          { texto: "GIRAFA", imagem: "ponte", certa: false }
        ]
      },
      {
        texto: "ONDE VEMOS ARTE AO AR LIVRE EM BRUSQUE?",
        respostas: [
          { texto: "PARQUE DAS ESCULTURAS", imagem: "escultura", certa: true },
          { texto: "ZOOBOTÂNICO", imagem: "zoo", certa: false },
          { texto: "INDÚSTRIA TÊXTIL", imagem: "textil", certa: false }
        ]
      },
      {
        texto: "QUAL DESSAS AVENIDAS É LOCALIZADA EM BRUSQUE?",
        respostas: [
          { texto: "BEIRA-RIO", imagem: "textil", certa: true },
          { texto: "SERRA DO RIO DO RASTRO", imagem: "ponte", certa: false },
          { texto: "LAGOA DE IMARUÍ", imagem: "capivara", certa: false }
        ]
      }
    ],
  
    dificil: [
      {
        texto: "QUAL DESSES PRODUTOS É FAMOSO POR SER FEITA EM BRUSQUE?",
        respostas: [
          { texto: "ROUPA", imagem: "ponte", certa: true },
          { texto: "BORRACHA", imagem: "escultura", certa: false },
          { texto: "CANOS DE METAL", imagem: "zoo", certa: false }
        ]
      },
      {
        texto: "BRUSQUE FOI FUNDADA POR PESSOAS QUE VIERAM DE UM PAÍS MUITO LONGE. DE QUAL PAÍS ELAS VIERAM?",
        respostas: [
          { texto: "ALEMANHÃ", imagem: "zoo", certa: true },
          { texto: "ITÁLIA", imagem: "aviao", certa: false },
          { texto: "ESPANHA", imagem: "textil", certa: false }
        ]
      },
      {
        texto: "BRUSQUE TEM UMA PONTE MUITO GRANDE E BONITA, QUE PARECE TER UNS CABOS SEGURANDO ELA. COMO SE CHAMA ESSA PONTE?",
        respostas: [
          { texto: "PONTE ESTAIDA", imagem: "ponte", certa: true },
          { texto: "SEI LÁ", imagem: "capivara", certa: false },
          { texto: "SEI LÁ", imagem: "ponte", certa: false }
        ]
      },
      {
        texto: "QUAL É A BANDEIRA DA NOSSA CIDADE?",
        respostas: [
          { texto: "", imagem: "escultura", certa: true },
          { texto: "", imagem: "zoo", certa: false },
          { texto: "", imagem: "textil", certa: false }
        ]
      },
      {
        texto: "QUAL SETOR ECONÔMICO MARCOU A HISTÓRIA DE BRUSQUE?",
        respostas: [
          { texto: "INDÚSTRIA TÊXTIL", imagem: "textil", certa: true },
          { texto: "SEI LÁ", imagem: "ponte", certa: false },
          { texto: "SEI LÁ", imagem: "capivara", certa: false }
        ]
      },
      {
        texto: "QUAL RIO QUE PASSA POR BRUSQUE?",
        respostas: [
          { texto: "RIO ITAJAÍ-MIRIM", imagem: "capivara", certa: true },
          { texto: "RIO NILO", imagem: "aviao", certa: false },
          { texto: "LAGOA DO MARUÍ", imagem: "escultura", certa: false }
        ]
      },
      {
        texto: "QUAL DESSES LUGARES FICA EM BRUSQUE:",
        respostas: [
          { texto: "PREFEITURA", imagem: "textil", certa: true },
          { texto: "SEI LÁ", imagem: "zoo", certa: false },
          { texto: "SEI LÁ", imagem: "ponte", certa: false }
        ]
      },
      {
        texto: "QUAL FESTA DE BRUSQUE TEM MUITA MÚSICA E COMIDA ALEMÃ?",
        respostas: [
          { texto: "FENARRECO", imagem: "ponte", certa: true },
          { texto: "SEI LÁ", imagem: "capivara", certa: false },
          { texto: "SEI LÁ", imagem: "aviao", certa: false }
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
