/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Button(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="8px"
      padding="10px 16px 10px 16px"
      backgroundColor="rgba(122,140,108,1)"
      {...getOverrideProps(overrides, "Button")}
      {...rest}
    >
      <Text
        fontFamily="Lato"
        fontSize="24px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="28.80000114440918px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="RSVP"
        {...getOverrideProps(overrides, "RSVP")}
      ></Text>
    </Flex>
  );
}
