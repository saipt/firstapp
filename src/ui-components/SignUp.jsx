/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import SignUpBody from "./SignUpBody";
import { Flex } from "@aws-amplify/ui-react";
export default function SignUp(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="unset"
      height="597px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(229,241,219,1)"
      {...getOverrideProps(overrides, "SignUp")}
      {...rest}
    >
      <SignUpBody
        display="flex"
        gap="40px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="100px 60px 100px 60px"
        backgroundColor="rgba(229,241,219,1)"
        {...getOverrideProps(overrides, "SignUp37014131")}
      ></SignUpBody>
    </Flex>
  );
}
