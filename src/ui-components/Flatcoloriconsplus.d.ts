/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type FlatcoloriconsplusOverridesProps = {
    Flatcoloriconsplus?: PrimitiveOverrideProps<ViewProps>;
    Vector117690?: PrimitiveOverrideProps<IconProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Vector117692?: PrimitiveOverrideProps<IconProps>;
    Vector117693?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type FlatcoloriconsplusProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FlatcoloriconsplusOverridesProps | undefined | null;
}>;
export default function Flatcoloriconsplus(props: FlatcoloriconsplusProps): React.ReactElement;
