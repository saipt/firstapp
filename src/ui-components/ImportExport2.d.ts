/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AlertProps, BadgeProps, DividerProps, FlexProps, TextFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ImportExport2OverridesProps = {
    ImportExport2?: PrimitiveOverrideProps<ViewProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    "Frame 422"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 420"?: PrimitiveOverrideProps<FlexProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    "Frame 419"?: PrimitiveOverrideProps<FlexProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    "Frame 418"?: PrimitiveOverrideProps<FlexProps>;
    Alert?: PrimitiveOverrideProps<AlertProps>;
} & EscapeHatchProps;
export declare type ImportExport2Props = React.PropsWithChildren<Partial<ViewProps> & {
    property1?: "Default";
} & {
    overrides?: ImportExport2OverridesProps | undefined | null;
}>;
export default function ImportExport2(props: ImportExport2Props): React.ReactElement;
