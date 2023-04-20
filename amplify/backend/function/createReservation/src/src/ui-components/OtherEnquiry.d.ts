/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OtherEnquiryInputValues = {
    type?: string;
    name?: string;
    email?: string;
    phoneNo?: string;
    reservation_id?: string;
    message?: string;
};
export declare type OtherEnquiryValidationValues = {
    type?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phoneNo?: ValidationFunction<string>;
    reservation_id?: ValidationFunction<string>;
    message?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OtherEnquiryOverridesProps = {
    OtherEnquiryGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNo?: PrimitiveOverrideProps<TextFieldProps>;
    reservation_id?: PrimitiveOverrideProps<TextFieldProps>;
    message?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type OtherEnquiryProps = React.PropsWithChildren<{
    overrides?: OtherEnquiryOverridesProps | undefined | null;
} & {
    onSubmit: (fields: OtherEnquiryInputValues) => void;
    onChange?: (fields: OtherEnquiryInputValues) => OtherEnquiryInputValues;
    onValidate?: OtherEnquiryValidationValues;
} & React.CSSProperties>;
export default function OtherEnquiry(props: OtherEnquiryProps): React.ReactElement;
