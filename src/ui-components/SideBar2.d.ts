/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SideBar2OverridesProps = {
    SideBar2?: PrimitiveOverrideProps<ViewProps>;
    "Frame 413"?: PrimitiveOverrideProps<FlexProps>;
    Home34973005?: PrimitiveOverrideProps<ViewProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Home34973008?: PrimitiveOverrideProps<TextProps>;
    Automation?: PrimitiveOverrideProps<FlexProps>;
    Automate?: PrimitiveOverrideProps<TextProps>;
    SiteInfo?: PrimitiveOverrideProps<FlexProps>;
    "Site Info"?: PrimitiveOverrideProps<TextProps>;
    Reporting34973017?: PrimitiveOverrideProps<FlexProps>;
    Reporting34973020?: PrimitiveOverrideProps<TextProps>;
    Animations?: PrimitiveOverrideProps<FlexProps>;
    Animation?: PrimitiveOverrideProps<TextProps>;
    Trading34973025?: PrimitiveOverrideProps<FlexProps>;
    Trading34973028?: PrimitiveOverrideProps<TextProps>;
    Changesite?: PrimitiveOverrideProps<FlexProps>;
    Sites?: PrimitiveOverrideProps<TextProps>;
    Financial34973033?: PrimitiveOverrideProps<FlexProps>;
    Financial34973036?: PrimitiveOverrideProps<TextProps>;
    PassWord?: PrimitiveOverrideProps<FlexProps>;
    "Set PW"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SideBar2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SideBar2OverridesProps | undefined | null;
}>;
export default function SideBar2(props: SideBar2Props): React.ReactElement;
