/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  CheckboxField,
  Divider,
  Flex,
  Heading,
  Radio,
  SliderField,
  StepperField,
  SwitchField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
import ImportExport2 from "./ImportExport2";
import HeaderActive from "./HeaderActive";
import SideBar2 from "./SideBar2";
export default function Infoframe(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="1101px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(229,241,219,1)"
      {...getOverrideProps(overrides, "Infoframe")}
      {...rest}
    >
      <View
        width="1311px"
        height="163px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="791px"
        left="126px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "EVPref")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="1311px"
          height="123px"
          justifyContent="space-between"
          alignItems="center"
          position="absolute"
          top="40px"
          left="0px"
          padding="10px 58px 10px 10px"
          {...getOverrideProps(overrides, "Frame 42736903992")}
        >
          <SliderField
            height="47px"
            label="Prioritise until SoC"
            defaultValue="20"
            shrink="0"
            isDisabled={false}
            labelHidden={false}
            isValueHidden={false}
            size="large"
            {...getOverrideProps(overrides, "SliderField36903993")}
          ></SliderField>
          <CheckboxField
            width="unset"
            height="unset"
            label="Only use solar "
            shrink="0"
            size="large"
            defaultChecked={true}
            isDisabled={false}
            labelPosition="start"
            {...getOverrideProps(overrides, "CheckboxField36904032")}
          ></CheckboxField>
          <SliderField
            height="47px"
            label="Boost until SoC"
            shrink="0"
            defaultValue="50"
            isDisabled={false}
            labelHidden={false}
            isValueHidden={false}
            size="large"
            {...getOverrideProps(overrides, "SliderField36903994")}
          ></SliderField>
          <SwitchField
            width="unset"
            height="unset"
            label="Boost"
            shrink="0"
            size="default"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="start"
            {...getOverrideProps(overrides, "SwitchField38923771")}
          ></SwitchField>
        </Flex>
        <Heading
          width="unset"
          height="unset"
          position="absolute"
          top="0px"
          left="530px"
          level="3"
          children="EV  Preferences"
          {...getOverrideProps(overrides, "Heading36903995")}
        ></Heading>
      </View>
      <View
        width="1295px"
        height="249px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="386px"
        left="145px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Powpref")}
      >
        <Flex
          gap="194px"
          direction="row"
          width="1262px"
          height="98px"
          justifyContent="space-between"
          alignItems="center"
          position="absolute"
          top="158px"
          right="20px"
          padding="19px 80px 19px 0px"
          {...getOverrideProps(overrides, "Frame 428")}
        >
          <Heading
            width="unset"
            height="unset"
            gap="12px"
            padding="0px 12px 0px 12px"
            shrink="0"
            level="4"
            children="Priority Heating/ Cooling period"
            {...getOverrideProps(overrides, "Heading34943394")}
          ></Heading>
          <Flex
            gap="40px"
            direction="row"
            width="458px"
            height="62px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 12px 0px 12px"
            {...getOverrideProps(overrides, "Frame 429")}
          >
            <Radio
              width="unset"
              height="unset"
              gap="12px"
              shrink="0"
              size="large"
              defaultChecked={true}
              isDisabled={false}
              labelPosition="start"
              children="Midday"
              {...getOverrideProps(overrides, "Radio34943404")}
            ></Radio>
            <Radio
              width="unset"
              height="unset"
              gap="12px"
              shrink="0"
              size="large"
              defaultChecked={true}
              isDisabled={false}
              labelPosition="start"
              children="Morning"
              {...getOverrideProps(overrides, "Radio34943398")}
            ></Radio>
            <Radio
              width="154px"
              height="unset"
              gap="12px"
              justifyContent="flex-start"
              shrink="0"
              size="large"
              defaultChecked={true}
              isDisabled={false}
              labelPosition="start"
              children="Afternoon"
              {...getOverrideProps(overrides, "Radio34943410")}
            ></Radio>
          </Flex>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="1272px"
          height="102px"
          justifyContent="space-between"
          alignItems="center"
          position="absolute"
          top="49px"
          left="3px"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Frame 42734943351")}
        >
          <SliderField
            height="47px"
            label="Use vs Revenue"
            shrink="0"
            defaultValue="50"
            isDisabled={false}
            labelHidden={false}
            isValueHidden={false}
            size="large"
            {...getOverrideProps(overrides, "SliderField34943372")}
          ></SliderField>
          <CheckboxField
            width="unset"
            height="unset"
            label="Prioritise Hot Water  "
            shrink="0"
            size="large"
            defaultChecked={true}
            isDisabled={false}
            labelPosition="start"
            {...getOverrideProps(overrides, "CheckboxField42863917")}
          ></CheckboxField>
          <SliderField
            height="unset"
            label="Surplus for trade"
            shrink="0"
            defaultValue="50"
            isDisabled={false}
            labelHidden={false}
            isValueHidden={false}
            size="large"
            {...getOverrideProps(overrides, "SliderField34943382")}
          ></SliderField>
        </Flex>
        <Heading
          width="unset"
          height="unset"
          position="absolute"
          top="0px"
          left="423px"
          level="3"
          children="Surplus power preferences"
          {...getOverrideProps(overrides, "Heading34943348")}
        ></Heading>
      </View>
      <View
        width="1272px"
        height="142px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="635px"
        left="150px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Control")}
      >
        <Heading
          width="unset"
          height="unset"
          position="absolute"
          top="0px"
          left="573px"
          level="3"
          children="Control"
          {...getOverrideProps(overrides, "Heading34952899")}
        ></Heading>
        <View
          width="1272px"
          height="113px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="40px"
          left="8px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 430")}
        >
          <SwitchField
            width="84px"
            height="unset"
            label=" On "
            position="absolute"
            top="36px"
            left="1188px"
            size="default"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="start"
            {...getOverrideProps(overrides, "SwitchField38923775")}
          ></SwitchField>
          <StepperField
            width="unset"
            height="unset"
            label="Pause automation for (Hrs)"
            position="absolute"
            top="4px"
            left="15px"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "StepperField43103973")}
          ></StepperField>
          <StepperField
            width="unset"
            height="unset"
            label="Minimum pool pump (hrs)"
            position="absolute"
            top="4px"
            left="500px"
            size="large"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "StepperField43123992")}
          ></StepperField>
        </View>
      </View>
      <View
        width="1292px"
        height="205px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="176px"
        left="145px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Detail")}
      >
        <Flex
          gap="0"
          direction="row"
          width="1275px"
          height="63px"
          justifyContent="space-between"
          alignItems="center"
          position="absolute"
          top="128px"
          left="0px"
          padding="0px 20px 0px 20px"
          {...getOverrideProps(overrides, "Frame 425")}
        >
          <TextField
            width="300px"
            height="unset"
            placeholder="Longitude"
            shrink="0"
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "TextField34943325")}
          ></TextField>
          <TextField
            width="300px"
            height="unset"
            placeholder="Latitude"
            shrink="0"
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "TextField34943326")}
          ></TextField>
          <TextField
            width="300px"
            height="unset"
            placeholder="Elevation"
            shrink="0"
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "TextField34943327")}
          ></TextField>
        </Flex>
        <Flex
          gap="166px"
          direction="row"
          width="1272px"
          height="unset"
          justifyContent="space-between"
          alignItems="center"
          position="absolute"
          top="60px"
          left="0px"
          padding="9px 20px 9px 20px"
          {...getOverrideProps(overrides, "Frame 424")}
        >
          <TextField
            width="300px"
            height="unset"
            placeholder="Site Name"
            shrink="0"
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "TextField34943302")}
          ></TextField>
          <TextField
            width="300px"
            height="unset"
            placeholder="Street"
            shrink="0"
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "TextField34943309")}
          ></TextField>
          <TextField
            width="300px"
            height="unset"
            placeholder="Suburb"
            shrink="0"
            size="large"
            isDisabled={false}
            labelHidden={true}
            variation="default"
            {...getOverrideProps(overrides, "TextField34943316")}
          ></TextField>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="0px"
          left="547px"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Frame 423")}
        >
          <Heading
            width="unset"
            height="unset"
            shrink="0"
            level="3"
            children="Site Details"
            {...getOverrideProps(overrides, "Heading34943298")}
          ></Heading>
        </Flex>
      </View>
      <ImportExport2
        width="1009px"
        height="67px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="92px"
        left="337px"
        padding="0px 0px 0px 0px"
        property1="Default"
        {...getOverrideProps(overrides, "ImportExport2")}
      ></ImportExport2>
      <HeaderActive
        width="1440px"
        height="67px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="1px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(58,86,66,1)"
        {...getOverrideProps(overrides, "HeaderActive")}
      ></HeaderActive>
      <Divider
        width="1311px"
        height="1px"
        position="absolute"
        top="776px"
        left="126px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider36904041")}
      ></Divider>
      <Divider
        width="1311px"
        height="1px"
        position="absolute"
        top="624px"
        left="126px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider34952902")}
      ></Divider>
      <Divider
        width="1311px"
        position="absolute"
        top="383px"
        left="126px"
        size="large"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider34952892")}
      ></Divider>
      <Divider
        width="1367px"
        height="1px"
        position="absolute"
        top="555px"
        left="73px"
        size="small"
        orientation="horizontal"
        {...getOverrideProps(overrides, "Divider34952890")}
      ></Divider>
      <SideBar2
        width="81px"
        height="1034px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="67px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(58,86,66,1)"
        {...getOverrideProps(overrides, "SideBar2")}
      ></SideBar2>
    </View>
  );
}
