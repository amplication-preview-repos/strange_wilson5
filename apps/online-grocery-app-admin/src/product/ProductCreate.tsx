import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { InventoryTitle } from "../inventory/InventoryTitle";
import { OrderItemTitle } from "../orderItem/OrderItemTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="category" source="category" />
        <TextInput label="description" multiline source="description" />
        <BooleanInput label="inStock" source="inStock" />
        <ReferenceArrayInput
          source="inventories"
          reference="Inventory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={InventoryTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="orderItems"
          reference="OrderItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderItemTitle} />
        </ReferenceArrayInput>
        <NumberInput label="price" source="price" />
      </SimpleForm>
    </Create>
  );
};
