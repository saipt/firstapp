/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Alert,
  Flex,
  Heading,
  SelectField,
  StepperField,
  Text,
  View,
} from "@aws-amplify/ui-react";
import SideBar2 from "./SideBar2";
import HeaderActive from "./HeaderActive";
export default function Trading(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="1585px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(229,241,219,1)"
      {...getOverrideProps(overrides, "Trading")}
      {...rest}
    >
      <View
        width="1160px"
        height="507px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 253.5px - -496px)"
        left="calc(50% - 580px - -110px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "EnergyTrandingSummary")}
      >
        <Flex
          gap="40px"
          direction="row"
          width="1100px"
          height="349px"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="148px"
          left="30px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 482")}
        >
          <Flex
            gap="30px"
            direction="column"
            width="unset"
            height="336px"
            justifyContent="space-between"
            alignItems="flex-start"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 47935364003")}
          >
            <Heading
              width="unset"
              height="unset"
              shrink="0"
              level="4"
              children="Buys"
              {...getOverrideProps(overrides, "Heading35364004")}
            ></Heading>
            <Flex
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 47735364005")}
            >
              <SelectField
                width="unset"
                height="unset"
                label="Average Price"
                grow="1"
                shrink="1"
                basis="0"
                placeholder="Placeholder"
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectField35364006")}
              ></SelectField>
            </Flex>
            <Flex
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 47835364007")}
            >
              <SelectField
                width="unset"
                height="unset"
                label="Trade Value"
                grow="1"
                shrink="1"
                basis="0"
                placeholder="Placeholder"
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectField35364008")}
              ></SelectField>
            </Flex>
            <Flex
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 47935364009")}
            >
              <SelectField
                width="unset"
                height="unset"
                label="Traded Energy"
                grow="1"
                shrink="1"
                basis="0"
                placeholder="Placeholder"
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectField35364010")}
              ></SelectField>
            </Flex>
          </Flex>
          <Flex
            gap="30px"
            direction="column"
            width="unset"
            height="336px"
            justifyContent="space-between"
            alignItems="flex-start"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 48035364011")}
          >
            <Heading
              width="unset"
              height="unset"
              shrink="0"
              level="4"
              children="Sells"
              {...getOverrideProps(overrides, "Heading35364012")}
            ></Heading>
            <Flex
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 47735364013")}
            >
              <SelectField
                width="unset"
                height="unset"
                label="Average Price"
                grow="1"
                shrink="1"
                basis="0"
                placeholder="Placeholder"
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectField35364014")}
              ></SelectField>
            </Flex>
            <Flex
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 47835364015")}
            >
              <SelectField
                width="unset"
                height="unset"
                label="Trade Value"
                grow="1"
                shrink="1"
                basis="0"
                placeholder="Placeholder"
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectField35364016")}
              ></SelectField>
            </Flex>
            <Flex
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="flex-start"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 47935364017")}
            >
              <SelectField
                width="unset"
                height="unset"
                label="Traded Energy"
                grow="1"
                shrink="1"
                basis="0"
                placeholder="Placeholder"
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectField35364018")}
              ></SelectField>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="30px"
          direction="row"
          width="660px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="62px"
          left="30px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 484")}
        >
          <SelectField
            width="300px"
            height="unset"
            label="Period Start"
            shrink="0"
            placeholder="Placeholder"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "SelectField35364000")}
          ></SelectField>
          <StepperField
            width="unset"
            height="unset"
            label="Period End"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "StepperField35364001")}
          ></StepperField>
        </Flex>
        <Heading
          width="unset"
          height="unset"
          position="absolute"
          top="14px"
          left="30px"
          level="4"
          children="Tranding Summary"
          {...getOverrideProps(overrides, "Heading35363998")}
        ></Heading>
      </View>
      <Flex
        gap="30px"
        direction="column"
        width="1160px"
        height="259px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="calc(50% - 129.5px - -114px)"
        left="calc(50% - 580px - -110px)"
        padding="30px 30px 30px 30px"
        {...getOverrideProps(overrides, "EnergyTradingEditRule")}
      >
        <Heading
          width="unset"
          height="25px"
          shrink="0"
          level="4"
          children="Create/ edit rule"
          {...getOverrideProps(overrides, "Heading35363968")}
        ></Heading>
        <Flex
          gap="30px"
          direction="row"
          width="unset"
          height="72px"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 483")}
        >
          <SelectField
            width="300px"
            height="unset"
            label="Default Buy Price"
            shrink="0"
            placeholder="Placeholder"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "SelectField35363970")}
          ></SelectField>
          <StepperField
            width="unset"
            height="unset"
            label="Percentage of suplus energy of trade"
            shrink="0"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "StepperField35363971")}
          ></StepperField>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="1100px"
          height="72px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 365")}
        >
          <Alert
            width="1100px"
            height="unset"
            heading="Info"
            position="absolute"
            top="0px"
            left="0px"
            variation="info"
            isDismissible={false}
            hasIcon={false}
            children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            {...getOverrideProps(overrides, "Alert")}
          ></Alert>
        </Flex>
      </Flex>
      <Flex
        gap="40px"
        direction="column"
        width="1160px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="calc(50% - 238px - 263.5px)"
        left="calc(50% - 580px - -104px)"
        padding="30px 30px 30px 30px"
        {...getOverrideProps(overrides, "EnergyTradingRule")}
      >
        <Heading
          width="unset"
          height="unset"
          shrink="0"
          level="3"
          children="Rules"
          {...getOverrideProps(overrides, "Heading35363844")}
        ></Heading>
        <Flex
          gap="40px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 481")}
        >
          <Flex
            gap="30px"
            direction="column"
            width="unset"
            height="336px"
            justifyContent="space-between"
            alignItems="flex-start"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 47935363846")}
          >
            <Heading
              width="unset"
              height="unset"
              shrink="0"
              level="4"
              children="Buys"
              {...getOverrideProps(overrides, "Heading35363847")}
            ></Heading>
            <Flex
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="space-between"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 47735363848")}
            >
              <SelectField
                width="250px"
                height="unset"
                label="TRuleBuy1"
                shrink="0"
                placeholder="Placeholder"
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectField35363849")}
              ></SelectField>
              <SelectField
                width="250px"
                height="unset"
                label="TRuleBuy1"
                shrink="0"
                placeholder="Placeholder"
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectField35363850")}
              ></SelectField>
            </Flex>
            <Flex
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="space-between"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 47835363851")}
            >
              <SelectField
                width="250px"
                height="unset"
                label="TRuleBuy2"
                shrink="0"
                placeholder="Placeholder"
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectField35363852")}
              ></SelectField>
              <SelectField
                width="250px"
                height="unset"
                label="TRuleBuy2"
                shrink="0"
                placeholder="Placeholder"
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectField35363853")}
              ></SelectField>
            </Flex>
            <Flex
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="space-between"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 47935363854")}
            >
              <SelectField
                width="250px"
                height="unset"
                label="TRuleBuy3"
                shrink="0"
                placeholder="Placeholder"
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectField35363855")}
              ></SelectField>
              <SelectField
                width="250px"
                height="unset"
                label="TRuleBuy3"
                shrink="0"
                placeholder="Placeholder"
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectField35363856")}
              ></SelectField>
            </Flex>
          </Flex>
          <Flex
            gap="30px"
            direction="column"
            width="unset"
            height="336px"
            justifyContent="space-between"
            alignItems="flex-start"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 48035363857")}
          >
            <Heading
              width="unset"
              height="unset"
              shrink="0"
              level="4"
              children="Sells"
              {...getOverrideProps(overrides, "Heading35363858")}
            ></Heading>
            <Flex
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="space-between"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 47735363859")}
            >
              <SelectField
                width="250px"
                height="unset"
                label="TRuleSell1"
                shrink="0"
                placeholder="Placeholder"
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectField35363860")}
              ></SelectField>
              <SelectField
                width="250px"
                height="unset"
                label="TRuleSell1"
                shrink="0"
                placeholder="Placeholder"
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectField35363861")}
              ></SelectField>
            </Flex>
            <Flex
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="space-between"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 47835363862")}
            >
              <SelectField
                width="250px"
                height="unset"
                label="TRuleSell2"
                shrink="0"
                placeholder="Placeholder"
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectField35363863")}
              ></SelectField>
              <SelectField
                width="250px"
                height="unset"
                label="TRuleSell2"
                shrink="0"
                placeholder="Placeholder"
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectField35363864")}
              ></SelectField>
            </Flex>
            <Flex
              gap="0"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="space-between"
              alignItems="center"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 47935363865")}
            >
              <SelectField
                width="250px"
                height="unset"
                label="TRuleSell3"
                shrink="0"
                placeholder="Placeholder"
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectField35363866")}
              ></SelectField>
              <SelectField
                width="250px"
                height="unset"
                label="TRuleSell3"
                shrink="0"
                placeholder="Placeholder"
                size="default"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectField35363867")}
              ></SelectField>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="149px"
        direction="row"
        width="1160px"
        height="113px"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        top="calc(50% - 56.5px - 537px)"
        left="calc(50% - 580px - -110px)"
        padding="30px 30px 30px 30px"
        {...getOverrideProps(overrides, "EnergyTradingPrice")}
      >
        <SelectField
          width="300px"
          height="unset"
          label="Default Buy Price"
          shrink="0"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField35363823")}
        ></SelectField>
        <Heading
          width="unset"
          height="unset"
          shrink="0"
          level="4"
          children="Fall back energy tariffs"
          {...getOverrideProps(overrides, "Heading35363824")}
        ></Heading>
        <SelectField
          width="300px"
          height="unset"
          label="Default Sell Price"
          shrink="0"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField35363825")}
        ></SelectField>
      </Flex>
      <Flex
        gap="40px"
        direction="column"
        width="1242px"
        height="24px"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="113px"
        left="184px"
        padding="40px 30px 40px 30px"
        {...getOverrideProps(overrides, "CanvasHome")}
      ></Flex>
      <Text
        fontFamily="Inter"
        fontSize="40px"
        fontWeight="800"
        color="rgba(13,26,38,1)"
        lineHeight="50px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="1182px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="153px"
        left="214px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Energy Trading"
        {...getOverrideProps(overrides, "Energy Trading")}
      ></Text>
      <SideBar2
        width="84px"
        height="1512px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="71px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(58,86,66,1)"
        {...getOverrideProps(overrides, "SideBar2")}
      ></SideBar2>
      <HeaderActive
        width="1440px"
        height="71px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="95.52%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(58,86,66,1)"
        {...getOverrideProps(overrides, "HeaderActive")}
      ></HeaderActive>
    </View>
  );
}
