/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
import RadioIcons from "./RadioIcons";
export default function RadioButtons(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="493px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "RadioButtons")}
      {...rest}
    >
      <Text
        fontFamily="Lato"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="19.200000762939453px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.65px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Radio Label"
        {...getOverrideProps(overrides, "Radio Label")}
      ></Text>
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
        {...getOverrideProps(overrides, "Frame 5097655")}
      >
        <Flex
          gap="11px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 48")}
        >
          <RadioIcons
            width="17px"
            height="17px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            state="Off"
            {...getOverrideProps(overrides, "Radio Icons97620")}
          ></RadioIcons>
          <Text
            fontFamily="Lato"
            fontSize="16px"
            fontWeight="300"
            color="rgba(0,0,0,1)"
            lineHeight="19.200000762939453px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.65px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Option 1"
            {...getOverrideProps(overrides, "Option 1")}
          ></Text>
        </Flex>
        <Flex
          gap="11px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 49")}
        >
          <RadioIcons
            width="17px"
            height="17px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            state="Off"
            {...getOverrideProps(overrides, "Radio Icons97652")}
          ></RadioIcons>
          <Text
            fontFamily="Lato"
            fontSize="16px"
            fontWeight="300"
            color="rgba(0,0,0,1)"
            lineHeight="19.200000762939453px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.65px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Option 2"
            {...getOverrideProps(overrides, "Option 2")}
          ></Text>
        </Flex>
        <Flex
          gap="11px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 5097656")}
        >
          <RadioIcons
            width="17px"
            height="17px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            state="On"
            {...getOverrideProps(overrides, "Radio Icons97657")}
          ></RadioIcons>
          <Text
            fontFamily="Lato"
            fontSize="16px"
            fontWeight="300"
            color="rgba(0,0,0,1)"
            lineHeight="19.200000762939453px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.65px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Option 3"
            {...getOverrideProps(overrides, "Option 3")}
          ></Text>
        </Flex>
      </Flex>
      <Text
        fontFamily="Lato"
        fontSize="16px"
        fontWeight="400"
        color="rgba(246,5,5,1)"
        lineHeight="19.200000762939453px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.65px"
        width="493px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Please select an option."
        {...getOverrideProps(overrides, "Please select an option.")}
      ></Text>
    </Flex>
  );
}
