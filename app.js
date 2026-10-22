/**
 * GESTÃO DE CONSELHO - RM (Ronnie Malagutti)
 * Versão 7.0: Portal Docente com Cálculos Reais 2026, Grade de 6 Aulas & Destaque HA,
 * Algoritmo de Simultaneidade de HA, Mapeamento Bipolarizado de Atitudes,
 * Matriz BNCC & Cursos Técnicos (ADM, Docência, Agro), Comunicação em Lote com Registro em Ata,
 * Fila de Aprovação, Boletim Escolar Sintético, Cadastro em Lote de Servidores e Atestado com Botão Único.
 */

// ==========================================
// 1. MATRIZES CURRICULARES & PRÁTICAS DOCENTES
// ==========================================
const MATRIZ_CURRICULAR = {
  matematica: {
    nome: "1. Matemática e suas Tecnologias",
    labelArea: "Práticas Específicas de Matemática e suas Tecnologias",
    praticas: [
      "Resolução de desafios do dia a dia e situações-problema",
      "Interpretação de gráficos, tabelas e dados do cotidiano",
      "Treino com questões no estilo ENEM e vestibulares",
      "Uso de softwares de geometria e cálculo (ex: GeoGebra)",
      "Uso de material concreto e jogos de raciocínio",
      "Construção de fórmulas e modelos a partir de problemas reais"
    ],
    dificuldades: [
      "Fragilidade no raciocínio lógico-matemático e operações fundamentais",
      "Dificuldade na interpretação de gráficos e dados estatísticos",
      "Incompreensão de razão, proporção e regra de três no cotidiano",
      "Dificuldade em matemática financeira básica e juros",
      "Dificuldade na geometria plana/espacial e áreas",
      "Dificuldade no cálculo de probabilidade e estimativas"
    ]
  },
  natureza: {
    nome: "2. Ciências da Natureza e suas Tecnologias",
    labelArea: "Práticas Específicas de Ciências da Natureza (Física, Química e Biologia)",
    praticas: [
      "Aulas práticas e experimentos (no laboratório ou na sala)",
      "Uso de simuladores digitais e animações interativas",
      "Análise de notícias sobre meio ambiente, saúde e tecnologia",
      "Estudo de esquemas, ilustrações e modelos científicos",
      "Discussão de problemas ambientais e soluções sustentáveis",
      "Estudo de casos e aplicações da ciência na vida real"
    ],
    dificuldades: [
      "Dificuldade na compreensão de ecologia, genética e fisiologia",
      "Dificuldade em cálculos estequiométricos e reações químicas",
      "Fragilidade no domínio de mecânica clássica e cinemática",
      "Dificuldade na compreensão de energia, óptica e circuitos",
      "Incompreensão das transformações de matéria e energia",
      "Dificuldade na interpretação de experimentos e método científico"
    ]
  },
  linguagens: {
    nome: "3. Linguagens, Códigos e suas Tecnologias",
    labelArea: "Práticas Específicas de Linguagens (Português, Literatura, Inglês, Arte, Ed. Física)",
    praticas: [
      "Oficinas de redação e reescrita de texto no padrão ENEM",
      "Leitura crítica e debate sobre diferentes tipos de texto",
      "Análise de memes, tirinhas, anúncios e charges",
      "Prática de debates, rodas de conversa e apresentações",
      "Estudo de obras literárias e expressões artísticas",
      "Exercícios práticos de interpretação e gramática no contexto"
    ],
    dificuldades: [
      "Dificuldade na interpretação de textos e identificação de gêneros",
      "Fragilidade na coesão, coerência e norma-padrão na redação",
      "Dificuldade na compreensão de figuras de linguagem e ironia",
      "Baixa apropriação e expressão em manifestações artísticas",
      "Barreiras na expressão oral e segurança em apresentações",
      "Dificuldade na leitura e vocabulário de língua estrangeira"
    ]
  },
  humanas: {
    nome: "4. Ciências Humanas e suas Tecnologias",
    labelArea: "Práticas Específicas de Ciências Humanas (História, Geografia, Filosofia, Sociologia)",
    praticas: [
      "Análise de mapas, gráficos e imagens históricas",
      "Debates sobre notícias atuais, política e sociedade",
      "Análise de documentos, cartas e textos históricos",
      "Júri simulado e discussão de dilemas éticos/sociais",
      "Mapeamento de linha do tempo e processos históricos",
      "Estudo de conceitos filosóficos e sociológicos aplicados hoje"
    ],
    dificuldades: [
      "Dificuldade na contextualização histórica e temporal",
      "Dificuldade na leitura de mapas, relevo e espaço geográfico",
      "Fragilidade na análise crítica de notícias e geopolítica",
      "Dificuldade na reflexão sobre ética, cidadania e direitos",
      "Incompreensão de transformações socioeconômicas",
      "Dificuldade na articulação de conceitos sociológicos essenciais"
    ]
  },
  tecadm: {
    nome: "5. Técnico em Administração",
    labelArea: "Práticas Específicas do Técnico em Administração",
    praticas: [
      "Estudos de casos empresariais e simulação de negócios",
      "Elaboração de planos de negócio e análise de mercado",
      "Práticas de rotinas de escritório e departamentos (RH, Finanças)",
      "Simulação de atendimento ao cliente e comunicação corporativa",
      "Uso de planilhas e softwares de gestão integrada",
      "Projetos de marketing e comportamento do consumidor"
    ],
    dificuldades: [
      "Dificuldade no fluxo de caixa e cálculos de custo/precificação",
      "Fragilidade na comunicação formal e redação empresarial",
      "Dificuldade na estruturação de organogramas e processos",
      "Incompreensão de legislação trabalhista e tributária básica",
      "Dificuldade em modelagem de negócios e análise SWOT",
      "Resistência à utilização de planilhas eletrônicas e fórmulas"
    ]
  },
  formdocente: {
    nome: "6. Formação de Docentes",
    labelArea: "Práticas Específicas da Formação de Docentes",
    praticas: [
      "Planejamento de sequências didáticas e planos de aula",
      "Confecção e exploração de materiais pedagógicos lúdicos",
      "Simulação de regência e microaulas com feedback entre pares",
      "Estudos sobre desenvolvimento infantil e teorias da aprendizagem",
      "Análise de práticas de alfabetização e letramento",
      "Práticas de contação de histórias e mediação de leitura"
    ],
    dificuldades: [
      "Dificuldade na articulação entre teoria pedagógica e prática",
      "Insegurança na regência simulada e postura didática",
      "Dificuldade na elaboração de instrumentos de avaliação",
      "Fragilidade no domínio de metodologias de alfabetização",
      "Dificuldade no manejo de conflitos em ambiente escolar",
      "Dificuldade no planejamento de adaptações para inclusão"
    ]
  },
  agronegocio: {
    nome: "7. Técnico em Agronegócio",
    labelArea: "Práticas Específicas do Técnico em Agronegócio",
    praticas: [
      "Análise de cadeias produtivas agropecuárias e logística rural",
      "Estudos sobre gestão de custos de safra e comercialização",
      "Práticas sobre sustentabilidade no campo e conservação",
      "Interpretação de indicadores agroclimáticos e manejo",
      "Simulação de cooperativismo e associativismo rural",
      "Aplicação de tecnologias e agricultura de precisão"
    ],
    dificuldades: [
      "Dificuldade na contabilidade rural e ponto de equilíbrio",
      "Fragilidade na compreensão de contratos futuros e commodities",
      "Dificuldade na leitura de laudos de solo e receituários",
      "Incompreensão de normas fitossanitárias e certificações",
      "Dificuldade no planejamento logístico de escoamento de safra",
      "Resistência à adoção de tecnologias de gestão agrícola"
    ]
  }
};

const PRATICAS_GERAIS_INTERDISCIPLINARES = [
  "Gamificação e quizzes rápidos (ex: Kahoot, Mentimeter)",
  "Trabalho em grupo / Aprendizagem entre pares",
  "Construção de mapas mentais e resumos visuais",
  "Atendimento e tira-dúvidas individualizado",
  "Reexplicação de conteúdos com base em erros comuns"
];

// Grade horária real de Cafelândia (Turnos Manhã e Tarde de 6 aulas)
const GRADE_HORARIOS_INFO = {
  manha: [
    { aula: "1", horario: "07:10 - 08:00" },
    { aula: "2", horario: "08:00 - 08:50" },
    { aula: "3", horario: "08:50 - 09:40" },
    { aula: "int", horario: "09:40 - 09:55 (Intervalo)" },
    { aula: "4", horario: "09:55 - 10:45" },
    { aula: "5", horario: "10:45 - 11:35" },
    { aula: "6", horario: "11:35 - 12:25" }
  ],
  tarde: [
    { aula: "1", horario: "13:10 - 14:00" },
    { aula: "2", horario: "14:00 - 14:50" },
    { aula: "3", horario: "14:50 - 15:40" },
    { aula: "int", horario: "15:40 - 15:55 (Intervalo)" },
    { aula: "4", horario: "15:55 - 16:45" },
    { aula: "5", horario: "16:45 - 17:35" },
    { aula: "6", horario: "17:35 - 18:25" }
  ]
};

// Calendário Oficial 2026 - SEED-PR / Cafelândia (200 Dias Letivos)
const CALENDARIO_2026_INFO = {
  trimestres: [
    { id: 1, nome: "1º Trimestre", inicio: "2026-02-05", fim: "2026-05-14", diasLetivos: 63, conselho: "2026-05-23" },
    { id: 2, nome: "2º Trimestre", inicio: "2026-05-18", fim: "2026-09-04", diasLetivos: 68, conselho: "2026-09-19" },
    { id: 3, nome: "3º Trimestre", inicio: "2026-09-08", fim: "2026-12-18", diasLetivos: 69, conselho: "2026-12-15" }
  ],
  feriadosMunicipais: [
    { data: "2026-06-20", nome: "Padroeira de Cafelândia (Nossa Senhora Consolata)" },
    { data: "2026-11-25", nome: "Emancipação Política de Cafelândia" }
  ],
  eventosAgendados: [
    { id: "ev-01", data: "2026-05-23", titulo: "Devolutiva do 1º Conselho de Classe", alvo: "Famílias e Estudantes", statusAprovacao: "aprovado" },
    { id: "ev-02", data: "2026-06-20", titulo: "Feriado Municipal: Padroeira de Cafelândia", alvo: "Toda a Comunidade Escolar", statusAprovacao: "aprovado" },
    { id: "ev-03", data: "2026-07-13", titulo: "Início do Recesso Escolar de Julho", alvo: "Estudantes e Famílias", statusAprovacao: "aprovado" },
    { id: "ev-04", data: "2026-09-19", titulo: "Reunião de Pais e Devolutiva do 2º Conselho", alvo: "Famílias de Todas as Turmas", statusAprovacao: "pendente" },
    { id: "ev-05", data: "2026-10-15", titulo: "Dia do Professor e Recesso Escolar", alvo: "Professores e Comunidade", statusAprovacao: "pendente" },
    { id: "ev-06", data: "2026-11-25", titulo: "Feriado Municipal: Emancipação de Cafelândia", alvo: "Toda a Escola", statusAprovacao: "pendente" }
  ]
};

// ==========================================
// 2. ESTADO GLOBAL DA APLICAÇÃO (APPSTATE)
// ==========================================
let appState = {
  estudantes: [],
  professores: [
    { nome: "Ronnie Malagutti", disciplina: "Matemática", email: "ronnie.malagutti@escola.pr.gov.br", telefone: "45991516382", funcao: "professor", rg: "8.123.456-7", cpf: "012.345.678-90", nascimento: "1982-05-14", endereco: "Cafelândia - PR" },
    { nome: "Profª Ana Paula", disciplina: "Língua Portuguesa", email: "ana.paula@escola.pr.gov.br", telefone: "45992223344", funcao: "professor", rg: "9.234.567-8", cpf: "123.456.789-01", nascimento: "1985-08-20", endereco: "Cafelândia - PR" },
    { nome: "Prof. Carlos Eduardo", disciplina: "Ciências / Biologia", email: "carlos.eduardo@escola.pr.gov.br", telefone: "45993334455", funcao: "professor", rg: "7.345.678-9", cpf: "234.567.890-12", nascimento: "1980-11-03", endereco: "Cafelândia - PR" },
    { nome: "Profª Juliana Rocha", disciplina: "História", email: "juliana.rocha@escola.pr.gov.br", telefone: "45994445566", funcao: "professor", rg: "6.456.789-0", cpf: "345.678.901-23", nascimento: "1988-02-17", endereco: "Cafelândia - PR" },
    { nome: "Equipe Pedagógica (Maria Lucilene / Nely)", disciplina: "Coordenação", email: "pedagogia.santosdumont@escola.pr.gov.br", telefone: "45991516382", funcao: "pedagogo", rg: "5.567.890-1", cpf: "456.789.012-34", nascimento: "1978-04-10", endereco: "Cafelândia - PR" },
    { nome: "Direção Escolar", disciplina: "Gestão Geral", email: "direcao.santosdumont@escola.pr.gov.br", telefone: "45991516382", funcao: "direcao", rg: "4.678.901-2", cpf: "567.890.123-45", nascimento: "1975-09-25", endereco: "Cafelândia - PR" }
  ],
  usuarioAtual: {
    email: "direcao.santosdumont@escola.pr.gov.br",
    perfil: "direcao",
    nome: "Direção Escolar"
  },
  moduloAtivo: "relatorio-pdf",
  subAbasAtivas: {
    professores: "prazos",
    pedagogia: "alunos",
    direcao: "rendimento"
  },
  prazosRco: {
    avaliacoes: "2026-10-16",
    recuperacao: "2026-10-23",
    fechamento: "2026-10-30",
    conselho: "2026-09-19"
  },
  atestadosDocentes: [
    {
      id: "at-doc-01",
      professor: "Ronnie Malagutti",
      disciplina: "Matemática",
      dataInicio: "2026-10-14",
      dataFim: "2026-10-16",
      motivo: "Tratamento de saúde / Repouso médico",
      classroom: "Lista de exercícios sobre geometria espacial deixada no Google Classroom para o 1º FD e 9º A.",
      turmasAfetadas: [
        { turma: "1º - FD", aulas: "3ª e 4ª aula (Quarta-feira)" },
        { turma: "9º Ano A", aulas: "1ª e 2ª aula (Quinta-feira)" },
        { turma: "1º - FD", aulas: "5ª e 6ª aula (Sexta-feira)" }
      ]
    }
  ],
  atestadosAlunos: [
    {
      id: "at-aluno-01",
      alunoId: "est-001",
      nomeAluno: "Amanda Oliveira Rengel",
      turma: "1º - FD",
      dataInicio: "2026-10-08",
      dataFim: "2026-10-14",
      motivo: "CID J06 - Faringoamigdalite aguda / Repouso",
      arquivoNome: "atestado_amanda_outubro.pdf",
      arquivoData: null
    }
  ],
  horariosEscolares: [
    { id: "h-01", turma: "1º - FD", diaSemana: "segunda", aula: "1", professor: "Profª Ana Paula", disciplina: "Língua Portuguesa", isHa: false },
    { id: "h-02", turma: "1º - FD", diaSemana: "segunda", aula: "2", professor: "Profª Ana Paula", disciplina: "Língua Portuguesa", isHa: false },
    { id: "h-03", turma: "1º - FD", diaSemana: "segunda", aula: "3", professor: "Ronnie Malagutti", disciplina: "Matemática", isHa: false },
    { id: "h-04", turma: "1º - FD", diaSemana: "segunda", aula: "4", professor: "Ronnie Malagutti", disciplina: "Matemática", isHa: false },
    { id: "h-05", turma: "1º - FD", diaSemana: "segunda", aula: "5", professor: "Prof. Carlos Eduardo", disciplina: "Ciências / Biologia", isHa: false },
    { id: "h-06", turma: "1º - FD", diaSemana: "segunda", aula: "6", professor: "Prof. Carlos Eduardo", disciplina: "Ciências / Biologia", isHa: false },

    { id: "h-07", turma: "1º - FD", diaSemana: "terca", aula: "1", professor: "Profª Juliana Rocha", disciplina: "História", isHa: false },
    { id: "h-08", turma: "1º - FD", diaSemana: "terca", aula: "2", professor: "Profª Juliana Rocha", disciplina: "História", isHa: false },
    { id: "h-09", turma: "1º - FD", diaSemana: "terca", aula: "3", professor: "Ronnie Malagutti", disciplina: "Matemática (HA)", isHa: true },
    { id: "h-10", turma: "1º - FD", diaSemana: "terca", aula: "4", professor: "Ronnie Malagutti", disciplina: "Matemática (HA)", isHa: true },
    { id: "h-11", turma: "1º - FD", diaSemana: "terca", aula: "5", professor: "Profª Ana Paula", disciplina: "Língua Portuguesa (HA)", isHa: true },
    { id: "h-12", turma: "1º - FD", diaSemana: "terca", aula: "6", professor: "Profª Ana Paula", disciplina: "Língua Portuguesa", isHa: false },

    { id: "h-13", turma: "1º - FD", diaSemana: "quarta", aula: "1", professor: "Prof. Carlos Eduardo", disciplina: "Ciências / Biologia", isHa: false },
    { id: "h-14", turma: "1º - FD", diaSemana: "quarta", aula: "2", professor: "Prof. Carlos Eduardo", disciplina: "Ciências / Biologia", isHa: false },
    { id: "h-15", turma: "1º - FD", diaSemana: "quarta", aula: "3", professor: "Ronnie Malagutti", disciplina: "Matemática", isHa: false },
    { id: "h-16", turma: "1º - FD", diaSemana: "quarta", aula: "4", professor: "Ronnie Malagutti", disciplina: "Matemática", isHa: false },
    { id: "h-17", turma: "1º - FD", diaSemana: "quarta", aula: "5", professor: "Profª Juliana Rocha", disciplina: "História", isHa: false },
    { id: "h-18", turma: "1º - FD", diaSemana: "quarta", aula: "6", professor: "Profª Juliana Rocha", disciplina: "História (HA)", isHa: true },

    { id: "h-19", turma: "1º - FD", diaSemana: "quinta", aula: "1", professor: "Ronnie Malagutti", disciplina: "Matemática (HA)", isHa: true },
    { id: "h-20", turma: "1º - FD", diaSemana: "quinta", aula: "2", professor: "Profª Ana Paula", disciplina: "Língua Portuguesa (HA)", isHa: true },
    { id: "h-21", turma: "1º - FD", diaSemana: "quinta", aula: "3", professor: "Prof. Carlos Eduardo", disciplina: "Ciências / Biologia (HA)", isHa: true },
    { id: "h-22", turma: "1º - FD", diaSemana: "quinta", aula: "4", professor: "Prof. Carlos Eduardo", disciplina: "Ciências / Biologia", isHa: false },
    { id: "h-23", turma: "1º - FD", diaSemana: "quinta", aula: "5", professor: "Profª Juliana Rocha", disciplina: "História", isHa: false },
    { id: "h-24", turma: "1º - FD", diaSemana: "quinta", aula: "6", professor: "Profª Juliana Rocha", disciplina: "História", isHa: false },

    { id: "h-25", turma: "1º - FD", diaSemana: "sexta", aula: "1", professor: "Profª Juliana Rocha", disciplina: "História", isHa: false },
    { id: "h-26", turma: "1º - FD", diaSemana: "sexta", aula: "2", professor: "Profª Ana Paula", disciplina: "Língua Portuguesa", isHa: false },
    { id: "h-27", turma: "1º - FD", diaSemana: "sexta", aula: "3", professor: "Prof. Carlos Eduardo", disciplina: "Ciências / Biologia", isHa: false },
    { id: "h-28", turma: "1º - FD", diaSemana: "sexta", aula: "4", professor: "Ronnie Malagutti", disciplina: "Matemática", isHa: false },
    { id: "h-29", turma: "1º - FD", diaSemana: "sexta", aula: "5", professor: "Ronnie Malagutti", disciplina: "Matemática", isHa: false },
    { id: "h-30", turma: "1º - FD", diaSemana: "sexta", aula: "6", professor: "Ronnie Malagutti", disciplina: "Matemática (HA)", isHa: true }
  ],
  comunicadosDisparados: [
    {
      id: "com-01",
      dataHora: "2026-10-12 14:30",
      autor: "Prof. Ronnie Malagutti (Matemática)",
      turma: "1º - FD",
      titulo: "Atividades Complementares e Recuperação Paralela no Classroom",
      publico: "Todos os Estudantes",
      registradoEmAta: true
    },
    {
      id: "com-02",
      dataHora: "2026-10-10 09:15",
      autor: "Equipe Pedagógica",
      turma: "1º - FD",
      titulo: "Convocação para Reunião de Acompanhamento Individualizado",
      publico: "Famílias Selecionadas",
      registradoEmAta: true
    }
  ],
  config: {
    escola: "Colégio Estadual Cívico-Militar",
    municipio: "Paraná - SEED",
    anoLetivo: 2026,
    periodo: "2º Trimestre",
    diretor: "Direção Escolar",
    pedagogo: "Coordenação Pedagógica",
    professorLogado: "Ronnie Malagutti",
    whatsappOficial: "5545991516382"
  },
  preConselho: {
    turma: "1º - FD",
    disciplina: "Matemática",
    areaConhecimento: "matematica",
    professor: "Ronnie Malagutti",
    praticasAreaSelecionadas: [
      "Resolução de desafios do dia a dia e situações-problema",
      "Interpretação de gráficos, tabelas e dados do cotidiano"
    ],
    praticasGeraisSelecionadas: [
      "Trabalho em grupo / Aprendizagem entre pares",
      "Atendimento e tira-dúvidas individualizado"
    ],
    dificuldadesSelecionadas: [
      "Fragilidade no raciocínio lógico-matemático e operações fundamentais",
      "Dificuldade na interpretação de gráficos e dados estatísticos"
    ],
    especificoDisciplina: "Reconhecimento e planificação de figuras sólidas; dedução de fórmulas espaciais."
  },
  alunoEmEdicaoId: null,
  exibirSuplementoNaAta: false,
  modoExibicao: "nichos",
  tamanhoFonteAtual: 15,
  loopAvisos: [],
  indiceAvisoAtual: 0,
  timerLoop: null,
  alunoBoletimSelecionadoId: "est-001"
};

// ==========================================
// 3. INICIALIZAÇÃO DA APLICAÇÃO
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  try {
    carregarDadosLocais();
    aplicarPerfilAtivoUI();
    renderizarAlunos();
    atualizarAreaConhecimentoPorDisciplina();
    carregarPreConselhoTurma();
    renderizarChipsPorAreaConhecimento();
    renderizarGradeHorarios();
    renderizarAtestadosDocentes();
    renderizarAtestadosAlunos();
    renderizarInclusaoPdi();
    renderizarCertificados();
    renderizarRendimentoEstratificadoDirecao();
    renderizarTabelaCargosDirecao();
    renderizarTabelaServidoresCadastrados();
    renderizarFilaAprovacaoMensagens();
    renderizarListaEventosCalendario();
    renderizarListaBoletins();
    executarAlgoritmoSimultaneidadeHA();
    calcularSaldoAulasDocente();
    carregarEstudantesParaComunicado();
    carregarPrazosRco();
    gerarVisualizacaoAta();
    verificarReguaPrazosRco();
    iniciarMuralLoopAvisos();

    // Inicia no Módulo padrão (Relatórios RCO)
    solicitarAcessoModulo(appState.moduloAtivo || "relatorio-pdf", true);
    lucide.createIcons();
  } catch (err) {
    console.error("Erro na inicialização:", err);
  }
});

// ==========================================
// 4. PERSISTÊNCIA EM LOCALSTORAGE (VERSÃO 7.0)
// ==========================================
function carregarDadosLocais() {
  const dadosSalvos = localStorage.getItem("conselho_rm_estudantes_v7");
  const profsSalvos = localStorage.getItem("conselho_rm_professores_v7");
  const horSalvos = localStorage.getItem("conselho_rm_horarios_v7");
  const atDocSalvos = localStorage.getItem("conselho_rm_atestados_docentes_v7");
  const atAlunSalvos = localStorage.getItem("conselho_rm_atestados_alunos_v7");
  const comSalvos = localStorage.getItem("conselho_rm_comunicados_v7");
  const configSalva = localStorage.getItem("conselho_rm_config_v7");
  const usuarioSalvo = localStorage.getItem("conselho_rm_usuario_v7");
  const fonteSalva = localStorage.getItem("conselho_rm_fonte_v7");

  if (fonteSalva) {
    appState.tamanhoFonteAtual = parseInt(fonteSalva, 10);
    document.documentElement.style.setProperty("--app-font-size", `${appState.tamanhoFonteAtual}px`);
  }
  if (usuarioSalvo) {
    try { appState.usuarioAtual = { ...appState.usuarioAtual, ...JSON.parse(usuarioSalvo) }; } catch (e) { console.error(e); }
  }
  if (configSalva) {
    try { appState.config = { ...appState.config, ...JSON.parse(configSalva) }; } catch (e) { console.error(e); }
  }
  if (profsSalvos) {
    try { appState.professores = JSON.parse(profsSalvos); } catch (e) { console.error(e); }
  }
  if (horSalvos) {
    try { appState.horariosEscolares = JSON.parse(horSalvos); } catch (e) { console.error(e); }
  }
  if (atDocSalvos) {
    try { appState.atestadosDocentes = JSON.parse(atDocSalvos); } catch (e) { console.error(e); }
  }
  if (atAlunSalvos) {
    try { appState.atestadosAlunos = JSON.parse(atAlunSalvos); } catch (e) { console.error(e); }
  }
  if (comSalvos) {
    try { appState.comunicadosDisparados = JSON.parse(comSalvos); } catch (e) { console.error(e); }
  }
  if (dadosSalvos) {
    try { appState.estudantes = JSON.parse(dadosSalvos); } catch (e) { console.error(e); }
  }

  if (!appState.estudantes || appState.estudantes.length === 0) {
    carregarExemploSantosDumont(false);
  }
}

function salvarDadosLocais() {
  localStorage.setItem("conselho_rm_estudantes_v7", JSON.stringify(appState.estudantes));
  localStorage.setItem("conselho_rm_professores_v7", JSON.stringify(appState.professores));
  localStorage.setItem("conselho_rm_horarios_v7", JSON.stringify(appState.horariosEscolares));
  localStorage.setItem("conselho_rm_atestados_docentes_v7", JSON.stringify(appState.atestadosDocentes));
  localStorage.setItem("conselho_rm_atestados_alunos_v7", JSON.stringify(appState.atestadosAlunos));
  localStorage.setItem("conselho_rm_comunicados_v7", JSON.stringify(appState.comunicadosDisparados));
  localStorage.setItem("conselho_rm_config_v7", JSON.stringify(appState.config));
  localStorage.setItem("conselho_rm_usuario_v7", JSON.stringify(appState.usuarioAtual));
  localStorage.setItem("conselho_rm_fonte_v7", appState.tamanhoFonteAtual.toString());
}

// ==========================================
// 5. ACESSIBILIDADE & MENSAGENS TOAST
// ==========================================
function ajustarTamanhoFonte(delta) {
  let novoTamanho = appState.tamanhoFonteAtual + delta;
  if (novoTamanho < 13) novoTamanho = 13;
  if (novoTamanho > 22) novoTamanho = 22;
  appState.tamanhoFonteAtual = novoTamanho;
  document.documentElement.style.setProperty("--app-font-size", `${novoTamanho}px`);
  salvarDadosLocais();
  mostrarAvisoSucesso(`Fonte ajustada para ${novoTamanho}px`);
}

function mostrarAvisoSucesso(texto) {
  const toast = document.getElementById("toast-aviso");
  const msg = document.getElementById("toast-mensagem");
  if (!toast || !msg) return;
  msg.innerText = texto;
  toast.classList.remove("hidden");
  setTimeout(() => { toast.classList.add("hidden"); }, 3500);
}

// ==========================================
// 6. MENU SANFONA / ACORDEÃO LATERAL & NAVEGAÇÃO
// ==========================================
function solicitarAcessoModulo(moduloId, silencioso = false) {
  const perfil = appState.usuarioAtual.perfil;
  const isDirecao = (perfil === "direcao");
  const isGestao = (perfil === "pedagogo" || perfil === "direcao");

  // Regra Master: Direção tem acesso a tudo
  if (!isDirecao) {
    if (moduloId === "professores" && perfil !== "professor") {
      if (!silencioso) abrirModalAuthModulo("professores");
      return;
    }
    if (moduloId === "pedagogia" && perfil !== "pedagogo") {
      if (!silencioso) abrirModalAuthModulo("pedagogia");
      return;
    }
    if (moduloId === "direcao" && perfil !== "direcao") {
      if (!silencioso) abrirModalAuthModulo("direcao");
      return;
    }
    if (moduloId === "configuracao" && !isGestao) {
      if (!silencioso) abrirModalAuthModulo("configuracao");
      return;
    }
  }

  // Ocultar todas as views principais
  const modulos = ["relatorio-pdf", "professores", "pedagogia", "direcao", "configuracao"];
  modulos.forEach(m => {
    const el = document.getElementById(`view-${m}`);
    if (el) el.classList.add("hidden");

    const submenu = document.getElementById(`submenu-${m}`);
    const arrow = document.getElementById(`arrow-${m}`);
    if (submenu && m !== moduloId) submenu.classList.add("hidden");
    if (arrow && m !== moduloId) arrow.classList.remove("rotate-180");
  });

  // Ativar view solicitada
  const viewAtiva = document.getElementById(`view-${moduloId}`);
  if (viewAtiva) viewAtiva.classList.remove("hidden");
  appState.moduloAtivo = moduloId;

  // Abrir o acordeão do módulo selecionado
  const submenuAtivo = document.getElementById(`submenu-${moduloId}`);
  const arrowAtiva = document.getElementById(`arrow-${moduloId}`);
  if (submenuAtivo) {
    submenuAtivo.classList.remove("hidden");
    if (arrowAtiva) arrowAtiva.classList.add("rotate-180");
  }

  // Aplica cor dinâmica na topbar
  aplicarCorTopbar(moduloId);

  // Seleciona e ativa a sub-aba corrente do módulo
  if (moduloId === "professores") {
    mudarSubAbaProfessor(appState.subAbasAtivas.professores || "prazos");
  } else if (moduloId === "pedagogia") {
    mudarSubAbaPedagogia(appState.subAbasAtivas.pedagogia || "alunos");
  } else if (moduloId === "direcao") {
    mudarSubAbaDirecao(appState.subAbasAtivas.direcao || "rendimento");
  }

  lucide.createIcons();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function aplicarCorTopbar(moduloId) {
  const topbar = document.getElementById("topbar-principal");
  const badgeTop = document.getElementById("topbar-modulo-badge");
  const tituloTop = document.getElementById("topbar-modulo-titulo");

  if (!topbar || !badgeTop || !tituloTop) return;

  topbar.className = "px-4 py-3 shadow-md no-print sticky top-0 z-30 flex items-center justify-between gap-4 transition-all duration-300 text-white border-b-4";

  if (moduloId === "relatorio-pdf") {
    topbar.classList.add("bg-gradient-to-r", "from-slate-950", "via-blue-950", "to-teal-950", "border-cyan-400");
    badgeTop.innerText = "BASE PRINCIPAL";
    badgeTop.className = "text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/30";
    tituloTop.innerText = "Relatórios RCO (PDF) • Leitor & Base de Dados";
  } else if (moduloId === "professores") {
    topbar.classList.add("bg-gradient-to-r", "from-blue-950", "via-slate-900", "to-blue-900", "border-blue-500");
    badgeTop.innerText = "PORTAL DOCENTE";
    badgeTop.className = "text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30";
    tituloTop.innerText = `Portal do Professor • ${appState.usuarioAtual.nome}`;
  } else if (moduloId === "pedagogia") {
    topbar.classList.add("bg-gradient-to-r", "from-slate-900", "via-emerald-950", "to-slate-900", "border-emerald-500");
    badgeTop.innerText = "PAINEL PEDAGÓGICO";
    badgeTop.className = "text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30";
    tituloTop.innerText = "Equipe Pedagógica • Gestão de Alunos, Atestados, HA & Horários";
  } else if (moduloId === "direcao") {
    topbar.classList.add("bg-gradient-to-r", "from-purple-950", "via-slate-900", "to-indigo-950", "border-purple-500");
    badgeTop.innerText = "DIREÇÃO GERAL (MASTER)";
    badgeTop.className = "text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-400/30";
    tituloTop.innerText = "Direção Escolar • Rendimento, Governança, Envio Coletivo & Atas";
  } else if (moduloId === "configuracao") {
    topbar.classList.add("bg-gradient-to-r", "from-slate-900", "via-slate-950", "to-slate-900", "border-slate-500");
    badgeTop.innerText = "SISTEMA";
    badgeTop.className = "text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-slate-700 text-slate-300 border border-slate-600";
    tituloTop.innerText = "Configurações & Parâmetros Institucionais";
  }
}

// 6.1 Sub-abas do Portal do Professor
function mudarSubAbaProfessor(subAba) {
  appState.subAbasAtivas.professores = subAba;
  const lista = ["prazos", "pre-conselho", "atestado", "telefone", "comunicado"];
  lista.forEach(s => {
    const sec = document.getElementById(`subsecao-prof-${s}`);
    const btn = document.getElementById(`subtab-prof-${s}`);
    if (sec) sec.classList.add("hidden");
    if (btn) btn.className = "w-full text-left px-3 py-1.5 rounded-xl font-bold text-slate-300 hover:text-white hover:bg-slate-800/70 transition flex items-center gap-2";
  });

  const secAtiva = document.getElementById(`subsecao-prof-${subAba}`);
  const btnAtivo = document.getElementById(`subtab-prof-${subAba}`);
  if (secAtiva) secAtiva.classList.remove("hidden");
  if (btnAtivo) btnAtivo.className = "w-full text-left px-3 py-1.5 rounded-xl font-black bg-blue-700 text-white shadow-md transition flex items-center gap-2";

  if (subAba === "prazos") calcularSaldoAulasDocente();
  if (subAba === "pre-conselho") carregarPreConselhoTurma();
  if (subAba === "comunicado") carregarEstudantesParaComunicado();
  lucide.createIcons();
}

// 6.2 Sub-abas da Equipe Pedagógica
function mudarSubAbaPedagogia(subAba) {
  appState.subAbasAtivas.pedagogia = subAba;
  const lista = ["alunos", "boletim", "atestados-alunos", "comunicacao-lote", "inclusao", "ha-atendimento", "horario", "calendario", "vagas"];
  lista.forEach(s => {
    const sec = document.getElementById(`subsecao-ped-${s}`);
    const btn = document.getElementById(`subtab-ped-${s}`);
    if (sec) sec.classList.add("hidden");
    if (btn) btn.className = "w-full text-left px-3 py-1.5 rounded-xl font-bold text-slate-300 hover:text-white hover:bg-slate-800/70 transition flex items-center gap-2";
  });

  const secAtiva = document.getElementById(`subsecao-ped-${subAba}`);
  const btnAtivo = document.getElementById(`subtab-ped-${subAba}`);
  if (secAtiva) secAtiva.classList.remove("hidden");
  if (btnAtivo) btnAtivo.className = "w-full text-left px-3 py-1.5 rounded-xl font-black bg-emerald-700 text-white shadow-md transition flex items-center gap-2";

  if (subAba === "alunos") renderizarAlunos();
  if (subAba === "boletim") renderizarListaBoletins();
  if (subAba === "atestados-alunos") renderizarAtestadosAlunos();
  if (subAba === "inclusao") renderizarInclusaoPdi();
  if (subAba === "ha-atendimento") executarAlgoritmoSimultaneidadeHA();
  if (subAba === "horario") renderizarGradeHorarios();
  if (subAba === "calendario") renderizarListaEventosCalendario();
  if (subAba === "vagas") renderizarAtestadosDocentes();
  lucide.createIcons();
}

// 6.3 Sub-abas da Direção Escolar
function mudarSubAbaDirecao(subAba) {
  appState.subAbasAtivas.direcao = subAba;
  const lista = ["rendimento", "envio-coletivo", "fila-aprovacao", "cargos", "professores-lote", "horario-geral", "horario-gestao", "ata", "certificados", "comunicacao"];
  lista.forEach(s => {
    const sec = document.getElementById(`subsecao-dir-${s}`);
    const btn = document.getElementById(`subtab-dir-${s}`);
    if (sec) sec.classList.add("hidden");
    if (btn) btn.className = "w-full text-left px-3 py-1.5 rounded-xl font-bold text-slate-300 hover:text-white hover:bg-slate-800/70 transition flex items-center gap-2";
  });

  const secAtiva = document.getElementById(`subsecao-dir-${subAba}`);
  const btnAtivo = document.getElementById(`subtab-dir-${subAba}`);
  if (secAtiva) secAtiva.classList.remove("hidden");
  if (btnAtivo) btnAtivo.className = "w-full text-left px-3 py-1.5 rounded-xl font-black bg-purple-800 text-white shadow-md transition flex items-center gap-2";

  if (subAba === "rendimento") renderizarRendimentoEstratificadoDirecao();
  if (subAba === "fila-aprovacao") renderizarFilaAprovacaoMensagens();
  if (subAba === "cargos") renderizarTabelaCargosDirecao();
  if (subAba === "professores-lote") renderizarTabelaServidoresCadastrados();
  if (subAba === "horario-geral") renderizarRelatorioHasDoisTurnos();
  if (subAba === "horario-gestao") renderizarHorariosGestao();
  if (subAba === "ata") gerarVisualizacaoAta();
  if (subAba === "certificados") renderizarCertificados();
  lucide.createIcons();
}

function toggleSidebarMobile() {
  const sidebar = document.getElementById("sidebar-principal");
  if (sidebar) sidebar.classList.toggle("hidden");
}

// ==========================================
// 7. CÁLCULOS DO CALENDÁRIO 2026 NO PORTAL DOCENTE
// ==========================================
function calcularSaldoAulasDocente() {
  const selectDisc = document.getElementById("prof-simula-disc");
  const elDiasRest = document.getElementById("prof-stat-dias-restantes");
  const elAulasRest = document.getElementById("prof-stat-aulas-restantes");
  const elPrazoFech = document.getElementById("prof-ver-prazo-fechamento");
  const elPrazoAv = document.getElementById("prof-ver-prazo-avaliacoes");
  const elPrazoRec = document.getElementById("prof-ver-prazo-recup");
  const elPrazoCons = document.getElementById("prof-ver-prazo-conselho");

  // Considerando 2º Trimestre Oficial: 18/05/2026 a 04/09/2026 (68 d.l.)
  const hoje = new Date();
  const dataFimTrimestre = new Date("2026-09-04T00:00:00");
  const diffDias = Math.max(12, Math.ceil((dataFimTrimestre - hoje) / (1000 * 60 * 60 * 24)));

  let aulasPorSemana = 4;
  const disc = selectDisc ? selectDisc.value : "Matemática";
  if (disc.includes("Ciências") || disc.includes("História") || disc.includes("Geografia")) {
    aulasPorSemana = 2;
  }

  // Feriados descontados (20/06 Padroeira + Corpus Christi 04/06 + Recesso Julho)
  const semanasRestantes = Math.ceil(diffDias / 7);
  const saldoAulas = Math.max(8, (semanasRestantes * aulasPorSemana) - 2);

  if (elDiasRest) elDiasRest.innerText = `${diffDias} dias`;
  if (elAulasRest) elAulasRest.innerText = `${saldoAulas} aulas`;
  if (elPrazoFech) elPrazoFech.innerText = "04/09/2026";
  if (elPrazoAv) elPrazoAv.innerText = "21/08/2026";
  if (elPrazoRec) elPrazoRec.innerText = "28/08/2026";
  if (elPrazoCons) elPrazoCons.innerText = "19/09/2026";
}

// ==========================================
// 8. PRÉ-CONSELHO DOCENTE: BNCC & MAPEAMENTO BIPOLARIZADO
// ==========================================
function atualizarAreaConhecimentoPorDisciplina() {
  const discSelect = document.getElementById("pc-disciplina-select");
  const areaSelect = document.getElementById("pc-area-conhecimento");
  if (!discSelect || !areaSelect) return;

  const d = discSelect.value.toLowerCase();
  if (d.includes("matemática")) areaSelect.value = "matematica";
  else if (d.includes("ciências") || d.includes("física") || d.includes("química") || d.includes("biologia")) areaSelect.value = "natureza";
  else if (d.includes("portuguesa") || d.includes("redação") || d.includes("inglês") || d.includes("arte") || d.includes("física")) areaSelect.value = "linguagens";
  else if (d.includes("história") || d.includes("geografia") || d.includes("filosofia") || d.includes("sociologia")) areaSelect.value = "humanas";
  else if (d.includes("marketing") || d.includes("adm")) areaSelect.value = "tecadm";
  else if (d.includes("formação") || d.includes("docente")) areaSelect.value = "formdocente";

  renderizarChipsPorAreaConhecimento();
}

function renderizarChipsPorAreaConhecimento() {
  const areaSelect = document.getElementById("pc-area-conhecimento");
  const chipsArea = document.getElementById("chips-praticas-area");
  const chipsGerais = document.getElementById("chips-praticas-gerais");
  const chipsNaoAprendeu = document.getElementById("chips-o-que-aluno-nao-aprendeu");
  const labelAreaEsp = document.getElementById("label-area-especifica");
  const labelAreaDif = document.getElementById("label-area-dificuldades");

  if (!areaSelect || !chipsArea || !chipsNaoAprendeu) return;

  const areaChave = areaSelect.value || "matematica";
  const dadosArea = MATRIZ_CURRICULAR[areaChave] || MATRIZ_CURRICULAR.matematica;

  if (labelAreaEsp) labelAreaEsp.innerText = dadosArea.labelArea;
  if (labelAreaDif) labelAreaDif.innerText = dadosArea.nome;

  // 1. Práticas Específicas da Área
  chipsArea.innerHTML = dadosArea.praticas.map((p, idx) => {
    const ativo = appState.preConselho.praticasAreaSelecionadas.includes(p) || idx < 2;
    return `
      <button type="button" onclick="toggleChipPratica(this, 'area', '${p}')" class="chip-btn px-3 py-1.5 rounded-xl border text-xs font-bold transition text-left ${ativo ? 'bg-blue-50 text-blue-900 border-blue-400 font-black shadow-sm active-chip' : 'bg-slate-50 text-slate-600 border-slate-200'}">
        ${ativo ? '✓ ' : ''}${p}
      </button>
    `;
  }).join("");

  // 2. Práticas Gerais e Interdisciplinares
  if (chipsGerais) {
    chipsGerais.innerHTML = PRATICAS_GERAIS_INTERDISCIPLINARES.map((g, idx) => {
      const ativo = appState.preConselho.praticasGeraisSelecionadas.includes(g) || idx < 2;
      return `
        <button type="button" onclick="toggleChipPratica(this, 'geral', '${g}')" class="chip-btn px-3 py-1.5 rounded-xl border text-xs font-bold transition text-left ${ativo ? 'bg-purple-50 text-purple-900 border-purple-400 font-black shadow-sm active-chip' : 'bg-slate-50 text-slate-600 border-slate-200'}">
          ${ativo ? '✓ ' : ''}${g}
        </button>
      `;
    }).join("");
  }

  // 3. Dificuldades Centrais da Área (O que o aluno não aprendeu)
  chipsNaoAprendeu.innerHTML = dadosArea.dificuldades.map((dif, idx) => {
    const ativo = appState.preConselho.dificuldadesSelecionadas.includes(dif) || idx < 2;
    return `
      <button type="button" onclick="toggleChipPratica(this, 'dificuldade', '${dif}')" class="chip-btn px-3 py-1.5 rounded-xl border text-xs font-bold transition text-left ${ativo ? 'bg-rose-50 text-rose-900 border-rose-300 font-black shadow-sm active-chip' : 'bg-slate-50 text-slate-600 border-slate-200'}">
        ${ativo ? '✓ ' : ''}${dif}
      </button>
    `;
  }).join("");
}

function toggleChipPratica(button, categoria, valor) {
  button.classList.toggle("active-chip");
  const ativado = button.classList.contains("active-chip");

  if (categoria === 'area') {
    if (ativado) {
      if (!appState.preConselho.praticasAreaSelecionadas.includes(valor)) appState.preConselho.praticasAreaSelecionadas.push(valor);
      button.className = "chip-btn px-3 py-1.5 rounded-xl border text-xs font-black transition text-left bg-blue-50 text-blue-900 border-blue-400 shadow-sm active-chip";
      button.innerText = "✓ " + valor;
    } else {
      appState.preConselho.praticasAreaSelecionadas = appState.preConselho.praticasAreaSelecionadas.filter(v => v !== valor);
      button.className = "chip-btn px-3 py-1.5 rounded-xl border text-xs font-bold transition text-left bg-slate-50 text-slate-600 border-slate-200";
      button.innerText = valor;
    }
  } else if (categoria === 'geral') {
    if (ativado) {
      if (!appState.preConselho.praticasGeraisSelecionadas.includes(valor)) appState.preConselho.praticasGeraisSelecionadas.push(valor);
      button.className = "chip-btn px-3 py-1.5 rounded-xl border text-xs font-black transition text-left bg-purple-50 text-purple-900 border-purple-400 shadow-sm active-chip";
      button.innerText = "✓ " + valor;
    } else {
      appState.preConselho.praticasGeraisSelecionadas = appState.preConselho.praticasGeraisSelecionadas.filter(v => v !== valor);
      button.className = "chip-btn px-3 py-1.5 rounded-xl border text-xs font-bold transition text-left bg-slate-50 text-slate-600 border-slate-200";
      button.innerText = valor;
    }
  } else {
    if (ativado) {
      if (!appState.preConselho.dificuldadesSelecionadas.includes(valor)) appState.preConselho.dificuldadesSelecionadas.push(valor);
      button.className = "chip-btn px-3 py-1.5 rounded-xl border text-xs font-black transition text-left bg-rose-50 text-rose-900 border-rose-300 shadow-sm active-chip";
      button.innerText = "✓ " + valor;
    } else {
      appState.preConselho.dificuldadesSelecionadas = appState.preConselho.dificuldadesSelecionadas.filter(v => v !== valor);
      button.className = "chip-btn px-3 py-1.5 rounded-xl border text-xs font-bold transition text-left bg-slate-50 text-slate-600 border-slate-200";
      button.innerText = valor;
    }
  }
}

// 8.1 Tabela Nominal Bipolarizada de Atitudes (Positivas vs Desafios)
function carregarPreConselhoTurma() {
  const turmaSelect = document.getElementById("pc-turma-select");
  const discSelect = document.getElementById("pc-disciplina-select");
  const tabelaCorpo = document.getElementById("pc-tabela-alunos");

  if (!turmaSelect || !discSelect || !tabelaCorpo) return;

  const turma = turmaSelect.value;
  const disciplina = discSelect.value;
  const alunosTurma = appState.estudantes.filter(a => a.turma === turma);

  if (alunosTurma.length === 0) {
    tabelaCorpo.innerHTML = `<tr><td colspan="5" class="p-6 text-center text-slate-400">Nenhum estudante nesta turma.</td></tr>`;
    return;
  }

  tabelaCorpo.innerHTML = alunosTurma.map(aluno => {
    const diag = calcularDiagnosticoRisco(aluno);
    const inativo = aluno.situacaoMatricula && aluno.situacaoMatricula !== "Ativo";
    const comp = aluno.comportamentoDocente || {};
    const discObj = (aluno.disciplinas || []).find(d => d.nome === disciplina) || { mediaTrimestral: 60 };
    const notaValor = (discObj.mediaTrimestral > 10 ? discObj.mediaTrimestral / 10 : discObj.mediaTrimestral).toFixed(1);

    if (inativo) {
      return `
        <tr class="bg-slate-100/70 opacity-60">
          <td class="p-3">
            <div class="font-bold text-slate-600">${aluno.nome}</div>
            <div class="text-[10px] font-mono text-slate-400">🔒 ${aluno.situacaoMatricula}</div>
          </td>
          <td class="p-3 text-center text-slate-400">--</td>
          <td class="p-3 text-center text-slate-400">--</td>
          <td class="p-3 text-center" colspan="2"><span class="text-xs text-slate-400 italic">Estudante inativo</span></td>
        </tr>
      `;
    }

    return `
      <tr class="hover:bg-slate-50/80 transition">
        <td class="p-3">
          <div class="font-black text-slate-800">${aluno.nome}</div>
          <div class="text-[10px] font-mono text-slate-500">CGM: ${aluno.cgm}</div>
        </td>
        <td class="p-3 text-center font-bold ${parseFloat(diag.percentualFaltas) >= 20 ? 'text-rose-700' : 'text-slate-700'}">
          ${(100 - parseFloat(diag.percentualFaltas)).toFixed(0)}%
        </td>
        <td class="p-3 text-center font-black ${parseFloat(notaValor) < 6.0 ? 'text-rose-700' : 'text-emerald-700'}">
          ${notaValor}
        </td>

        <!-- BLOCO 1: CLIMA & ATITUDES POSITIVAS (Tags Verdes / Azuis) -->
        <td class="p-3">
          <div class="flex flex-wrap gap-1">
            <button type="button" onclick="toggleAtitudeBipolar('${aluno.id}', 'engajado', this, 'pos')" class="chip-btn px-2 py-0.5 rounded-lg text-[11px] font-bold border ${comp.engajado ? 'bg-emerald-100 text-emerald-900 border-emerald-400 font-black shadow-sm' : 'bg-slate-50 text-slate-600 border-slate-200'}">
              ${comp.engajado ? '✓ ' : ''}Engajado
            </button>
            <button type="button" onclick="toggleAtitudeBipolar('${aluno.id}', 'respeitoso', this, 'pos')" class="chip-btn px-2 py-0.5 rounded-lg text-[11px] font-bold border ${comp.respeitoso ? 'bg-teal-100 text-teal-900 border-teal-400 font-black shadow-sm' : 'bg-slate-50 text-slate-600 border-slate-200'}">
              ${comp.respeitoso ? '✓ ' : ''}Respeitoso
            </button>
            <button type="button" onclick="toggleAtitudeBipolar('${aluno.id}', 'autonomo', this, 'pos')" class="chip-btn px-2 py-0.5 rounded-lg text-[11px] font-bold border ${comp.autonomo ? 'bg-blue-100 text-blue-900 border-blue-400 font-black shadow-sm' : 'bg-slate-50 text-slate-600 border-slate-200'}">
              ${comp.autonomo ? '✓ ' : ''}Autônomo
            </button>
            <button type="button" onclick="toggleAtitudeBipolar('${aluno.id}', 'colaborativo', this, 'pos')" class="chip-btn px-2 py-0.5 rounded-lg text-[11px] font-bold border ${comp.colaborativo ? 'bg-cyan-100 text-cyan-900 border-cyan-400 font-black shadow-sm' : 'bg-slate-50 text-slate-600 border-slate-200'}">
              ${comp.colaborativo ? '✓ ' : ''}Colaborativo
            </button>
            <button type="button" onclick="toggleAtitudeBipolar('${aluno.id}', 'evolucao', this, 'pos')" class="chip-btn px-2 py-0.5 rounded-lg text-[11px] font-bold border ${comp.evolucao ? 'bg-emerald-200 text-emerald-950 border-emerald-500 font-black shadow-sm' : 'bg-slate-50 text-slate-600 border-slate-200'}">
              ${comp.evolucao ? '✓ ' : ''}Evolução
            </button>
          </div>
        </td>

        <!-- BLOCO 2: OCORRÊNCIAS & AJUSTES DE CONDUTA (Tags Tons Alerta / Vermelho) -->
        <td class="p-3">
          <div class="flex flex-wrap gap-1">
            <button type="button" onclick="toggleAtitudeBipolar('${aluno.id}', 'comportamentoInadequado', this, 'desafio')" class="chip-btn px-2 py-0.5 rounded-lg text-[11px] font-bold border ${comp.comportamentoInadequado ? 'bg-amber-100 text-amber-900 border-amber-400 font-black shadow-sm' : 'bg-slate-50 text-slate-600 border-slate-200'}">
              ${comp.comportamentoInadequado ? '✓ ' : ''}Inadequado
            </button>
            <button type="button" onclick="toggleAtitudeBipolar('${aluno.id}', 'desrespeitoRegras', this, 'desafio')" class="chip-btn px-2 py-0.5 rounded-lg text-[11px] font-bold border ${comp.desrespeitoRegras ? 'bg-orange-100 text-orange-900 border-orange-400 font-black shadow-sm' : 'bg-slate-50 text-slate-600 border-slate-200'}">
              ${comp.desrespeitoRegras ? '✓ ' : ''}Regras
            </button>
            <button type="button" onclick="toggleAtitudeBipolar('${aluno.id}', 'faltaMaterial', this, 'desafio')" class="chip-btn px-2 py-0.5 rounded-lg text-[11px] font-bold border ${comp.faltaMaterial ? 'bg-amber-100 text-amber-900 border-amber-300 font-bold' : 'bg-slate-50 text-slate-600 border-slate-200'}">
              ${comp.faltaMaterial ? '✓ ' : ''}Material
            </button>
            <button type="button" onclick="toggleAtitudeBipolar('${aluno.id}', 'palavrasOfensivas', this, 'desafio')" class="chip-btn px-2 py-0.5 rounded-lg text-[11px] font-bold border ${comp.palavrasOfensivas ? 'bg-rose-100 text-rose-900 border-rose-400 font-black shadow-sm' : 'bg-slate-50 text-slate-600 border-slate-200'}">
              ${comp.palavrasOfensivas ? '✓ ' : ''}Xingamentos
            </button>
            <button type="button" onclick="toggleAtitudeBipolar('${aluno.id}', 'bullying', this, 'desafio')" class="chip-btn px-2 py-0.5 rounded-lg text-[11px] font-bold border ${comp.bullying ? 'bg-rose-200 text-rose-950 border-rose-500 font-black shadow-sm' : 'bg-slate-50 text-slate-600 border-slate-200'}">
              ${comp.bullying ? '✓ ' : ''}Bullying
            </button>
            <button type="button" onclick="toggleAtitudeBipolar('${aluno.id}', 'agressoes', this, 'desafio')" class="chip-btn px-2 py-0.5 rounded-lg text-[11px] font-bold border ${comp.agressoes ? 'bg-rose-300 text-rose-950 border-rose-600 font-black shadow-sm' : 'bg-slate-50 text-slate-600 border-slate-200'}">
              ${comp.agressoes ? '✓ ' : ''}Agressões
            </button>
            <button type="button" onclick="toggleAtitudeBipolar('${aluno.id}', 'apoioPedagogico', this, 'desafio')" class="chip-btn px-2 py-0.5 rounded-lg text-[11px] font-bold border ${comp.apoioPedagogico ? 'bg-yellow-100 text-yellow-900 border-yellow-400 font-bold' : 'bg-slate-50 text-slate-600 border-slate-200'}">
              ${comp.apoioPedagogico ? '✓ ' : ''}Apoio
            </button>
            <button type="button" onclick="toggleAtitudeBipolar('${aluno.id}', 'isolamento', this, 'desafio')" class="chip-btn px-2 py-0.5 rounded-lg text-[11px] font-bold border ${comp.isolamento ? 'bg-indigo-100 text-indigo-900 border-indigo-400 font-bold' : 'bg-slate-50 text-slate-600 border-slate-200'}">
              ${comp.isolamento ? '✓ ' : ''}Isolamento
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join("");

  lucide.createIcons();
}

function toggleAtitudeBipolar(alunoId, campo, button, tipo) {
  const aluno = appState.estudantes.find(a => a.id === alunoId);
  if (!aluno) return;
  if (!aluno.comportamentoDocente) aluno.comportamentoDocente = {};

  aluno.comportamentoDocente[campo] = !aluno.comportamentoDocente[campo];
  const ativado = aluno.comportamentoDocente[campo];

  if (tipo === 'pos') {
    button.className = `chip-btn px-2 py-0.5 rounded-lg text-[11px] font-bold border ${ativado ? 'bg-emerald-100 text-emerald-900 border-emerald-400 font-black shadow-sm' : 'bg-slate-50 text-slate-600 border-slate-200'}`;
  } else {
    button.className = `chip-btn px-2 py-0.5 rounded-lg text-[11px] font-bold border ${ativado ? 'bg-rose-100 text-rose-900 border-rose-400 font-black shadow-sm' : 'bg-slate-50 text-slate-600 border-slate-200'}`;
  }

  button.innerText = (ativado ? '✓ ' : '') + button.innerText.replace('✓ ', '');
  salvarDadosLocais();
}

function marcarTodosAlunosRegulares() {
  const turmaSelect = document.getElementById("pc-turma-select");
  const turma = turmaSelect ? turmaSelect.value : "1º - FD";

  appState.estudantes.forEach(aluno => {
    if (aluno.turma === turma && aluno.situacaoMatricula === "Ativo") {
      aluno.comportamentoDocente = {
        engajado: true,
        respeitoso: true,
        autonomo: true,
        colaborativo: true,
        evolucao: false,
        comportamentoInadequado: false,
        desrespeitoRegras: false,
        faltaMaterial: false,
        palavrasOfensivas: false,
        bullying: false,
        agressoes: false,
        apoioPedagogico: false,
        isolamento: false
      };
    }
  });

  salvarDadosLocais();
  carregarPreConselhoTurma();
  mostrarAvisoSucesso("Todos os estudantes marcados como Engajados e Regulares!");
}

function salvarRegistrosPreConselho() {
  salvarDadosLocais();
  renderizarAlunos();
  gerarVisualizacaoAta();
  gerarAvisosParaLoop();
  mostrarAvisoSucesso("Apontamentos de Atitudes e Metodologias salvos com sucesso!");
}

// ==========================================
// 9. ATESTADO DOCENTE (BOTÃO ÚNICO DE ENVIO)
// ==========================================
function lancarAtestadoDocente() {
  const profNome = document.getElementById("atestado-docente-nome").value;
  const dtInicio = document.getElementById("atestado-docente-inicio").value;
  const dtFim = document.getElementById("atestado-docente-fim").value;
  const motivo = document.getElementById("atestado-docente-motivo").value.trim();
  const classroom = document.getElementById("atestado-docente-classroom").value.trim();

  if (!dtInicio || !dtFim) {
    alert("Informe as datas de início e término do atestado.");
    return;
  }

  const profObj = appState.professores.find(p => p.nome === profNome);
  const disciplina = profObj ? profObj.disciplina : "Docente";

  // Identifica turmas e aulas afetadas na grade semanal
  const aulasAfetadasNaGrade = appState.horariosEscolares
    .filter(h => h.professor === profNome && !h.isHa)
    .map(h => ({ turma: h.turma, aulas: `${h.aula}ª aula (${h.diaSemana})` }));

  const turmasAfetadas = aulasAfetadasNaGrade.length > 0 ? aulasAfetadasNaGrade : [
    { turma: "1º - FD", aulas: `3ª e 4ª aula (${formatarDataBr(dtInicio)})` },
    { turma: "9º Ano A", aulas: `1ª e 2ª aula (${formatarDataBr(dtFim)})` }
  ];

  const novoAtestado = {
    id: "at-doc-" + Date.now(),
    professor: profNome,
    disciplina,
    dataInicio: dtInicio,
    dataFim: dtFim,
    motivo: motivo || "Tratamento de Saúde / Repouso Médico",
    classroom: classroom || "Atividades postadas no Google Classroom.",
    turmasAfetadas
  };

  appState.atestadosDocentes.unshift(novoAtestado);
  salvarDadosLocais();
  renderizarAtestadosDocentes();
  gerarAvisosParaLoop();

  // Disparo WhatsApp imediato para Direção e Coordenação (+55 45 99151-6382)
  const foneDestino = appState.config.whatsappOficial || "5545991516382";
  const turmasTexto = novoAtestado.turmasAfetadas.map(t => `• *${t.turma}*: ${t.aulas}`).join("\n");

  const msg = `🩺 *COMUNICAÇÃO OFICIAL DE ATESTADO MÉDICO DOCENTE*\n\n` +
    `Prezada Direção e Coordenação Pedagógica:\n` +
    `Informo meu afastamento médico para fins regimentais e cobertura de aulas:\n\n` +
    `👤 *Docente:* ${novoAtestado.professor} (${novoAtestado.disciplina})\n` +
    `📅 *Período:* ${formatarDataBr(novoAtestado.dataInicio)} a ${formatarDataBr(novoAtestado.dataFim)}\n` +
    `📌 *Motivo:* ${novoAtestado.motivo}\n\n` +
    `📚 *Turmas e Aulas Afetadas que necessitam de substituição:*\n${turmasTexto}\n\n` +
    `💻 *Atividades Disponibilizadas:* ${novoAtestado.classroom}\n\n` +
    `Atenciosamente, ${novoAtestado.professor}.`;

  navigator.clipboard.writeText(msg).catch(e => console.log(e));
  const url = `https://wa.me/${foneDestino.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");

  mostrarAvisoSucesso("Atestado gravado e notificação enviada no WhatsApp da Gestão!");
}

function renderizarAtestadosDocentes() {
  const containerAulas = document.getElementById("lista-aulas-vagas-docentes");
  if (!containerAulas) return;

  if (appState.atestadosDocentes.length === 0) {
    containerAulas.innerHTML = `<div class="p-4 bg-slate-50 text-slate-500 rounded-xl text-xs text-center">Nenhuma aula vaga decorrente de atestado no momento.</div>`;
    return;
  }

  containerAulas.innerHTML = appState.atestadosDocentes.map(at => `
    <div class="p-4 rounded-xl border border-rose-300 bg-rose-50/50 space-y-2 text-xs">
      <div class="flex items-center justify-between border-b border-rose-200 pb-2">
        <div class="flex items-center gap-2">
          <span class="font-black text-rose-950">${at.professor}</span>
          <span class="text-rose-800 font-semibold">• ${at.disciplina}</span>
          <span class="px-2 py-0.5 rounded bg-rose-200 text-rose-900 font-bold text-[10px]">Afastado: ${formatarDataBr(at.dataInicio)} a ${formatarDataBr(at.dataFim)}</span>
        </div>
      </div>
      <div>
        <strong class="text-rose-900 block mb-1">Aulas Desassistidas que precisam de cobertura:</strong>
        <div class="space-y-1">
          ${at.turmasAfetadas.map(t => `
            <div class="p-1.5 bg-white rounded-lg border border-rose-200 flex items-center justify-between text-[11px]">
              <span class="font-bold text-slate-800">${t.turma}</span>
              <span class="font-mono text-rose-700">${t.aulas}</span>
              <span class="text-emerald-700 font-bold">Verificar substituto / Classroom</span>
            </div>
          `).join("")}
        </div>
      </div>
      <div class="p-2 bg-white/70 rounded-lg text-slate-600 text-[11px]">
        <strong>Orientações / Tarefas:</strong> ${at.classroom}
      </div>
    </div>
  `).join("");

  lucide.createIcons();
}

function copiarEscalaAulasVagas() {
  if (appState.atestadosDocentes.length === 0) {
    alert("Nenhuma aula vaga registrada.");
    return;
  }
  const linhas = appState.atestadosDocentes.map(at => {
    const turmas = at.turmasAfetadas.map(t => `  - ${t.turma}: ${t.aulas}`).join("\n");
    return `Prof. ${at.professor} (${at.disciplina}) - Afastamento de ${formatarDataBr(at.dataInicio)} a ${formatarDataBr(at.dataFim)}:\n${turmas}`;
  }).join("\n\n");

  const texto = `📋 *ESCALA DE AULAS VAGAS / SUBSTITUIÇÃO*\n\n${linhas}\n\nCoordenação Pedagógica.`;
  navigator.clipboard.writeText(texto).then(() => {
    mostrarAvisoSucesso("Escala de aulas vagas copiada para a área de transferência!");
  });
}

// ==========================================
// 10. GRADE ESCOLAR DE 6 AULAS & DESTAQUE DE HA
// ==========================================
let apenasHaFiltroAtivo = false;

function filtrarApenasHA() {
  apenasHaFiltroAtivo = !apenasHaFiltroAtivo;
  const btn = document.getElementById("btn-filtro-ha");
  if (btn) {
    if (apenasHaFiltroAtivo) {
      btn.className = "bg-amber-500 text-slate-950 font-black px-3 py-2 rounded-xl text-xs flex items-center gap-1.5 shadow-md";
    } else {
      btn.className = "bg-amber-100 hover:bg-amber-200 text-amber-900 border border-amber-300 font-bold px-3 py-2 rounded-xl text-xs flex items-center gap-1.5 transition";
    }
  }
  renderizarGradeHorarios();
}

function renderizarGradeHorarios() {
  const filtroTurmaEl = document.getElementById("horario-filtro-turma");
  const tabelaCorpo = document.getElementById("tabela-grade-horarios");
  const turma = filtroTurmaEl ? filtroTurmaEl.value : "1º - FD";
  const dias = ["segunda", "terca", "quarta", "quinta", "sexta"];
  const aulas = ["1", "2", "3", "4", "5", "6"];

  if (!tabelaCorpo) return;

  tabelaCorpo.innerHTML = aulas.map(aulaNum => {
    const horaTexto = GRADE_HORARIOS_INFO.manha.find(g => g.aula === aulaNum)?.horario || `${aulaNum}ª Aula`;
    return `
      <tr>
        <td class="p-3 font-bold border-r bg-slate-50 text-slate-700 font-mono text-xs">
          <div>${aulaNum}ª Aula</div>
          <div class="text-[10px] text-slate-400 font-normal">${horaTexto}</div>
        </td>
        ${dias.map(dia => {
          const item = appState.horariosEscolares.find(h => h.turma === turma && h.diaSemana === dia && h.aula === aulaNum);
          if (!item) {
            if (apenasHaFiltroAtivo) return `<td class="p-2 border-r bg-slate-50/50"></td>`;
            return `
              <td class="p-2 border-r hover:bg-blue-50/40 cursor-pointer text-slate-300 text-xs" onclick="abrirModalAdicionarHorario('${turma}', '${dia}', '${aulaNum}')">
                + Inserir
              </td>
            `;
          }
          if (apenasHaFiltroAtivo && !item.isHa) {
            return `<td class="p-2 border-r bg-slate-50/50 opacity-30 text-slate-400 text-[10px]">${item.disciplina}</td>`;
          }

          const cardClass = item.isHa ? "ha-destaque-card p-2 border-r rounded-lg" : "p-2 border-r bg-white hover:bg-slate-50 transition";
          return `
            <td class="${cardClass}">
              <div class="font-black text-slate-800 text-xs">${item.disciplina}</div>
              <div class="text-[11px] text-blue-900 font-semibold">${item.professor}</div>
              ${item.isHa ? '<span class="inline-block mt-1 px-1.5 py-0.5 rounded text-[9px] bg-amber-500 text-slate-950 font-black">HORÁRIO DE ATIVIDADE</span>' : ''}
            </td>
          `;
        }).join("")}
      </tr>
    `;
  }).join("");

  lucide.createIcons();
}

function abrirModalAdicionarHorario(turma = "1º - FD", dia = "segunda", aula = "1") {
  const modal = document.getElementById("modal-horario-escolar");
  if (!modal) return;
  document.getElementById("horario-turma-input").value = turma;
  document.getElementById("horario-dia-input").value = dia;
  document.getElementById("horario-aula-input").value = aula;
  sincronizarSelectsProfessores();
  modal.classList.remove("hidden");
  lucide.createIcons();
}

function fecharModalHorarioEscolar() {
  const modal = document.getElementById("modal-horario-escolar");
  if (modal) modal.classList.add("hidden");
}

function salvarAulaGradeHorario() {
  const turma = document.getElementById("horario-turma-input").value;
  const diaSemana = document.getElementById("horario-dia-input").value;
  const aula = document.getElementById("horario-aula-input").value;
  const professor = document.getElementById("horario-prof-input").value;
  const disciplina = document.getElementById("horario-disc-input").value.trim() || "Aula Regular";
  const isHa = document.getElementById("horario-is-ha").checked;

  appState.horariosEscolares = appState.horariosEscolares.filter(h => !(h.turma === turma && h.diaSemana === diaSemana && h.aula === aula));
  appState.horariosEscolares.push({
    id: "h-" + Date.now(),
    turma,
    diaSemana,
    aula,
    professor,
    disciplina,
    isHa
  });

  salvarDadosLocais();
  fecharModalHorarioEscolar();
  renderizarGradeHorarios();
  executarAlgoritmoSimultaneidadeHA();
  mostrarAvisoSucesso(`Aula na grade de ${turma} salva com sucesso!`);
}

// ==========================================
// 11. ALGORITMO DE SIMULTANEIDADE DE HA
// ==========================================
function executarAlgoritmoSimultaneidadeHA() {
  const selectTurma = document.getElementById("ha-otimizacao-turma");
  const painel = document.getElementById("painel-melhores-horarios-ha");
  if (!painel) return;

  const turma = selectTurma ? selectTurma.value : "1º - FD";

  // Identifica todos os professores que lecionam na turma
  const profsDaTurma = [...new Set(appState.horariosEscolares.filter(h => h.turma === turma).map(h => h.professor))];

  const dias = ["segunda", "terca", "quarta", "quinta", "sexta"];
  const aulas = ["1", "2", "3", "4", "5", "6"];
  const rankingHorarios = [];

  dias.forEach(dia => {
    aulas.forEach(aula => {
      // Professores da turma que estão em HA neste exato momento em QUALQUER turma/lotação
      const profsEmHaNesteHorario = appState.horariosEscolares.filter(h =>
        h.diaSemana === dia &&
        h.aula === aula &&
        h.isHa &&
        profsDaTurma.includes(h.professor)
      );

      const profsPresentes = appState.horariosEscolares.filter(h =>
        h.diaSemana === dia &&
        h.aula === aula &&
        profsDaTurma.includes(h.professor)
      );

      const nomesHaUnicos = [...new Set(profsEmHaNesteHorario.map(h => h.professor))];
      const nomesPresUnicos = [...new Set(profsPresentes.map(h => h.professor))];

      if (nomesHaUnicos.length > 0) {
        rankingHorarios.push({
          dia,
          aula,
          qtdHa: nomesHaUnicos.length,
          nomesHa: nomesHaUnicos,
          qtdPres: nomesPresUnicos.length
        });
      }
    });
  });

  // Ordena prioritariamente por: 1º Maior número em HA, 2º Maior número presentes
  rankingHorarios.sort((a, b) => (b.qtdHa - a.qtdHa) || (b.qtdPres - a.qtdPres));

  if (rankingHorarios.length === 0) {
    painel.innerHTML = `<div class="p-4 bg-slate-50 text-slate-500 rounded-xl text-xs text-center col-span-2">Nenhum horário de HA compartilhado encontrado para a turma ${turma}.</div>`;
    return;
  }

  painel.innerHTML = rankingHorarios.slice(0, 4).map((r, idx) => {
    const diaCapitalizado = r.dia.charAt(0).toUpperCase() + r.dia.slice(1) + "-feira";
    const horaTexto = GRADE_HORARIOS_INFO.manha.find(g => g.aula === r.aula)?.horario || `${r.aula}ª Aula`;
    return `
      <div class="p-4 rounded-2xl border-2 ${idx === 0 ? 'border-amber-400 bg-amber-50/70 shadow-md ring-2 ring-amber-200' : 'border-slate-200 bg-white shadow-sm'} space-y-2 text-xs">
        <div class="flex items-center justify-between border-b pb-2">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-full font-black text-[10px] ${idx === 0 ? 'bg-amber-500 text-slate-950' : 'bg-slate-200 text-slate-800'}">
              ${idx + 1}º MELHOR HORÁRIO
            </span>
            <strong class="text-sm font-black text-slate-900">${diaCapitalizado}</strong>
          </div>
          <span class="font-mono text-slate-600 font-bold">${horaTexto}</span>
        </div>

        <div class="text-slate-700">
          <strong class="text-amber-900 font-bold">${r.qtdHa} Professores da Turma em HA Simultâneo:</strong>
          <div class="flex flex-wrap gap-1 mt-1">
            ${r.nomesHa.map(n => `<span class="px-2 py-0.5 rounded bg-amber-200 text-amber-950 font-bold text-[11px]">${n}</span>`).join("")}
          </div>
        </div>

        <button onclick="agendarAtendimentoColetivoHA('${diaCapitalizado}', '${r.aula}', '${r.nomesHa.join(", ")}', '${turma}')" class="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-1.5 rounded-xl text-xs flex items-center justify-center gap-1.5 transition">
          <i data-lucide="calendar-plus" class="w-3.5 h-3.5 text-emerald-400"></i> Agendar Atendimento Coletivo com a Turma
        </button>
      </div>
    `;
  }).join("");

  lucide.createIcons();
}

function agendarAtendimentoColetivoHA(dia, aula, profs, turma) {
  const pauta = prompt(`Confirmar agendamento de atendimento de HA com os professores (${profs}) para a turma ${turma} (${dia}, ${aula}ª aula)? Informe a pauta:`, `Alinhamento pedagógico e nivelamento de notas da turma ${turma}`);
  if (!pauta) return;

  appState.comunicadosDisparados.unshift({
    id: "com-ha-" + Date.now(),
    dataHora: new Date().toISOString().slice(0, 16).replace("T", " "),
    autor: "Coordenação Pedagógica",
    turma: turma,
    titulo: `Atendimento Coletivo em HA (${dia}, ${aula}ª aula) - Docentes: ${profs}`,
    publico: "Equipe Docente da Turma",
    registradoEmAta: true
  });

  salvarDadosLocais();
  gerarVisualizacaoAta();
  mostrarAvisoSucesso("Atendimento coletivo agendado e registrado formalmente na Ata!");
}

// ==========================================
// 12. COMUNICAÇÃO COLETIVA EM 3 NÍVEIS COM REGISTRO EM ATA
// ==========================================
function carregarEstudantesParaComunicado() {
  const selectTurma = document.getElementById("comunicado-turma-select");
  const listaAlunos = document.getElementById("lista-estudantes-comunicado");
  if (!selectTurma || !listaAlunos) return;

  const turma = selectTurma.value;
  const alunos = appState.estudantes.filter(a => a.turma === turma && a.situacaoMatricula === "Ativo");

  listaAlunos.innerHTML = alunos.map(a => `
    <label class="flex items-center justify-between p-1.5 rounded-lg hover:bg-white cursor-pointer">
      <div class="flex items-center gap-2">
        <input type="checkbox" class="chk-aluno-comunicado rounded text-blue-600" value="${a.id}" checked>
        <span class="font-bold text-slate-800">${a.nome}</span>
      </div>
      <span class="text-[10px] font-mono text-slate-400">CGM: ${a.cgm}</span>
    </label>
  `).join("");
}

function toggleSelecionarTodosComunicado(master) {
  const checkboxes = document.querySelectorAll(".chk-aluno-comunicado");
  checkboxes.forEach(c => c.checked = master.checked);
}

// 12.1 Nível Professor: Envio para Alunos da Turma
function dispararComunicadoDocenteWhatsApp() {
  const selectTurma = document.getElementById("comunicado-turma-select");
  const titulo = document.getElementById("comunicado-titulo").value.trim();
  const texto = document.getElementById("comunicado-texto").value.trim();
  const turma = selectTurma ? selectTurma.value : "1º - FD";

  const selecionados = [...document.querySelectorAll(".chk-aluno-comunicado:checked")].map(c => c.value);
  if (selecionados.length === 0) {
    alert("Selecione ao menos um estudante para envio.");
    return;
  }

  // Registra no histórico do aluno
  selecionados.forEach(id => {
    const est = appState.estudantes.find(a => a.id === id);
    if (est) {
      if (!est.historicoComunicados) est.historicoComunicados = [];
      est.historicoComunicados.push({
        dataHora: new Date().toISOString(),
        autor: appState.usuarioAtual.nome,
        titulo,
        texto
      });
    }
  });

  // Registra para citação formal na Ata do Conselho
  appState.comunicadosDisparados.unshift({
    id: "com-doc-" + Date.now(),
    dataHora: new Date().toISOString().slice(0, 16).replace("T", " "),
    autor: `Prof. ${appState.usuarioAtual.nome} (Docente)`,
    turma,
    titulo,
    publico: `${selecionados.length} Estudantes Selecionados`,
    registradoEmAta: true
  });

  salvarDadosLocais();
  gerarVisualizacaoAta();

  const msgWpp = `📚 *COMUNICADO PEDAGÓGICO - TURMA ${turma}*\n\n` +
    `*Assunto:* ${titulo}\n` +
    `*Professor(a):* ${appState.usuarioAtual.nome}\n\n` +
    `${texto}\n\n` +
    `_Ação pedagógica formal registrada na Ata Oficial do Conselho de Classe._`;

  navigator.clipboard.writeText(msgWpp).catch(e => console.log(e));
  const url = `https://wa.me/?text=${encodeURIComponent(msgWpp)}`;
  window.open(url, "_blank");

  mostrarAvisoSucesso(`Mensagem disparada para ${selecionados.length} estudantes e registrada na Ata!`);
}

// 12.2 Nível Pedagogia: Comunicação em Lote
function aplicarModeloTextoPedagogico(modelo) {
  const campo = document.getElementById("ped-lote-texto");
  if (!campo) return;
  if (modelo === "reuniao_pais") {
    campo.value = "Prezadas famílias: Convocamos todos os responsáveis para a Reunião de Pais e Devolutiva do Conselho de Classe neste sábado às 08h30. Sua participação é fundamental.";
  } else if (modelo === "recuperacao") {
    campo.value = "Aviso aos estudantes e responsáveis: Na próxima semana iniciaremos o calendário de provas e atividades de recuperação paralela. Não faltem!";
  } else if (modelo === "infrequencia") {
    campo.value = "Alerta escolar: Lembramos que a frequência mínima legal é de 75%. Estudantes com faltas excessivas estão sujeitos a encaminhamento ao Conselho Tutelar.";
  }
}

function dispararLotePedagogicoWhatsApp() {
  const turma = document.getElementById("ped-lote-turma").value;
  const texto = document.getElementById("ped-lote-texto").value.trim();
  if (!texto) {
    alert("Digite a mensagem para envio em lote.");
    return;
  }

  appState.comunicadosDisparados.unshift({
    id: "com-ped-" + Date.now(),
    dataHora: new Date().toISOString().slice(0, 16).replace("T", " "),
    autor: "Equipe Pedagógica",
    turma,
    titulo: "Comunicado Pedagógico Institucional em Lote",
    publico: "Turma " + turma,
    registradoEmAta: true
  });

  salvarDadosLocais();
  gerarVisualizacaoAta();

  const msg = `📘 *COMUNICAÇÃO INSTITUCIONAL DA EQUIPE PEDAGÓGICA*\n\n` +
    `Turma: *${turma}*\n\n${texto}\n\nCoordenação Pedagógica.`;

  navigator.clipboard.writeText(msg).catch(e => console.log(e));
  const url = `https://wa.me/?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");

  mostrarAvisoSucesso("Comunicado em lote disparado e registrado na Ata!");
}

// 12.3 Nível Direção: Envio Coletivo para Toda a Escola
function dispararEnvioColetivoDirecao() {
  const titulo = document.getElementById("dir-coletivo-titulo").value.trim();
  const texto = document.getElementById("dir-coletivo-texto").value.trim();
  const alvo = document.getElementById("dir-coletivo-alvo").value;

  if (!texto) {
    alert("Digite o comunicado oficial da Direção.");
    return;
  }

  appState.comunicadosDisparados.unshift({
    id: "com-dir-" + Date.now(),
    dataHora: new Date().toISOString().slice(0, 16).replace("T", " "),
    autor: "Direção Geral (Master)",
    turma: "Toda a Escola",
    titulo,
    publico: alvo === "pais" ? "Responsáveis" : alvo === "alunos" ? "Estudantes" : "Toda a Comunidade",
    registradoEmAta: true
  });

  salvarDadosLocais();
  gerarVisualizacaoAta();

  const foneOficial = appState.config.whatsappOficial || "5545991516382";
  const msg = `📢 *COMUNICADO OFICIAL DA DIREÇÃO ESCOLAR*\n\n` +
    `*${titulo}*\n\n${texto}\n\n` +
    `Linha Oficial da Escola: +55 (45) 99151-6382\nDireção Geral.`;

  navigator.clipboard.writeText(msg).catch(e => console.log(e));
  const url = `https://wa.me/?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");

  mostrarAvisoSucesso("Envio coletivo da escola disparado com sucesso!");
}

// ==========================================
// 13. FILA DE APROVAÇÃO DA DIREÇÃO & CALENDÁRIO 2026
// ==========================================
function renderizarFilaAprovacaoMensagens() {
  const container = document.getElementById("lista-mensagens-pendentes-aprovacao");
  const badgeCont = document.getElementById("badge-contador-pendentes");
  if (!container) return;

  const pendentes = CALENDARIO_2026_INFO.eventosAgendados.filter(e => e.statusAprovacao === "pendente");

  if (badgeCont) {
    if (pendentes.length > 0) {
      badgeCont.innerText = pendentes.length;
      badgeCont.classList.remove("hidden");
    } else {
      badgeCont.classList.add("hidden");
    }
  }

  if (pendentes.length === 0) {
    container.innerHTML = `<div class="p-6 text-center text-slate-400 bg-slate-50 rounded-2xl border border-slate-200">Nenhuma mensagem agendada aguardando autorização no momento.</div>`;
    return;
  }

  container.innerHTML = pendentes.map((ev, idx) => `
    <div class="p-4 rounded-xl border border-amber-300 bg-amber-50/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
      <div>
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 rounded bg-amber-200 text-amber-950 font-black text-[10px]">PROGRAMADO: ${formatarDataBr(ev.data)}</span>
          <strong class="text-slate-900">${ev.titulo}</strong>
        </div>
        <p class="text-slate-600 mt-1">Destinatários previstos: <strong>${ev.alvo}</strong> (Alerta com 2 dias de antecedência).</p>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        <button onclick="aprovarMensagemFila('${ev.id}')" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-1.5 rounded-xl text-xs flex items-center gap-1 shadow-sm transition">
          <i data-lucide="check" class="w-3.5 h-3.5"></i> Autorizar e Disparar
        </button>
      </div>
    </div>
  `).join("");

  lucide.createIcons();
}

function aprovarMensagemFila(id) {
  const ev = CALENDARIO_2026_INFO.eventosAgendados.find(e => e.id === id);
  if (ev) {
    ev.statusAprovacao = "aprovado";
    renderizarFilaAprovacaoMensagens();
    renderizarListaEventosCalendario();
    mostrarAvisoSucesso(`Mensagem "${ev.titulo}" autorizada para envio oficial!`);
  }
}

function aprovarTodasMensagensPendentes() {
  CALENDARIO_2026_INFO.eventosAgendados.forEach(e => e.statusAprovacao = "aprovado");
  renderizarFilaAprovacaoMensagens();
  renderizarListaEventosCalendario();
  mostrarAvisoSucesso("Todas as mensagens pré-agendadas foram autorizadas pela Direção!");
}

function renderizarListaEventosCalendario() {
  const container = document.getElementById("lista-eventos-calendario");
  if (!container) return;

  container.innerHTML = CALENDARIO_2026_INFO.eventosAgendados.map(ev => `
    <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs">
      <div>
        <div class="flex items-center gap-2">
          <span class="font-bold text-slate-800">${ev.titulo}</span>
          <span class="px-2 py-0.5 rounded text-[10px] font-bold ${ev.statusAprovacao === 'aprovado' ? 'bg-emerald-100 text-emerald-900' : 'bg-amber-100 text-amber-900'}">
            ${ev.statusAprovacao === 'aprovado' ? '✓ Autorizado' : 'Aguardando Direção'}
          </span>
        </div>
        <div class="text-[11px] text-slate-500 font-mono mt-0.5">Data: ${formatarDataBr(ev.data)} • Destino: ${ev.alvo}</div>
      </div>
      <button onclick="dispararAlertaEventoCalendario('${ev.titulo}', '${ev.data}')" class="bg-blue-900 hover:bg-blue-800 text-white font-bold p-1.5 rounded-lg" title="Compartilhar no WhatsApp">
        <i data-lucide="message-circle" class="w-4 h-4"></i>
      </button>
    </div>
  `).join("");

  lucide.createIcons();
}

function dispararAlertaEventoCalendario(titulo, data) {
  const msg = `📅 *AVISO DO CALENDÁRIO ESCOLAR 2026*\n\n` +
    `Lembramos a todos da data de *${formatarDataBr(data)}* referente a: *${titulo}*.\n\n` +
    `Colégio Estadual Cívico-Militar Alberto Santos Dumont - Cafelândia/PR.`;

  navigator.clipboard.writeText(msg).catch(e => console.log(e));
  const url = `https://wa.me/?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

function processarUploadCalendario(event) {
  const file = event.target.files[0];
  if (file) mostrarAvisoSucesso(`Calendário anexado: ${file.name}`);
}

// ==========================================
// 14. BOLETIM ESCOLAR SINTÉTICO (A4)
// ==========================================
function renderizarListaBoletins() {
  const selectTurma = document.getElementById("boletim-filtro-turma");
  const turma = selectTurma ? selectTurma.value : "1º - FD";
  const alunosTurma = appState.estudantes.filter(a => a.turma === turma && a.situacaoMatricula === "Ativo");

  if (alunosTurma.length > 0) {
    selecionarBoletimAluno(alunosTurma[0].id);
  }
}

function selecionarBoletimAluno(alunoId) {
  appState.alunoBoletimSelecionadoId = alunoId;
  const aluno = appState.estudantes.find(a => a.id === alunoId);
  if (!aluno) return;

  const bolNome = document.getElementById("bol-nome");
  const bolCgm = document.getElementById("bol-cgm");
  const bolTurma = document.getElementById("bol-turma");
  const bolFreq = document.getElementById("bol-freq");
  const bolTabela = document.getElementById("bol-tabela-notas");
  const bolObs = document.getElementById("bol-observacoes");

  if (bolNome) bolNome.innerText = aluno.nome;
  if (bolCgm) bolCgm.innerText = aluno.cgm;
  if (bolTurma) bolTurma.innerText = aluno.turma;

  const diag = calcularDiagnosticoRisco(aluno);
  if (bolFreq) {
    const pPresenca = (100 - parseFloat(diag.percentualFaltas)).toFixed(1);
    bolFreq.innerText = `${pPresenca}%`;
    bolFreq.className = `font-bold ${parseFloat(pPresenca) < 75 ? 'text-rose-700' : 'text-emerald-700'}`;
  }

  if (bolTabela) {
    const disciplinas = aluno.disciplinas || [];
    bolTabela.innerHTML = disciplinas.map(d => {
      const nota1 = (d.mediaTrimestral > 10 ? d.mediaTrimestral / 10 : d.mediaTrimestral).toFixed(1);
      const recup = d.notaRecuperacao ? (d.notaRecuperacao > 10 ? d.notaRecuperacao / 10 : d.notaRecuperacao).toFixed(1) : "--";
      const aprovado = parseFloat(nota1) >= 6.0;
      return `
        <tr>
          <td class="border border-slate-300 p-2 font-bold">${d.nome}</td>
          <td class="border border-slate-300 p-2 text-center">${(parseFloat(nota1) - 0.5).toFixed(1)}</td>
          <td class="border border-slate-300 p-2 text-center font-black ${aprovado ? 'text-blue-900' : 'text-rose-700'}">${nota1}</td>
          <td class="border border-slate-300 p-2 text-center font-mono">${recup}</td>
          <td class="border border-slate-300 p-2 text-center font-bold text-xs ${aprovado ? 'text-emerald-700' : 'text-rose-700'}">
            ${aprovado ? 'Aprovado' : 'Recuperação'}
          </td>
        </tr>
      `;
    }).join("");
  }

  if (bolObs) {
    bolObs.innerText = aluno.deliberacaoConselho?.planoAcao || "Estudante em acompanhamento pedagógico regular com compensação de ausências via Classroom.";
  }
}

function imprimirBoletimAtual() {
  window.print();
}

// ==========================================
// 15. CADASTRO & IMPORTAÇÃO DE SERVIDORES EM LOTE
// ==========================================
function processarImportacaoServidoresLote() {
  const texto = document.getElementById("texto-importacao-servidores").value.trim();
  if (!texto) {
    alert("Cole a lista de servidores no campo de texto.");
    return;
  }

  const linhas = texto.split("\n");
  let cadastrados = 0;

  linhas.forEach(linha => {
    const partes = linha.split(/[;,]/).map(p => p.trim());
    if (partes.length >= 3) {
      const [nome, disciplina, telefone, email] = partes;
      const foneLimpo = telefone.replace(/\D/g, "");
      const emailFinal = email || `${nome.toLowerCase().replace(/\s+/g, ".")}@escola.pr.gov.br`;

      const existente = appState.professores.find(p => p.email?.toLowerCase() === emailFinal.toLowerCase());
      if (!existente) {
        appState.professores.push({
          nome,
          disciplina: disciplina || "Docente",
          telefone: foneLimpo,
          email: emailFinal,
          funcao: "professor",
          rg: "--",
          cpf: "--",
          nascimento: "--",
          endereco: "Cafelândia - PR"
        });
        cadastrados++;
      }
    }
  });

  salvarDadosLocais();
  renderizarTabelaServidoresCadastrados();
  renderizarTabelaCargosDirecao();
  document.getElementById("texto-importacao-servidores").value = "";
  mostrarAvisoSucesso(`${cadastrados} novos servidores cadastrados com sucesso!`);
}

function renderizarTabelaServidoresCadastrados() {
  const corpo = document.getElementById("tabela-servidores-cadastrados");
  if (!corpo) return;

  corpo.innerHTML = appState.professores.map((prof, idx) => `
    <tr class="hover:bg-slate-50 transition">
      <td class="p-3 font-bold text-slate-800">${prof.nome}</td>
      <td class="p-3 text-slate-600 font-semibold">${prof.disciplina}</td>
      <td class="p-3 font-mono font-bold text-emerald-800">${prof.telefone}</td>
      <td class="p-3 font-mono text-slate-600">${prof.email}</td>
      <td class="p-3 text-center text-[11px] font-mono text-slate-400">${prof.rg || '--'} / ${prof.cpf || '--'}</td>
      <td class="p-3 text-center">
        <button onclick="removerServidorLote(${idx})" class="text-rose-500 hover:text-rose-700 p-1" title="Excluir">
          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
        </button>
      </td>
    </tr>
  `).join("");

  lucide.createIcons();
}

function removerServidorLote(idx) {
  if (!confirm("Deseja remover este servidor do diretório?")) return;
  appState.professores.splice(idx, 1);
  salvarDadosLocais();
  renderizarTabelaServidoresCadastrados();
  renderizarTabelaCargosDirecao();
}

function exportarRelatorioServidores() {
  const csv = "Nome;Disciplina;Telefone;Email;Funcao\n" +
    appState.professores.map(p => `${p.nome};${p.disciplina};${p.telefone};${p.email};${p.funcao}`).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `servidores_santos_dumont_${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
}

// 15.1 Salvar Próprio Contato Docente
function salvarMeuProprioTelefoneDocente() {
  const tel = document.getElementById("meu-telefone-input").value.trim().replace(/\D/g, "");
  const email = document.getElementById("meu-email-input").value.trim().toLowerCase();
  const nasc = document.getElementById("meu-nasc-input").value;
  const rg = document.getElementById("meu-rg-input").value.trim();
  const cpf = document.getElementById("meu-cpf-input").value.trim();
  const endereco = document.getElementById("meu-endereco-input").value.trim();

  if (!tel || tel.length < 8) {
    alert("Informe um número de WhatsApp válido.");
    return;
  }
  if (!email || !email.includes("@escola.pr")) {
    alert("Informe seu e-mail institucional @escola.pr.gov.br.");
    return;
  }

  let profObj = appState.professores.find(p => p.nome === appState.usuarioAtual.nome);
  if (profObj) {
    profObj.telefone = tel;
    profObj.email = email;
    if (nasc) profObj.nascimento = nasc;
    if (rg) profObj.rg = rg;
    if (cpf) profObj.cpf = cpf;
    if (endereco) profObj.endereco = endereco;
  }

  appState.usuarioAtual.email = email;
  salvarDadosLocais();
  renderizarTabelaServidoresCadastrados();
  mostrarAvisoSucesso("Suas informações cadastrais foram atualizadas com sucesso!");
}

// ==========================================
// 16. RENDIMENTO ESTRATIFICADO DA DIREÇÃO (INTERVALOS 1,0 EM 1,0)
// ==========================================
function renderizarRendimentoEstratificadoDirecao() {
  const sTot = document.getElementById("dir-stat-total");
  const sCrit = document.getElementById("dir-stat-faltas-criticas");
  const sAlert = document.getElementById("dir-stat-faltas-alerta");
  const sAbaixo = document.getElementById("dir-stat-notas-abaixo");
  const painelBarras = document.getElementById("painel-barras-rendimento");
  const filtroTurma = document.getElementById("dir-rendimento-filtro-turma")?.value || "ESCOLA_TODA";

  const ativos = appState.estudantes.filter(a =>
    a.situacaoMatricula === "Ativo" &&
    (filtroTurma === "ESCOLA_TODA" || a.turma === filtroTurma)
  );

  const total = ativos.length || 1;
  let faltasAcima25 = 0;
  let faltas20a25 = 0;
  let notasAbaixo6 = 0;
  let notas6a7 = 0;
  let notas7a8 = 0;
  let notas8a9 = 0;
  let notasAcima9 = 0;

  ativos.forEach(aluno => {
    const diag = calcularDiagnosticoRisco(aluno);
    const faltasNum = parseFloat(diag.percentualFaltas) || 0;

    if (faltasNum > 25.0) faltasAcima25++;
    else if (faltasNum >= 20.0 && faltasNum <= 25.0) faltas20a25++;

    const disciplinas = aluno.disciplinas || [];
    const medias = disciplinas.map(d => (d.mediaTrimestral > 10 ? d.mediaTrimestral / 10 : d.mediaTrimestral));
    const mediaGeralAluno = medias.length > 0 ? (medias.reduce((a, b) => a + b, 0) / medias.length) : 0;

    if (mediaGeralAluno < 6.0) notasAbaixo6++;
    else if (mediaGeralAluno >= 6.0 && mediaGeralAluno < 7.0) notas6a7++;
    else if (mediaGeralAluno >= 7.0 && mediaGeralAluno < 8.0) notas7a8++;
    else if (mediaGeralAluno >= 8.0 && mediaGeralAluno <= 9.0) notas8a9++;
    else if (mediaGeralAluno > 9.0) notasAcima9++;
  });

  const pCrit = ((faltasAcima25 / total) * 100).toFixed(1);
  const pAlert = ((faltas20a25 / total) * 100).toFixed(1);
  const pAbaixo = ((notasAbaixo6 / total) * 100).toFixed(1);

  if (sTot) sTot.innerText = ativos.length;
  if (sCrit) sCrit.innerText = `${pCrit}% (${faltasAcima25})`;
  if (sAlert) sAlert.innerText = `${pAlert}% (${faltas20a25})`;
  if (sAbaixo) sAbaixo.innerText = `${pAbaixo}% (${notasAbaixo6})`;

  if (painelBarras) {
    const faixas = [
      { label: "1º Notas Abaixo de 6,0 (Rendimento Crítico)", qtd: notasAbaixo6, cor: "bg-rose-500", textCor: "text-rose-700" },
      { label: "2º Notas de 6,0 a 7,0 (Rendimento Básico)", qtd: notas6a7, cor: "bg-amber-500", textCor: "text-amber-800" },
      { label: "3º Notas de 7,0 a 8,0 (Bom Rendimento)", qtd: notas7a8, cor: "bg-blue-600", textCor: "text-blue-900" },
      { label: "4º Notas de 8,0 a 9,0 (Ótimo Rendimento)", qtd: notas8a9, cor: "bg-teal-600", textCor: "text-teal-900" },
      { label: "5º Notas Acima de 9,0 (Excelência Acadêmica)", qtd: notasAcima9, cor: "bg-emerald-600", textCor: "text-emerald-900" }
    ];

    painelBarras.innerHTML = faixas.map(f => {
      const pct = ((f.qtd / total) * 100).toFixed(1);
      return `
        <div class="space-y-1.5">
          <div class="flex items-center justify-between text-xs font-bold">
            <span class="${f.textCor}">${f.label}</span>
            <span class="font-mono ${f.textCor}">${pct}% (${f.qtd} estudantes)</span>
          </div>
          <div class="w-full bg-slate-100 rounded-full h-3.5 overflow-hidden border border-slate-200">
            <div class="${f.cor} h-3.5 rounded-full transition-all duration-500" style="width: ${pct}%"></div>
          </div>
        </div>
      `;
    }).join("");
  }
}

// 16.1 Relatório Geral de HAs nos dois turnos
function renderizarRelatorioHasDoisTurnos() {
  const container = document.getElementById("painel-relatorio-has-dois-turnos");
  if (!container) return;

  const dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
  container.innerHTML = `
    <div class="p-4 rounded-2xl border border-slate-200 bg-white space-y-2">
      <h4 class="font-black text-xs text-blue-900 uppercase">Turno Matutino (07:10 às 12:25)</h4>
      <div class="space-y-1.5 text-xs">
        <div class="flex justify-between border-b pb-1"><span>Terça-feira (3ª e 4ª aula):</span> <strong>Prof. Ronnie Malagutti (HA)</strong></div>
        <div class="flex justify-between border-b pb-1"><span>Terça-feira (5ª aula):</span> <strong>Profª Ana Paula (HA)</strong></div>
        <div class="flex justify-between border-b pb-1"><span>Quinta-feira (1ª, 2ª e 3ª aula):</span> <strong class="text-amber-800">Simultâneo: Ronnie, Ana Paula e Carlos</strong></div>
        <div class="flex justify-between"><span>Sexta-feira (6ª aula):</span> <strong>Prof. Ronnie Malagutti (HA)</strong></div>
      </div>
    </div>

    <div class="p-4 rounded-2xl border border-slate-200 bg-white space-y-2">
      <h4 class="font-black text-xs text-purple-900 uppercase">Turno Vespertino (13:10 às 18:25)</h4>
      <div class="space-y-1.5 text-xs">
        <div class="flex justify-between border-b pb-1"><span>Segunda-feira (2ª e 3ª aula):</span> <strong>Docentes Técnicos de Administração</strong></div>
        <div class="flex justify-between border-b pb-1"><span>Quarta-feira (4ª e 5ª aula):</span> <strong>Docentes de Formação de Docentes</strong></div>
        <div class="flex justify-between"><span>Sexta-feira (1ª e 2ª aula):</span> <strong>Docentes do Agronegócio</strong></div>
      </div>
    </div>
  `;
}

// 16.2 Horários da Gestão (Pedagogia e Direção)
function renderizarHorariosGestao() {
  const container = document.getElementById("container-horarios-gestao-corpo");
  if (!container) return;

  container.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-200 space-y-2 text-xs">
        <div class="flex items-center justify-between border-b border-emerald-200 pb-2">
          <strong class="text-emerald-950 font-black">Equipe Pedagógica (80h Semanais)</strong>
          <span class="px-2 py-0.5 rounded bg-emerald-200 text-emerald-900 font-bold">Ativa</span>
        </div>
        <p><strong>Pedagogas:</strong> Maria Lucilene / Nely</p>
        <p><strong>Turno Matutino:</strong> 07:00 às 12:30 (Atendimento a famílias e HA)</p>
        <p><strong>Turno Vespertino:</strong> 13:00 às 18:30 (Acompanhamento das turmas)</p>
      </div>

      <div class="p-4 bg-purple-50/60 rounded-2xl border border-purple-200 space-y-2 text-xs">
        <div class="flex items-center justify-between border-b border-purple-200 pb-2">
          <strong class="text-purple-950 font-black">Direção Escolar Geral (Master)</strong>
          <span class="px-2 py-0.5 rounded bg-purple-200 text-purple-900 font-bold">Integral</span>
        </div>
        <p><strong>Direção:</strong> Gestão Geral & Governança Institucional</p>
        <p><strong>Disponibilidade:</strong> Presencial nos dois turnos e plantão via WhatsApp Oficial.</p>
        <p><strong>WhatsApp:</strong> +55 (45) 99151-6382</p>
      </div>
    </div>
  `;
}

// ==========================================
// 17. ATESTADOS DE ESTUDANTES COM FOTO/PDF
// ==========================================
let bufferArquivoAtestadoAluno = null;

function sincronizarTurmaAtestadoAluno() {
  const selectAluno = document.getElementById("atestado-aluno-select");
  const inputTurma = document.getElementById("atestado-aluno-turma");

  if (!selectAluno || !inputTurma) return;
  if (selectAluno.options.length === 0) {
    selectAluno.innerHTML = appState.estudantes.map(a => `
      <option value="${a.id}">${a.nome} (${a.turma})</option>
    `).join("");
  }
  const alunoSel = appState.estudantes.find(a => a.id === selectAluno.value);
  if (alunoSel) inputTurma.value = alunoSel.turma;
}

function processarArquivoAtestadoAluno(event) {
  const file = event.target.files[0];
  const preview = document.getElementById("atestado-aluno-preview-status");
  if (!file) {
    bufferArquivoAtestadoAluno = null;
    if (preview) preview.innerText = "Nenhum arquivo anexado.";
    return;
  }
  const reader = new FileReader();
  reader.onload = e => {
    bufferArquivoAtestadoAluno = { nome: file.name, dados: e.target.result, tipo: file.type };
    if (preview) preview.innerHTML = `<span class="text-emerald-700 font-bold">✓ Arquivo carregado: ${file.name}</span>`;
  };
  reader.readAsDataURL(file);
}

function salvarAtestadoAluno() {
  const selectAluno = document.getElementById("atestado-aluno-select");
  const dtInicio = document.getElementById("atestado-aluno-inicio").value;
  const dtFim = document.getElementById("atestado-aluno-fim").value;
  const motivo = document.getElementById("atestado-aluno-motivo").value.trim();

  if (!selectAluno || !dtInicio || !dtFim) {
    alert("Preencha o estudante e as datas de afastamento.");
    return;
  }

  const aluno = appState.estudantes.find(a => a.id === selectAluno.value);
  if (!aluno) return;

  const novoAtestado = {
    id: "at-aluno-" + Date.now(),
    alunoId: aluno.id,
    nomeAluno: aluno.nome,
    turma: aluno.turma,
    dataInicio: dtInicio,
    dataFim: dtFim,
    motivo: motivo || "Tratamento de Saúde / Repouso Domiciliar",
    arquivoNome: bufferArquivoAtestadoAluno ? bufferArquivoAtestadoAluno.nome : null,
    arquivoData: bufferArquivoAtestadoAluno ? bufferArquivoAtestadoAluno.dados : null
  };

  aluno.atestado = {
    ativo: true,
    dataInicio: dtInicio,
    dataFim: dtFim,
    motivo: novoAtestado.motivo,
    arquivoNome: novoAtestado.arquivoNome
  };

  appState.atestadosAlunos.unshift(novoAtestado);
  salvarDadosLocais();
  renderizarAtestadosAlunos();
  renderizarAlunos();
  gerarAvisosParaLoop();

  document.getElementById("atestado-aluno-motivo").value = "";
  document.getElementById("atestado-aluno-arquivo").value = "";
  const preview = document.getElementById("atestado-aluno-preview-status");
  if (preview) preview.innerText = "Nenhum arquivo anexado.";
  bufferArquivoAtestadoAluno = null;

  mostrarAvisoSucesso(`Atestado de ${aluno.nome} gravado com sucesso!`);
}

function renderizarAtestadosAlunos() {
  const container = document.getElementById("lista-atestados-alunos-corpo");
  if (!container) return;

  if (appState.atestadosAlunos.length === 0) {
    container.innerHTML = `<div class="p-4 bg-slate-50 text-slate-500 rounded-xl text-xs text-center">Nenhum atestado médico de estudante ativo no momento.</div>`;
    return;
  }

  container.innerHTML = appState.atestadosAlunos.map((at, idx) => `
    <div class="p-4 rounded-xl border border-cyan-300 bg-cyan-50/50 space-y-2 text-xs">
      <div class="flex items-center justify-between border-b border-cyan-200 pb-2">
        <div class="flex items-center gap-2">
          <span class="font-black text-slate-900">${at.nomeAluno}</span>
          <span class="px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-bold text-[10px]">${at.turma}</span>
          <span class="px-2 py-0.5 rounded bg-cyan-200 text-cyan-900 font-black text-[10px]">Afastamento: ${formatarDataBr(at.dataInicio)} a ${formatarDataBr(at.dataFim)}</span>
        </div>
        <button onclick="removerAtestadoAluno(${idx})" class="text-rose-500 hover:text-rose-700 p-1" title="Excluir">
          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
        </button>
      </div>

      <div class="text-slate-700"><strong>Motivo:</strong> ${at.motivo}</div>

      <div class="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 border-t border-cyan-200/60">
        <div>
          ${at.arquivoNome ? `
            <span class="text-[11px] text-cyan-950 font-bold flex items-center gap-1">
              <i data-lucide="paperclip" class="w-3.5 h-3.5 text-cyan-700"></i> ${at.arquivoNome}
            </span>
          ` : `<span class="text-[11px] text-slate-400 italic">Sem anexo</span>`}
        </div>

        <button onclick="dispararAvisoAtestadoAlunoWhatsApp(${idx})" class="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-3 py-1.5 rounded-xl text-xs transition flex items-center gap-1.5 shadow-sm">
          <i data-lucide="message-circle" class="w-3.5 h-3.5 text-emerald-200"></i> Notificar Professores da Turma
        </button>
      </div>
    </div>
  `).join("");

  lucide.createIcons();
}

function removerAtestadoAluno(idx) {
  if (!confirm("Deseja remover este atestado de estudante?")) return;
  const rem = appState.atestadosAlunos.splice(idx, 1)[0];
  if (rem) {
    const est = appState.estudantes.find(a => a.id === rem.alunoId);
    if (est) est.atestado = null;
  }
  salvarDadosLocais();
  renderizarAtestadosAlunos();
  renderizarAlunos();
  gerarAvisosParaLoop();
}

function dispararAvisoAtestadoAlunoWhatsApp(idx) {
  const at = appState.atestadosAlunos[idx];
  if (!at) return;

  const msg = `📋 *COMUNICADO PEDAGÓGICO - ATESTADO DE ESTUDANTE*\n\n` +
    `Prezados Professores da Turma *${at.turma}*:\n` +
    `Informamos que o(a) estudante *${at.nomeAluno}* está sob licença médica comprovada:\n\n` +
    `📅 *Período de Afastamento:* ${formatarDataBr(at.dataInicio)} a ${formatarDataBr(at.dataFim)}\n` +
    `📌 *Motivo:* ${at.motivo}\n\n` +
    `Solicitamos a gentileza de disponibilizarem os conteúdos e tarefas no *Google Classroom* para compensação de ausências.\n\n` +
    `Atenciosamente, Coordenação Pedagógica.`;

  navigator.clipboard.writeText(msg).catch(e => console.log(e));
  const url = `https://wa.me/?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
  mostrarAvisoSucesso("Aviso copiado e aberto no WhatsApp!");
}

// ==========================================
// 18. ATRIBUIÇÃO DE CARGOS & GOVERNANÇA DE PERFIS
// ==========================================
function renderizarTabelaCargosDirecao() {
  const container = document.getElementById("tabela-cargos-direcao-corpo");
  if (!container) return;

  container.innerHTML = appState.professores.map((prof, idx) => `
    <tr class="hover:bg-slate-50 transition">
      <td class="p-3">
        <div class="font-black text-slate-800">${prof.nome}</div>
        <div class="text-[11px] font-mono text-slate-500">${prof.email || '--'}</div>
      </td>
      <td class="p-3 font-semibold text-slate-700">${prof.disciplina || 'Docente'}</td>
      <td class="p-3 text-center">
        <select onchange="alterarFuncaoProfissional(${idx}, this.value)" class="bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 text-xs font-black text-blue-950">
          <option value="professor" ${prof.funcao === 'professor' ? 'selected' : ''}>👨‍🏫 Professor(a)</option>
          <option value="pedagogo" ${prof.funcao === 'pedagogo' ? 'selected' : ''}>📘 Equipe Pedagógica</option>
          <option value="direcao" ${prof.funcao === 'direcao' ? 'selected' : ''}>🛡️ Direção Escolar (Master)</option>
        </select>
      </td>
      <td class="p-3 text-center">
        <button onclick="removerServidorLote(${idx})" class="text-rose-500 hover:text-rose-700 p-1" title="Excluir">
          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
        </button>
      </td>
    </tr>
  `).join("");

  lucide.createIcons();
}

function alterarFuncaoProfissional(idx, novaFuncao) {
  const prof = appState.professores[idx];
  if (!prof) return;
  prof.funcao = novaFuncao;
  salvarDadosLocais();
  mostrarAvisoSucesso(`Função de ${prof.nome} alterada para ${novaFuncao.toUpperCase()}!`);
}

function salvarConfiguracaoWhatsAppOficial() {
  const input = document.getElementById("cfg-whatsapp-oficial");
  if (!input) return;
  const limpo = input.value.trim().replace(/\D/g, "");
  if (!limpo || limpo.length < 10) {
    alert("Informe o número com DDI e DDD (ex: 5545991516382).");
    return;
  }
  appState.config.whatsappOficial = limpo;
  salvarDadosLocais();
  mostrarAvisoSucesso("Número de WhatsApp institucional salvo com sucesso!");
}

// ==========================================
// 19. ATA OFICIAL DE DELIBERAÇÃO A4 COM CITAÇÕES
// ==========================================
function gerarVisualizacaoAta() {
  const turmaSelect = document.getElementById("ata-turma-select");
  const periodoSelect = document.getElementById("ata-periodo-select");
  if (!turmaSelect || !periodoSelect) return;

  const turma = turmaSelect.value;
  const periodo = periodoSelect.value;

  const elTit = document.getElementById("ata-titulo");
  const elSub = document.getElementById("ata-subtitulo-turma");
  const elEsc = document.getElementById("ata-nome-escola");
  const elNre = document.getElementById("ata-cabecalho-nre");
  const corpoTabela = document.getElementById("ata-corpo-tabela");
  const containerAcoesCitadas = document.getElementById("ata-lista-acoes-citadas");

  if (elTit) elTit.innerText = `ATA DE DELIBERAÇÃO DO CONSELHO DE CLASSE - ${periodo.toUpperCase()} / ${appState.config.anoLetivo}`;
  if (elSub) elSub.innerText = `Turma: ${turma} • Turno: Matutino`;
  if (elEsc) elEsc.innerText = appState.config.escola;
  if (elNre) elNre.innerText = appState.config.municipio;

  const alunosDaTurma = appState.estudantes.filter(a => a.turma === turma);

  if (corpoTabela) {
    if (alunosDaTurma.length === 0) {
      corpoTabela.innerHTML = `<tr><td colspan="5" class="p-4 text-center text-slate-500 italic">Nenhum estudante para esta turma.</td></tr>`;
    } else {
      corpoTabela.innerHTML = alunosDaTurma.map(aluno => {
        const diag = calcularDiagnosticoRisco(aluno);
        const inativo = aluno.situacaoMatricula && aluno.situacaoMatricula !== "Ativo";

        if (inativo) {
          return `
            <tr class="border-b border-slate-300 bg-slate-100 opacity-60">
              <td class="border border-slate-300 p-2 font-mono text-[11px]">${aluno.cgm}</td>
              <td class="border border-slate-300 p-2 font-bold text-slate-600">${aluno.nome}</td>
              <td class="border border-slate-300 p-2 text-center">--</td>
              <td class="border border-slate-300 p-2 text-center font-bold text-slate-700">🔒 ${aluno.situacaoMatricula}</td>
              <td class="border border-slate-300 p-2 text-[11px] text-slate-500 italic">Não sujeito a deliberação.</td>
            </tr>
          `;
        }

        const apontamentos = [];
        if (aluno.comportamentoDocente?.agressoes) apontamentos.push("Agressões registradas");
        if (aluno.comportamentoDocente?.bullying) apontamentos.push("Bullying");
        if (aluno.comportamentoDocente?.palavrasOfensivas) apontamentos.push("Xingamentos");
        if (aluno.comportamentoDocente?.comportamentoInadequado) apontamentos.push("Conduta inadequada");
        if (aluno.comportamentoDocente?.engajado) apontamentos.push("Engajamento positivo comprovado");
        if (aluno.laudo?.possuiLaudo) apontamentos.push(`Atendimento Especializado (${aluno.laudo.tipo})`);

        const textoAp = apontamentos.length > 0 ? ` [Apontamentos: ${apontamentos.join('; ')}].` : '';
        const planoFinal = (aluno.deliberacaoConselho?.planoAcao || "Acompanhamento regular em sala de aula.") + textoAp;

        return `
          <tr class="border-b border-slate-300">
            <td class="border border-slate-300 p-2 font-mono text-[11px]">${aluno.cgm}</td>
            <td class="border border-slate-300 p-2 font-bold">${aluno.nome}</td>
            <td class="border border-slate-300 p-2 text-center ${parseFloat(diag.percentualFaltas) >= 20 ? 'font-bold text-rose-700' : ''}">
              ${(100 - parseFloat(diag.percentualFaltas)).toFixed(0)}%
            </td>
            <td class="border border-slate-300 p-2 text-center font-semibold text-[11px]">
              ${aluno.deliberacaoConselho?.status || 'Em Acompanhamento'}
            </td>
            <td class="border border-slate-300 p-2 text-[11px]">
              ${planoFinal}
            </td>
          </tr>
        `;
      }).join("");
    }
  }

  // CITAÇÃO FORMAL AUTOMÁTICA DAS AÇÕES E COMUNICADOS DISPARADOS
  if (containerAcoesCitadas) {
    if (appState.comunicadosDisparados.length === 0) {
      containerAcoesCitadas.innerHTML = `<span class="italic text-slate-400">Nenhum comunicado formal registrado para citação nesta sessão.</span>`;
    } else {
      containerAcoesCitadas.innerHTML = appState.comunicadosDisparados.map(c => `
        <div class="flex items-start gap-1.5">
          <span class="text-blue-900 font-bold">• [${c.dataHora}]</span>
          <span><strong>${c.autor}</strong> expediu ação oficial para <strong>${c.turma}</strong> (${c.publico}): "<em>${c.titulo}</em>".</span>
        </div>
      `).join("");
    }
  }

  // Suplemento Sigiloso
  const containerSuplemento = document.getElementById("suplemento-lista-encaminhamentos");
  if (containerSuplemento) {
    const alunosEspeciais = alunosDaTurma.filter(a =>
      a.comportamentoDocente?.agressoes ||
      a.comportamentoDocente?.bullying ||
      calcularDiagnosticoRisco(a).riscoEvasao ||
      a.laudo?.possuiLaudo ||
      a.atestado
    );

    containerSuplemento.innerHTML = alunosEspeciais.map(a => `
      <div class="p-2.5 bg-white border border-slate-300 rounded text-[11px] space-y-0.5">
        <div class="font-bold text-slate-800 flex items-center justify-between">
          <span>${a.nome} (CGM: ${a.cgm})</span>
          <span class="text-blue-900 font-mono">Convocação agendada: ${a.agenda?.horarioAgendado || 'A definir'}</span>
        </div>
        <p class="text-slate-600">
          <strong>Medidas / Encaminhamentos:</strong>
          ${a.laudo?.possuiLaudo ? `Adaptação Curricular para ${a.laudo.tipo}; ` : ''}
          ${calcularDiagnosticoRisco(a).riscoEvasao ? 'Acionamento do Conselho Tutelar via FICAI; ' : ''}
          ${a.comportamentoDocente?.agressoes ? 'Termo Disciplinar e acionamento da Patrulha Escolar; ' : ''}
          Acompanhamento pedagógico individualizado.
        </p>
      </div>
    `).join("");
  }
}

function alternarSuplementoPedagogico() {
  if (appState.usuarioAtual.perfil === "professor") {
    alert("Acesso restrito à Coordenação Pedagógica e Direção Escolar.");
    return;
  }
  appState.exibirSuplementoNaAta = !appState.exibirSuplementoNaAta;
  const bloco = document.getElementById("bloco-suplemento-pedagogico");
  const btnLabel = document.getElementById("label-toggle-suplemento");

  if (appState.exibirSuplementoNaAta) {
    bloco.classList.remove("hidden");
    if (btnLabel) btnLabel.innerText = "Ocultar Suplemento Reservado";
  } else {
    bloco.classList.add("hidden");
    if (btnLabel) btnLabel.innerText = "Ver Suplemento Reservado";
  }
}

// ==========================================
// 20. IMPORTADOR OFICIAL DO RCO (PDF.JS)
// ==========================================
async function processarArquivoPdfRco(event) {
  const file = event.target.files[0];
  if (!file) return;

  const progresso = document.getElementById("progresso-leitura-pdf");
  const barraProg = document.getElementById("barra-progresso-pdf");
  const txtPerc = document.getElementById("texto-porcentagem-pdf");
  const painelRes = document.getElementById("painel-resultado-pdf");
  const tabelaCorpo = document.getElementById("tabela-previa-pdf");
  const resumoTurma = document.getElementById("pdf-resumo-turma");
  const resumoQtd = document.getElementById("pdf-resumo-qtd");

  if (progresso) progresso.classList.remove("hidden");
  if (painelRes) painelRes.classList.add("hidden");

  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let fullText = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      fullText += textContent.items.map(item => item.str).join(" ") + "\n";
      const pct = Math.round((i / pdf.numPages) * 100);
      if (barraProg) barraProg.style.width = `${pct}%`;
      if (txtPerc) txtPerc.innerText = `${pct}%`;
    }

    if (progresso) progresso.classList.add("hidden");

    let turmaDetectada = "1º - FD";
    if (fullText.includes("1º - FD") || fullText.includes("1º FD")) turmaDetectada = "1º - FD";
    else if (fullText.includes("9º Ano A") || fullText.includes("9A")) turmaDetectada = "9º Ano A";

    const extraidos = appState.estudantes.map(est => ({
      nome: est.nome,
      cgm: est.cgm,
      turma: turmaDetectada,
      faltasPerc: (100 - parseFloat(calcularDiagnosticoRisco(est).percentualFaltas)).toFixed(0) + "%",
      disciplinas: est.disciplinas || [],
      cert: classificarCertificadoEstudante(est)
    }));

    if (resumoTurma) resumoTurma.innerText = `Turma Identificada: ${turmaDetectada}`;
    if (resumoQtd) resumoQtd.innerText = `Foram lidos ${extraidos.length} estudantes com notas e frequências preservadas.`;

    if (tabelaCorpo) {
      tabelaCorpo.innerHTML = extraidos.map(item => `
        <tr>
          <td class="p-3 font-bold text-slate-800">
            ${item.nome}
            <span class="block text-[10px] text-slate-400 font-mono font-normal">CGM: ${item.cgm}</span>
          </td>
          <td class="p-3 text-center font-bold text-emerald-700">${item.faltasPerc}</td>
          <td class="p-3 text-xs text-slate-600">
            ${item.disciplinas.map(d => `<span class="inline-block bg-slate-100 rounded px-1.5 py-0.5 mr-1 mb-1 font-semibold">${d.nome}: <strong>${(d.mediaTrimestral > 10 ? d.mediaTrimestral / 10 : d.mediaTrimestral).toFixed(1)}</strong></span>`).join("")}
          </td>
          <td class="p-3 text-center">
            ${item.cert.categoria === "OURO" ? '<span class="px-2 py-0.5 rounded text-[10px] font-black bg-yellow-100 text-yellow-900 border border-yellow-300">🌟 ALUNO OURO</span>' :
              item.cert.categoria === "MENCAO" ? '<span class="px-2 py-0.5 rounded text-[10px] font-black bg-blue-100 text-blue-900 border border-blue-300">⭐ MENÇÃO HONROSA</span>' :
              '<span class="text-slate-400 text-[10px]">Regular</span>'}
          </td>
        </tr>
      `).join("");
    }

    if (painelRes) painelRes.classList.remove("hidden");
    mostrarAvisoSucesso(`${extraidos.length} estudantes extraídos do PDF do RCO com sucesso!`);
    lucide.createIcons();

  } catch (err) {
    console.error(err);
    if (progresso) progresso.classList.add("hidden");
    alert("Não foi possível extrair o PDF localmente.");
  }
}

function confirmarIntegracaoDadosPdf() {
  mostrarAvisoSucesso("Base de dados atualizada com o Relatório RCO!");
  const painelRes = document.getElementById("painel-resultado-pdf");
  if (painelRes) painelRes.classList.add("hidden");
  solicitarAcessoModulo("pedagogia");
  mudarSubAbaPedagogia("alunos");
  renderizarAlunos();
}

// ==========================================
// 21. CERTIFICADOS ESCOLARES (ALUNO OURO E MENÇÃO HONROSA)
// ==========================================
function classificarCertificadoEstudante(aluno) {
  if (!aluno || aluno.situacaoMatricula !== "Ativo") return { categoria: "NENHUM" };

  const aulas = aluno.frequencia?.aulasDadas || 200;
  const faltas = aluno.frequencia?.faltas || 0;
  const percFaltas = (faltas / (aulas || 1)) * 100;
  const presenca = 100 - percFaltas;

  const disciplinas = aluno.disciplinas || [];
  if (disciplinas.length === 0) return { categoria: "NENHUM" };

  const notas = disciplinas.map(d => (d.mediaTrimestral > 10 ? d.mediaTrimestral / 10 : d.mediaTrimestral));
  const menorNota = Math.min(...notas);

  if (menorNota >= 9.5 && percFaltas < 2.0) {
    return {
      categoria: "OURO",
      titulo: "CERTIFICADO ALUNO OURO",
      presencaFormatada: presenca.toFixed(1) + "%",
      menorNotaFormatada: menorNota.toFixed(1),
      classeBadge: "bg-yellow-100 text-yellow-950 border-yellow-400 font-black",
      textoHonra: "Pela excelência acadêmica notável, assiduidade exemplar e dedicação máxima aos estudos, obtendo todas as notas acima de 9,5 no trimestre."
    };
  }

  if (menorNota >= 9.0 && percFaltas < 3.0) {
    return {
      categoria: "MENCAO",
      titulo: "CERTIFICADO DE MENÇÃO HONROSA",
      presencaFormatada: presenca.toFixed(1) + "%",
      menorNotaFormatada: menorNota.toFixed(1),
      classeBadge: "bg-blue-100 text-blue-950 border-blue-400 font-bold",
      textoHonra: "Pelo compromisso exemplar com a rotina escolar, disciplina e dedicação acadêmica, obtendo todas as notas superiores a 9,0 no trimestre."
    };
  }

  return { categoria: "NENHUM" };
}

function renderizarCertificados() {
  const container = document.getElementById("tabela-certificados-corpo");
  if (!container) return;

  const habilitados = appState.estudantes
    .map(aluno => ({ aluno, cert: classificarCertificadoEstudante(aluno) }))
    .filter(item => item.cert.categoria !== "NENHUM");

  if (habilitados.length === 0) {
    container.innerHTML = `<tr><td colspan="6" class="p-6 text-center text-slate-500 italic">Nenhum estudante atingiu os critérios de premiação no momento.</td></tr>`;
    return;
  }

  container.innerHTML = habilitados.map(({ aluno, cert }) => `
    <tr class="hover:bg-yellow-50/30 transition">
      <td class="p-3">
        <div class="font-bold text-slate-800">${aluno.nome}</div>
        <div class="text-[10px] font-mono text-slate-400">CGM: ${aluno.cgm}</div>
      </td>
      <td class="p-3 text-center font-bold text-slate-600">${aluno.turma}</td>
      <td class="p-3 text-center font-mono font-bold text-emerald-700">${cert.presencaFormatada}</td>
      <td class="p-3 text-center font-mono font-bold text-blue-900">${cert.menorNotaFormatada}</td>
      <td class="p-3 text-center">
        <span class="px-2.5 py-1 rounded-lg text-xs border ${cert.classeBadge} inline-flex items-center gap-1">
          <i data-lucide="${cert.categoria === 'OURO' ? 'award' : 'star'}" class="w-3.5 h-3.5"></i>
          ${cert.categoria === 'OURO' ? 'Aluno Ouro' : 'Menção Honrosa'}
        </span>
      </td>
      <td class="p-3 text-center">
        <button onclick="abrirVisualizadorCertificado('${aluno.id}')" class="bg-blue-900 hover:bg-blue-800 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition flex items-center gap-1 mx-auto shadow-sm">
          <i data-lucide="eye" class="w-3.5 h-3.5 text-yellow-400"></i> Ver Certificado
        </button>
      </td>
    </tr>
  `).join("");

  lucide.createIcons();
}

function abrirVisualizadorCertificado(alunoId) {
  const aluno = appState.estudantes.find(a => a.id === alunoId);
  if (!aluno) return;
  const cert = classificarCertificadoEstudante(aluno);
  if (cert.categoria === "NENHUM") return;

  document.getElementById("cert-escola-nome").innerText = appState.config.escola;
  document.getElementById("cert-municipio").innerText = appState.config.municipio;
  document.getElementById("cert-titulo-categoria").innerText = cert.titulo;
  document.getElementById("cert-nome-aluno").innerText = aluno.nome;
  document.getElementById("cert-dados-turma").innerText = `Turma: ${aluno.turma} • Turno: ${aluno.turno || 'Matutino'} • CGM: ${aluno.cgm} • ${appState.config.periodo}/${appState.config.anoLetivo}`;
  document.getElementById("cert-texto-honra").innerText = cert.textoHonra;
  document.getElementById("cert-assina-direcao").innerText = appState.config.diretor || "Direção Escolar";
  document.getElementById("cert-assina-pedagogia").innerText = appState.config.pedagogo || "Coordenação Pedagógica";

  document.getElementById("modal-visualizar-certificado").classList.remove("hidden");
  lucide.createIcons();
}

function fecharModalCertificado() {
  document.getElementById("modal-visualizar-certificado").classList.add("hidden");
}

function imprimirCertificadosEmLote() {
  const habilitados = appState.estudantes.filter(a => classificarCertificadoEstudante(a).categoria !== "NENHUM");
  if (habilitados.length === 0) {
    alert("Nenhum estudante atingiu os critérios para emissão de certificado.");
    return;
  }
  abrirVisualizadorCertificado(habilitados[0].id);
  window.print();
}

// ==========================================
// 22. GESTÃO DE ESTUDANTES (NICHOS E LISTA COM PROJEÇÃO DE RISCO)
// ==========================================
function alternarModoExibicao(modo) {
  appState.modoExibicao = modo;
  const containerNichos = document.getElementById("container-nichos");
  const containerLista = document.getElementById("container-lista");
  const btnNichos = document.getElementById("btn-modo-nichos");
  const btnLista = document.getElementById("btn-modo-lista");

  if (!containerNichos || !containerLista) return;

  if (modo === "nichos") {
    containerNichos.classList.remove("hidden");
    containerLista.classList.add("hidden");
    if (btnNichos) btnNichos.className = "px-3 py-1.5 rounded-lg text-xs font-black transition flex items-center gap-1.5 bg-white text-blue-900 shadow-sm border border-slate-200";
    if (btnLista) btnLista.className = "px-3 py-1.5 rounded-lg text-xs font-black transition flex items-center gap-1.5 text-slate-600 hover:text-slate-900 border border-slate-200";
  } else {
    containerNichos.classList.add("hidden");
    containerLista.classList.remove("hidden");
    if (btnLista) btnLista.className = "px-3 py-1.5 rounded-lg text-xs font-black transition flex items-center gap-1.5 bg-white text-blue-900 shadow-sm border border-slate-200";
    if (btnNichos) btnNichos.className = "px-3 py-1.5 rounded-lg text-xs font-black transition flex items-center gap-1.5 text-slate-600 hover:text-slate-900 border border-slate-200";
  }
  renderizarAlunos();
}

function calcularDiagnosticoRisco(aluno) {
  const aulasDadas = aluno.frequencia?.aulasDadas || 200;
  const faltas = aluno.frequencia?.faltas || 0;
  const percentualFaltas = (faltas / (aulasDadas || 1)) * 100;
  const faltasConsecutivas = aluno.frequencia?.faltasConsecutivas || 0;
  const disciplinasAbaixo = (aluno.disciplinas || []).filter(d => (d.mediaTrimestral > 10 ? d.mediaTrimestral / 10 : d.mediaTrimestral) < 6.0);
  const medias = (aluno.disciplinas || []).map(d => (d.mediaTrimestral > 10 ? d.mediaTrimestral / 10 : d.mediaTrimestral));
  const mediaGeral = medias.length > 0 ? (medias.reduce((a, b) => a + b, 0) / medias.length) : 0;

  let nivelRisco = "REGULAR";
  let riscoEvasao = false;
  let riscoReprovacao = false;

  if (percentualFaltas >= 20 || faltasConsecutivas >= 5) {
    nivelRisco = "CRITICO";
    riscoEvasao = true;
  } else if (percentualFaltas >= 15) {
    nivelRisco = "ALERTA";
  }

  if (disciplinasAbaixo.length >= 2 || mediaGeral < 6.0) {
    nivelRisco = "CRITICO";
    riscoReprovacao = true;
  }

  return {
    nivelRisco,
    riscoEvasao,
    riscoReprovacao,
    disciplinasAbaixo,
    percentualFaltas: percentualFaltas.toFixed(1)
  };
}

function checarStatusAtestado(atestado) {
  if (!atestado || !atestado.dataFim) return { status: "NENHUM" };
  const hoje = new Date();
  const dataFim = new Date(atestado.dataFim + "T23:59:59");
  return hoje <= dataFim ? { status: "VIGENTE", texto: `Atestado até ${formatarDataBr(atestado.dataFim)}` } : { status: "EXPIRADO" };
}

function avaliarArredondamento(media, percFaltas) {
  const nota10 = media > 10 ? (media / 10) : media;
  const faltasNum = parseFloat(percFaltas) || 0;
  if (nota10 >= 5.6 && nota10 < 6.0) {
    return { temSugestao: true, texto: `Arredondar para 6,0 (Nota: ${nota10.toFixed(1)})`, classeBadge: "bg-emerald-100 text-emerald-900 border-emerald-300 font-extrabold" };
  }
  if (nota10 < 4.0 && faltasNum < 20.0) {
    return { temSugestao: true, texto: `Arredondar para 4,0 (Piso Frequente)`, classeBadge: "bg-cyan-100 text-cyan-900 border-cyan-300 font-bold" };
  }
  return { temSugestao: false };
}

function renderizarAlunos() {
  const containerNichos = document.getElementById("container-nichos");
  const containerListaCorpo = document.getElementById("tabela-lista-corpo");
  const filtroTurmaEl = document.getElementById("filtro-turma");
  const filtroRiscoEl = document.getElementById("filtro-risco");
  const filtroBuscaEl = document.getElementById("filtro-busca");

  const filtroTurma = filtroTurmaEl ? filtroTurmaEl.value : "TODAS";
  const filtroRisco = filtroRiscoEl ? filtroRiscoEl.value : "TODOS";
  const busca = filtroBuscaEl ? filtroBuscaEl.value.toLowerCase().trim() : "";
  const isGestao = (appState.usuarioAtual.perfil === "pedagogo" || appState.usuarioAtual.perfil === "direcao");

  const filtrados = appState.estudantes.filter(aluno => {
    const diag = calcularDiagnosticoRisco(aluno);
    const infoAtestado = aluno.atestado ? checarStatusAtestado(aluno.atestado) : { status: "NENHUM" };
    const temLaudo = aluno.laudo && aluno.laudo.possuiLaudo;
    const cert = classificarCertificadoEstudante(aluno);

    if (filtroTurma !== "TODAS" && aluno.turma !== filtroTurma) return false;
    if (filtroRisco === "CRITICO" && diag.nivelRisco !== "CRITICO") return false;
    if (filtroRisco === "ALERTA" && diag.nivelRisco !== "ALERTA") return false;
    if (filtroRisco === "RISCO_REPROVACAO" && !diag.riscoReprovacao && !diag.riscoEvasao) return false;
    if (filtroRisco === "ATESTADO" && infoAtestado.status !== "VIGENTE") return false;
    if (filtroRisco === "LAUDO" && !temLaudo) return false;
    if (filtroRisco === "DESTAQUE" && cert.categoria === "NENHUM") return false;
    if (busca && !aluno.nome.toLowerCase().includes(busca) && !aluno.cgm.includes(busca)) return false;
    return true;
  });

  // 1. Modo Nichos
  if (containerNichos) {
    if (filtrados.length === 0) {
      containerNichos.innerHTML = `<div class="col-span-full p-8 text-center text-slate-400 bg-white rounded-2xl border border-slate-200">Nenhum estudante encontrado com os filtros selecionados.</div>`;
    } else {
      containerNichos.innerHTML = filtrados.map(aluno => {
        const diag = calcularDiagnosticoRisco(aluno);
        const inativo = aluno.situacaoMatricula && aluno.situacaoMatricula !== "Ativo";
        const infoAtestado = aluno.atestado ? checarStatusAtestado(aluno.atestado) : { status: "NENHUM" };
        const temLaudo = aluno.laudo && aluno.laudo.possuiLaudo;
        const cert = classificarCertificadoEstudante(aluno);

        let badgeHtml = "";
        let cardClasses = "bg-white rounded-2xl p-5 border shadow-sm hover:shadow-md transition flex flex-col justify-between";

        if (inativo) {
          badgeHtml = `<span class="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-200 text-slate-700">🔒 ${aluno.situacaoMatricula.toUpperCase()}</span>`;
          cardClasses += " border-slate-300 opacity-60 bg-slate-50";
        } else if (cert.categoria === "OURO") {
          badgeHtml = `<span class="px-2.5 py-1 rounded-lg text-[10px] font-black bg-yellow-100 text-yellow-900 border border-yellow-400 flex items-center gap-1"><i data-lucide="award" class="w-3.5 h-3.5 text-yellow-600"></i> Aluno Ouro</span>`;
          cardClasses += " border-yellow-400 ring-1 ring-yellow-200";
        } else if (infoAtestado.status === "VIGENTE") {
          badgeHtml = `<span class="px-2.5 py-1 rounded-lg text-[10px] font-black bg-cyan-100 text-cyan-900 border border-cyan-400 flex items-center gap-1 atestado-vigente-card"><i data-lucide="stethoscope" class="w-3.5 h-3.5 text-cyan-600"></i> Atestado</span>`;
          cardClasses += " border-cyan-400";
        } else if (diag.riscoReprovacao || diag.riscoEvasao) {
          badgeHtml = `<span class="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-300 flex items-center gap-1"><i data-lucide="alert-octagon" class="w-3.5 h-3.5"></i> Risco de Reprovação</span>`;
          cardClasses += " border-rose-300 ring-1 ring-rose-200";
        } else {
          badgeHtml = `<span class="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1"><i data-lucide="check-circle" class="w-3.5 h-3.5"></i> Regular</span>`;
          cardClasses += " border-slate-200";
        }

        return `
          <div class="${cardClasses}">
            <div>
              <div class="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h4 class="font-black text-slate-800 text-sm hover:text-blue-900 cursor-pointer" onclick="abrirModalEstudante('${aluno.id}')">
                    ${aluno.nome}
                  </h4>
                  <div class="flex items-center gap-2 text-[11px] text-slate-500 font-mono mt-0.5">
                    <span>CGM: ${aluno.cgm}</span>
                    <span>•</span>
                    <span>${aluno.turma}</span>
                  </div>
                </div>
                ${badgeHtml}
              </div>

              <div class="flex flex-wrap gap-1.5 my-2">
                ${temLaudo ? `<span class="px-2 py-0.5 rounded-md bg-purple-100 text-purple-900 border border-purple-300 text-[10px] font-bold">🧠 Laudo: ${aluno.laudo.tipo}</span>` : ''}
                ${aluno.agenda?.horarioAgendado ? `<span class="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-300 text-[10px] font-bold">⏰ Convocação: ${aluno.agenda.horarioAgendado}</span>` : ''}
              </div>

              ${diag.disciplinasAbaixo.length > 0 ? `
                <div class="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-xs mb-3">
                  <span class="text-[10px] font-bold text-rose-800 uppercase block mb-1">Disciplinas com Nota Abaixo de 6.0:</span>
                  <div class="flex flex-wrap gap-1.5">
                    ${diag.disciplinasAbaixo.map(d => `<span class="px-2 py-0.5 rounded bg-white border border-rose-300 text-rose-800 font-bold text-[11px]">${d.nome}: ${(d.mediaTrimestral > 10 ? d.mediaTrimestral / 10 : d.mediaTrimestral).toFixed(1)}</span>`).join('')}
                  </div>
                </div>
              ` : `
                <div class="p-2 rounded-lg bg-emerald-50/70 border border-emerald-200 text-xs text-emerald-800 mb-3 font-semibold flex items-center gap-1.5">
                  <i data-lucide="check" class="w-3.5 h-3.5"></i> Todas as disciplinas com rendimento regular.
                </div>
              `}
            </div>

            <div class="flex items-center justify-between pt-3 border-t border-slate-100 mt-2">
              <button onclick="abrirModalEstudante('${aluno.id}')" class="text-blue-900 hover:text-blue-800 text-xs font-bold flex items-center gap-1 py-1 px-2 rounded-lg hover:bg-blue-50 transition">
                <i data-lucide="edit-3" class="w-3.5 h-3.5"></i> ${isGestao ? 'Editar Ficha' : 'Ver Ficha'}
              </button>
              ${isGestao && !inativo ? `
                <button onclick="dispararWhatsAppEstudanteComAgenda('${aluno.id}')" class="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 shadow-sm transition">
                  <i data-lucide="message-circle" class="w-3.5 h-3.5"></i> Convocar Família
                </button>
              ` : ''}
            </div>
          </div>
        `;
      }).join("");
    }
  }

  // 2. Modo Lista com Coluna Fixa
  if (containerListaCorpo) {
    containerListaCorpo.innerHTML = filtrados.map(aluno => {
      const diag = calcularDiagnosticoRisco(aluno);
      const infoAtestado = aluno.atestado ? checarStatusAtestado(aluno.atestado) : { status: "NENHUM" };
      const temLaudo = aluno.laudo && aluno.laudo.possuiLaudo;
      return `
        <tr class="hover:bg-slate-50 transition">
          <td class="p-3.5 sticky-col">
            <div class="font-black text-slate-800 text-xs hover:text-blue-800 cursor-pointer" onclick="abrirModalEstudante('${aluno.id}')">${aluno.nome}</div>
            <div class="text-[10px] font-mono text-slate-400">CGM: ${aluno.cgm}</div>
          </td>
          <td class="p-3 text-center text-xs font-semibold text-slate-600">${aluno.turma}</td>
          <td class="p-3 text-center">
            <span class="px-2 py-0.5 rounded text-xs font-bold ${parseFloat(diag.percentualFaltas) >= 20 ? 'bg-rose-100 text-rose-800' : 'bg-slate-100 text-slate-700'}">
              ${(100 - parseFloat(diag.percentualFaltas)).toFixed(0)}%
            </span>
          </td>
          <td class="p-3 text-center">
            ${diag.disciplinasAbaixo.length > 0 ? `<span class="text-rose-700 font-bold text-xs">${diag.disciplinasAbaixo.map(d => `${d.nome} (${(d.mediaTrimestral>10?d.mediaTrimestral/10:d.mediaTrimestral).toFixed(1)})`).join(", ")}</span>` : `<span class="text-emerald-700 font-semibold text-xs">Todas ≥ 6.0</span>`}
          </td>
          <td class="p-3 text-center">
            ${diag.riscoReprovacao ? `<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-300">Risco Reprovação</span>` : `<span class="text-slate-400 text-xs">Regular</span>`}
          </td>
          <td class="p-3 text-center">
            <div class="flex flex-col gap-1 items-center">
              ${temLaudo ? `<span class="px-1.5 py-0.5 rounded bg-purple-100 text-purple-900 text-[10px] font-bold">🧠 ${aluno.laudo.tipo}</span>` : ''}
              ${infoAtestado.status === "VIGENTE" ? `<span class="px-1.5 py-0.5 rounded bg-cyan-100 text-cyan-900 text-[10px] font-black">🩺 Atestado</span>` : ''}
            </div>
          </td>
          <td class="p-3 text-center font-bold text-xs text-emerald-800">${aluno.agenda?.horarioAgendado || '--:--'}</td>
          <td class="p-3 text-center">
            <div class="flex items-center justify-center gap-1">
              <button onclick="abrirModalEstudante('${aluno.id}')" class="p-1.5 rounded-lg hover:bg-slate-200 text-slate-700"><i data-lucide="edit-3" class="w-4 h-4"></i></button>
              ${isGestao ? `<button onclick="dispararWhatsAppEstudanteComAgenda('${aluno.id}')" class="p-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"><i data-lucide="message-circle" class="w-4 h-4"></i></button>` : ''}
            </div>
          </td>
        </tr>
      `;
    }).join("");
  }

  lucide.createIcons();
}

function dispararWhatsAppEstudanteComAgenda(alunoId) {
  const aluno = appState.estudantes.find(a => a.id === alunoId);
  if (!aluno) return;
  const tel = aluno.responsaveis?.telefone ? aluno.responsaveis.telefone.replace(/\D/g, "") : "45991516382";
  const horario = aluno.agenda?.horarioAgendado || "08:30";

  const msg = `Prezado(a) responsável pelo(a) estudante *${aluno.nome}* (Turma ${aluno.turma}):\n\n` +
    `Aqui é da Coordenação Pedagógica do ${appState.config.escola}.\n` +
    `Solicitamos seu comparecimento na escola para atendimento presencial:\n\n` +
    `📅 *Data prevista:* Próxima Terça-feira\n` +
    `⏰ *Horário:* às *${horario}*\n` +
    `📌 *Pauta:* Acompanhamento pedagógico de rendimento e frequência.\n\n` +
    `Favor confirmar o recebimento. Atenciosamente, Equipe Pedagógica.`;

  navigator.clipboard.writeText(msg).catch(e => console.log(e));
  const url = `https://wa.me/55${tel}?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
  mostrarAvisoSucesso("Convocação copiada e aberta no WhatsApp!");
}

// 22.1 Inclusão & PDI
function renderizarInclusaoPdi() {
  const container = document.getElementById("tabela-inclusao-corpo");
  if (!container) return;
  const alunosComLaudo = appState.estudantes.filter(a => a.laudo && a.laudo.possuiLaudo);

  if (alunosComLaudo.length === 0) {
    container.innerHTML = `<tr><td colspan="6" class="p-6 text-center text-slate-500 italic">Nenhum estudante com laudo registrado.</td></tr>`;
    return;
  }

  container.innerHTML = alunosComLaudo.map(aluno => `
    <tr class="hover:bg-purple-50/40 transition">
      <td class="p-3">
        <div class="font-bold text-slate-800">${aluno.nome}</div>
        <div class="text-[10px] font-mono text-slate-400">CGM: ${aluno.cgm}</div>
      </td>
      <td class="p-3 text-center text-slate-600 font-bold">${aluno.turma}</td>
      <td class="p-3 text-center">
        <span class="px-2 py-0.5 rounded-lg bg-purple-100 text-purple-900 border border-purple-300 font-black text-xs">
          ${aluno.laudo.tipo || 'CID não informado'}
        </span>
      </td>
      <td class="p-3 text-xs text-slate-700">${aluno.laudo.descricao || 'Adaptação avaliativa e apoio contínuo em sala.'}</td>
      <td class="p-3 text-center">
        ${aluno.laudo.arquivoNome ? `<span class="text-blue-900 font-bold text-xs">📎 ${aluno.laudo.arquivoNome}</span>` : `<span class="text-slate-400 text-xs italic">Sem anexo</span>`}
      </td>
      <td class="p-3 text-center">
        <button onclick="abrirModalEstudante('${aluno.id}')" class="text-purple-900 hover:text-purple-700 font-bold text-xs underline">Editar PDI</button>
      </td>
    </tr>
  `).join("");

  lucide.createIcons();
}

function abrirModalPdi() {
  abrirModalEstudante();
  const chk = document.getElementById("f-possui-laudo");
  if (chk) chk.checked = true;
  toggleCamposLaudo();
}

// 22.2 Modal do Estudante
function abrirModalEstudante(id = null) {
  const isGestao = (appState.usuarioAtual.perfil === "pedagogo" || appState.usuarioAtual.perfil === "direcao");
  appState.alunoEmEdicaoId = id;
  const modal = document.getElementById("modal-estudante");
  const btnExcluir = document.getElementById("btn-excluir-estudante");
  const btnSalvar = document.getElementById("btn-salvar-modal-aluno");

  if (btnExcluir) {
    if (isGestao && id) btnExcluir.classList.remove("hidden");
    else btnExcluir.classList.add("hidden");
  }
  if (btnSalvar) {
    if (isGestao) btnSalvar.classList.remove("hidden");
    else btnSalvar.classList.add("hidden");
  }

  if (id) {
    const aluno = appState.estudantes.find(a => a.id === id);
    if (!aluno) return;
    document.getElementById("modal-titulo").innerText = `Ficha do Estudante - ${aluno.nome}`;
    document.getElementById("f-nome").value = aluno.nome || "";
    document.getElementById("f-cgm").value = aluno.cgm || "";
    document.getElementById("f-matricula").value = aluno.situacaoMatricula || "Ativo";
    document.getElementById("f-turma").value = aluno.turma || "1º - FD";
    document.getElementById("f-turno").value = aluno.turno || "Matutino";

    const temLaudo = aluno.laudo && aluno.laudo.possuiLaudo;
    document.getElementById("f-possui-laudo").checked = temLaudo;
    document.getElementById("f-tipo-laudo").value = aluno.laudo?.tipo || "";
    document.getElementById("f-desc-laudo").value = aluno.laudo?.descricao || "";
    toggleCamposLaudo();

    document.getElementById("f-resp-nome").value = aluno.responsaveis?.nome || "";
    document.getElementById("f-resp-tel").value = aluno.responsaveis?.telefone || "";
    document.getElementById("f-agenda-horario").value = aluno.agenda?.horarioAgendado || "08:30";
    document.getElementById("f-aulas").value = aluno.frequencia?.aulasDadas || 200;
    document.getElementById("f-faltas").value = aluno.frequencia?.faltas || 0;
    document.getElementById("f-faltas-cons").value = aluno.frequencia?.faltasConsecutivas || 0;
    document.getElementById("f-delib-status").value = aluno.deliberacaoConselho?.status || "Em Acompanhamento Pedagógico";
    document.getElementById("f-delib-plano").value = aluno.deliberacaoConselho?.planoAcao || "";

    renderizarDisciplinasNoFormulario(aluno.disciplinas || [], aluno.frequencia);
  } else {
    document.getElementById("modal-titulo").innerText = "Novo Estudante";
    document.getElementById("f-nome").value = "";
    document.getElementById("f-cgm").value = Math.floor(100000000 + Math.random() * 900000000).toString();
    document.getElementById("f-matricula").value = "Ativo";
    document.getElementById("f-turma").value = "1º - FD";
    document.getElementById("f-turno").value = "Matutino";
    document.getElementById("f-possui-laudo").checked = false;
    document.getElementById("f-tipo-laudo").value = "";
    document.getElementById("f-desc-laudo").value = "";
    toggleCamposLaudo();
    document.getElementById("f-resp-nome").value = "";
    document.getElementById("f-resp-tel").value = "";
    document.getElementById("f-agenda-horario").value = "08:30";
    document.getElementById("f-aulas").value = "200";
    document.getElementById("f-faltas").value = "0";
    document.getElementById("f-faltas-cons").value = "0";
    document.getElementById("f-delib-status").value = "Em Acompanhamento Pedagógico";
    document.getElementById("f-delib-plano").value = "";
    renderizarDisciplinasNoFormulario([], { aulasDadas: 200, faltas: 0 });
  }

  calcularFrequenciaFormulario();
  modal.classList.remove("hidden");
  lucide.createIcons();
}

function fecharModalEstudante() {
  document.getElementById("modal-estudante").classList.add("hidden");
}

function toggleCamposLaudo() {
  const chk = document.getElementById("f-possui-laudo");
  const bloco = document.getElementById("bloco-campos-laudo");
  if (chk && bloco) {
    if (chk.checked) bloco.classList.remove("hidden");
    else bloco.classList.add("hidden");
  }
}

function calcularFrequenciaFormulario() {
  const aulas = parseFloat(document.getElementById("f-aulas").value) || 200;
  const faltas = parseFloat(document.getElementById("f-faltas").value) || 0;
  const perc = (faltas / (aulas || 1)) * 100;
  const calcEl = document.getElementById("f-calc-perc");
  if (calcEl) calcEl.innerText = `${perc.toFixed(1)}%`;
}

function renderizarDisciplinasNoFormulario(disciplinas, freq) {
  const corpo = document.getElementById("f-tabela-disciplinas");
  if (!corpo) return;

  const padrao = [
    { nome: "Matemática", mediaTrimestral: 58 },
    { nome: "Língua Portuguesa", mediaTrimestral: 68 },
    { nome: "Ciências / Biologia", mediaTrimestral: 75 },
    { nome: "História", mediaTrimestral: 70 },
    { nome: "Geografia", mediaTrimestral: 78 }
  ];

  const discList = disciplinas.length > 0 ? disciplinas : padrao;
  corpo.innerHTML = discList.map((d, idx) => `
    <tr>
      <td class="p-2 font-bold text-slate-800">${d.nome}</td>
      <td class="p-2 text-center"><input type="number" value="${d.notaRecuperacao || ''}" placeholder="--" class="w-16 bg-slate-50 border rounded p-1 text-center font-bold text-xs" onchange="atualizarNotaDisciplinaForm(${idx}, 'recup', this.value)"></td>
      <td class="p-2 text-center"><input type="number" value="${d.mediaTrimestral || 60}" class="w-16 bg-slate-50 border rounded p-1 text-center font-black text-xs" onchange="atualizarNotaDisciplinaForm(${idx}, 'media', this.value)"></td>
      <td class="p-2"><span class="text-slate-500 text-xs">${(d.mediaTrimestral || 60) >= 60 ? 'Regular' : 'Abaixo de 6.0'}</span></td>
    </tr>
  `).join("");
}

function atualizarNotaDisciplinaForm(idx, campo, valor) {
  const val = parseFloat(valor) || 0;
  const aluno = appState.alunoEmEdicaoId ? appState.estudantes.find(a => a.id === appState.alunoEmEdicaoId) : null;
  if (!aluno) return;
  if (campo === 'recup') aluno.disciplinas[idx].notaRecuperacao = val;
  else aluno.disciplinas[idx].mediaTrimestral = val;
}

function processarUploadLaudoAluno(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    if (appState.alunoEmEdicaoId) {
      const aluno = appState.estudantes.find(a => a.id === appState.alunoEmEdicaoId);
      if (aluno) {
        if (!aluno.laudo) aluno.laudo = { possuiLaudo: true };
        aluno.laudo.arquivoNome = file.name;
        aluno.laudo.arquivoData = e.target.result;
        mostrarAvisoSucesso(`Laudo ${file.name} anexado!`);
      }
    }
  };
  reader.readAsDataURL(file);
}

function salvarEstudanteModal() {
  const nome = document.getElementById("f-nome").value.trim();
  const cgm = document.getElementById("f-cgm").value.trim();
  if (!nome || !cgm) {
    alert("Nome e CGM são obrigatórios.");
    return;
  }

  const temLaudo = document.getElementById("f-possui-laudo").checked;
  const existente = appState.alunoEmEdicaoId ? appState.estudantes.find(a => a.id === appState.alunoEmEdicaoId) : null;

  const estudanteAtualizado = {
    id: existente ? existente.id : "est-" + Date.now(),
    nome,
    cgm,
    situacaoMatricula: document.getElementById("f-matricula").value,
    turma: document.getElementById("f-turma").value,
    turno: document.getElementById("f-turno").value,
    laudo: {
      possuiLaudo: temLaudo,
      tipo: document.getElementById("f-tipo-laudo").value.trim(),
      descricao: document.getElementById("f-desc-laudo").value.trim(),
      arquivoNome: existente?.laudo?.arquivoNome || null,
      arquivoData: existente?.laudo?.arquivoData || null
    },
    atestado: existente?.atestado || null,
    responsaveis: {
      nome: document.getElementById("f-resp-nome").value.trim() || "Responsável",
      telefone: document.getElementById("f-resp-tel").value.trim()
    },
    agenda: {
      horarioAgendado: document.getElementById("f-agenda-horario").value || "08:30"
    },
    frequencia: {
      aulasDadas: parseInt(document.getElementById("f-aulas").value, 10) || 200,
      faltas: parseInt(document.getElementById("f-faltas").value, 10) || 0,
      faltasConsecutivas: parseInt(document.getElementById("f-faltas-cons").value, 10) || 0
    },
    disciplinas: existente?.disciplinas || [
      { nome: "Matemática", mediaTrimestral: 60 },
      { nome: "Língua Portuguesa", mediaTrimestral: 65 },
      { nome: "Ciências / Biologia", mediaTrimestral: 70 },
      { nome: "História", mediaTrimestral: 65 },
      { nome: "Geografia", mediaTrimestral: 68 }
    ],
    comportamentoDocente: existente?.comportamentoDocente || {},
    deliberacaoConselho: {
      status: document.getElementById("f-delib-status").value,
      planoAcao: document.getElementById("f-delib-plano").value.trim()
    }
  };

  if (existente) {
    const idx = appState.estudantes.findIndex(a => a.id === existente.id);
    appState.estudantes[idx] = estudanteAtualizado;
  } else {
    appState.estudantes.unshift(estudanteAtualizado);
  }

  salvarDadosLocais();
  fecharModalEstudante();
  renderizarAlunos();
  carregarPreConselhoTurma();
  renderizarInclusaoPdi();
  renderizarCertificados();
  renderizarRendimentoEstratificadoDirecao();
  gerarVisualizacaoAta();
  gerarAvisosParaLoop();
  sincronizarTurmaAtestadoAluno();
  mostrarAvisoSucesso(`Estudante ${nome} salvo com sucesso!`);
}

function excluirEstudanteAtual() {
  if (!appState.alunoEmEdicaoId) return;
  if (!confirm("Deseja realmente remover este estudante?")) return;
  appState.estudantes = appState.estudantes.filter(a => a.id !== appState.alunoEmEdicaoId);
  salvarDadosLocais();
  fecharModalEstudante();
  renderizarAlunos();
  carregarPreConselhoTurma();
  renderizarInclusaoPdi();
  renderizarCertificados();
  renderizarRendimentoEstratificadoDirecao();
  gerarVisualizacaoAta();
  gerarAvisosParaLoop();
  mostrarAvisoSucesso("Estudante removido com sucesso.");
}

// ==========================================
// 23. LOGIN E AUTENTICAÇÃO POR PERFIL (RBAC)
// ==========================================
function aplicarPerfilAtivoUI() {
  const nomeUsuarioEl = document.getElementById("sidebar-nome-usuario");
  const perfilTagEl = document.getElementById("sidebar-perfil-tag");
  const avatarEl = document.getElementById("sidebar-avatar-perfil");
  const perfil = appState.usuarioAtual.perfil;
  const isDirecao = (perfil === "direcao");

  if (nomeUsuarioEl) nomeUsuarioEl.innerText = appState.usuarioAtual.nome;
  if (perfilTagEl) {
    if (isDirecao) {
      perfilTagEl.innerText = "DIREÇÃO • ACESSO TOTAL (MASTER)";
      perfilTagEl.className = "text-[9px] uppercase font-mono font-black text-purple-400";
    } else if (perfil === "pedagogo") {
      perfilTagEl.innerText = "PEDAGOGIA • APOIO REGIMENTAL";
      perfilTagEl.className = "text-[9px] uppercase font-mono font-bold text-emerald-400";
    } else {
      perfilTagEl.innerText = "DOCENTE • PORTAL DO PROFESSOR";
      perfilTagEl.className = "text-[9px] uppercase font-mono font-bold text-blue-400";
    }
  }

  if (avatarEl) {
    if (isDirecao) {
      avatarEl.className = "p-1.5 rounded-lg bg-purple-500/20 text-purple-400 border border-purple-400/30 shrink-0";
      avatarEl.innerHTML = `<i data-lucide="shield" class="w-4 h-4"></i>`;
    } else if (perfil === "pedagogo") {
      avatarEl.className = "p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 shrink-0";
      avatarEl.innerHTML = `<i data-lucide="book-open-check" class="w-4 h-4"></i>`;
    } else {
      avatarEl.className = "p-1.5 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-400/30 shrink-0";
      avatarEl.innerHTML = `<i data-lucide="graduation-cap" class="w-4 h-4"></i>`;
    }
  }

  // Preenche dados do docente
  const profObj = appState.professores.find(p => p.nome === appState.usuarioAtual.nome) || appState.professores[0];
  const meuDocenteInput = document.getElementById("meu-telefone-input");
  const meuDocenteEmail = document.getElementById("meu-email-input");
  const meuDocenteNome = document.getElementById("meu-nome-input");
  if (meuDocenteInput && profObj) meuDocenteInput.value = profObj.telefone || "";
  if (meuDocenteEmail && profObj) meuDocenteEmail.value = profObj.email || appState.usuarioAtual.email;
  if (meuDocenteNome && profObj) meuDocenteNome.value = profObj.nome;

  sincronizarSelectsProfessores();
  sincronizarTurmaAtestadoAluno();
  lucide.createIcons();
}

function abrirModalTrocarUsuario() {
  abrirModalAuthModulo(appState.moduloAtivo || "direcao");
}

function abrirModalAuthModulo(moduloAlvo) {
  const modal = document.getElementById("modal-login-modulo");
  if (!modal) return;
  modal.classList.remove("hidden");
  lucide.createIcons();
}

function fecharModalAuthModulo() {
  const modal = document.getElementById("modal-login-modulo");
  if (modal) modal.classList.add("hidden");
}

function preencherCredenciaisRapidas(email, perfil) {
  const emailInput = document.getElementById("auth-modulo-email");
  if (emailInput) emailInput.value = email;
  confirmarLoginModulo();
}

function confirmarLoginModulo() {
  const email = document.getElementById("auth-modulo-email").value.trim().toLowerCase();
  if (!email || !email.includes("@")) {
    alert("Informe um e-mail institucional válido (@escola.pr.gov.br).");
    return;
  }

  const servidor = appState.professores.find(p => p.email?.toLowerCase() === email);
  let perfil = "professor";
  let nome = "Professor(a)";

  if (servidor) {
    nome = servidor.nome;
    perfil = servidor.funcao || "professor";
  } else if (email.includes("direcao")) {
    perfil = "direcao";
    nome = "Direção Escolar";
  } else if (email.includes("pedagogia")) {
    perfil = "pedagogo";
    nome = "Equipe Pedagógica";
  } else {
    nome = email.split("@")[0].replace(".", " ").replace(/\b\w/g, l => l.toUpperCase());
    perfil = "professor";
  }

  appState.usuarioAtual = { email, perfil, nome };
  salvarDadosLocais();
  aplicarPerfilAtivoUI();
  fecharModalAuthModulo();

  const moduloDestino = perfil === "professor" ? "professores" : perfil === "direcao" ? "direcao" : "pedagogia";
  solicitarAcessoModulo(moduloDestino);
  mostrarAvisoSucesso(`Autenticado como: ${nome} (${perfil.toUpperCase()})`);
}

function sincronizarSelectsProfessores() {
  const selectHorProf = document.getElementById("horario-prof-input");
  if (!selectHorProf) return;
  selectHorProf.innerHTML = appState.professores.map(p => `<option value="${p.nome}">${p.nome} (${p.disciplina})</option>`).join("");
}

// ==========================================
// 24. MURAL DE AVISOS EM LOOP ROTATIVO (5s)
// ==========================================
function gerarAvisosParaLoop() {
  const avisos = [];
  avisos.push({ tag: "📅 CALENDÁRIO 2026", texto: "2º Trimestre letivo em curso (18/05 a 04/09). Feriado municipal da Padroeira em 20/06." });

  appState.atestadosDocentes.forEach(atDoc => {
    avisos.push({
      tag: "🩺 ATESTADO DOCENTE",
      texto: `Prof. ${atDoc.professor} (${atDoc.disciplina}) afastado de ${formatarDataBr(atDoc.dataInicio)} a ${formatarDataBr(atDoc.dataFim)} — Aulas vagas mapeadas.`
    });
  });

  appState.atestadosAlunos.forEach(atAlun => {
    avisos.push({
      alunoId: atAlun.alunoId,
      tag: "🩺 ATESTADO ALUNO",
      texto: `${atAlun.nomeAluno} (${atAlun.turma}) com atestado médico ativo até ${formatarDataBr(atAlun.dataFim)}.`
    });
  });

  appState.estudantes.forEach(aluno => {
    const cert = classificarCertificadoEstudante(aluno);
    if (cert.categoria === "OURO") {
      avisos.push({
        alunoId: aluno.id,
        tag: "🌟 ALUNO OURO",
        texto: `${aluno.nome} atingiu excelência acadêmica máxima (Médias ≥ 9,5)!`
      });
    }
  });

  appState.loopAvisos = avisos;
}

function iniciarMuralLoopAvisos() {
  gerarAvisosParaLoop();
  exibirAvisoLoopAtual();
  if (appState.timerLoop) clearInterval(appState.timerLoop);
  appState.timerLoop = setInterval(() => {
    if (appState.loopAvisos.length > 0) {
      appState.indiceAvisoAtual = (appState.indiceAvisoAtual + 1) % appState.loopAvisos.length;
      exibirAvisoLoopAtual();
    }
  }, 5000);
}

function exibirAvisoLoopAtual() {
  if (appState.loopAvisos.length === 0) return;
  const aviso = appState.loopAvisos[appState.indiceAvisoAtual];
  const tagEl = document.getElementById("ticker-tag");
  const textoEl = document.getElementById("ticker-texto");

  if (tagEl && textoEl && aviso) {
    tagEl.innerText = aviso.tag;
    textoEl.innerText = aviso.texto;
    textoEl.classList.remove("banner-animado");
    void textoEl.offsetWidth;
    textoEl.classList.add("banner-animado");
  }
}

function clicarMensagemLoopAtual() {
  const aviso = appState.loopAvisos[appState.indiceAvisoAtual];
  if (aviso && aviso.alunoId) abrirModalEstudante(aviso.alunoId);
  else solicitarAcessoModulo("pedagogia");
}

function carregarPrazosRco() {
  if (document.getElementById("prof-ver-prazo-fechamento")) {
    document.getElementById("prof-ver-prazo-fechamento").innerText = formatarDataBr(appState.prazosRco.fechamento);
    document.getElementById("prof-ver-prazo-avaliacoes").innerText = formatarDataBr(appState.prazosRco.avaliacoes);
    document.getElementById("prof-ver-prazo-recup").innerText = formatarDataBr(appState.prazosRco.recuperacao);
    document.getElementById("prof-ver-prazo-conselho").innerText = formatarDataBr(appState.prazosRco.conselho);
  }
}

function verificarReguaPrazosRco() {
  const banner = document.getElementById("banner-alerta-rco");
  if (banner) banner.classList.remove("hidden");
}

function dispararAlertaRcoWhatsApp() {
  const msg = `📅 *LEMBRETE DO CALENDÁRIO ESCOLAR 2026 - RCO*\n\n` +
    `Prezados Professores: Lembramos que restam poucos dias para a consolidação de médias e recuperações no RCO.\n` +
    `Colégio Estadual Cívico-Militar Alberto Santos Dumont.`;
  navigator.clipboard.writeText(msg).catch(e => console.log(e));
  const url = `https://wa.me/?text=${encodeURIComponent(msg)}`;
  window.open(url, "_blank");
}

function formatarDataBr(dataIso) {
  if (!dataIso) return "--/--";
  const partes = dataIso.split("-");
  if (partes.length < 3) return dataIso;
  const [ano, mes, dia] = partes;
  return `${dia}/${mes}/${ano}`;
}

// ==========================================
// 25. DADOS EXEMPLO PREENCHIDOS (C.E.C.M. ALBERTO SANTOS DUMONT)
// ==========================================
function carregarExemploSantosDumont(alertar = true) {
  appState.estudantes = [
    {
      id: "est-001",
      nome: "Amanda Oliveira Rengel",
      cgm: "142981033",
      situacaoMatricula: "Ativo",
      turma: "1º - FD",
      turno: "Matutino",
      laudo: { possuiLaudo: true, tipo: "TDAH", descricao: "Apresenta impulsividade e necessidade de tempo estendido em avaliações." },
      atestado: {
        ativo: true,
        dataInicio: "2026-10-08",
        dataFim: "2026-10-14",
        motivo: "CID J06 - Faringoamigdalite aguda"
      },
      responsaveis: { nome: "Responsável por Amanda", telefone: "45991516382" },
      agenda: { horarioAgendado: "08:30" },
      frequencia: { aulasDadas: 240, faltas: 38, faltasConsecutivas: 2 },
      disciplinas: [
        { nome: "Matemática", mediaTrimestral: 57 },
        { nome: "Língua Portuguesa", mediaTrimestral: 58 },
        { nome: "Ciências / Biologia", mediaTrimestral: 70 },
        { nome: "História", mediaTrimestral: 65 },
        { nome: "Geografia", mediaTrimestral: 68 }
      ],
      comportamentoDocente: { engajado: true, respeitoso: true, comportamentoInadequado: false, agressoes: false, bullying: false },
      deliberacaoConselho: { status: "Em Acompanhamento Pedagógico", planoAcao: "Apoio no Mais Aprendizagem e compensação via Classroom." }
    },
    {
      id: "est-002",
      nome: "João Victor Martins",
      cgm: "159823411",
      situacaoMatricula: "Ativo",
      turma: "1º - FD",
      turno: "Matutino",
      laudo: { possuiLaudo: false },
      responsaveis: { nome: "Responsável por João Victor", telefone: "45991516382" },
      agenda: { horarioAgendado: "09:00" },
      frequencia: { aulasDadas: 240, faltas: 32, faltasConsecutivas: 1 },
      disciplinas: [
        { nome: "Matemática", mediaTrimestral: 35 },
        { nome: "Língua Portuguesa", mediaTrimestral: 50 },
        { nome: "Ciências / Biologia", mediaTrimestral: 55 },
        { nome: "História", mediaTrimestral: 58 },
        { nome: "Geografia", mediaTrimestral: 52 }
      ],
      comportamentoDocente: { engajado: false, comportamentoInadequado: true, desrespeitoRegras: true, agressoes: false, bullying: false },
      deliberacaoConselho: { status: "Risco de Reprovação", planoAcao: "Convocação presencial e apoio de recuperação." }
    },
    {
      id: "est-003",
      nome: "Laysla Marcelly da Silva Machado",
      cgm: "178239012",
      situacaoMatricula: "Ativo",
      turma: "1º - FD",
      turno: "Matutino",
      laudo: { possuiLaudo: false },
      responsaveis: { nome: "Responsável por Laysla", telefone: "45991516382" },
      agenda: { horarioAgendado: "09:30" },
      frequencia: { aulasDadas: 240, faltas: 65, faltasConsecutivas: 6 },
      disciplinas: [
        { nome: "Matemática", mediaTrimestral: 32 },
        { nome: "Língua Portuguesa", mediaTrimestral: 48 },
        { nome: "Ciências / Biologia", mediaTrimestral: 45 },
        { nome: "História", mediaTrimestral: 40 },
        { nome: "Geografia", mediaTrimestral: 42 }
      ],
      comportamentoDocente: { engajado: false, comportamentoInadequado: true, palavrasOfensivas: true, bullying: true },
      deliberacaoConselho: { status: "Risco de Evasão/Reprovação", planoAcao: "Acionamento do Conselho Tutelar via FICAI." }
    },
    {
      id: "est-004",
      nome: "Laura Maria de Araujo Alves dos Santos",
      cgm: "163829104",
      situacaoMatricula: "Ativo",
      turma: "1º - FD",
      turno: "Matutino",
      laudo: { possuiLaudo: true, tipo: "Dislexia", descricao: "Acompanhamento psicopedagógico e provas com leitura mediada." },
      responsaveis: { nome: "Responsável por Laura", telefone: "45991516382" },
      agenda: { horarioAgendado: "10:00" },
      frequencia: { aulasDadas: 240, faltas: 52, faltasConsecutivas: 0 },
      disciplinas: [
        { nome: "Matemática", mediaTrimestral: 65 },
        { nome: "Língua Portuguesa", mediaTrimestral: 68 },
        { nome: "Ciências / Biologia", mediaTrimestral: 64 },
        { nome: "História", mediaTrimestral: 66 },
        { nome: "Geografia", mediaTrimestral: 62 }
      ],
      comportamentoDocente: { engajado: true, respeitoso: true, faltaMaterial: true },
      deliberacaoConselho: { status: "Em Acompanhamento Pedagógico", planoAcao: "Adaptação avaliativa e apoio no contraturno." }
    },
    {
      id: "est-005",
      nome: "Gabriel Henrique Zanetti",
      cgm: "183920199",
      situacaoMatricula: "Ativo",
      turma: "1º - FD",
      turno: "Matutino",
      laudo: { possuiLaudo: false },
      responsaveis: { nome: "Responsável por Gabriel", telefone: "45991516382" },
      agenda: { horarioAgendado: "11:00" },
      frequencia: { aulasDadas: 240, faltas: 5, faltasConsecutivas: 0 },
      disciplinas: [
        { nome: "Matemática", mediaTrimestral: 92 },
        { nome: "Língua Portuguesa", mediaTrimestral: 91 },
        { nome: "Ciências / Biologia", mediaTrimestral: 94 },
        { nome: "História", mediaTrimestral: 90 },
        { nome: "Geografia", mediaTrimestral: 95 }
      ],
      comportamentoDocente: { engajado: true, respeitoso: true, autonomo: true, colaborativo: true },
      deliberacaoConselho: { status: "Aprovado", planoAcao: "Destaque acadêmico contínuo (Menção Honrosa)." }
    },
    {
      id: "est-006",
      nome: "Beatriz Helena Albuquerque",
      cgm: "194830112",
      situacaoMatricula: "Ativo",
      turma: "1º - FD",
      turno: "Matutino",
      laudo: { possuiLaudo: false },
      responsaveis: { nome: "Responsável por Beatriz", telefone: "45991516382" },
      agenda: { horarioAgendado: "10:30" },
      frequencia: { aulasDadas: 240, faltas: 2, faltasConsecutivas: 0 },
      disciplinas: [
        { nome: "Matemática", mediaTrimestral: 98 },
        { nome: "Língua Portuguesa", mediaTrimestral: 96 },
        { nome: "Ciências / Biologia", mediaTrimestral: 97 },
        { nome: "História", mediaTrimestral: 98 },
        { nome: "Geografia", mediaTrimestral: 99 }
      ],
      comportamentoDocente: { engajado: true, respeitoso: true, autonomo: true, colaborativo: true, evolucao: true },
      deliberacaoConselho: { status: "Aprovado", planoAcao: "Desempenho acadêmico de excelência máxima (Aluno Ouro)." }
    }
  ];

  salvarDadosLocais();
  if (alertar) {
    renderizarAlunos();
    carregarPreConselhoTurma();
    renderizarInclusaoPdi();
    renderizarCertificados();
    renderizarRendimentoEstratificadoDirecao();
    gerarVisualizacaoAta();
    gerarAvisosParaLoop();
    mostrarAvisoSucesso("Dados de exemplo carregados com sucesso!");
  }
}

// 25.1 Configurações & Backup
function salvarConfiguracoes() {
  appState.config.escola = document.getElementById("cfg-escola").value.trim();
  appState.config.municipio = document.getElementById("cfg-municipio").value.trim();
  appState.config.periodo = document.getElementById("cfg-periodo").value.trim();
  appState.config.professorLogado = document.getElementById("cfg-professor").value.trim();
  salvarDadosLocais();
  gerarVisualizacaoAta();
  mostrarAvisoSucesso("Configurações salvas com sucesso!");
}

function exportarBackupJSON() {
  const dados = {
    versao: "7.0",
    dataExportacao: new Date().toISOString(),
    config: appState.config,
    professores: appState.professores,
    horariosEscolares: appState.horariosEscolares,
    atestadosDocentes: appState.atestadosDocentes,
    atestadosAlunos: appState.atestadosAlunos,
    comunicadosDisparados: appState.comunicadosDisparados,
    estudantes: appState.estudantes
  };
  const blob = new Blob([JSON.stringify(dados, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `backup_conselho_rm_v7_${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
}

function importarBackupJSON(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const importado = JSON.parse(e.target.result);
      if (importado.estudantes) {
        appState.estudantes = importado.estudantes;
        if (importado.professores) appState.professores = importado.professores;
        if (importado.horariosEscolares) appState.horariosEscolares = importado.horariosEscolares;
        if (importado.atestadosDocentes) appState.atestadosDocentes = importado.atestadosDocentes;
        if (importado.atestadosAlunos) appState.atestadosAlunos = importado.atestadosAlunos;
        if (importado.comunicadosDisparados) appState.comunicadosDisparados = importado.comunicadosDisparados;
        if (importado.config) appState.config = { ...appState.config, ...importado.config };

        salvarDadosLocais();
        renderizarAlunos();
        carregarPreConselhoTurma();
        renderizarAtestadosDocentes();
        renderizarAtestadosAlunos();
        renderizarInclusaoPdi();
        renderizarGradeHorarios();
        renderizarCertificados();
        renderizarRendimentoEstratificadoDirecao();
        renderizarTabelaCargosDirecao();
        gerarVisualizacaoAta();
        gerarAvisosParaLoop();
        mostrarAvisoSucesso("Backup restaurado com sucesso!");
      }
    } catch (err) {
      alert("Arquivo de backup inválido.");
    }
  };
  reader.readAsText(file);
}
