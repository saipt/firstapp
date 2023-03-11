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
  CheckboxField,
  Flex,
  Heading,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function SigninTC(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="779px"
      height="443px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(229,241,219,1)"
      {...getOverrideProps(overrides, "SigninTC")}
      {...rest}
    >
      <View
        width="589px"
        height="213px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="230px"
        left="92px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Acceptitems")}
      >
        <View
          width="576px"
          height="67px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="51px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "email")}
        >
          <TextField
            width="316px"
            height="44px"
            placeholder="email"
            position="absolute"
            top="13px"
            left="260px"
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "TextField")}
          ></TextField>
        </View>
        <Button
          width="unset"
          height="unset"
          position="absolute"
          top="140px"
          left="236px"
          size="large"
          isDisabled={false}
          variation="primary"
          children="Submitt"
          {...getOverrideProps(overrides, "Button38593871")}
        ></Button>
        <CheckboxField
          width="unset"
          height="unset"
          label="Accept email to use  "
          position="absolute"
          padding="0px 2px 0px 2px"
          top="71px"
          left="0px"
          size="large"
          defaultChecked={false}
          isDisabled={false}
          labelPosition="end"
          {...getOverrideProps(overrides, "CheckboxField38593824")}
        ></CheckboxField>
        <View
          width="580px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="10px"
          left="-2px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Licence")}
        >
          <Button
            width="405px"
            height="32px"
            position="absolute"
            top="4px"
            left="139px"
            size="default"
            isDisabled={false}
            variation="link"
            children="Licence to use Portal Agreement  (view?)"
            {...getOverrideProps(overrides, "Button38594065")}
          ></Button>
          <CheckboxField
            width="unset"
            height="unset"
            label="Accept"
            position="absolute"
            padding="0px 2px 0px 2px"
            top="5px"
            left="2px"
            size="large"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="end"
            {...getOverrideProps(overrides, "CheckboxField38593813")}
          ></CheckboxField>
        </View>
      </View>
      <Flex
        gap="0"
        direction="column"
        width="779px"
        height="181px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="calc(50% - 90.5px - 82px)"
        left="calc(50% - 389.5px - 0px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 417")}
      >
        <Heading
          width="616px"
          height="75px"
          shrink="0"
          level="4"
          children="Some house-keeping before your (continued) use &#xA;of the Energy Management Portal"
          {...getOverrideProps(overrides, "Heading38593776")}
        ></Heading>
        <Heading
          width="445px"
          height="unset"
          shrink="0"
          level="5"
          children="If you have never used the site before, or the &#xA; “Licence to use the Portal Agreement” &#xA;has changed, please tick the below &#xA;to accept the “Licence” before proceeding."
          {...getOverrideProps(overrides, "Heading38593777")}
        ></Heading>
      </Flex>
      <View
        width="779px"
        height="49px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="calc(50% - 24.5px - 197px)"
        left="calc(50% - 389.5px - 0px)"
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
