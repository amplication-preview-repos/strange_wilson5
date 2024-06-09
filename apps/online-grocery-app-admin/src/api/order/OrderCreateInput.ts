import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DeliveryCreateNestedManyWithoutOrdersInput } from "./DeliveryCreateNestedManyWithoutOrdersInput";
import { OrderItemCreateNestedManyWithoutOrdersInput } from "./OrderItemCreateNestedManyWithoutOrdersInput";
import { PaymentCreateNestedManyWithoutOrdersInput } from "./PaymentCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  customerRef?: string | null;
  deliveries?: DeliveryCreateNestedManyWithoutOrdersInput;
  orderDate?: Date | null;
  orderItems?: OrderItemCreateNestedManyWithoutOrdersInput;
  orderState?: "Option1" | null;
  orderStatus?: "Option1" | null;
  payments?: PaymentCreateNestedManyWithoutOrdersInput;
  state?: "Option1" | null;
  status?: "Option1" | null;
  totalAmount?: number | null;
  user?: string | null;
};
