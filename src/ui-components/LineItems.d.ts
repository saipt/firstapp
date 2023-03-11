/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LineItemsOverridesProps = {
    LineItems?: PrimitiveOverrideProps<FlexProps>;
    "item number"?: PrimitiveOverrideProps<TextFieldProps>;
    "Item description"?: PrimitiveOverrideProps<TextFieldProps>;
    "Num items"?: PrimitiveOverrideProps<TextFieldProps>;
    Discount?: PrimitiveOverrideProps<TextFieldProps>;
    "Base amount"?: PrimitiveOverrideProps<TextFieldProps>;
    "Actual amount"?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LineItemsProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LineItemsOverridesProps | undefined | null;
}>;
export default function LineItems(props: LineItemsProps): React.ReactElement;
