export interface Orders {
    id: string;
    customerName: string;
    customerLastName: string;
    customerEmail: string;
    tel: number;
    address: string;
    city: string;
    country: number;
    total: number;
    subtotal: number,
    discount: number,
    shippingPrice:number,
    taxas: number, 
    payMethod: string;
    paymentId: string;
    state: string;
    orderDate: string;
    products: [];
  
  }
  