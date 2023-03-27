/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OrderCancelInputValues = {
    name?: string;
    phoneNo?: string;
    title?: string;
    authors?: string;
};
export declare type OrderCancelValidationValues = {
    name?: ValidationFunction<string>;
    phoneNo?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    authors?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrderCancelOverridesProps = {
    OrderCancelGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNo?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    authors?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OrderCancelProps = React.PropsWithChildren<{
    overrides?: OrderCancelOverridesProps | undefined | null;
} & {
    onSubmit: (fields: OrderCancelInputValues) => void;
    onChange?: (fields: OrderCancelInputValues) => OrderCancelInputValues;
    onValidate?: OrderCancelValidationValues;
} & React.CSSProperties>;
export default function OrderCancel(props: OrderCancelProps): React.ReactElement;
