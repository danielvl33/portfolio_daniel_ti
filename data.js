/* Conteúdo do portfólio CYBER OPS. Mantenha fatos e demonstrações identificados. */
const PERFIL = {
  nome: "Daniel Lopes Soares",
  area: "Especialista em Redes e Infraestrutura de TI",
  localizacao: "Guanambi — Bahia — Brasil",
  whatsapp: "5573998667504",
  telefone: "(73) 99866-7504",
  email: "danielvl12349@gmail.com",
  github: "https://github.com/danielvl33",
  portfolio: "https://danielvl33.github.io/portfolio_daniel_ti/",
  instituicao: "Afya",
  formacao: "Graduação em Redes de Computadores — em andamento",
  semestres: "5 semestres cursados",
  semestresCursados: 5,
  curriculo: ""
};

const SKILLS = [
  { title: "Redes de computadores", icon: "01", category: "REDES", tags: ["TCP/IP", "DHCP", "DNS", "VLAN", "NAT", "Endereçamento IP", "Roteamento", "Switching", "Wi-Fi", "Topologias"] },
  { title: "Equipamentos e infraestrutura", icon: "02", category: "INFRAESTRUTURA", tags: ["MikroTik", "RB4011", "RB750", "RB760", "Fortinet", "Switches", "Deco M5", "Deco X50", "Access Points", "Cabeamento estruturado"] },
  { title: "Segurança e conectividade", icon: "03", category: "SEGURANÇA", tags: ["Firewall", "Controle de banda", "Bloqueio de sites", "Balanceamento de links", "Redundância", "Segmentação de rede"] },
  { title: "Suporte técnico", icon: "04", category: "SUPORTE", tags: ["Windows", "Configuração de impressoras", "Compartilhamento em rede", "Diagnóstico de conectividade", "GLPI", "Computadores e periféricos"] },
  { title: "Monitoramento", icon: "05", category: "EM DESENVOLVIMENTO", tags: ["Zabbix — estudos em andamento", "Disponibilidade", "Latência", "Análise de conectividade"] },
  { title: "Desenvolvimento", icon: "06", category: "CONHECIMENTOS", tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"], note: "Conhecimentos complementares; não apresentados como experiência profissional avançada." }
];

const GEAR_CATEGORIES = ["Todos", "Roteamento", "Segurança", "Wi-Fi", "Infraestrutura", "Fibra óptica", "Servidores", "Ferramentas", "Suporte"];
const GEAR = [
  { category: "Roteamento", title: "Ecossistema MikroTik", maker: "MikroTik", image: "mikrotik-reference.jpg", items: ["RB4011", "RB750", "RB760", "hEX", "CCR", "CRS", "Cloud Router Switch"], description: "Famílias de roteadores e switches com RouterOS, usadas em diferentes portes e arquiteturas de rede.", functions: ["Roteamento e firewall", "Controle de banda e balanceamento", "Segmentação e redundância"], use: "Borda de rede, filiais e redes corporativas.", imageAlt: "Equipamento MikroTik em fundo claro, fotografia de referência", imageNote: "Referência visual fornecida; modelo exato não identificado." },
  { category: "Roteamento", title: "MikroTik hEX", maker: "MikroTik · referência fornecida", image: "mikrotik-hex-reference.webp", imageFit: "contain", items: ["5 portas Ethernet", "Entrada PoE-in", "Família hEX"], description: "Roteador compacto da família hEX; características e configuração variam conforme o modelo.", functions: ["Roteamento de borda", "Regras de firewall", "Interligação de dispositivos"], use: "Redes de pequeno porte e filiais, conforme o modelo.", imageAlt: "Roteador MikroTik hEX branco com cinco portas Ethernet; imagem ilustrativa.", imageNote: "Imagem de referência; modelo exato e uso pessoal não confirmados." },
  { category: "Roteamento", title: "MikroTik RB4011", maker: "MikroTik · referência fornecida", image: "mikrotik-rb4011-reference.webp", imageFit: "contain", items: ["RB4011 (referência visual)", "Portas Ethernet", "Wi-Fi conforme a versão"], description: "Roteador associado ao RB4011 no nome do arquivo enviado; a imagem não comprova propriedade ou uso pessoal.", functions: ["Roteamento e firewall", "Conectividade de rede", "Recursos variam conforme a versão"], use: "Borda de rede e ambientes corporativos, conforme a configuração.", imageAlt: "Roteador MikroTik com antenas em uma bancada; imagem de referência.", imageNote: "Referência fornecida; identificação vem do arquivo e não comprova uso pessoal." },
  { category: "Segurança", title: "Segurança Fortinet", maker: "Fortinet", image: "firewall-reference.jpg", items: ["FortiGate", "FortiSwitch", "FortiAP", "Firewalls corporativos"], description: "Soluções de firewall, comutação e acesso sem fio para ambientes empresariais.", functions: ["Políticas de acesso", "Controle de tráfego", "Proteção de perímetro"], use: "Segurança e conectividade de redes corporativas.", imageAlt: "Equipamento de segurança Fortinet, fotografia de referência", imageNote: "Imagem de referência fornecida; modelo exato não identificado." },
  { category: "Wi-Fi", title: "Wi-Fi & conectividade", maker: "TP-Link e outros fabricantes", image: "deco-x50-outdoor.jpg", items: ["TP-Link Deco M5", "Deco X50 Outdoor", "APs corporativos", "Antenas", "Controladoras wireless", "Sistemas Mesh"], description: "Pontos de acesso e sistemas sem fio para cobertura interna, externa e distribuída.", functions: ["Cobertura sem fio", "Roaming e gerenciamento", "Otimização de canais"], use: "Expansão e organização de redes Wi-Fi.", imageAlt: "TP-Link Deco X50 Outdoor e embalagem, imagem de referência", imageNote: "Imagem de referência; não comprova propriedade nem uso pessoal." },
  { category: "Infraestrutura", title: "Comutação & cabeamento", maker: "Diversos fabricantes", image: "switch-sfp-reference.webp", items: ["Switches gerenciáveis", "Portas Ethernet", "Uplinks SFP/SFP+ em modelos compatíveis", "Switches PoE", "Patch panels", "Racks e organizadores", "Patch cords", "RJ45", "Keystone", "CAT5e / CAT6"], description: "Equipamento ilustrativo com portas Ethernet e interfaces SFP destacadas; o modelo exato não foi confirmado.", functions: ["Comutação e VLANs", "Interconexão óptica em modelos compatíveis", "Alimentação PoE em modelos compatíveis"], use: "Racks, salas técnicas e pontos de rede.", imageAlt: "Switch de rede com portas Ethernet e interfaces SFP destacadas; imagem ilustrativa.", imageNote: "Imagem de referência fornecida; modelo e uso pessoal não confirmados." },
  { category: "Fibra óptica", title: "Acesso & distribuição óptica", maker: "Diversos fabricantes", image: "fiber-cabling-reference.webp", items: ["ONU / ONT", "OLT", "Conversores de mídia", "SFP / SFP+", "DIO", "Caixas de distribuição", "Cordões ópticos"], description: "Elementos de acesso e distribuição para enlaces e redes de fibra óptica.", functions: ["Conversão e distribuição de sinal", "Terminação e organização", "Interfaces ópticas"], use: "Enlaces de acesso, distribuição e interconexão.", imageAlt: "Cordões de fibra óptica conectados a um painel de rede; imagem de referência.", imageNote: "Imagem de referência fornecida; componentes e local não identificados." },
  { category: "Servidores", title: "Servidores & hardware", maker: "Dell, HPE e diversos fabricantes", image: "server-room-reference.webp", items: ["Dell PowerEdge", "HP ProLiant", "SSD / HDD", "Memória RAM", "Placas de rede", "Fontes redundantes", "Nobreaks", "Computadores e notebooks"], description: "Servidores, componentes e estações que sustentam os serviços e o trabalho dos usuários.", functions: ["Processamento e armazenamento", "Conectividade de rede", "Continuidade elétrica com nobreak"], use: "Salas técnicas, serviços de rede e estações.", imageAlt: "Sala de servidores com racks e corredores técnicos; imagem de referência.", imageNote: "Imagem ilustrativa; sala e racks não identificam local de atuação nem equipamentos pessoais." },
  { category: "Ferramentas", title: "Ferramentas de cabeamento", maker: "Diversos fabricantes", image: "", items: ["Testadores de cabos", "Alicates de crimpagem", "Decapadores", "Certificadores", "Identificação de cabos"], description: "Instrumentos usados na preparação, identificação e verificação de cabeamento.", functions: ["Teste de continuidade", "Conectorização", "Identificação e certificação"], use: "Instalação e diagnóstico de cabeamento estruturado.", imageAlt: "", imageNote: "Ilustração técnica de referência; não é fotografia de equipamento pessoal." },
  { category: "Suporte", title: "Periféricos & suporte", maker: "Diversos fabricantes", image: "technician-reference.jpg", items: ["Impressoras", "Scanners", "Monitores", "Estações de trabalho", "Telefones IP"], description: "Dispositivos de usuário final e periféricos conectados à infraestrutura.", functions: ["Configuração e conectividade", "Compartilhamento em rede", "Suporte e diagnóstico"], use: "Atendimento técnico e estações de trabalho.", imageAlt: "Pessoa não identificada usando notebook em sala de servidores, imagem ilustrativa", imageNote: "Imagem ilustrativa fornecida; a pessoa não é identificada como Daniel." }
];

const ACADEMIC_CATEGORIES = [
  "Todos",
  "Fundamentos de redes",
  "Infraestrutura de TI",
  "Segurança da informação",
  "Sistemas operacionais",
  "Administração de servidores",
  "Banco de dados",
  "Programação",
  "Governança e auditoria",
  "Telecomunicações",
  "Processamento e gerenciamento de sistemas"
];

const ACADEMIC = [
  {
    id: "governanca",
    title: "Governança e Auditoria em Tecnologia da Informação",
    code: "ON.A - 494796",
    area: "Governança e auditoria",
    icon: "G",
    summary: "Gestão de tecnologia, risco, controles e confiabilidade dos ambientes digitais.",
    whatIs: "Governança de TI é o conjunto de práticas, regras, responsabilidades e processos que orientam a utilização da tecnologia dentro de uma organização.",
    concepts: ["Gestão de tecnologia nas empresas", "Riscos tecnológicos e continuidade operacional", "Auditoria de sistemas e infraestrutura", "Segurança da informação", "Controle de acesso e políticas de segurança", "Conformidade e boas práticas de TI", "Identificação de vulnerabilidades e falhas de controle"],
    practice: "Esses conhecimentos ajudam a manter ambientes tecnológicos organizados, seguros, controlados e confiáveis, com processos documentados e melhor governança dos recursos e dados.",
    professional: "Em ambientes corporativos e de saúde, a governança reduz riscos, melhora a confiabilidade dos sistemas e cria condições para decisões mais seguras sobre infraestrutura e tecnologia.",
    relation: "Relaciona-se diretamente com redes, infraestrutura, políticas de acesso, segurança, monitoramento e organização dos processos de TI.",
    technologies: ["Fortinet", "GLPI", "Firewall", "Controles internos", "Políticas de segurança"],
    theme: "governanca"
  },
  {
    id: "sistemas-operacionais",
    title: "Laboratório de Sistemas Operacionais",
    code: "ON.A - 494800",
    area: "Sistemas operacionais",
    icon: "OS",
    summary: "Fundamentos de administração, diagnóstico e manutenção de sistemas operacionais.",
    whatIs: "Sistema operacional é o software responsável por gerir o hardware, os programas e os recursos do computador ou servidor.",
    concepts: ["Windows e Linux", "Gestão de processos e memória", "Sistemas de arquivos", "Usuários e permissões", "Administração de sistemas", "Terminal e linha de comando", "Instalação e configuração", "Diagnóstico de falhas"],
    practice: "Na prática, esses conceitos são usados para configurar computadores, administrar servidores, diagnosticar falhas e manter ambientes de infraestrutura funcionando corretamente.",
    professional: "Esses conhecimentos suportam o suporte técnico, manutenção de estações, servidores e gestão de ambientes de TI em setores corporativos e de saúde.",
    relation: "Conecta-se diretamente à administração de computadores, ambientes de rede, servidores e manutenção de infraestrutura tecnológica.",
    technologies: ["Windows", "Linux", "Terminal", "Permissões", "Diagnóstico de sistemas"],
    theme: "sistemas"
  },
  {
    id: "multisservicos",
    title: "Redes de Multisserviços",
    code: "ON.A - 494802",
    area: "Telecomunicações",
    icon: "NET",
    summary: "Estruturação de redes que suportam voz, vídeo, dados e serviços de comunicação simultaneamente.",
    whatIs: "Redes de multisserviços são redes que suportam diferentes tipos de tráfego sobre a mesma infraestrutura, mantendo organização e desempenho.",
    concepts: ["Comunicação de dados", "Redes convergentes", "Protocolos de comunicação", "Voz, vídeo e dados", "QoS", "Arquitetura de redes", "Infraestrutura de comunicação", "Serviços de rede"],
    practice: "Uma rede corporativa pode transportar tráfego de usuários, segurança, telefonia e aplicações ao mesmo tempo, exigindo organização e planejamento.",
    professional: "Esse conhecimento é essencial para manter redes confiáveis, com bom desempenho, qualidade e integridade de serviços em ambientes de infraestrutura.",
    relation: "Relaciona-se diretamente com roteamento, switching, VLAN, QoS, acesso e conectividade de diferentes serviços em um ambiente compartilhado.",
    technologies: ["VLAN", "QoS", "Switches", "Roteadores", "Infraestrutura de rede"],
    theme: "redes"
  },
  {
    id: "estrutura-dados",
    title: "Estrutura de Dados",
    code: "ON.A - 494263",
    area: "Processamento e gerenciamento de sistemas",
    icon: "DS",
    summary: "Organização, armazenamento e manipulação eficiente das informações em sistemas.",
    whatIs: "Estrutura de dados é a forma como as informações são organizadas para facilitar acesso, processamento e uso em algoritmos.",
    concepts: ["Listas", "Filas", "Pilhas", "Árvores", "Vetores", "Matrizes", "Busca e ordenação", "Eficiência no armazenamento"],
    practice: "Essas estruturas são fundamentais para criar sistemas mais organizados, rápidos e escaláveis, além de melhorar a forma como os dados são consultados e manipulados.",
    professional: "Esses conceitos ajudam a compreender como sistemas e aplicações processam informações, além de melhorar a eficiência no desenvolvimento de soluções em TI.",
    relation: "Relaciona-se diretamente com desenvolvimento, lógica de programação, gestão de dados e organização de sistemas digitais.",
    technologies: ["Algoritmos", "Programação", "Ordenação", "Estruturas lógicas", "Manipulação de dados"],
    theme: "dados"
  },
  {
    id: "esg",
    title: "ESG",
    code: "ON.A - 499768",
    area: "Governança e auditoria",
    icon: "ESG",
    summary: "Sustentabilidade, responsabilidade social e governança aplicada à tecnologia.",
    whatIs: "ESG reúne critérios ambientais, sociais e de governança para orientar práticas responsáveis e sustentáveis dentro das organizações.",
    concepts: ["Sustentabilidade ambiental", "Responsabilidade social", "Governança corporativa", "Ética empresarial", "Consumo consciente de recursos", "Descarte correto de equipamentos eletrônicos"],
    practice: "Na tecnologia, ESG envolve eficiência energética, uso consciente de recursos, manutenção de equipamentos e responsabilidade no descarte e uso de tecnologia.",
    professional: "Esses princípios reforçam a importância da tecnologia sustentável, uso consciente de energia e descarte correto de equipamentos, além de integrar ética à gestão.",
    relation: "Conecta-se com infraestrutura, manutenção, logística tecnológica, sustentabilidade e responsabilidade corporativa em tecnologia.",
    technologies: ["Sustentabilidade", "Eficiência energética", "Manutenção", "Gestão responsável", "Descarte eletrônico"],
    theme: "gestao"
  },
  {
    id: "competencia-relacional",
    title: "Competência Relacional",
    code: "-",
    area: "Processamento e gerenciamento de sistemas",
    icon: "CR",
    summary: "Comunicação, trabalho em equipe, inteligência emocional e relacionamento profissional.",
    whatIs: "Competência relacional refere-se às habilidades de comunicação, cooperação e convívio profissional dentro de equipes e com usuários.",
    concepts: ["Comunicação profissional", "Relacionamento interpessoal", "Trabalho em equipe", "Inteligência emocional", "Resolução de conflitos", "Colaboração", "Comunicação com usuários e clientes"],
    practice: "Essas competências são essenciais para trabalhar em suporte técnico, infraestrutura de redes e também em colaboração com gestores, usuários e equipes multidisciplinares.",
    professional: "Profissionais de TI dependem muito de uma comunicação clara, empatia e capacidade de trabalho em equipe para dar suporte eficiente e manter bons relacionamentos internos.",
    relation: "Relaciona-se diretamente com suporte, atendimento, gestão de usuários, resolução de conflitos e trabalho em ambientes colaborativos.",
    technologies: ["Comunicação", "Suporte", "Colaboração", "Pesquisa e resolução", "Atendimento"],
    theme: "gestao"
  },
  {
    id: "banco-dados",
    title: "Introdução a Banco de Dados",
    code: "-",
    area: "Banco de dados",
    icon: "DB",
    summary: "Organização, armazenamento e consulta de informações de maneira estruturada.",
    whatIs: "Banco de dados é o conjunto de dados organizados de forma lógica para serem armazenados, acessados e manipulados de maneira segura e eficiente.",
    concepts: ["Banco de dados relacionais", "Tabelas, registros e campos", "Chaves primárias e estrangeiras", "Relacionamentos entre tabelas", "SQL", "Consultas e manipulação de dados", "Integridade e segurança das informações"],
    practice: "Esses conceitos são usados em sistemas empresariais, plataformas digitais, ambientes hospitalares e aplicações que armazenam dados importantes para operação.",
    professional: "No mercado, bancos de dados sustentam sistemas e processos que dependem de informações confiáveis, organizadas e facilmente acessíveis.",
    relation: "Relaciona-se com infraestrutura, sistemas, aplicações, gestão de dados e integração tecnológica.",
    technologies: ["SQL", "Tabelas", "Relacionamentos", "Chaves", "Integridade de dados"],
    theme: "dados"
  },
  {
    id: "engenharia-software",
    title: "Métodos e Técnicas de Engenharia de Software",
    code: "-",
    area: "Programação",
    icon: "SW",
    summary: "Processos, metodologias e boas práticas para desenvolvimento de sistemas.",
    whatIs: "Engenharia de software envolve o planejamento, modelagem, construção, testes e manutenção de sistemas de forma organizada e eficiente.",
    concepts: ["Ciclo de desenvolvimento", "Levantamento de requisitos", "Análise e modelagem", "Metodologias ágeis", "Scrum", "Testes de software", "Documentação", "Manutenção e evolução"],
    practice: "Esses métodos ajudam a criar sistemas mais confiáveis, com melhor qualidade, menor retrabalho e melhor entendimento das necessidades dos usuários.",
    professional: "Esses conhecimentos são importantes para desenvolver soluções tecnológicas de forma estruturada, organizada e alinhada a processos reais de negócio.",
    relation: "Conecta-se com programação, desenvolvimento, análise de requisitos e organização de projetos digitais.",
    technologies: ["Scrum", "Documentação", "Testes", "Modelagem", "Metodologias ágeis"],
    theme: "programacao"
  },
  {
    id: "arquitetura-computadores",
    title: "Organização e Arquitetura de Computadores",
    code: "-",
    area: "Infraestrutura de TI",
    icon: "ARQ",
    summary: "Funcionamento interno dos computadores, periféricos e componentes de hardware.",
    whatIs: "Arquitetura de computadores estuda como os componentes do hardware trabalham juntos para processar, armazenar e transmitir dados.",
    concepts: ["CPU", "Memória RAM", "Memória ROM", "SSD e HDD", "Placa-mãe", "Barramentos", "BIOS e UEFI", "Entrada e saída de dados"],
    practice: "Esses conhecimentos auxiliam no diagnóstico, manutenção, análise de desempenho e entendimento do funcionamento de computadores e servidores.",
    professional: "Esses fundamentos são centrais para suporte técnico, montagem, manutenção e inspeção de equipamentos usados em infraestrutura de computadores e redes.",
    relation: "Diretamente ligado a hardware, montagem de computadores, diagnóstico e suporte a infraestrutura tecnológica.",
    technologies: ["CPU", "RAM", "SSD", "Placa-mãe", "BIOS"],
    theme: "sistemas"
  },
  {
    id: "programacao",
    title: "Programação",
    code: "-",
    area: "Programação",
    icon: "PRG",
    summary: "Lógica, algoritmos e construção de soluções por meio de código.",
    whatIs: "Programação é a criação de instruções que permitem que computadores realizem tarefas e resolvam problemas de forma automatizada.",
    concepts: ["Lógica de programação", "Variáveis e constantes", "Operadores", "Condicionais", "Estruturas de repetição", "Funções", "Organização de código", "Resolução de problemas"],
    practice: "A programação permite automatizar tarefas, criar ferramentas, processar dados e desenvolver soluções que apoiam operações tecnológicas e de infraestrutura.",
    professional: "Esses conhecimentos são úteis para automatizar processos, criar scripts, solucionar problemas e apoiar tecnologias em ambientes de TI e redes.",
    relation: "Conecta-se diretamente com automação, scripts, desenvolvimento, recursos digitais e manutenção de tecnologias.",
    technologies: ["Algoritmos", "Funções", "Lógica", "Automação", "Scripts"],
    theme: "programacao"
  },
  {
    id: "redes-computadores",
    title: "Redes de Computadores",
    code: "-",
    area: "Fundamentos de redes",
    icon: "RC",
    summary: "Fundamentos da comunicação, conectividade, roteamento e infraestrutura de redes.",
    whatIs: "Redes de computadores conectam dispositivos e sistemas por meio de protocolos, comunicação e infraestrutura física ou lógica.",
    concepts: ["Modelo OSI", "Modelo TCP/IP", "IPv4 e IPv6", "Máscaras de sub-rede", "VLAN", "DHCP", "DNS", "NAT", "Roteamento", "Switching", "Firewall", "Cabeamento estruturado", "Redes sem fio"],
    practice: "Esses conhecimentos são usados para configurar roteadores, switches, firewalls, Wi-Fi, pontos de rede e ambientes conectados em empresas, hospitais e escolas.",
    professional: "Este é o núcleo da atuação profissional em redes e infraestrutura de TI, sendo essencial para manutenção, configuração e suporte de conectividade.",
    relation: "Relaciona-se diretamente com roteadores MikroTik, firewalls Fortinet, redes corporativas, Wi-Fi e infraestrutura de conectividade.",
    technologies: ["TCP/IP", "VLAN", "DHCP", "DNS", "NAT", "Firewall", "Cabeamento"],
    theme: "redes"
  },
  {
    id: "seguranca-informacao",
    title: "Fundamentos de Segurança da Informação",
    code: "-",
    area: "Segurança da informação",
    icon: "SEC",
    summary: "Princípios de proteção, controle de acesso e redução de riscos em ambientes de TI.",
    whatIs: "Segurança da informação reúne práticas para proteger dados, sistemas e infraestrutura contra acesso indevido, indisponibilidade e alterações não autorizadas.",
    concepts: ["Confidencialidade, integridade e disponibilidade", "Identidade e controle de acesso", "Políticas de segurança", "Firewall e segmentação", "Atualizações e gestão de vulnerabilidades", "Cópias de segurança", "Registro e análise de eventos"],
    practice: "Em um cenário de estudo, esses princípios orientam a revisão de permissões, regras de firewall, segmentação e rotinas de cópia de segurança.",
    professional: "O tema complementa a atuação em redes e infraestrutura, ajudando a compreender controles que reduzem riscos e preservam a continuidade dos serviços.",
    relation: "Correlaciona-se a redes, firewalls, governança, monitoramento e proteção de ambientes corporativos.",
    technologies: ["Firewall", "VLAN", "Controle de acesso", "Backup", "Logs"],
    theme: "seguranca"
  },
  {
    id: "administracao-servidores",
    title: "Administração de Servidores",
    code: "-",
    area: "Administração de servidores",
    icon: "SRV",
    summary: "Conceitos de instalação, configuração e manutenção de serviços de infraestrutura.",
    whatIs: "A administração de servidores envolve preparar sistemas, configurar serviços, controlar acessos e acompanhar a disponibilidade de recursos computacionais.",
    concepts: ["Sistemas Linux e Windows Server", "Contas, grupos e permissões", "Serviços DNS e DHCP", "Armazenamento e compartilhamento", "Atualizações e registros de eventos", "Monitoramento e disponibilidade", "Cópias de segurança"],
    practice: "Em laboratório, esses conceitos podem ser explorados em uma rede isolada, sem representar uma instalação ou serviço em produção.",
    professional: "Esse tema ajuda a compreender a infraestrutura que oferece serviços de rede e recursos compartilhados a usuários e dispositivos.",
    relation: "Conecta-se a sistemas operacionais, redes, serviços de diretório, armazenamento e monitoramento.",
    technologies: ["Linux", "Windows Server", "DNS", "DHCP", "Zabbix"],
    theme: "servidores"
  }
];

const DIAGRAMS = [
  { id: "corp", title: "Topologia corporativa", description: "Perímetro, núcleo e acesso para servidores, Wi-Fi e estações.", nodes: "net|Internet|58|150|cloud;fw|Firewall|185|150|fw;core|Switch core|310|150|sw;a1|Switch A|445|60|sw;a2|Switch B|445|150|sw;a3|Switch C|445|240|sw;srv|Servidores|580|60|srv;ap|Access points|580|150|ap;pc|Estações|580|240|pc", links: "net-fw;fw-core;core-a1;core-a2;core-a3;a1-srv;a2-ap;a3-pc" },
  { id: "vlan", title: "Segmentação por VLAN", description: "Setores isolados em VLANs com comunicação inter-VLAN controlada.", nodes: "a|Administrativo|70|60|pc|VLAN 10;b|Assistencial|70|150|pc|VLAN 20;c|Visitantes|70|240|ap|VLAN 30;sw|Switch|330|150|sw|trunk;r|Roteador|580|150|net|inter-VLAN", links: "a-sw|v10;b-sw|v20;c-sw|v30;sw-r|tr|trunk" },
  { id: "dhcp", title: "Distribuição DHCP", description: "Fluxo de concessão de endereço e comunicação com o pool de endereços.", nodes: "pc|Cliente|62|150|pc|sem IP;sw|Switch|232|150|sw;sv|Servidor DHCP|402|150|srv;pool|Pool|572|150|net|endereços", links: "pc-sw|v10|DORA;sw-sv|v20|DORA;sv-pool|tr|lease" },
  { id: "fw", title: "Firewall Fortinet", description: "Separação de WAN, rede interna e DMZ por políticas de acesso.", nodes: "net|Internet|58|110|cloud;bad|Sem política|58|230|cloud|bloqueado;fw|FortiGate|250|150|fw|políticas;lan|Rede interna|450|80|pc|LAN;dmz|Servidores|450|220|srv|DMZ", links: "net-fw|v10|WAN;bad-fw|off|negado;fw-lan|v20|permitir;fw-dmz|v30|filtrar" },
  { id: "rot", title: "Roteamento MikroTik", description: "Rota padrão e comunicação entre redes distintas.", nodes: "isp|Operadora|58|150|cloud;mk|MikroTik|250|150|net|RouterOS;r1|Rede A|450|60|sw|sub-rede;r2|Rede B|450|150|sw|sub-rede;r3|Rede C|450|240|sw|sub-rede", links: "isp-mk|v10|rota padrão;mk-r1|v20;mk-r2|v20;mk-r3|v20" },
  { id: "bal", title: "Balanceamento de links", description: "Distribuição ilustrativa do tráfego entre dois links de internet.", nodes: "i1|Operadora 1|58|70|cloud;i2|Operadora 2|58|230|cloud;mk|MikroTik|270|150|net|balanceamento;lan|Rede local|490|150|sw", links: "i1-mk|v10|link 1;i2-mk|v30|link 2;mk-lan|v20" },
  { id: "red", title: "Redundância e failover", description: "Caminho alternativo para manter conectividade em caso de falha do link principal.", nodes: "i1|Link principal|58|70|cloud;i2|Link backup|58|230|cloud;mk|MikroTik|270|150|net|failover;lan|Rede local|490|150|sw", links: "i1-mk|v10|ativo;i2-mk|off|reserva;mk-lan|v20" },
  { id: "mesh", title: "Wi-Fi Mesh", description: "Unidade principal e pontos adicionais ampliando a cobertura sem fio.", nodes: "r|Roteador|58|150|net;d1|Unidade principal|215|150|ap;d2|Ponto Mesh 2|390|70|ap;d3|Ponto Mesh 3|390|230|ap;c1|Dispositivos|570|70|pc;c2|Dispositivos|570|230|pc", links: "r-d1|v10;d1-d2|wl|sem fio;d1-d3|wl|sem fio;d2-c1|wl;d3-c2|wl" },
  { id: "saude", title: "Infraestrutura hospitalar", description: "Áreas administrativas e assistenciais segmentadas atrás do firewall.", nodes: "net|Internet|58|150|cloud;fw|Firewall|185|150|fw;core|Switch core|310|150|sw;a|Recepção|470|40|pc|VLAN administrativa;b|Consultórios|470|110|pc|VLAN assistencial;c|Enfermagem|470|190|pc|VLAN assistencial;d|Servidor|470|260|srv|VLAN servidores", links: "net-fw;fw-core;core-a|v10;core-b|v20;core-c|v20;core-d|v30" },
  { id: "srv", title: "Servidor & estações", description: "Conexão de servidor e estações de trabalho por meio de um switch.", nodes: "s|Servidor|80|150|srv|serviços;sw|Switch|290|150|sw;p1|Estação 1|500|60|pc;p2|Estação 2|500|150|pc;p3|Estação 3|500|240|pc", links: "s-sw|v10|cabo;sw-p1|v20;sw-p2|v20;sw-p3|v20" }
];

const PROJECTS = [
  { title: "Infraestrutura de rede com MikroTik", type: "demo", description: "Arquitetura ilustrativa para borda de rede e distribuição de conectividade.", objective: "Apresentar a relação entre o roteador, as sub-redes e os equipamentos de acesso.", equipment: ["Roteador MikroTik (referência)", "Switch gerenciável", "Estações"], topology: "Internet → roteador → switch → redes locais.", tags: ["RouterOS", "Roteamento", "Switching"], result: "Demonstração visual de uma topologia organizada; não representa implantação real.", diagram: "rot" },
  { title: "Configuração conceitual de firewall Fortinet", type: "demo", description: "Diagrama de referência para separar Internet, rede interna e zona de servidores.", objective: "Ilustrar a função de políticas de tráfego e segmentação no perímetro.", equipment: ["Firewall FortiGate (referência)", "Switch", "Servidor"], topology: "Internet → firewall → LAN e DMZ.", tags: ["Firewall", "Políticas", "DMZ"], result: "Demonstração conceitual; sem configuração ou ambiente de produção associado.", diagram: "fw" },
  { title: "Segmentação de rede utilizando VLAN", type: "demo", description: "Exemplo de redes lógicas distintas transportadas por um switch gerenciável.", objective: "Demonstrar como separar grupos e controlar a comunicação entre segmentos.", equipment: ["Switch gerenciável", "Roteador ou firewall", "Dispositivos de cada segmento"], topology: "VLANs de acesso → trunk → roteamento inter-VLAN controlado.", tags: ["VLAN", "Trunk", "Inter-VLAN"], result: "Diagrama conceitual de segmentação; não descreve uma rede instalada.", diagram: "vlan" },
  { title: "Servidor DHCP e distribuição de endereços IP", type: "demo", description: "Fluxo ilustrativo de concessão de endereços a clientes da rede.", objective: "Explicar a comunicação entre clientes, serviço DHCP e pool de endereços.", equipment: ["Cliente", "Switch", "Servidor ou roteador com DHCP"], topology: "Cliente → switch → serviço DHCP → pool de endereços.", tags: ["DHCP", "IP", "DORA"], result: "Representação didática do fluxo DHCP, sem serviço ativo.", diagram: "dhcp" },
  { title: "Balanceamento de dois links de internet", type: "demo", description: "Demonstração da topologia com dois provedores conectados ao roteador.", objective: "Visualizar uma arquitetura que distribui tráfego entre duas conexões.", equipment: ["Duas conexões WAN (referência)", "Roteador MikroTik (referência)", "Rede local"], topology: "WAN 1 + WAN 2 → roteador → LAN.", tags: ["MikroTik", "WAN", "Balanceamento"], result: "Diagrama de referência; o resultado depende de configuração e testes em laboratório.", diagram: "bal" },
  { title: "Redundância de conexão", type: "demo", description: "Caminho alternativo de conectividade em cenário de indisponibilidade do link principal.", objective: "Explicar a ideia de failover entre conexão primária e enlace de contingência.", equipment: ["Dois links WAN (referência)", "Roteador", "Rede local"], topology: "Link primário e link de backup → roteador com failover → LAN.", tags: ["Failover", "Disponibilidade", "Rotas"], result: "Demonstração conceitual, não comprovação de failover implementado.", diagram: "red" },
  { title: "Rede Wi-Fi Mesh com Deco", type: "demo", description: "Ilustração de uma unidade principal e nós Mesh para ampliar cobertura sem fio.", objective: "Mostrar a relação entre rede principal, pontos Mesh e dispositivos conectados.", equipment: ["TP-Link Deco M5 ou Deco X50 (referência)", "Dispositivos clientes"], topology: "Roteador → unidade principal Mesh ↔ pontos adicionais → clientes.", tags: ["Wi-Fi", "Mesh", "Cobertura"], result: "Representação didática; cobertura real depende do local e da instalação.", diagram: "mesh" },
  { title: "Controle de banda por dispositivo", type: "study", description: "Estudo conceitual de políticas de qualidade de serviço e limitação de tráfego.", objective: "Relacionar identificação de dispositivos, políticas e priorização de tráfego.", equipment: ["Roteador compatível (referência)", "Switch ou Access Point", "Dispositivos clientes"], topology: "Clientes → ponto de controle → políticas de tráfego → WAN.", tags: ["QoS", "Controle de banda", "Políticas"], result: "Tema de estudo; não indica regra configurada em ambiente profissional.", diagram: "corp" },
  { title: "Compartilhamento de impressoras em rede", type: "demo", description: "Diagrama de conectividade entre impressoras, estações e rede local.", objective: "Ilustrar os requisitos básicos de comunicação e acesso a uma impressora de rede.", equipment: ["Impressora de rede", "Switch ou Access Point", "Estações"], topology: "Impressora e estações conectadas ao mesmo segmento de rede.", tags: ["Impressoras", "LAN", "Suporte"], result: "Exemplo conceitual; não descreve uma implantação específica.", diagram: "srv" },
  { title: "Monitoramento de infraestrutura com Zabbix", type: "study", description: "Estudo em andamento sobre disponibilidade, latência e observabilidade; o painel do portfólio usa dados simulados.", objective: "Conhecer conceitos de monitoramento e visualização de métricas de rede.", equipment: ["Zabbix — curso/estudos em andamento", "Equipamentos monitoráveis (referência)"], topology: "Agentes ou SNMP → servidor de monitoramento → painéis e alertas.", tags: ["Zabbix", "Monitoramento", "Estudo em andamento"], result: "O laboratório deverá demonstrar a visualização de métricas; os valores do painel são simulados e o curso permanece em andamento.", diagram: "monitor" }
];

const EXPERIENCE = [
  "Atuação em redes e infraestrutura de TI em UBS, PSF, hospitais, policlínicas e contextos administrativos/corporativos.",
  "Configuração de roteadores e equipamentos MikroTik, Fortinet, switches e pontos de acesso Wi-Fi.",
  "Implantação, organização e identificação de cabeamento e pontos de rede.",
  "Configuração e compartilhamento de impressoras em rede.",
  "Diagnóstico de falhas de conectividade e verificação de comunicação entre equipamentos.",
  "Suporte técnico relacionado à infraestrutura e apoio em implantações de rede."
];

const DOCUMENTS = [
  { title: "Administrando Banco de Dados", description: "Escola Virtual · curso autoinstrucional · 15 horas · concluído em 05/09/2026.", path: "assets/certificates/administrando-banco-de-dados.pdf", kind: "CERTIFICADO · 15 H", action: "Visualizar ou baixar", icon: "PDF" },
  { title: "Comunicação Empresarial", description: "Escola Virtual · curso autoinstrucional · 12 horas · concluído em 05/09/2026.", path: "assets/certificates/certificado-de-conclusao.pdf", kind: "CERTIFICADO · 12 H", action: "Visualizar ou baixar", icon: "PDF" },
  { title: "Microsoft Word 2016 — Básico", description: "Escola Virtual · curso autoinstrucional · 9 horas · concluído em 05/09/2026.", path: "assets/certificates/microsoft-word-2016-basico.pdf", kind: "CERTIFICADO · 9 H", action: "Visualizar ou baixar", icon: "PDF" },
  { title: "Currículo profissional", description: "O PDF do currículo ainda não foi fornecido.", path: "", kind: "CURRÍCULO PDF", action: "Arquivo não disponível", icon: "CV" }
];
