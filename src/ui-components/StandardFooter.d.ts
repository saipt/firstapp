/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StandardFooterOverridesProps = {
    StandardFooter?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 738"?: PrimitiveOverrideProps<IconProps>;
    "A software collaboration between Ross of Cactii and Mehdi and Hind"?: PrimitiveOverrideProps<TextProps>;
    "Copyright Cactii Pty Ltd 2022"?: PrimitiveOverrideProps<TextProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    "The Portal relies on data collected from your site and offers suggestions to optimise your energy use reflecting your \u201Cvalue\u201D system. This is done on a best effort basis"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type StandardFooterProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: StandardFooterOverridesProps | undefined | null;
}>;
export default function StandardFooter(props: StandardFooterProps): React.ReactElement;
