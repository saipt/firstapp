/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SideBar2Props } from "./SideBar2";
import { HeaderActiveProps } from "./HeaderActive";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UnderconstructionOverridesProps = {
    Underconstruction?: PrimitiveOverrideProps<ViewProps>;
    "Under Construction"?: PrimitiveOverrideProps<TextProps>;
    "We believe the wait will be worth it."?: PrimitiveOverrideProps<TextProps>;
    SideBar2?: SideBar2Props;
    HeaderActive?: HeaderActiveProps;
    "Thank you for your patience."?: PrimitiveOverrideProps<TextProps>;
    "tool 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type UnderconstructionProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UnderconstructionOverridesProps | undefined | null;
}>;
export default function Underconstruction(props: UnderconstructionProps): React.ReactElement;
