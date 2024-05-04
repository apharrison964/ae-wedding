/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { PlusOne } from "../models";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlusOneUpdateFormInputValues = {
    firstName?: string;
    food?: string;
    lastName?: string;
    isAttending?: boolean;
    notes?: string;
};
export declare type PlusOneUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    food?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    isAttending?: ValidationFunction<boolean>;
    notes?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlusOneUpdateFormOverridesProps = {
    PlusOneUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    food?: PrimitiveOverrideProps<SelectFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    isAttending?: PrimitiveOverrideProps<SwitchFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PlusOneUpdateFormProps = React.PropsWithChildren<{
    overrides?: PlusOneUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    plusOne?: PlusOne;
    onSubmit?: (fields: PlusOneUpdateFormInputValues) => PlusOneUpdateFormInputValues;
    onSuccess?: (fields: PlusOneUpdateFormInputValues) => void;
    onError?: (fields: PlusOneUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlusOneUpdateFormInputValues) => PlusOneUpdateFormInputValues;
    onValidate?: PlusOneUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PlusOneUpdateForm(props: PlusOneUpdateFormProps): React.ReactElement;
