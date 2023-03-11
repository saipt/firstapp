/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
import SideBar2 from "./SideBar2";
import HeaderActive from "./HeaderActive";
export default function Frame404(props) {
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
      {...getOverrideProps(overrides, "Frame404")}
      {...rest}
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
        position="absolute"
        top="calc(50% - 24px - 173.5px)"
        left="calc(50% - 146px - -89.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Unknown Error"
        {...getOverrideProps(overrides, "Unknown error")}
      ></Text>
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
        width="633px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 88px - 30.5px)"
        left="calc(50% - 316.5px - -119px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Our app has encountered an unknown error.  It woud be appreciated if you dropped us a note at contact@cactii.com.au "
        {...getOverrideProps(overrides, "unknown error")}
      ></Text>
      <SideBar2
        width="76px"
        height="689px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="70px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(58,86,66,1)"
        {...getOverrideProps(overrides, "SideBar2")}
      ></SideBar2>
      <HeaderActive
        width="1159px"
        height="70px"
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
      <Text
        fontFamily="Inter"
        fontSize="40px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="48.409088134765625px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="580px"
        height="199px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 99.5px - -156px)"
        left="calc(50% - 290px - -100.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Thank you for your patience during these teething troubles."
        {...getOverrideProps(
          overrides,
          "Thank you for your patience during these teething troubles."
        )}
      ></Text>
    </View>
  );
}
