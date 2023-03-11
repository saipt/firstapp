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
  PhoneNumberField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function Signin(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="799px"
      height="532px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(229,241,219,1)"
      {...getOverrideProps(overrides, "Signin")}
      {...rest}
    >
      <Flex
        gap="6px"
        direction="column"
        width="unset"
        height="379px"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="calc(50% - 189.5px - -76.5px)"
        left="calc(50% - 234.5px - 0px)"
        padding="0px 2px 0px 2px"
        {...getOverrideProps(overrides, "Frame 418")}
      >
        <Flex
          gap="2px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 10px 0px 10px"
          {...getOverrideProps(overrides, "email38593944")}
        >
          <TextField
            width="445px"
            height="unset"
            label="Enter registered email"
            gap="2px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            placeholder="Placeholder"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "email38593936")}
          ></TextField>
        </Flex>
        <PhoneNumberField
          width="439px"
          height="82px"
          label="or your mobile number"
          placeholder="number"
          gap="2px"
          alignItems="center"
          shrink="0"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "PhoneNumberField")}
        ></PhoneNumberField>
        <PasswordField
          width="385px"
          height="96px"
          label="Your password"
          gap="2px"
          alignItems="center"
          shrink="0"
          placeholder="Placeholder"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          hideShowPassword={false}
          {...getOverrideProps(overrides, "PasswordField")}
        ></PasswordField>
        <Button
          width="unset"
          height="unset"
          alignItems="flex-start"
          shrink="0"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Sign In"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
        <Heading
          width="292px"
          height="unset"
          padding="6px 0px 6px 0px"
          shrink="0"
          level="5"
          children=" Forgot/ new password Link"
          {...getOverrideProps(overrides, "Heading37484055")}
        ></Heading>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        width="719px"
        height="98px"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="calc(50% - 49px - 169px)"
        left="calc(50% - 359.5px - 0px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 417")}
      >
        <Heading
          width="716px"
          height="48px"
          shrink="0"
          level="3"
          children="Welcome to your Energy Management Portal"
          {...getOverrideProps(overrides, "Heading34523389")}
        ></Heading>
        <Heading
          width="unset"
          height="50px"
          shrink="0"
          level="5"
          children="Please enter your registered credentials below&#xA;(First time users need to agree to Terms)"
          {...getOverrideProps(overrides, "Heading35032935")}
        ></Heading>
      </Flex>
      <View
        width="799px"
        height="41px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="calc(50% - 20.5px - 245.5px)"
        left="calc(50% - 399.5px - 0px)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(10,43,17,1)"
        {...getOverrideProps(overrides, "Frame 431")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="calc(50% - 23px - 0.5px)"
          left="calc(50% - 79.5px - 0px)"
          padding="11px 20px 11px 20px"
          {...getOverrideProps(overrides, "Logo")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="600"
            color="rgba(68,175,91,1)"
            textTransform="capitalize"
            lineHeight="24.204544067382812px"
            textAlign="left"
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
            children="Cactii Portal"
            {...getOverrideProps(overrides, "Cactii Portal")}
          ></Text>
        </Flex>
      </View>
    </View>
  );
}
