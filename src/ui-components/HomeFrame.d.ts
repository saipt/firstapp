/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BadgeProps, FlexProps, HeadingProps, RadioProps, TextFieldProps, ViewProps } from "@aws-amplify/ui-react";
import { HeaderActiveProps } from "./HeaderActive";
import { SideBar2Props } from "./SideBar2";
import { ImportExport2Props } from "./ImportExport2";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomeFrameOverridesProps = {
    HomeFrame?: PrimitiveOverrideProps<ViewProps>;
    Devices?: PrimitiveOverrideProps<FlexProps>;
    Heading34983113?: PrimitiveOverrideProps<HeadingProps>;
    Inverters?: PrimitiveOverrideProps<ViewProps>;
    InverterCollection?: PrimitiveOverrideProps<FlexProps>;
    Heading37584073?: PrimitiveOverrideProps<HeadingProps>;
    Storage?: PrimitiveOverrideProps<FlexProps>;
    Heading37584067?: PrimitiveOverrideProps<HeadingProps>;
    StorageCollection?: PrimitiveOverrideProps<FlexProps>;
    OffPeak?: PrimitiveOverrideProps<FlexProps>;
    Heading37564057?: PrimitiveOverrideProps<HeadingProps>;
    OffPeakCollection?: PrimitiveOverrideProps<FlexProps>;
    IOTSummary?: PrimitiveOverrideProps<ViewProps>;
    TextField39553854?: PrimitiveOverrideProps<TextFieldProps>;
    Badge?: PrimitiveOverrideProps<BadgeProps>;
    Heading39553851?: PrimitiveOverrideProps<HeadingProps>;
    IndicLight?: PrimitiveOverrideProps<FlexProps>;
    Heading34932900?: PrimitiveOverrideProps<HeadingProps>;
    TextField35273073?: PrimitiveOverrideProps<TextFieldProps>;
    TextField35273081?: PrimitiveOverrideProps<TextFieldProps>;
    Radio?: PrimitiveOverrideProps<RadioProps>;
    HeaderActive?: HeaderActiveProps;
    SideBar2?: SideBar2Props;
    "Frame 488"?: PrimitiveOverrideProps<FlexProps>;
    ImportExport2?: ImportExport2Props;
} & EscapeHatchProps;
export declare type HomeFrameProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HomeFrameOverridesProps | undefined | null;
}>;
export default function HomeFrame(props: HomeFrameProps): React.ReactElement;
