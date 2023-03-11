/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import ImportExport2 from "./ImportExport2";
import { Flex, Heading, TextField, View } from "@aws-amplify/ui-react";
import SideBar2 from "./SideBar2";
import HeaderActive from "./HeaderActive";
export default function Financial(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="1019px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(229,241,219,1)"
      {...getOverrideProps(overrides, "Financial")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="1242px"
        height="917px"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="116px"
        left="172px"
        padding="0px 30px 40px 30px"
        {...getOverrideProps(overrides, "Canvas")}
      >
        <ImportExport2
          width="1100px"
          height="72px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          property1="Default"
          {...getOverrideProps(overrides, "ImportExport2")}
        ></ImportExport2>
        <Flex
          gap="12px"
          direction="column"
          width="1160px"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="12px 12px 12px 12px"
          {...getOverrideProps(overrides, "Summary")}
        >
          <Heading
            width="unset"
            height="unset"
            shrink="0"
            level="3"
            children="Your billing "
            {...getOverrideProps(overrides, "Heading36224187")}
          ></Heading>
          <Heading
            width="unset"
            height="unset"
            shrink="0"
            level="5"
            children="Currently these service are complimentary or carried by Cactii.  "
            {...getOverrideProps(overrides, "Heading36224505")}
          ></Heading>
          <Flex
            gap="12px"
            direction="column"
            width="unset"
            height="522px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 481")}
          >
            <View
              width="1136px"
              height="60px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Headingblock")}
            >
              <Heading
                width="unset"
                height="unset"
                position="absolute"
                top="30px"
                left="30px"
                level="4"
                children="Items"
                {...getOverrideProps(overrides, "Heading36224190")}
              ></Heading>
              <Heading
                width="unset"
                height="unset"
                position="absolute"
                top="26px"
                left="299px"
                level="4"
                children="Item Description"
                {...getOverrideProps(overrides, "Heading38464032")}
              ></Heading>
              <Heading
                width="unset"
                height="unset"
                position="absolute"
                top="26px"
                left="935px"
                level="4"
                children="Amounts"
                {...getOverrideProps(overrides, "Heading38464034")}
              ></Heading>
              <Heading
                width="unset"
                height="unset"
                position="absolute"
                top="26px"
                left="635px"
                level="4"
                children="Discount"
                {...getOverrideProps(overrides, "Heading38464037")}
              ></Heading>
            </View>
            <Flex
              gap="107px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 11px 0px 11px"
              {...getOverrideProps(overrides, "TotalsBlock")}
            >
              <TextField
                width="145px"
                height="unset"
                placeholder="Total"
                shrink="0"
                size="large"
                isDisabled={false}
                labelHidden={true}
                variation="default"
                {...getOverrideProps(overrides, "TextField39644155")}
              ></TextField>
              <TextField
                width="475px"
                height="unset"
                placeholder="Total of all items (including tax and discounts)"
                shrink="0"
                size="large"
                isDisabled={false}
                labelHidden={true}
                variation="default"
                {...getOverrideProps(overrides, "TextField39644162")}
              ></TextField>
              <TextField
                width="242px"
                height="unset"
                placeholder="Total"
                shrink="0"
                size="large"
                isDisabled={false}
                labelHidden={true}
                variation="default"
                {...getOverrideProps(overrides, "TextField39644169")}
              ></TextField>
            </Flex>
            <View
              width="1107px"
              height="376px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "ItemCollection")}
            ></View>
          </Flex>
        </Flex>
      </Flex>
      <SideBar2
        width="82px"
        height="944px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="74px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(58,86,66,1)"
        {...getOverrideProps(overrides, "SideBar2")}
      ></SideBar2>
      <HeaderActive
        width="1440px"
        height="74px"
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
