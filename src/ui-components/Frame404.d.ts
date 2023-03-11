/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SideBar2Props } from "./SideBar2";
import { HeaderActiveProps } from "./HeaderActive";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame404OverridesProps = {
    Frame404?: PrimitiveOverrideProps<ViewProps>;
    "Unknown error"?: PrimitiveOverrideProps<TextProps>;
    "unknown error"?: PrimitiveOverrideProps<TextProps>;
    SideBar2?: SideBar2Props;
    HeaderActive?: HeaderActiveProps;
    "Thank you for your patience during these teething troubles."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Frame404Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Frame404OverridesProps | undefined | null;
}>;
export default function Frame404(props: Frame404Props): React.ReactElement;
