/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, FlexProps, HeadingProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GenericInverterstatusOverridesProps = {
    GenericInverterstatus?: PrimitiveOverrideProps<FlexProps>;
    "Frame 425"?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    TextField37564114?: PrimitiveOverrideProps<TextFieldProps>;
    TextField37593895?: PrimitiveOverrideProps<TextFieldProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
} & EscapeHatchProps;
export declare type GenericInverterstatusProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: GenericInverterstatusOverridesProps | undefined | null;
}>;
export default function GenericInverterstatus(props: GenericInverterstatusProps): React.ReactElement;
