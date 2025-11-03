export type Product = {
  id: string;
  title: string;
  short: string;
  ref: string;
  price?: string;
  images: string[];
  description: string;
  specs: string[];
};

export const products: Product[] = [
  {
    id: 'luva-berghahn-01',
    title: 'Luva Berghahn - Pro 12cm',
    short: 'Luva de couro com punho 12cm - Linha fogo',
    ref: 'REF-BGH-001',
    price: 'R$ 79,90',
    images: [
      '/images/produtos/luva01-1.png',
      '/images/produtos/luva01-2.png',
      '/images/produtos/luva01-3.png',
      '/images/produtos/luva01-4.png'
    ],
    description: 'Luva de couro premium, indicada para trabalhos com calor moderado e manipulação de peças quentes.',
    specs: [
      'Couro resistente (camurça tratada)',
      'Punho 12cm para proteção do antebraço',
      'Costuras reforçadas com linha alta temperatura'
    ]
  },
  {
    id: 'luva-berghahn-02',
    title: 'Luva Berghahn - WorkSafe',
    short: 'Luva de couro reforçada para trabalhos pesados',
    ref: 'REF-BGH-002',
    price: 'R$ 89,90',
    images: [
      '/images/produtos/luva02-1.png',
      '/images/produtos/luva02-2.png',
      '/images/produtos/luva02-3.png',
      '/images/produtos/luva02-4.png'
    ],
    description: 'Projeto para trabalhos pesados, com reforço na palma e resistência à abrasão.',
    specs: [
      'Reforço na palma',
      'Punho 10cm',
      'Forro interno confortável'
    ]
  }
];
