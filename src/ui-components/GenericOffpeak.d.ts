/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, FlexProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GenericOffpeakOverridesProps = {
    GenericOffpeak?: PrimitiveOverrideProps<FlexProps>;
    TextField39553822?: PrimitiveOverrideProps<TextFieldProps>;
    TextField39553829?: PrimitiveOverrideProps<TextFieldProps>;
    Status?: PrimitiveOverrideProps<BadgeProps>;
} & EscapeHatchProps;
export declare type GenericOffpeakProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: GenericOffpeakOverridesProps | undefined | null;
}>;
export default function GenericOffpeak(props: GenericOffpeakProps): React.ReactElement;
