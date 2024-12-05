import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "customerRef";

export const OrderTitle = (record: TOrder): string => {
  return record.customerRef?.toString() || String(record.id);
};
