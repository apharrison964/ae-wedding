/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import LavenderBackgroundTop from "./LavenderBackgroundTop";
import { View } from "@aws-amplify/ui-react";
export default function LavenderBackgroundBottom(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="495px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "LavenderBackgroundBottom")}
      {...rest}
    >
      <LavenderBackgroundTop
        width="1440px"
        height="495px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="100%"
        bottom="-100%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Lavender Background Top")}
      ></LavenderBackgroundTop>
    </View>
  );
}
