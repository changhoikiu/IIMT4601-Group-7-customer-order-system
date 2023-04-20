/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OrderBookInputValues = {
    name?: string;
    email?: string;
    phoneNo?: string;
    title?: string;
    authors?: string;
    genre?: string;
};
export declare type OrderBookValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phoneNo?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    authors?: ValidationFunction<string>;
    genre?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrderBookOverridesProps = {
    OrderBookGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNo?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    authors?: PrimitiveOverrideProps<TextFieldProps>;
    genre?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type OrderBookProps = React.PropsWithChildren<{
    overrides?: OrderBookOverridesProps | undefined | null;
} & {
    onSubmit: (fields: OrderBookInputValues) => void;
    onChange?: (fields: OrderBookInputValues) => OrderBookInputValues;
    onValidate?: OrderBookValidationValues;
} & React.CSSProperties>;
export default function OrderBook(props: OrderBookProps): React.ReactElement;
