import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type DeliveryCreateInput = {
  order?: OrderWhereUniqueInput | null;
  partner?: string | null;
  status?: "Option1" | null;
};
