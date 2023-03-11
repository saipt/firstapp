/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import {
  Alert,
  Badge,
  Divider,
  Flex,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function ImportExport2(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        Divider: {},
        TextField: {},
        "Frame 420": {},
        Badge: {},
        "Frame 419": {},
        Alert: {},
        "Frame 418": {},
        "Frame 422": {},
        ImportExport2: {},
      },
      variantValues: { property1: "Default" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="938px"
      height="68px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ImportExport2")}
      {...rest}
    >
      <Divider
        width="900px"
        height="2px"
        position="absolute"
        top="60px"
        left="19px"
        size="large"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider")}
      ></Divider>
      <Flex
        gap="0"
        direction="row"
        width="917px"
        height="58px"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        top="0px"
        left="11px"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Frame 422")}
      >
        <Flex
          gap="10px"
          direction="column"
          width="277px"
          height="48px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 420")}
        >
          <TextField
            width="186px"
            height="unset"
            placeholder="Energy"
            alignItems="center"
            shrink="0"
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "TextField")}
          ></TextField>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="148px"
          height="44px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="18px 19px 18px 19px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 419")}
        >
          <Badge
            width="unset"
            height="unset"
            shrink="0"
            size="large"
            variation="info"
            children="Import/ Export"
            {...getOverrideProps(overrides, "Badge")}
          ></Badge>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="396px"
          height="49px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          display="flex"
          {...getOverrideProps(overrides, "Frame 418")}
        >
          <Alert
            width="362px"
            height="47px"
            heading="Warning"
            shrink="0"
            variation="warning"
            isDismissible={true}
            hasIcon={true}
            children="No alerts"
            {...getOverrideProps(overrides, "Alert")}
          ></Alert>
        </Flex>
      </Flex>
    </View>
  );
}
