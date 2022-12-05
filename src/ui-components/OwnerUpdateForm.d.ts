/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Owner } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OwnerUpdateFormInputValues = {
    name?: string;
    email?: string;
};
export declare type OwnerUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OwnerUpdateFormOverridesProps = {
    OwnerUpdateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OwnerUpdateFormProps = React.PropsWithChildren<{
    overrides?: OwnerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    owner?: Owner;
    onSubmit?: (fields: OwnerUpdateFormInputValues) => OwnerUpdateFormInputValues;
    onSuccess?: (fields: OwnerUpdateFormInputValues) => void;
    onError?: (fields: OwnerUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: OwnerUpdateFormInputValues) => OwnerUpdateFormInputValues;
    onValidate?: OwnerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OwnerUpdateForm(props: OwnerUpdateFormProps): React.ReactElement;
