/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, TextField, View } from "@aws-amplify/ui-react";
import SideBar2 from "./SideBar2";
import HeaderActive from "./HeaderActive";
export default function SiteSelect2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1297px"
      height="724px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(229,241,219,1)"
      {...getOverrideProps(overrides, "SiteSelect2")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="1152px"
        height="626px"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="98px"
        left="145px"
        padding="25px 24px 25px 24px"
        {...getOverrideProps(overrides, "Masterframe")}
      >
        <Flex
          gap="22px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="12px 0px 12px 0px"
          {...getOverrideProps(overrides, "Frame 485")}
        >
          <Text
            fontFamily="Inter"
            fontSize="40px"
            fontWeight="700"
            color="rgba(0,0,0,1)"
            lineHeight="48.409088134765625px"
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
            children="Welcome "
            {...getOverrideProps(overrides, "Welcome")}
          ></Text>
          <TextField
            width="300px"
            height="unset"
            shrink="0"
            placeholder="Placeholder"
            size="large"
            isDisabled={true}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "TextField")}
          ></TextField>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="36px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="43.568180084228516px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="1057px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="The below are the sites you are registered to access. Please select site. "
          {...getOverrideProps(
            overrides,
            "The below are the sites you are registered to access. Please select site."
          )}
        ></Text>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="279px"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Forinverters")}
        ></Flex>
        <Text
          fontFamily="Inter"
          fontSize="36px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="43.568180084228516px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="1027px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="You are not registered to any other sites."
          {...getOverrideProps(
            overrides,
            "You are not registered to any other sites."
          )}
        ></Text>
      </Flex>
      <SideBar2
        width="87px"
        height="659px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="65px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(58,86,66,1)"
        {...getOverrideProps(overrides, "SideBar2")}
      ></SideBar2>
      <HeaderActive
        width="1297px"
        height="68px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(58,86,66,1)"
        {...getOverrideProps(overrides, "HeaderActive")}
      ></HeaderActive>
    </View>
  );
}
