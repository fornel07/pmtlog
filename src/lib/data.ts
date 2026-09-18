export interface ProductItem {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  image: string;
  tag: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  iconName: string;
  norma?: string;
}

export const COMPANY_INFO = {
  name: "PMT LOG",
  legalName: "PMT Logística e Estruturas de Armazenagem",
  tagline: "Projetos sob medida para otimizar o seu armazém",
  city: "Campinas",
  state: "SP",
  region: "Atendimento em todo o Brasil",
  email: "comercial@pmtlog.com",
  whatsappNumber: "5519999999999", // Can be formatted
  whatsappUrl: "https://wa.me/5519999999999?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20estruturas%20para%20meu%20armaz%C3%A9m%20com%20a%20PMT%20LOG.",
  stats: [
    { value: "+10", label: "Anos de Experiência", detail: "Know-how comprovado em engenharia de armazenagem" },
    { value: "+500", label: "Projetos Implementados", detail: "Centros de distribuição e indústrias atendidas" },
    { value: "+400K", label: "Posições Entregues", detail: "Capacidade verticalizada com segurança estrutural" },
    { value: "100%", label: "Brasil Atendido", detail: "Sede técnica em Campinas com abrangência nacional" },
  ],
};

export const PRODUCTS: ProductItem[] = [
  {
    id: "porta-paletes",
    number: "01",
    name: "Porta Paletes",
    subtitle: "Solução Convencional de Alta Seletividade",
    description:
      "A solução mais versátil do mercado, garantindo acesso direto e imediato a 100% dos paletes estocados. Ideal para armazéns com grande variedade de SKUs e alta rotatividade.",
    features: [
      "Acesso direto a cada posição-palete sem remanejar cargas vizinhas",
      "Compatível com a maioria das empilhadeiras convencionais e retráteis",
      "Planos de carga reguláveis para adaptação a diferentes alturas de palete",
      "Permite instalação de níveis inferiores para picking manual",
    ],
    specs: [
      { label: "Seletividade", value: "100%" },
      { label: "Ocupação de Solo", value: "Até 40%" },
      { label: "Carga por Nível", value: "Até 4.500 kg" },
    ],
    image: "/assets/products/porta-paletes.webp",
    tag: "Mais Utilizado",
  },
  {
    id: "drive-in",
    number: "02",
    name: "Drive-in / Drive-through",
    subtitle: "Armazenagem Compacta de Alta Densidade",
    description:
      "Sistema de estocagem contínua sem corredores intermediários, onde a empilhadeira entra na estrutura para depositar e retirar paletes. Maximiza o volume cúbico disponível.",
    features: [
      "Aproveitamento de até 85% do espaço físico do armazém",
      "Perfeito para produtos homogêneos com baixo giro de SKUs",
      "Operação LIFO (Drive-in) ou FIFO (Drive-through)",
      "Redução drástica do custo por metro quadrado estocado",
    ],
    specs: [
      { label: "Densidade Cúbica", value: "Máxima" },
      { label: "Operação", value: "LIFO / FIFO" },
      { label: "Ganho de Espaço", value: "+60%" },
    ],
    image: "/assets/products/drive.webp",
    tag: "Alta Densidade",
  },
  {
    id: "mezanino",
    number: "03",
    name: "Mezanino / Piso Elevado",
    subtitle: "Verticalização Total e Multiplicação de Área",
    description:
      "Solução ideal para ganho de espaço vertical sem a necessidade de obras civis. Permite criar múltiplos andares operacionais para escritórios, áreas de separação de pedidos ou estocagem.",
    features: [
      "Duplica ou triplica a área útil aproveitando o pé-direito",
      "Montagem modular rápida, limpa e 100% desmontável/reaproveitável",
      "Pisos metálicos perfurados, antiderrapantes ou painéis cimentícios",
      "Integrável com escadas industriais, guarda-corpos e monta-cargas",
    ],
    specs: [
      { label: "Capacidade de Carga", value: "300 a 1.500 kg/m²" },
      { label: "Vãos Livres", value: "Até 8 metros" },
      { label: "Estrutura", value: "Aço Estrutural NBR" },
    ],
    image: "/assets/products/mezanino.webp",
    tag: "Espaço Vertical",
  },
  {
    id: "mini-porta-paletes",
    number: "04",
    name: "Mini Porta Paletes",
    subtitle: "Picking Manual Dinâmico e Fracionado",
    description:
      "Prateleiras industriais reforçadas para armazenagem manual de caixas, peças de médio peso e itens fracionados. A espinha dorsal para centros de e-commerce e almoxarifados.",
    features: [
      "Excelente para operações de picking fracionado e montagem de pedidos",
      "Bandejas em aço galvanizado, painéis de madeira ou aramados",
      "Regulagem simples de altura entre níveis sem ferramentas complexas",
      "Possibilidade de expansão contínua com montantes compartilhados",
    ],
    specs: [
      { label: "Carga por Nível", value: "Até 600 kg" },
      { label: "Acesso", value: "100% Manual" },
      { label: "Aplicações", value: "E-commerce & Peças" },
    ],
    image: "/assets/products/mini-porta-paletes.webp",
    tag: "Picking Ágil",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "remanejamento",
    title: "Remanejamento de Porta Paletes",
    subtitle: "Desmontagem, Transporte & Remontagem Segura",
    description:
      "Mudança completa de armazém ou readequação de layout operacional com mínima paralisação da sua logística. Equipes especializadas com equipamentos e ferramentas calibradas.",
    benefits: [
      "Cronograma planejado por fases para não interromper a expedição",
      "Identificação e substituição preventiva de peças danificadas",
      "Alinhamento a laser e reaperto de chumbadores conforme normas técnicas",
    ],
    iconName: "Truck",
  },
  {
    id: "inspecao-tecnica",
    title: "Inspeção Técnica NBR 15524",
    subtitle: "Laudos Periciais & Segurança Estrutural",
    description:
      "Avaliação detalhada do estado das estruturas com classificação de riscos por zonas de gravidade (verde, amarela e vermelha), atendendo às exigências do Ministério do Trabalho e seguradoras.",
    benefits: [
      "Emissão de Laudo Técnico com ART (Anotação de Responsabilidade Técnica)",
      "Mapeamento de deformações em vigas, montantes e protetores",
      "Recomendações pontuais de manutenção e placas de capacidade de carga",
    ],
    iconName: "ShieldCheck",
    norma: "NBR 15524 / EN 15635",
  },
  {
    id: "adequacoes-industriais",
    title: "Adequações Industriais & Proteções",
    subtitle: "Blindagem de Colunas & Prevenção de Colapsos",
    description:
      "Instalação de protetores de montante, barreiras metálicas, travas de segurança de vigas e reforços estruturais para absorver impactos acidentais de empilhadeiras.",
    benefits: [
      "Proteção ativa contra o ponto mais vulnerável de um armazém (as colunas)",
      "Pintura eletrostática amarela de alta visibilidade industrial",
      "Aumento da vida útil das estruturas em mais de 300%",
    ],
    iconName: "Wrench",
  },
  {
    id: "consultoria-logistica",
    title: "Consultoria de Layout & Fluxo",
    subtitle: "Engenharia Intralogística de Alta Performance",
    description:
      "Análise profunda do fluxo de mercadorias, perfil de empilhadeiras e raio de giro para dimensionar corredores e maximizar a densidade de posições do armazém.",
    benefits: [
      "Projetos em CAD 2D e modelagem 3D para validação prévia",
      "Cálculo de taxa de ocupação e dimensionamento de pulmões logísticos",
      "Redução do tempo de movimentação interna e percursos operacionais",
    ],
    iconName: "Layers",
  },
];
