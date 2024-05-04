/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type MobileNavbarOverridesProps = {
    MobileNavbar?: PrimitiveOverrideProps<ViewProps>;
    "Background with border"?: PrimitiveOverrideProps<ViewProps>;
    "A&E19279"?: PrimitiveOverrideProps<FlexProps>;
    "A&E1594"?: PrimitiveOverrideProps<TextProps>;
    Hamburger19278?: PrimitiveOverrideProps<FlexProps>;
    Hamburger17270?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type MobileNavbarProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MobileNavbarOverridesProps | undefined | null;
}>;
export default function MobileNavbar(props: MobileNavbarProps): React.ReactElement;
