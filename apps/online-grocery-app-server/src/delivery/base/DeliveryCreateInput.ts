/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { ValidateNested, IsOptional, IsString, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { EnumDeliveryStatus } from "./EnumDeliveryStatus";

@InputType()
class DeliveryCreateInput {
  @ApiProperty({
    required: false,
    type: () => OrderWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OrderWhereUniqueInput)
  @IsOptional()
  @Field(() => OrderWhereUniqueInput, {
    nullable: true,
  })
  order?: OrderWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  partner?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumDeliveryStatus,
  })
  @IsEnum(EnumDeliveryStatus)
  @IsOptional()
  @Field(() => EnumDeliveryStatus, {
    nullable: true,
  })
  status?: "Option1" | null;
}

export { DeliveryCreateInput as DeliveryCreateInput };
