import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DeliveryListRelationFilter } from "../delivery/DeliveryListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { OrderItemListRelationFilter } from "../orderItem/OrderItemListRelationFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  customer?: CustomerWhereUniqueInput;
  customerRef?: StringNullableFilter;
  deliveries?: DeliveryListRelationFilter;
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  orderItems?: OrderItemListRelationFilter;
  orderState?: "Option1";
  orderStatus?: "Option1";
  payments?: PaymentListRelationFilter;
  state?: "Option1";
  status?: "Option1";
  totalAmount?: FloatNullableFilter;
  user?: StringNullableFilter;
};
