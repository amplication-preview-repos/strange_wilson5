import { SortOrder } from "../../util/SortOrder";

export type DeliveryOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  partner?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
