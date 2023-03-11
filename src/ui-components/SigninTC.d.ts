/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, CheckboxFieldProps, FlexProps, HeadingProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SigninTCOverridesProps = {
    SigninTC?: PrimitiveOverrideProps<ViewProps>;
    Acceptitems?: PrimitiveOverrideProps<ViewProps>;
    email?: PrimitiveOverrideProps<ViewProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    Button38593871?: PrimitiveOverrideProps<ButtonProps>;
    CheckboxField38593824?: PrimitiveOverrideProps<CheckboxFieldProps>;
    Licence?: PrimitiveOverrideProps<ViewProps>;
    Button38594065?: PrimitiveOverrideProps<ButtonProps>;
    CheckboxField38593813?: PrimitiveOverrideProps<CheckboxFieldProps>;
    "Frame 417"?: PrimitiveOverrideProps<FlexProps>;
    Heading38593776?: PrimitiveOverrideProps<HeadingProps>;
    Heading38593777?: PrimitiveOverrideProps<HeadingProps>;
    "Frame 431"?: PrimitiveOverrideProps<ViewProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    "Cactii Portal"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SigninTCProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SigninTCOverridesProps | undefined | null;
}>;
export default function SigninTC(props: SigninTCProps): React.ReactElement;
