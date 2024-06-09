import { Customer } from "../customer/Customer";
import { OrderItem } from "../orderItem/OrderItem";
import { Payment } from "../payment/Payment";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  orderDate: Date | null;
  orderItems?: Array<OrderItem>;
  payments?: Array<Payment>;
  status?: "Option1" | null;
  totalAmount: number | null;
  updatedAt: Date;
};
