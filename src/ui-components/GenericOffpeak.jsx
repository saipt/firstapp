/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Flex, TextField } from "@aws-amplify/ui-react";
export default function GenericOffpeak(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="12px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="12px 0px 12px 0px"
      {...getOverrideProps(overrides, "GenericOffpeak")}
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
        {...getOverrideProps(overrides, "TextField39553822")}
      ></TextField>
      <TextField
        width="135px"
        height="unset"
        placeholder="State"
        shrink="0"
        size="large"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "TextField39553829")}
      ></TextField>
      <Badge
        width="unset"
        height="unset"
        shrink="0"
        size="large"
        variation="warning"
        {...getOverrideProps(overrides, "Status")}
      ></Badge>
    </Flex>
  );
}
