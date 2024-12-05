import { Customer } from "../customer/Customer";
import { Delivery } from "../delivery/Delivery";
import { OrderItem } from "../orderItem/OrderItem";
import { Payment } from "../payment/Payment";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  customerRef: string | null;
  deliveries?: Array<Delivery>;
  id: string;
  orderDate: Date | null;
  orderItems?: Array<OrderItem>;
  orderState?: "Option1" | null;
  orderStatus?: "Option1" | null;
  payments?: Array<Payment>;
  state?: "Option1" | null;
  status?: "Option1" | null;
  totalAmount: number | null;
  updatedAt: Date;
  user: string | null;
};
