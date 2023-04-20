/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { CheckboxFieldProps, GridProps, HeadingProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SubmitReservationInputValues = {
    name?: string;
    email?: string;
    phoneNo?: string;
    agreement?: boolean;
};
export declare type SubmitReservationValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phoneNo?: ValidationFunction<string>;
    agreement?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SubmitReservationOverridesProps = {
    SubmitReservationGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phoneNo?: PrimitiveOverrideProps<TextFieldProps>;
    agreement?: PrimitiveOverrideProps<CheckboxFieldProps>;
} & EscapeHatchProps;
export declare type SubmitReservationProps = React.PropsWithChildren<{
    overrides?: SubmitReservationOverridesProps | undefined | null;
} & {
    onSubmit: (fields: SubmitReservationInputValues) => void;
    onChange?: (fields: SubmitReservationInputValues) => SubmitReservationInputValues;
    onValidate?: SubmitReservationValidationValues;
} & React.CSSProperties>;
export default function SubmitReservation(props: SubmitReservationProps): React.ReactElement;
