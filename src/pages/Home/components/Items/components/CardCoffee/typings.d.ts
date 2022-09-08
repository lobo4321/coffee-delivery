type ICardCoffee = {
  id: number;
  img: string;
  tag1: string;
  tag2?: string;
  tag3?: string;
  title: string;
  subTitle: string;
  price: number;
};

export type ICoffee = {
  coffee: ICardCoffee;
};
