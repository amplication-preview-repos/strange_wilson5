import { Inventory } from "../inventory/Inventory";
import { OrderItem } from "../orderItem/OrderItem";

export type Product = {
  category: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  inStock: boolean | null;
  inventories?: Array<Inventory>;
  name: string | null;
  orderItems?: Array<OrderItem>;
  price: number | null;
  updatedAt: Date;
};
