/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function DesktopHeader(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="505px"
      height="214px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "DesktopHeader")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="47.2%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 64px 0px"
        {...getOverrideProps(overrides, "Setting Header")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(0,0,0,1)"
          padding="9px 63px 9px 9px"
          {...getOverrideProps(overrides, "11 23 2024")}
        >
          <Text
            fontFamily="Lato"
            fontSize="24px"
            fontWeight="300"
            color="rgba(0,0,0,1)"
            lineHeight="28.80000114440918px"
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
            children="11 • 23 • 2024"
            {...getOverrideProps(overrides, "11 \u2022 23 \u2022 2024")}
          ></Text>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="10px 10px 10px 64px"
          {...getOverrideProps(overrides, "CHAPEL HILL, NC17238")}
        >
          <Text
            fontFamily="Lato"
            fontSize="24px"
            fontWeight="300"
            color="rgba(0,0,0,1)"
            lineHeight="28.80000114440918px"
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
            children="CHAPEL HILL, NC"
            {...getOverrideProps(overrides, "CHAPEL HILL, NC1234")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="486px"
        height="unset"
        justifyContent="space-between"
        alignItems="center"
        position="absolute"
        top="2.34%"
        bottom="55.61%"
        left="1.88%"
        right="1.88%"
        padding="0px 0px 32px 0px"
        {...getOverrideProps(overrides, "Desktop Title")}
      >
        <Text
          fontFamily="Lato"
          fontSize="48px"
          fontWeight="300"
          color="rgba(0,0,0,1)"
          lineHeight="57.60000228881836px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="2.25px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="ALLIE & ELIZABETH"
          {...getOverrideProps(overrides, "ALLIE & ELIZABETH")}
        ></Text>
      </Flex>
    </View>
  );
}
