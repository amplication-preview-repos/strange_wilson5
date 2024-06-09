/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Delivery } from "./Delivery";
import { DeliveryCountArgs } from "./DeliveryCountArgs";
import { DeliveryFindManyArgs } from "./DeliveryFindManyArgs";
import { DeliveryFindUniqueArgs } from "./DeliveryFindUniqueArgs";
import { CreateDeliveryArgs } from "./CreateDeliveryArgs";
import { UpdateDeliveryArgs } from "./UpdateDeliveryArgs";
import { DeleteDeliveryArgs } from "./DeleteDeliveryArgs";
import { Order } from "../../order/base/Order";
import { DeliveryService } from "../delivery.service";
@graphql.Resolver(() => Delivery)
export class DeliveryResolverBase {
  constructor(protected readonly service: DeliveryService) {}

  async _deliveriesMeta(
    @graphql.Args() args: DeliveryCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Delivery])
  async deliveries(
    @graphql.Args() args: DeliveryFindManyArgs
  ): Promise<Delivery[]> {
    return this.service.deliveries(args);
  }

  @graphql.Query(() => Delivery, { nullable: true })
  async delivery(
    @graphql.Args() args: DeliveryFindUniqueArgs
  ): Promise<Delivery | null> {
    const result = await this.service.delivery(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Delivery)
  async createDelivery(
    @graphql.Args() args: CreateDeliveryArgs
  ): Promise<Delivery> {
    return await this.service.createDelivery({
      ...args,
      data: {
        ...args.data,

        order: args.data.order
          ? {
              connect: args.data.order,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Delivery)
  async updateDelivery(
    @graphql.Args() args: UpdateDeliveryArgs
  ): Promise<Delivery | null> {
    try {
      return await this.service.updateDelivery({
        ...args,
        data: {
          ...args.data,

          order: args.data.order
            ? {
                connect: args.data.order,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Delivery)
  async deleteDelivery(
    @graphql.Args() args: DeleteDeliveryArgs
  ): Promise<Delivery | null> {
    try {
      return await this.service.deleteDelivery(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Order, {
    nullable: true,
    name: "order",
  })
  async getOrder(@graphql.Parent() parent: Delivery): Promise<Order | null> {
    const result = await this.service.getOrder(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
