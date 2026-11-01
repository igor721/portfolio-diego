export interface Achievement {
  competition: string;
  results: {
    position: string;
    category: string;
  }[];
  highlight?: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  caption: string;
  placeholder: boolean;
}

export const athlete = {
  name: "Diego",
  age: 19,
  modality: "Bodybuilding",
  state: "Paraíba",
  federation: "Federação de Bodybuilding da Paraíba",

  tagline: "Disciplina. Dedicação. Resultados.",
  shortBio:
    "Atleta de bodybuilding de 19 anos representando a Paraíba, em constante evolução competitiva e com foco em conquistas de alto nível.",

  biography: `Diego é um jovem atleta de bodybuilding de 19 anos que representa com orgulho o estado da Paraíba. Integrante da federação de bodybuilding da Paraíba, ele constrói sua trajetória baseada em disciplina rigorosa, treinamento consistente e busca contínua pela excelência.

Desde o início de sua jornada competitiva, Diego tem se destacado em competições regionais e nacionais, acumulando resultados expressivos em categorias juvenis e de peso. Sua dedicação aos treinos, nutrição e preparação mental reflete o compromisso com o esporte e o desejo de elevar o nome da Paraíba no bodybuilding brasileiro.

Com uma mentalidade focada em evolução constante, Diego trabalha para se consolidar como referência em sua categoria e abrir caminhos para competições de maior expressão no cenário nacional e internacional.`,

  achievements: [
    {
      competition: "Apolo de Praia",
      results: [
        { position: "1º lugar", category: "Categoria Juvenil" },
        { position: "1º lugar", category: "Bodybuilder 65 kg" },
      ],
    },
    {
      competition: "Pantera Classic",
      results: [
        { position: "1º lugar", category: "Bodybuilder 65 kg" },
        { position: "2º lugar", category: "Categoria a confirmar" },
      ],
    },
    {
      competition: "Brasileirão — Guarulhos/SP",
      results: [
        { position: "1º lugar", category: "Categoria Juvenil" },
        { position: "3º lugar", category: "Bodybuilding 70 kg" },
      ],
      highlight: "Representando o estado da Paraíba",
    },
  ] as Achievement[],

  goals: {
    title: "Próximo Desafio",
    subtitle: "Campeonato Sul-Americano",
    description:
      "Diego encontra-se atualmente no processo seletivo para uma possível participação no Campeonato Sul-Americano. Cada treino, cada refeição e cada decisão são orientados para maximizar suas chances e elevar seu nível competitivo.",
    motivational:
      "O caminho até o topo é construído com disciplina diária. Estamos prontos para o próximo nível.",
  },

  gallery: [
    {
      id: 1,
      src: "/images/foto-01.jpg",
      alt: "Foto de apresentação — Diego",
      caption: "Apresentação",
      placeholder: true,
    },
    {
      id: 2,
      src: "/images/foto-02.jpg",
      alt: "Foto de competição — Diego",
      caption: "Competição",
      placeholder: true,
    },
    {
      id: 3,
      src: "/images/foto-03.jpg",
      alt: "Foto de pose — Diego",
      caption: "Pose",
      placeholder: true,
    },
    {
      id: 4,
      src: "/images/foto-04.jpg",
      alt: "Foto de premiação — Diego",
      caption: "Premiação",
      placeholder: true,
    },
    {
      id: 5,
      src: "/images/foto-05.jpg",
      alt: "Foto de preparação — Diego",
      caption: "Preparação",
      placeholder: true,
    },
    {
      id: 6,
      src: "/images/foto-06.jpg",
      alt: "Foto de ensaio profissional — Diego",
      caption: "Ensaio profissional",
      placeholder: true,
    },
  ] as GalleryItem[],

  sponsorship: {
    title: "Vamos construir grandes resultados juntos?",
    description:
      "Patrocinar Diego é investir em um atleta em ascensão, com presença competitiva, disciplina comprovada e potencial de crescimento. Em troca, sua marca ganha visibilidade autêntica junto a um público engajado no universo do bodybuilding e do esporte de alto rendimento.",
    benefits: [
      "Divulgação de marcas em redes sociais e conteúdos",
      "Exposição de produtos em treinos e competições",
      "Utilização autorizada da imagem em campanhas",
      "Visibilidade em eventos e competições",
      "Relacionamento com o segmento esportivo e de suplementação",
      "Associação a valores de disciplina, superação e excelência",
    ],
    cta: "Quero ser um patrocinador",
  },

  contact: {
    instagram: "", // Preencher com @usuario
    whatsapp: "", // Preencher com número (apenas dígitos, ex: 5583999999999)
    email: "", // Preencher com e-mail
    commercialMessage:
      "Empresas e marcas interessadas em parceria comercial podem entrar em contato. Estamos abertos a propostas que agreguem valor mútuo e impulsionem a trajetória do atleta.",
  },

  seo: {
    title: "Diego | Atleta de Bodybuilding",
    description:
      "Conheça a trajetória, conquistas e objetivos do atleta de bodybuilding Diego, representante da Paraíba.",
  },
};
