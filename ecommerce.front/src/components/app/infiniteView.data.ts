interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  color: string;
  category: string;
  colors: string[];
  images: string[];
  sizes: number[];
}

const initialProducts: Product[] = Array(100)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    name: `Nike Air Force 1 '07 Next Nature ${index + 1}`,
    price: 119,
    quantity: 1,
    color: "#75A69C",
    category: "clothing",
    colors: ["#75A69C", "#ffffff"],
    sizes: [36, 38, 40, 42, 44, 46, 48],
    images: [
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/846d5a72-a372-425f-9cb3-f5e8051e4c2e/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2191281b-f695-4c03-94a3-30bbf724633a/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/26a7739d-00c8-454b-bb86-2f2ff912d279/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/26e02a08-0b30-43ee-a8cf-b22cb459031f/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/60a58d15-6276-4a3b-995a-bb328f539dd8/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/70f0e0e7-eda3-4e8e-b98a-012f3bb9ed9e/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/666c4985-5a55-4525-b128-ae5f76a617e3/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
    ],
  }));

export { initialProducts };
