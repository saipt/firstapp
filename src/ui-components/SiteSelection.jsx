/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Card, Text, View } from "@aws-amplify/ui-react";
export default function SiteSelection(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="319px"
      height="86px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SiteSelection")}
      {...rest}
    >
      <Card
        width="319px"
        height="86px"
        position="absolute"
        backgroundColor="rgba(229,241,219,1)"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        variation="outline"
        {...getOverrideProps(overrides, "Card")}
      ></Card>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="600"
        color="rgba(104,112,120,1)"
        textTransform="uppercase"
        lineHeight="30px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="281px"
        height="27px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="68.6%"
        left="5.96%"
        right="5.96%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Site Name"
        {...getOverrideProps(overrides, "Site Name")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="9px"
        fontWeight="359"
        color="rgba(0,0,0,1)"
        textTransform="capitalize"
        lineHeight="13.5px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="259px"
        height="18px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="37.21%"
        bottom="41.86%"
        left="9.4%"
        right="9.4%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="siteID"
        {...getOverrideProps(overrides, "siteID")}
      ></Text>
      <Button
        width="unset"
        height="unset"
        position="absolute"
        top="58.07%"
        bottom="3.56%"
        left="39.5%"
        right="39.18%"
        backgroundColor="rgba(154,226,161,1)"
        size="small"
        isDisabled={true}
        variation="primary"
        children="Select"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </View>
  );
}
