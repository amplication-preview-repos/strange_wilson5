import { Order } from "../order/Order";

export type Customer = {
  address: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  otp: number | null;
  phone: string | null;
  phoneNumber: string | null;
  updatedAt: Date;
};
