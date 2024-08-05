/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Attendee } from "../models";
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
export declare type AttendeeUpdateFormInputValues = {
    firstName?: string;
    isAttending?: boolean;
    food?: string;
    lastName?: string;
    notes?: string;
    relatedAttendee?: string[];
    hasPlusOne?: boolean;
    addedPlusOne?: boolean;
};
export declare type AttendeeUpdateFormValidationValues = {
    firstName?: ValidationFunction<string>;
    isAttending?: ValidationFunction<boolean>;
    food?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    notes?: ValidationFunction<string>;
    relatedAttendee?: ValidationFunction<string>;
    hasPlusOne?: ValidationFunction<boolean>;
    addedPlusOne?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AttendeeUpdateFormOverridesProps = {
    AttendeeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    firstName?: PrimitiveOverrideProps<TextFieldProps>;
    isAttending?: PrimitiveOverrideProps<SwitchFieldProps>;
    food?: PrimitiveOverrideProps<SelectFieldProps>;
    lastName?: PrimitiveOverrideProps<TextFieldProps>;
    notes?: PrimitiveOverrideProps<TextFieldProps>;
    relatedAttendee?: PrimitiveOverrideProps<TextFieldProps>;
    hasPlusOne?: PrimitiveOverrideProps<SwitchFieldProps>;
    addedPlusOne?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type AttendeeUpdateFormProps = React.PropsWithChildren<{
    overrides?: AttendeeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    attendee?: Attendee;
    onSubmit?: (fields: AttendeeUpdateFormInputValues) => AttendeeUpdateFormInputValues;
    onSuccess?: (fields: AttendeeUpdateFormInputValues) => void;
    onError?: (fields: AttendeeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AttendeeUpdateFormInputValues) => AttendeeUpdateFormInputValues;
    onValidate?: AttendeeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AttendeeUpdateForm(props: AttendeeUpdateFormProps): React.ReactElement;
