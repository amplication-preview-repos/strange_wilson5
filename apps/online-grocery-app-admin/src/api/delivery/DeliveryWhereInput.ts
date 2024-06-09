import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DeliveryWhereInput = {
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  partner?: StringNullableFilter;
  status?: "Option1";
};
