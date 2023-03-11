/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Flex,
  Heading,
  Radio,
  TextField,
  View,
} from "@aws-amplify/ui-react";
import HeaderActive from "./HeaderActive";
import SideBar2 from "./SideBar2";
import ImportExport2 from "./ImportExport2";
export default function HomeFrame(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1281px"
      height="1052px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(229,241,219,1)"
      {...getOverrideProps(overrides, "HomeFrame")}
      {...rest}
    >
      <Flex
        gap="12px"
        direction="column"
        width="1096px"
        height="748px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="calc(50% - 374px - -138px)"
        left="calc(50% - 548px - -52.5px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Devices")}
      >
        <Heading
          width="unset"
          height="unset"
          shrink="0"
          level="3"
          children="Devices"
          {...getOverrideProps(overrides, "Heading34983113")}
        ></Heading>
        <View
          width="unset"
          height="175px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Inverters")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="1076px"
            height="unset"
            justifyContent="center"
            alignItems="center"
            position="absolute"
            top="29px"
            left="0px"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "InverterCollection")}
          ></Flex>
          <Heading
            width="unset"
            height="unset"
            position="absolute"
            top="-0.5px"
            left="503px"
            level="4"
            children="Inverters"
            {...getOverrideProps(overrides, "Heading37584073")}
          ></Heading>
        </View>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="209px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Storage")}
        >
          <Heading
            width="unset"
            height="unset"
            shrink="0"
            level="4"
            children="Storage"
            {...getOverrideProps(overrides, "Heading37584067")}
          ></Heading>
          <Flex
            gap="10px"
            direction="row"
            width="1084px"
            height="176px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="10px 10px 10px 10px"
            {...getOverrideProps(overrides, "StorageCollection")}
          ></Flex>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="1090px"
          height="171px"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "OffPeak")}
        >
          <Heading
            width="unset"
            height="unset"
            shrink="0"
            level="4"
            children="Off Peak Devices"
            {...getOverrideProps(overrides, "Heading37564057")}
          ></Heading>
          <Flex
            gap="10px"
            direction="row"
            width="1080px"
            height="122px"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="10px 10px 10px 0px"
            {...getOverrideProps(overrides, "OffPeakCollection")}
          ></Flex>
        </Flex>
        <View
          width="1086px"
          height="115px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "IOTSummary")}
        >
          <TextField
            width="300px"
            height="unset"
            placeholder="Expected Number Devices"
            position="absolute"
            top="45px"
            left="361px"
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "TextField39553854")}
          ></TextField>
          <Badge
            width="unset"
            height="unset"
            position="absolute"
            top="45px"
            left="695px"
            size="large"
            variation="warning"
            children="0"
            {...getOverrideProps(overrides, "Badge")}
          ></Badge>
          <Heading
            width="unset"
            height="unset"
            position="absolute"
            top="-0.5px"
            left="435px"
            level="4"
            children="Summary IOT Status"
            {...getOverrideProps(overrides, "Heading39553851")}
          ></Heading>
        </View>
      </Flex>
      <Flex
        gap="22px"
        direction="row"
        width="1132px"
        height="116px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="calc(50% - 58px - 292px)"
        left="calc(50% - 566px - -74.5px)"
        padding="9px 0px 9px 0px"
        {...getOverrideProps(overrides, "IndicLight")}
      >
        <Heading
          width="272px"
          height="unset"
          padding="0px 12px 0px 12px"
          shrink="0"
          level="3"
          children="Indicator light"
          {...getOverrideProps(overrides, "Heading34932900")}
        ></Heading>
        <TextField
          width="300px"
          height="unset"
          label="Start mute (time)"
          placeholder="Start Mute"
          shrink="0"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField35273073")}
        ></TextField>
        <TextField
          width="300px"
          height="unset"
          label="Stop mute (time)"
          placeholder="Stop Mute"
          shrink="0"
          size="large"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField35273081")}
        ></TextField>
        <Radio
          width="154px"
          height="30px"
          justifyContent="flex-end"
          padding="0px 20px 0px 20px"
          shrink="0"
          size="large"
          defaultChecked={false}
          isDisabled={false}
          labelPosition="start"
          children="Temp mute"
          {...getOverrideProps(overrides, "Radio")}
        ></Radio>
      </Flex>
      <HeaderActive
        width="1281px"
        height="77px"
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
      <SideBar2
        width="77px"
        height="975px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="77px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(58,86,66,1)"
        {...getOverrideProps(overrides, "SideBar2")}
      ></SideBar2>
      <Flex
        gap="10px"
        direction="column"
        width="1131px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="calc(50% - 35.5px - 396.5px)"
        left="calc(50% - 565.5px - -70px)"
        padding="4px 14px 4px 14px"
        {...getOverrideProps(overrides, "Frame 488")}
      >
        <ImportExport2
          width="924px"
          height="63px"
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
      </Flex>
    </View>
  );
}
