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
    Field4?: string;
    Field3?: string;
    Field0?: string;
    Field1?: string;
    Field2?: string;
};
export declare type OrderBookValidationValues = {
    Field4?: ValidationFunction<string>;
    Field3?: ValidationFunction<string>;
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
    Field2?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrderBookOverridesProps = {
    OrderBookGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    Field4?: PrimitiveOverrideProps<TextFieldProps>;
    Field3?: PrimitiveOverrideProps<TextFieldProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<TextFieldProps>;
    Field2?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type OrderBookProps = React.PropsWithChildren<{
    overrides?: OrderBookOverridesProps | undefined | null;
} & {
    onSubmit: (fields: OrderBookInputValues) => void;
    onChange?: (fields: OrderBookInputValues) => OrderBookInputValues;
    onValidate?: OrderBookValidationValues;
} & React.CSSProperties>;
export default function OrderBook(props: OrderBookProps): React.ReactElement;
