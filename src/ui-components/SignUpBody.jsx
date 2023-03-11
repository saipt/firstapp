/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Heading,
  PasswordField,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
export default function SignUpBody(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="40px"
      direction="column"
      width="849px"
      height="597px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="100px 60px 100px 60px"
      backgroundColor="rgba(229,241,219,1)"
      {...getOverrideProps(overrides, "SignUpBody")}
      {...rest}
    >
      <Flex
        gap="15px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "LoginTextBody")}
      >
        <Heading
          width="unset"
          height="unset"
          shrink="0"
          level="4"
          children="Welcome to your Energy Management Portal"
          {...getOverrideProps(overrides, "Heading")}
        ></Heading>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="16px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Please enter your registered email address or mobile number and password"
          {...getOverrideProps(
            overrides,
            "Please enter your registered email address or mobile number and password"
          )}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
          lineHeight="16px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="(First time users to change password)"
          {...getOverrideProps(
            overrides,
            "(First time users to change password)"
          )}
        ></Text>
      </Flex>
      <Flex
        gap="21px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "LoginInteractionBody")}
      >
        <TextField
          width="250px"
          height="unset"
          label="Your Email"
          placeholder="Email"
          shrink="0"
          size="small"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField35073617")}
        ></TextField>
        <TextField
          width="250px"
          height="unset"
          label="Your Mobile"
          shrink="0"
          placeholder="Placeholder"
          size="small"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField37014124")}
        ></TextField>
        <PasswordField
          width="250px"
          height="unset"
          label="Your Password"
          shrink="0"
          placeholder="Placeholder"
          size="small"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          hideShowPassword={false}
          {...getOverrideProps(overrides, "PasswordField")}
        ></PasswordField>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          alignSelf="stretch"
          size="small"
          isDisabled={false}
          variation="primary"
          children="Sign In"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
