/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Flex, Heading, TextField } from "@aws-amplify/ui-react";
export default function GenericInverterstatus(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="12px"
      direction="row"
      width="658px"
      height="42px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 12px"
      {...getOverrideProps(overrides, "GenericInverterstatus")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="105px"
        height="34px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Frame 425")}
      >
        <Heading
          width="unset"
          height="unset"
          shrink="0"
          level="4"
          children="Inverter"
          {...getOverrideProps(overrides, "Heading")}
        ></Heading>
      </Flex>
      <TextField
        width="300px"
        height="unset"
        placeholder="Invmodel"
        shrink="0"
        size="large"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "TextField37564114")}
      ></TextField>
      <TextField
        width="124px"
        height="unset"
        placeholder="Power"
        shrink="0"
        size="large"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "TextField37593895")}
      ></TextField>
      <Badge
        width="unset"
        height="unset"
        shrink="0"
        size="large"
        variation="warning"
        children="Status"
        {...getOverrideProps(overrides, "Badge")}
      ></Badge>
    </Flex>
  );
}
