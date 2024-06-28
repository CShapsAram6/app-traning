interface productsDTO {
  id: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  status: boolean;
  voucher: number;
}

class pro {
  static Load(id: number) {
    alert(id);
  }
}

export { productsDTO, pro };
