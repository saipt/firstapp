/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GenericBESstatusOverridesProps = {
    GenericBESstatus?: PrimitiveOverrideProps<FlexProps>;
    TextField37593871?: PrimitiveOverrideProps<TextFieldProps>;
    TextField37593863?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GenericBESstatusProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: GenericBESstatusOverridesProps | undefined | null;
}>;
export default function GenericBESstatus(props: GenericBESstatusProps): React.ReactElement;
