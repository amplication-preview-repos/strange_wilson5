import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { OrderTrackingService } from "./ordertracking.service";

@swagger.ApiTags("orderTrackings")
@common.Controller("orderTrackings")
export class OrderTrackingController {
  constructor(protected readonly service: OrderTrackingService) {}

  @common.Get("/order/:id/status")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchOrderStatus(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.FetchOrderStatus(body);
      }

  @common.Get("/:id/get-order-status")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetOrderStatus(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.GetOrderStatus(body);
      }
}
