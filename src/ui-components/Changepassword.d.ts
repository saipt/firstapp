/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, HeadingProps, PasswordFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChangepasswordOverridesProps = {
    Changepassword?: PrimitiveOverrideProps<ViewProps>;
    fields?: PrimitiveOverrideProps<FlexProps>;
    oldPasswordField?: PrimitiveOverrideProps<PasswordFieldProps>;
    newPasswordField?: PrimitiveOverrideProps<PasswordFieldProps>;
    passwordField?: PrimitiveOverrideProps<PasswordFieldProps>;
    Button38593987?: PrimitiveOverrideProps<ButtonProps>;
    Button39683947?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 417"?: PrimitiveOverrideProps<FlexProps>;
    Heading38593991?: PrimitiveOverrideProps<HeadingProps>;
    Heading38593992?: PrimitiveOverrideProps<HeadingProps>;
    Error?: PrimitiveOverrideProps<HeadingProps>;
    "Frame 431"?: PrimitiveOverrideProps<ViewProps>;
    Logo?: PrimitiveOverrideProps<FlexProps>;
    "Cactii Portal"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ChangepasswordProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ChangepasswordOverridesProps | undefined | null;
}>;
export default function Changepassword(props: ChangepasswordProps): React.ReactElement;
