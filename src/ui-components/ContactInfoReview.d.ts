/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MaterialsymbolsgroupProps } from "./Materialsymbolsgroup";
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
export declare type ContactInfoReviewOverridesProps = {
    ContactInfoReview?: PrimitiveOverrideProps<FlexProps>;
    "Frame 73"?: PrimitiveOverrideProps<FlexProps>;
    "material-symbols:group"?: MaterialsymbolsgroupProps;
    "Party members:"?: PrimitiveOverrideProps<TextProps>;
    "Frame 75"?: PrimitiveOverrideProps<FlexProps>;
    "Jane Doe John Doe"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ContactInfoReviewProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ContactInfoReviewOverridesProps | undefined | null;
}>;
export default function ContactInfoReview(props: ContactInfoReviewProps): React.ReactElement;
