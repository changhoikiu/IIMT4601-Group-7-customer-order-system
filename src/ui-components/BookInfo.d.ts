/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, ButtonProps, DividerProps, FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BookInfoOverridesProps = {
    BookInfo?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    Title29766828?: PrimitiveOverrideProps<FlexProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    "${Author}/${Creator}"?: PrimitiveOverrideProps<TextProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Title36532689?: PrimitiveOverrideProps<FlexProps>;
    "${Book_Title}"?: PrimitiveOverrideProps<TextProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Features?: PrimitiveOverrideProps<ViewProps>;
    "Publisher: ${Publisher} ISBN: ${ISBN}"?: PrimitiveOverrideProps<TextProps>;
    "Description: ${Description}"?: PrimitiveOverrideProps<TextProps>;
    "Bottom Row"?: PrimitiveOverrideProps<FlexProps>;
    "$99 HKD"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type BookInfoProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: BookInfoOverridesProps | undefined | null;
}>;
export default function BookInfo(props: BookInfoProps): React.ReactElement;
