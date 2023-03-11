/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, TextField } from "@aws-amplify/ui-react";
export default function GenericBESstatus(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="12px"
      direction="row"
      width="436px"
      height="70px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 12px 0px 12px"
      {...getOverrideProps(overrides, "GenericBESstatus")}
      {...rest}
    >
      <TextField
        width="305px"
        height="unset"
        placeholder="DeviceName"
        shrink="0"
        size="large"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "TextField37593871")}
      ></TextField>
      <TextField
        width="99px"
        height="unset"
        placeholder="SoC"
        alignItems="center"
        shrink="0"
        size="large"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "TextField37593863")}
      ></TextField>
    </Flex>
  );
}
