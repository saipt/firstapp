/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, CardProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SiteSelectionOverridesProps = {
    SiteSelection?: PrimitiveOverrideProps<ViewProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    "Site Name"?: PrimitiveOverrideProps<TextProps>;
    siteID?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SiteSelectionProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SiteSelectionOverridesProps | undefined | null;
}>;
export default function SiteSelection(props: SiteSelectionProps): React.ReactElement;
