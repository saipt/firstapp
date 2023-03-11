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
  Icon,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function HeaderActive(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1345px"
      height="74px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(58,86,66,1)"
      {...getOverrideProps(overrides, "HeaderActive")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="row"
        width="335px"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        position="absolute"
        top="calc(50% - 23px - -1px)"
        right="0px"
        padding="0px 20px 0px 20px"
        {...getOverrideProps(overrides, "Frame 419")}
      >
        <TextField
          width="197px"
          height="unset"
          placeholder="Name"
          shrink="0"
          size="large"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "TextField35344662")}
        ></TextField>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Log Out"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="calc(50% - 24.5px - -0.5px)"
        left="calc(50% - 118.5px - -91px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 418")}
      >
        <Image
          width="70px"
          height="49px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(
            overrides,
            "Cactii symbol facing leftclearsmall 1"
          )}
        ></Image>
        <Text
          fontFamily="Inter"
          fontSize="24px"
          fontWeight="600"
          color="rgba(193,233,199,1)"
          lineHeight="30px"
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
          {...getOverrideProps(overrides, "label")}
        ></Text>
      </Flex>
      <View
        width="82px"
        height="47px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="14px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "MyIcon")}
      >
        <Icon
          width="54.67px"
          height="31.33px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 54.666748046875,
            height: 31.333251953125,
          }}
          paths={[
            {
              d: "M0 1.95833C0 0.876776 1.52969 0 3.41667 0L51.25 0C53.137 0 54.6667 0.876776 54.6667 1.95833C54.6667 3.03989 53.137 3.91667 51.25 3.91667L3.41667 3.91667C1.52969 3.91667 0 3.03989 0 1.95833Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
            {
              d: "M0 15.6667C0 14.5851 1.52969 13.7083 3.41667 13.7083L51.25 13.7083C53.137 13.7083 54.6667 14.5851 54.6667 15.6667C54.6667 16.7482 53.137 17.625 51.25 17.625L3.41667 17.625C1.52969 17.625 0 16.7482 0 15.6667Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
            {
              d: "M0 29.375C0 28.2934 1.52969 27.4167 3.41667 27.4167L51.25 27.4167C53.137 27.4167 54.6667 28.2934 54.6667 29.375C54.6667 30.4566 53.137 31.3333 51.25 31.3333L3.41667 31.3333C1.52969 31.3333 0 30.4566 0 29.375Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="16.67%"
          bottom="16.67%"
          left="16.67%"
          right="16.67%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
      <TextField
        width="300px"
        height="61px"
        placeholder="Site"
        alignItems="center"
        position="absolute"
        top="7px"
        left="206px"
        size="large"
        isDisabled={false}
        labelHidden={true}
        variation="default"
        {...getOverrideProps(overrides, "TextField35573590")}
      ></TextField>
      <TextField
        width="103px"
        height="52px"
        position="absolute"
        top="13px"
        left="0px"
        placeholder="Placeholder"
        size="small"
        isDisabled={false}
        labelHidden={true}
        variation="quiet"
        {...getOverrideProps(overrides, "Cognum")}
      ></TextField>
    </View>
  );
}
