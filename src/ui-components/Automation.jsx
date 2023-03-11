/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
import ImportExport2 from "./ImportExport2";
import SideBar2 from "./SideBar2";
import HeaderActive from "./HeaderActive";
export default function Automation(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1159px"
      height="753px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(229,241,219,1)"
      {...getOverrideProps(overrides, "Automation")}
      {...rest}
    >
      <Flex
        gap="12px"
        direction="column"
        width="1012px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="174px"
        left="147px"
        padding="12px 0px 12px 0px"
        {...getOverrideProps(overrides, "Frame 489")}
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
          children="Automation Devices"
          {...getOverrideProps(overrides, "IOT Devices")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="29.045454025268555px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="698px"
          height="78px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Summarises devices registered as being associated with this site, reports their status and a level of control."
          {...getOverrideProps(overrides, "IOT devices note")}
        ></Text>
        <View
          width="846px"
          height="344px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "IOTCollection")}
        ></View>
      </Flex>
      <ImportExport2
        width="938px"
        height="68px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="110px"
        left="185px"
        padding="0px 0px 0px 0px"
        property1="Default"
        {...getOverrideProps(overrides, "ImportExport2")}
      ></ImportExport2>
      <SideBar2
        width="83px"
        height="693px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="66px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(58,86,66,1)"
        {...getOverrideProps(overrides, "SideBar2")}
      ></SideBar2>
      <HeaderActive
        width="1159px"
        height="78px"
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
