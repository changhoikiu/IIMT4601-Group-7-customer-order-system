/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BookCardOverridesProps = {
    BookCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group"?: PrimitiveOverrideProps<FlexProps>;
    "$99 HKD"?: PrimitiveOverrideProps<TextProps>;
    "Book Title"?: PrimitiveOverrideProps<TextProps>;
    Authors?: PrimitiveOverrideProps<TextProps>;
    Publisher?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type BookCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: BookCardOverridesProps | undefined | null;
}>;
export default function BookCard(props: BookCardProps): React.ReactElement;
