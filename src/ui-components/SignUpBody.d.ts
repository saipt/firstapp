/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, HeadingProps, PasswordFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SignUpBodyOverridesProps = {
    SignUpBody?: PrimitiveOverrideProps<FlexProps>;
    LoginTextBody?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    "Please enter your registered email address or mobile number and password"?: PrimitiveOverrideProps<TextProps>;
    "(First time users to change password)"?: PrimitiveOverrideProps<TextProps>;
    LoginInteractionBody?: PrimitiveOverrideProps<FlexProps>;
    TextField35073617?: PrimitiveOverrideProps<TextFieldProps>;
    TextField37014124?: PrimitiveOverrideProps<TextFieldProps>;
    PasswordField?: PrimitiveOverrideProps<PasswordFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SignUpBodyProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SignUpBodyOverridesProps | undefined | null;
}>;
export default function SignUpBody(props: SignUpBodyProps): React.ReactElement;
