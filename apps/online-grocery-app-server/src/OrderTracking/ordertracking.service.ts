import { Injectable } from "@nestjs/common";

@Injectable()
export class OrderTrackingService {
  constructor() {}
  async FetchOrderStatus(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GetOrderStatus(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
