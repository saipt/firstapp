/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImportExport2Props } from "./ImportExport2";
import { FlexProps, HeadingProps, TextFieldProps, ViewProps } from "@aws-amplify/ui-react";
import { SideBar2Props } from "./SideBar2";
import { HeaderActiveProps } from "./HeaderActive";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FinancialOverridesProps = {
    Financial?: PrimitiveOverrideProps<ViewProps>;
    Canvas?: PrimitiveOverrideProps<FlexProps>;
    ImportExport2?: ImportExport2Props;
    Summary?: PrimitiveOverrideProps<FlexProps>;
    Heading36224187?: PrimitiveOverrideProps<HeadingProps>;
    Heading36224505?: PrimitiveOverrideProps<HeadingProps>;
    "Frame 481"?: PrimitiveOverrideProps<FlexProps>;
    Headingblock?: PrimitiveOverrideProps<ViewProps>;
    Heading36224190?: PrimitiveOverrideProps<HeadingProps>;
    Heading38464032?: PrimitiveOverrideProps<HeadingProps>;
    Heading38464034?: PrimitiveOverrideProps<HeadingProps>;
    Heading38464037?: PrimitiveOverrideProps<HeadingProps>;
    TotalsBlock?: PrimitiveOverrideProps<FlexProps>;
    TextField39644155?: PrimitiveOverrideProps<TextFieldProps>;
    TextField39644162?: PrimitiveOverrideProps<TextFieldProps>;
    TextField39644169?: PrimitiveOverrideProps<TextFieldProps>;
    ItemCollection?: PrimitiveOverrideProps<ViewProps>;
    SideBar2?: SideBar2Props;
    HeaderActive?: HeaderActiveProps;
} & EscapeHatchProps;
export declare type FinancialProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FinancialOverridesProps | undefined | null;
}>;
export default function Financial(props: FinancialProps): React.ReactElement;
