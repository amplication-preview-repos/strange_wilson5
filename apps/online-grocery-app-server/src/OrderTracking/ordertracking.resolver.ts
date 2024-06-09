import * as graphql from "@nestjs/graphql";
import { OrderTrackingService } from "./ordertracking.service";

export class OrderTrackingResolver {
  constructor(protected readonly service: OrderTrackingService) {}

  @graphql.Query(() => String)
  async FetchOrderStatus(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.FetchOrderStatus(args);
  }

  @graphql.Query(() => String)
  async GetOrderStatus(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetOrderStatus(args);
  }
}
