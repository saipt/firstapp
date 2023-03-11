/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, IconProps, ImageProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeaderActiveOverridesProps = {
    HeaderActive?: PrimitiveOverrideProps<ViewProps>;
    "Frame 419"?: PrimitiveOverrideProps<FlexProps>;
    TextField35344662?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 418"?: PrimitiveOverrideProps<FlexProps>;
    "Cactii symbol facing leftclearsmall 1"?: PrimitiveOverrideProps<ImageProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    MyIcon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    TextField35573590?: PrimitiveOverrideProps<TextFieldProps>;
    Cognum?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type HeaderActiveProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HeaderActiveOverridesProps | undefined | null;
}>;
export default function HeaderActive(props: HeaderActiveProps): React.ReactElement;
