/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type AttendeeCreateFormInputValues = {
    firstName?: string;
    isAttending?: boolean;
    food?: string;
    lastName?: string;
    notes?: string;
    relatedAttendees?: string[];
};
export declare type AttendeeCreateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    isAttending?: ValidationFunction<boolean>;
    food?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    relatedAttendees?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AttendeeCreateFormOverridesProps = {
    AttendeeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    isAttending?: PrimitiveOverrideProps<SwitchFieldProps>;
    food?: PrimitiveOverrideProps<SelectFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
    relatedAttendees?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AttendeeCreateFormProps = React.PropsWithChildren<{
    overrides?: AttendeeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AttendeeCreateFormInputValues) => AttendeeCreateFormInputValues;
    onSuccess?: (fields: AttendeeCreateFormInputValues) => void;
    onError?: (fields: AttendeeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AttendeeCreateFormInputValues) => AttendeeCreateFormInputValues;
    onValidate?: AttendeeCreateFormValidationValues;
} & React.CSSProperties>;
export default function AttendeeCreateForm(props: AttendeeCreateFormProps): React.ReactElement;
