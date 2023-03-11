/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, TextField } from "@aws-amplify/ui-react";
export default function LineItems(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="1059px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="6px 12px 6px 12px"
      {...getOverrideProps(overrides, "LineItems")}
      {...rest}
    >
      <TextField
        width="82px"
        height="46px"
        placeholder="Itm"
        shrink="0"
        size="large"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "item number")}
      ></TextField>
      <TextField
        width="463px"
        height="unset"
        placeholder="Item Description"
        shrink="0"
        size="large"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "Item description")}
      ></TextField>
      <TextField
        width="76px"
        height="unset"
        placeholder="num"
        shrink="0"
        size="large"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "Num items")}
      ></TextField>
      <TextField
        width="73px"
        height="unset"
        placeholder="Disc"
        shrink="0"
        size="large"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "Discount")}
      ></TextField>
      <TextField
        width="131px"
        height="45px"
        placeholder="Base"
        shrink="0"
        size="large"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "Base amount")}
      ></TextField>
      <TextField
        width="157px"
        height="unset"
        placeholder="Actual"
        shrink="0"
        size="large"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "Actual amount")}
      ></TextField>
    </Flex>
  );
}
