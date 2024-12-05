import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  otp?: SortOrder;
  phone?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
};
