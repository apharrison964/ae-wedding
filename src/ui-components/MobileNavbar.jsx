/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function MobileNavbar(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="390px"
      height="56px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "MobileNavbar")}
      {...rest}
    >
      <View
        width="390px"
        height="56px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(0,0,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Background with border")}
      ></View>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="54px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        left="calc(50% - 35px - 0px)"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "A&E19279")}
      >
        <Text
          fontFamily="Lato"
          fontSize="24px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="28.80000114440918px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="1.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="A&E"
          {...getOverrideProps(overrides, "A&E1594")}
        ></Text>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="50px"
        height="54px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Hamburger19278")}
      >
        <Icon
          width="24px"
          height="18px"
          viewBox={{ minX: 0, minY: 0, width: 24, height: 18 }}
          paths={[
            {
              d: "M0 1.5L24 1.5L24 -1.5L0 -1.5L0 1.5ZM0 10.5L24 10.5L24 7.5L0 7.5L0 10.5ZM0 19.5L24 19.5L24 16.5L0 16.5L0 19.5Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 3,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Hamburger17270")}
        ></Icon>
      </Flex>
    </View>
  );
}
