/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Flex, TextField } from "@aws-amplify/ui-react";
export default function GenericDevicestatus(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="12px"
      direction="row"
      width="628px"
      height="58px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="12px 0px 12px 0px"
      {...getOverrideProps(overrides, "GenericDevicestatus")}
      {...rest}
    >
      <TextField
        width="300px"
        height="unset"
        placeholder="DeviceName"
        shrink="0"
        size="large"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "DeviceName")}
      ></TextField>
      <TextField
        width="162px"
        height="unset"
        placeholder="State"
        shrink="0"
        size="large"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "State")}
      ></TextField>
      <Badge
        width="unset"
        height="unset"
        shrink="0"
        size="large"
        variation="warning"
        children="status"
        {...getOverrideProps(overrides, "Status")}
      ></Badge>
    </Flex>
  );
}
