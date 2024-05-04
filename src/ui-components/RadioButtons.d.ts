/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
import { RadioIconsProps } from "./RadioIcons";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RadioButtonsOverridesProps = {
    RadioButtons?: PrimitiveOverrideProps<FlexProps>;
    "Radio Label"?: PrimitiveOverrideProps<TextProps>;
    "Frame 5097655"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 48"?: PrimitiveOverrideProps<FlexProps>;
    "Radio Icons97620"?: RadioIconsProps;
    "Option 1"?: PrimitiveOverrideProps<TextProps>;
    "Frame 49"?: PrimitiveOverrideProps<FlexProps>;
    "Radio Icons97652"?: RadioIconsProps;
    "Option 2"?: PrimitiveOverrideProps<TextProps>;
    "Frame 5097656"?: PrimitiveOverrideProps<FlexProps>;
    "Radio Icons97657"?: RadioIconsProps;
    "Option 3"?: PrimitiveOverrideProps<TextProps>;
    "Please select an option."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type RadioButtonsProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: RadioButtonsOverridesProps | undefined | null;
}>;
export default function RadioButtons(props: RadioButtonsProps): React.ReactElement;
