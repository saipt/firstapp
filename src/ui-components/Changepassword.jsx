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
  View,
} from "@aws-amplify/ui-react";
export default function Changepassword(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1149px"
      height="715px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(229,241,219,1)"
      {...getOverrideProps(overrides, "Changepassword")}
      {...rest}
    >
      <Flex
        gap="6px"
        direction="column"
        width="484px"
        height="409px"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="221px"
        left="calc(50% - 242px - 0.5px)"
        padding="0px 0px 35px 0px"
        {...getOverrideProps(overrides, "fields")}
      >
        <PasswordField
          width="411px"
          height="unset"
          label="Old password (if you have)"
          placeholder="Old Password"
          gap="2px"
          alignItems="center"
          shrink="0"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          hideShowPassword={false}
          {...getOverrideProps(overrides, "oldPasswordField")}
        ></PasswordField>
        <PasswordField
          width="412px"
          height="unset"
          label="New password"
          descriptiveText="Minimum 8 characters, 1 uppercase, lowercase and numeral"
          placeholder="New Password"
          gap="2px"
          alignItems="center"
          shrink="0"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          hideShowPassword={false}
          {...getOverrideProps(overrides, "newPasswordField")}
        ></PasswordField>
        <PasswordField
          width="412px"
          height="unset"
          label="New password"
          descriptiveText="Minimum 8 characters, 1 uppercase, lowercase and numeral"
          placeholder="New Password"
          gap="2px"
          alignItems="center"
          shrink="0"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          hideShowPassword={false}
          {...getOverrideProps(overrides, "passwordField")}
        ></PasswordField>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Submitt"
          {...getOverrideProps(overrides, "Button38593987")}
        ></Button>
        <Button
          width="92px"
          height="34px"
          shrink="0"
          size="large"
          isDisabled={true}
          variation="primary"
          children="Cancell"
          {...getOverrideProps(overrides, "Button39683947")}
        ></Button>
      </Flex>
      <Flex
        gap="0"
        direction="column"
        width="442px"
        height="165px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="calc(50% - 82.5px - 165px)"
        left="calc(50% - 221px - 5.5px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 417")}
      >
        <Heading
          width="325px"
          height="35px"
          shrink="0"
          level="4"
          children="Lost or first time password"
          {...getOverrideProps(overrides, "Heading38593991")}
        ></Heading>
        <Heading
          width="unset"
          height="57px"
          shrink="0"
          level="5"
          children="A reset of your password has been requested.&#xA;(This is mandatory for first time users)"
          {...getOverrideProps(overrides, "Heading38593992")}
        ></Heading>
        <Heading
          width="unset"
          height="57px"
          shrink="0"
          level="5"
          children=" "
          {...getOverrideProps(overrides, "Error")}
        ></Heading>
      </Flex>
      <View
        width="627px"
        height="46px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="calc(50% - 23px - 300.5px)"
        left="calc(50% - 313.5px - -1px)"
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
          top="calc(50% - 23px - 1px)"
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
