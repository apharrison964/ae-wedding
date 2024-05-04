/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type DesktopHeaderOverridesProps = {
    DesktopHeader?: PrimitiveOverrideProps<ViewProps>;
    "Setting Header"?: PrimitiveOverrideProps<FlexProps>;
    "11 23 2024"?: PrimitiveOverrideProps<FlexProps>;
    "11 \u2022 23 \u2022 2024"?: PrimitiveOverrideProps<TextProps>;
    "CHAPEL HILL, NC17238"?: PrimitiveOverrideProps<FlexProps>;
    "CHAPEL HILL, NC1234"?: PrimitiveOverrideProps<TextProps>;
    "Desktop Title"?: PrimitiveOverrideProps<FlexProps>;
    "ALLIE & ELIZABETH"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DesktopHeaderProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DesktopHeaderOverridesProps | undefined | null;
}>;
export default function DesktopHeader(props: DesktopHeaderProps): React.ReactElement;
