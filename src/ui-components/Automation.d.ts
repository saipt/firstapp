/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ImportExport2Props } from "./ImportExport2";
import { SideBar2Props } from "./SideBar2";
import { HeaderActiveProps } from "./HeaderActive";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AutomationOverridesProps = {
    Automation?: PrimitiveOverrideProps<ViewProps>;
    "Frame 489"?: PrimitiveOverrideProps<FlexProps>;
    "IOT Devices"?: PrimitiveOverrideProps<TextProps>;
    "IOT devices note"?: PrimitiveOverrideProps<TextProps>;
    IOTCollection?: PrimitiveOverrideProps<ViewProps>;
    ImportExport2?: ImportExport2Props;
    SideBar2?: SideBar2Props;
    HeaderActive?: HeaderActiveProps;
} & EscapeHatchProps;
export declare type AutomationProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: AutomationOverridesProps | undefined | null;
}>;
export default function Automation(props: AutomationProps): React.ReactElement;
