/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type DesktopNavbarOverridesProps = {
    DesktopNavbar?: PrimitiveOverrideProps<FlexProps>;
    Home16230?: PrimitiveOverrideProps<FlexProps>;
    Home16231?: PrimitiveOverrideProps<TextProps>;
    "Our Story16221"?: PrimitiveOverrideProps<FlexProps>;
    "Our Story1224"?: PrimitiveOverrideProps<TextProps>;
    Travel16222?: PrimitiveOverrideProps<FlexProps>;
    Travel1225?: PrimitiveOverrideProps<TextProps>;
    "Wedding Party16224"?: PrimitiveOverrideProps<FlexProps>;
    "Wedding Party1227"?: PrimitiveOverrideProps<TextProps>;
    Photos16225?: PrimitiveOverrideProps<FlexProps>;
    Photos1228?: PrimitiveOverrideProps<TextProps>;
    "Things To Do16226"?: PrimitiveOverrideProps<FlexProps>;
    "Things To Do1229"?: PrimitiveOverrideProps<TextProps>;
    Registry16223?: PrimitiveOverrideProps<FlexProps>;
    Registry1226?: PrimitiveOverrideProps<TextProps>;
    RSVP16227?: PrimitiveOverrideProps<FlexProps>;
    RSVP1230?: PrimitiveOverrideProps<TextProps>;
    FAQs16228?: PrimitiveOverrideProps<FlexProps>;
    FAQs1231?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DesktopNavbarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: DesktopNavbarOverridesProps | undefined | null;
}>;
export default function DesktopNavbar(props: DesktopNavbarProps): React.ReactElement;
