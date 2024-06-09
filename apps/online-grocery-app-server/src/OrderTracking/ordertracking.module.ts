import { Module } from "@nestjs/common";
import { OrderTrackingService } from "./ordertracking.service";
import { OrderTrackingController } from "./ordertracking.controller";
import { OrderTrackingResolver } from "./ordertracking.resolver";

@Module({
  controllers: [OrderTrackingController],
  providers: [OrderTrackingService, OrderTrackingResolver],
  exports: [OrderTrackingService],
})
export class OrderTrackingModule {}
