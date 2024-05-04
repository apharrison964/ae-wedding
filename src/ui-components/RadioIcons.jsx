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
} from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function RadioIcons(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { overrides: { RadioIcons: {} }, variantValues: { state: "Off" } },
    {
      overrides: {
        RadioIcons: {
          paths: [
            {
              d: "M15 8.5C15 12.0899 12.0899 15 8.5 15L8.5 19C14.299 19 19 14.299 19 8.5L15 8.5ZM8.5 15C4.91015 15 2 12.0899 2 8.5L-2 8.5C-2 14.299 2.70101 19 8.5 19L8.5 15ZM2 8.5C2 4.91015 4.91015 2 8.5 2L8.5 -2C2.70101 -2 -2 2.70101 -2 8.5L2 8.5ZM8.5 2C12.0899 2 15 4.91015 15 8.5L19 8.5C19 2.70101 14.299 -2 8.5 -2L8.5 2Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 2,
              style: { transform: "translate(0%, 0%)" },
            },
            {
              d: "M7 4.5C7 5.88071 5.88071 7 4.5 7L4.5 11C8.08985 11 11 8.08985 11 4.5L7 4.5ZM4.5 7C3.11929 7 2 5.88071 2 4.5L-2 4.5C-2 8.08985 0.910149 11 4.5 11L4.5 7ZM2 4.5C2 3.11929 3.11929 2 4.5 2L4.5 -2C0.910149 -2 -2 0.910149 -2 4.5L2 4.5ZM4.5 2C5.88071 2 7 3.11929 7 4.5L11 4.5C11 0.910149 8.08985 -2 4.5 -2L4.5 2Z",
              stroke: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              strokeWidth: 2,
              style: { transform: "translate(23.53%, 23.53%)" },
            },
            {
              d: "M9 4.5C9 6.98528 6.98528 9 4.5 9C2.01472 9 0 6.98528 0 4.5C0 2.01472 2.01472 0 4.5 0C6.98528 0 9 2.01472 9 4.5Z",
              fill: "rgba(0,0,0,1)",
              fillRule: "nonzero",
              style: { transform: "translate(23.53%, 23.53%)" },
            },
          ],
        },
      },
      variantValues: { state: "On" },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Icon
      width="17px"
      height="17px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 17, height: 17 }}
      paths={[
        {
          d: "M15 8.5C15 12.0899 12.0899 15 8.5 15L8.5 19C14.299 19 19 14.299 19 8.5L15 8.5ZM8.5 15C4.91015 15 2 12.0899 2 8.5L-2 8.5C-2 14.299 2.70101 19 8.5 19L8.5 15ZM2 8.5C2 4.91015 4.91015 2 8.5 2L8.5 -2C2.70101 -2 -2 2.70101 -2 8.5L2 8.5ZM8.5 2C12.0899 2 15 4.91015 15 8.5L19 8.5C19 2.70101 14.299 -2 8.5 -2L8.5 2Z",
          stroke: "rgba(103,103,103,1)",
          fillRule: "nonzero",
          strokeWidth: 2,
          style: { transform: "translate(0%, 0%)" },
        },
      ]}
      {...getOverrideProps(overrides, "RadioIcons")}
      {...rest}
    ></Icon>
  );
}
