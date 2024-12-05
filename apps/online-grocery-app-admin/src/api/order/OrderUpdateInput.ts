import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DeliveryUpdateManyWithoutOrdersInput } from "./DeliveryUpdateManyWithoutOrdersInput";
import { OrderItemUpdateManyWithoutOrdersInput } from "./OrderItemUpdateManyWithoutOrdersInput";
import { PaymentUpdateManyWithoutOrdersInput } from "./PaymentUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  customerRef?: string | null;
  deliveries?: DeliveryUpdateManyWithoutOrdersInput;
  orderDate?: Date | null;
  orderItems?: OrderItemUpdateManyWithoutOrdersInput;
  orderState?: "Option1" | null;
  orderStatus?: "Option1" | null;
  payments?: PaymentUpdateManyWithoutOrdersInput;
  state?: "Option1" | null;
  status?: "Option1" | null;
  totalAmount?: number | null;
  user?: string | null;
};
