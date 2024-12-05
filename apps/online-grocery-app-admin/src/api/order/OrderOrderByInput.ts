import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  customerRef?: SortOrder;
  id?: SortOrder;
  orderDate?: SortOrder;
  orderState?: SortOrder;
  orderStatus?: SortOrder;
  state?: SortOrder;
  status?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
};
