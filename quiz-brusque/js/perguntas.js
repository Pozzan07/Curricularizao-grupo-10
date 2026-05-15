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
          { texto: "ELEFANTE", imagem: "elefante", certa: false },
          { texto: "GIRAFA", imagem: "girafa", certa: false }
        ]
      },
      {
        texto: "QUAL FESTA DIVERTIDA ACONTECE EM BRUSQUE?",
        respostas: [
          { texto: "FENARRECO", imagem: "fenarreco", certa: true },
          { texto: "CARNAVAL DO RIO", imagem: "carnaval", certa: false },
          { texto: "FESTA DA UVA", imagem: "festaUva", certa: false }
        ]
      },
      {
        texto: "COMO SE CHAMA QUEM NASCE EM BRUSQUE?",
        respostas: [
          { texto: "BRUSQUENSE", imagem: "brusquense", certa: true },
          { texto: "PARANAENSE", imagem: "paranaense", certa: false },
          { texto: "MINEIRO", imagem: "mineiro", certa: false }
        ]
      },
      {
        texto: "QUAL COMIDA FEITA COM PATO É FAMOSA NA FENARRECO?",
        respostas: [
          { texto: "MARRECO", imagem: "marreco", certa: true },
          { texto: "PIZZA", imagem: "pizza", certa: false },
          { texto: "HAMBURGUER", imagem: "hamburguer", certa: false }
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
          { texto: "ROUPAS", imagem: "roupas", certa: true },
          { texto: "AVIÕES", imagem: "aviao", certa: false },
          { texto: "CARROS", imagem: "carro", certa: false }
        ]
      },
      {
        texto: "QUAL DOCE RECHEADO É POPULAR EM BRUSQUE?",
        respostas: [
          { texto: "CUCA", imagem: "cuca", certa: true },
          { texto: "PIRULITO", imagem: "pirulito", certa: false },
          { texto: "PIZZA", imagem: "pizza", certa: false }
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
          { texto: "BRUSQUE", imagem: "brusque_fc", certa: true },
          { texto: "FORTALEZA", imagem: "fortaleza", certa: false },
          { texto: "ATLÉTICO MINEIRO", imagem: "atletico_mineiro", certa: false }
        ]
      }
    ],
  
    medio: [
      {
        texto: "NA FENARRECO AS PESSOAS COMEM MUITO O QUÊ?",
        respostas: [
          { texto: "MARRECO", imagem: "marreco", certa: true },
          { texto: "BURRITO", imagem: "burrito", certa: false },
          { texto: "AMENDOIM", imagem: "amendoim", certa: false }
        ]
      },
      {
        texto: "BRUSQUE É FAMOSA POR FAZER MUITAS:",
        respostas: [
          { texto: "ROUPAS", imagem: "roupas", certa: true },
          { texto: "AVIÕES", imagem: "aviao", certa: false },
          { texto: "BORRACHAS", imagem: "borracha", certa: false }
        ]
      },
      {
        texto: "NO PARQUE ZOOBOTÂNICO DE BRUSQUE, QUAL ANIMAL ESPERTO E BRINCALHÃO PODEMOS VER PULANDO NAS ÁRVORES?",
        respostas: [
          { texto: "MACACO", imagem: "macaco", certa: true },
          { texto: "LEÃO", imagem: "leao", certa: false },
          { texto: "ELEFANTE", imagem: "elefante", certa: false }
        ]
      },
      {
        texto: "QUAL O DOCE MAIS FAMOSO DA CIDADE?",
        respostas: [
          { texto: "CUCA", imagem: "cuca", certa: true },
          { texto: "PIRULITO", imagem: "pirulito", certa: false },
          { texto: "BOLO", imagem: "bolo", certa: false }
        ]
      },
      {
        texto: "QUEM É O MASCOTE DA NOSSA FESTA?",
        respostas: [
          { texto: "SR. E SRA MARRECOS", imagem: "mascote", certa: true },
          { texto: "CACHORRO", imagem: "cachorro", certa: false },
          { texto: "LEAO", imagem: "leao", certa: false }
        ]
      },
      {
        texto: "BRUSQUE ESTÁ LOCALIZADA EM QUAL ESTADO:",
        respostas: [
          { texto: "SANTA CATARINA", imagem: "bandeiraSc", certa: true },
          { texto: "PARANÁ", imagem: "bandeiraParana", certa: false },
          { texto: "RIO DE JANEIRO", imagem: "bandeiraRiojaneiro", certa: false }
        ]
      },
      {
        texto: "QUAL OBJETO VOADOR FICA PERTO DA CAIXA D'ÁGUA?",
        respostas: [
          { texto: "AVIÃO", imagem: "aviao", certa: true },
          { texto: "PONTE ESTAIADA", imagem: "ponte", certa: false },
          { texto: "ROUPAS", imagem: "roupas", certa: false }
        ]
      },
      {
        texto: "QUAL MAMÍFERO GOSTA DE ÁGUA E PODE SER VISTO NA REGIÃO?",
        respostas: [
          { texto: "CAPIVARA", imagem: "capivara", certa: true },
          { texto: "HIPOPOTAMO", imagem: "hipopotamo", certa: false },
          { texto: "GIRAFA", imagem: "girafa", certa: false }
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
          { texto: "BEIRA-RIO", imagem: "rioItajaimirim", certa: true },
          { texto: "SERRA DO RIO DO RASTRO", imagem: "serra", certa: false },
          { texto: "LAGOA DE IMARUÍ", imagem: "lagoa", certa: false }
        ]
      }
    ],
  
    dificil: [
      {
        texto: "QUAL DESSES PRODUTOS É FAMOSO POR SER FEITA EM BRUSQUE?",
        respostas: [
          { texto: "ROUPA", imagem: "roupas", certa: true },
          { texto: "CARRO", imagem: "carro", certa: false },
          { texto: "BORRACHA", imagem: "borracha", certa: false }
        ]
      },
      {
        texto: "BRUSQUE FOI FUNDADA POR PESSOAS QUE VIERAM DE UM PAÍS MUITO LONGE. DE QUAL PAÍS ELAS VIERAM?",
        respostas: [
          { texto: "ALEMANHÃ", imagem: "alemanha", certa: true },
          { texto: "ITÁLIA", imagem: "italia", certa: false },
          { texto: "ESPANHA", imagem: "espanha", certa: false }
        ]
      },
      {
        texto: "BRUSQUE TEM UMA PONTE MUITO GRANDE E BONITA, QUE PARECE TER UNS CABOS SEGURANDO ELA. COMO SE CHAMA ESSA PONTE?",
        respostas: [
          { texto: "PONTE ESTAIDA", imagem: "ponte", certa: true },
          { texto: "PONTE RIO-NITEROI", imagem: "niteroi", certa: false },
          { texto: "PONTE AYRTON SENNA", imagem: "ayrton_senna", certa: false }
        ]
      },
      {
        texto: "QUAL É A BANDEIRA DA NOSSA CIDADE?",
        respostas: [
          { texto: "", imagem: "bandeiraBrusque", certa: true },
          { texto: "", imagem: "bandeiraRoraima", certa: false },
          { texto: "", imagem: "bandeiraSc", certa: false }
        ]
      },
      {
        texto: "QUAL SETOR ECONÔMICO MARCOU A HISTÓRIA DE BRUSQUE?",
        respostas: [
          { texto: "INDÚSTRIA TÊXTIL", imagem: "textil", certa: true },
          { texto: "AGRICULTURA", imagem: "agricultura", certa: false },
          { texto: "PECUÁRIA", imagem: "pecuraria", certa: false }
        ]
      },
      {
        texto: "QUAL RIO QUE PASSA POR BRUSQUE?",
        respostas: [
          { texto: "RIO ITAJAÍ-MIRIM", imagem: "rioItajaimirim", certa: true },
          { texto: "RIO NILO", imagem: "nilo", certa: false },
          { texto: "LAGOA DO MARUÍ", imagem: "lagoa", certa: false }
        ]
      },
      {
        texto: "QUAL DESSES LUGARES FICA EM BRUSQUE:",
        respostas: [
          { texto: "PREFEITURA", imagem: "prefeitura", certa: true },
          { texto: "CRISTO-REDENTOR", imagem: "redentor", certa: false },
          { texto: "TORRE-EIFFEL", imagem: "eiffel", certa: false }
        ]
      },
      {
        texto: "QUAL FESTA DE BRUSQUE TEM MUITA MÚSICA E COMIDA ALEMÃ?",
        respostas: [
          { texto: "FENARRECO", imagem: "fenarreco", certa: true },
          { texto: "FESTA DA UVA", imagem: "festaUva", certa: false },
          { texto: "CARNAVAL", imagem: "carnaval", certa: false }
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
