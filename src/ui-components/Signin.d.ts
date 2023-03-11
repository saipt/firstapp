/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, HeadingProps, PasswordFieldProps, PhoneNumberFieldProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SigninOverridesProps = {
    Signin?: PrimitiveOverrideProps<ViewProps>;
    "Frame 418"?: PrimitiveOverrideProps<FlexProps>;
    email38593944?: PrimitiveOverrideProps<FlexProps>;
    email38593936?: PrimitiveOverrideProps<TextFieldProps>;
    PhoneNumberField?: PrimitiveOverrideProps<PhoneNumberFieldProps>;
    PasswordField?: PrimitiveOverrideProps<PasswordFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    Heading37484055?: PrimitiveOverrideProps<HeadingProps>;
    "Frame 417"?: PrimitiveOverrideProps<FlexProps>;
    Heading34523389?: PrimitiveOverrideProps<HeadingProps>;
    Heading35032935?: PrimitiveOverrideProps<HeadingProps>;
    "Frame 431"?: PrimitiveOverrideProps<ViewProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    "Cactii Portal"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SigninProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SigninOverridesProps | undefined | null;
}>;
export default function Signin(props: SigninProps): React.ReactElement;
