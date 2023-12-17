export interface Order {
  _id: string;
  table: string;
  status: 'WAITNG' | 'IN_PRODUCTION' | 'DONE';
  products: {
    _id: string;
    product: {
      name: string;
      imagePath: string;
      pricing: number;
    },
    quantity: number;
  }[];
}
