import { Order } from "../order/Order";

export type Delivery = {
  createdAt: Date;
  id: string;
  order?: Order | null;
  partner: string | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
