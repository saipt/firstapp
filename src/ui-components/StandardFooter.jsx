/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function StandardFooter(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1196px"
      height="61px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "StandardFooter")}
      {...rest}
    >
      <Icon
        width="1196px"
        height="61px"
        viewBox={{ minX: 0, minY: 0, width: 1196, height: 61 }}
        paths={[
          {
            d: "M0 0L1196 0L1196 61L0 61L0 0Z",
            fill: "rgba(58,86,66,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Rectangle 738")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="530px"
        height="21px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        bottom="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="A software collaboration between Ross of Cactii and Mehdi and Hind"
        {...getOverrideProps(
          overrides,
          "A software collaboration between Ross of Cactii and Mehdi and Hind"
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        bottom="0px"
        right="0px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Copyright Cactii Pty Ltd 2022  "
        {...getOverrideProps(overrides, "Copyright Cactii Pty Ltd 2022")}
      ></Text>
      <Flex
        gap="16px"
        direction="column"
        width="1196px"
        height="34px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 51px 0px 0px"
        {...getOverrideProps(overrides, "Frame 313")}
      >
        <Text
          fontFamily="Inter"
          fontSize="13px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="1196px"
          height="34px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="The Portal relies on data collected from your site and offers suggestions to optimise your energy use reflecting your “value” system.  This is done on a best effort basis"
          {...getOverrideProps(
            overrides,
            "The Portal relies on data collected from your site and offers suggestions to optimise your energy use reflecting your \u201Cvalue\u201D system. This is done on a best effort basis"
          )}
        ></Text>
      </Flex>
    </View>
  );
}
