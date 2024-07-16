export interface OrderItem {
  id: number;
  image: string;
  name: string;
  price: string;
  selectedSize: string;
  quantity: number;
  disabled?: boolean;
}

export interface Order {
  id: number;
  date: string;
  status: string;
  items: OrderItem[];
  totalPrice: string;
}

export const ordersData: Order[] = [
  {
    id: 12345,
    date: "2023-07-01",
    status: "Shipped",
    items: [
      {
        id: 1,
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/846d5a72-a372-425f-9cb3-f5e8051e4c2e/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
        name: "Example Product A",
        price: "$50",
        selectedSize: "M",
        quantity: 1,
        disabled: true,
      },
      {
        id: 2,
        image:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/chaussure-air-force-1-07-pour-CFVMS0.png",
        name: "Nike Air Force 1 '07",
        price: "$30",
        selectedSize: "38",
        quantity: 1,
      },
      {
        id: 3,
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a7f3153f-11db-45d5-997c-73a9323b984d/short-en-jersey-sportswear-pour-3dG90r.png",
        name: "Nike Sportswear",
        price: "$30",
        selectedSize: "M",
        quantity: 1,
      },
      {
        id: 4,
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/846d5a72-a372-425f-9cb3-f5e8051e4c2e/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
        name: "Example Product A",
        price: "$50",
        selectedSize: "M",
        quantity: 1,
        disabled: true,
      },
    ],
    totalPrice: "$110",
  },
  {
    id: 12345,
    date: "2023-07-01",
    status: "Shipped",
    items: [
      {
        id: 1,
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/846d5a72-a372-425f-9cb3-f5e8051e4c2e/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
        name: "Example Product A",
        price: "$50",
        selectedSize: "M",
        quantity: 1,
        disabled: true,
      },
      {
        id: 2,
        image:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/chaussure-air-force-1-07-pour-CFVMS0.png",
        name: "Nike Air Force 1 '07",
        price: "$30",
        selectedSize: "38",
        quantity: 1,
      },
      {
        id: 3,
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a7f3153f-11db-45d5-997c-73a9323b984d/short-en-jersey-sportswear-pour-3dG90r.png",
        name: "Nike Sportswear",
        price: "$30",
        selectedSize: "M",
        quantity: 1,
      },
    ],
    totalPrice: "$110",
  },
  {
    id: 12345,
    date: "2023-07-01",
    status: "Shipped",
    items: [
      {
        id: 1,
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/846d5a72-a372-425f-9cb3-f5e8051e4c2e/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
        name: "Example Product A",
        price: "$50",
        selectedSize: "M",
        quantity: 1,
        disabled: true,
      },
      {
        id: 2,
        image:
          "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4f37fca8-6bce-43e7-ad07-f57ae3c13142/chaussure-air-force-1-07-pour-CFVMS0.png",
        name: "Nike Air Force 1 '07",
        price: "$30",
        selectedSize: "38",
        quantity: 1,
      },
      {
        id: 3,
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a7f3153f-11db-45d5-997c-73a9323b984d/short-en-jersey-sportswear-pour-3dG90r.png",
        name: "Nike Sportswear",
        price: "$30",
        selectedSize: "M",
        quantity: 1,
      },
    ],
    totalPrice: "$110",
  },
  {
    id: 67890,
    date: "2022-08-15",
    status: "Processing",
    items: [
      {
        id: 4,
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/70f0e0e7-eda3-4e8e-b98a-012f3bb9ed9e/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
        name: "Example Product C",
        price: "$70",
        selectedSize: "S",
        quantity: 1,
      },
    ],
    totalPrice: "$70",
  },
  {
    id: 67890,
    date: "2022-08-15",
    status: "Processing",
    items: [
      {
        id: 4,
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/70f0e0e7-eda3-4e8e-b98a-012f3bb9ed9e/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
        name: "Example Product C",
        price: "$70",
        selectedSize: "S",
        quantity: 1,
      },
    ],
    totalPrice: "$70",
  },
  {
    id: 67890,
    date: "2022-08-15",
    status: "Processing",
    items: [
      {
        id: 4,
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/70f0e0e7-eda3-4e8e-b98a-012f3bb9ed9e/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
        name: "Example Product C",
        price: "$70",
        selectedSize: "S",
        quantity: 1,
      },
    ],
    totalPrice: "$70",
  },
  {
    id: 67890,
    date: "2022-08-15",
    status: "Processing",
    items: [
      {
        id: 4,
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/70f0e0e7-eda3-4e8e-b98a-012f3bb9ed9e/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
        name: "Example Product C",
        price: "$70",
        selectedSize: "S",
        quantity: 1,
      },
    ],
    totalPrice: "$70",
  },
  {
    id: 67890,
    date: "2022-08-15",
    status: "Processing",
    items: [
      {
        id: 4,
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/70f0e0e7-eda3-4e8e-b98a-012f3bb9ed9e/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
        name: "Example Product C",
        price: "$70",
        selectedSize: "S",
        quantity: 1,
      },
    ],
    totalPrice: "$70",
  },
  {
    id: 67891,
    date: "2022-09-15",
    status: "Delivered",
    items: [
      {
        id: 5,
        image:
          "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/70f0e0e7-eda3-4e8e-b98a-012f3bb9ed9e/sweat-ultra-oversize-a-col-ras-du-cou-sportswear-phoenix-fleece-pour-G0d3Rc.png",
        name: "Example Product D",
        price: "$90",
        selectedSize: "L",
        quantity: 1,
      },
    ],
    totalPrice: "$90",
  },
];
