/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SelectEnquiriesInputValues = {
    name?: string;
};
export declare type SelectEnquiriesValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SelectEnquiriesOverridesProps = {
    SelectEnquiriesGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type SelectEnquiriesProps = React.PropsWithChildren<{
    overrides?: SelectEnquiriesOverridesProps | undefined | null;
} & {
    onSubmit: (fields: SelectEnquiriesInputValues) => void;
    onChange?: (fields: SelectEnquiriesInputValues) => SelectEnquiriesInputValues;
    onValidate?: SelectEnquiriesValidationValues;
} & React.CSSProperties>;
export default function SelectEnquiries(props: SelectEnquiriesProps): React.ReactElement;
