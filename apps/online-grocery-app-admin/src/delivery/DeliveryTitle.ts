import { Delivery as TDelivery } from "../api/delivery/Delivery";

export const DELIVERY_TITLE_FIELD = "partner";

export const DeliveryTitle = (record: TDelivery): string => {
  return record.partner?.toString() || String(record.id);
};
