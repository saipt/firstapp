/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SignUpBodyProps } from "./SignUpBody";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SignUpOverridesProps = {
    SignUp?: PrimitiveOverrideProps<FlexProps>;
    SignUp37014131?: SignUpBodyProps;
} & EscapeHatchProps;
export declare type SignUpProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SignUpOverridesProps | undefined | null;
}>;
export default function SignUp(props: SignUpProps): React.ReactElement;
