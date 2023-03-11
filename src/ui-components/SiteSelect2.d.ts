/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SideBar2Props } from "./SideBar2";
import { HeaderActiveProps } from "./HeaderActive";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SiteSelect2OverridesProps = {
    SiteSelect2?: PrimitiveOverrideProps<ViewProps>;
    Masterframe?: PrimitiveOverrideProps<FlexProps>;
    "Frame 485"?: PrimitiveOverrideProps<FlexProps>;
    Welcome?: PrimitiveOverrideProps<TextProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    "The below are the sites you are registered to access. Please select site."?: PrimitiveOverrideProps<TextProps>;
    Forinverters?: PrimitiveOverrideProps<FlexProps>;
    "You are not registered to any other sites."?: PrimitiveOverrideProps<TextProps>;
    SideBar2?: SideBar2Props;
    HeaderActive?: HeaderActiveProps;
} & EscapeHatchProps;
export declare type SiteSelect2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SiteSelect2OverridesProps | undefined | null;
}>;
export default function SiteSelect2(props: SiteSelect2Props): React.ReactElement;
