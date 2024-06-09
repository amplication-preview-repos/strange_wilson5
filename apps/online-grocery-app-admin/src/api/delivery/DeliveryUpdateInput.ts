import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type DeliveryUpdateInput = {
  order?: OrderWhereUniqueInput | null;
  partner?: string | null;
  status?: "Option1" | null;
};
