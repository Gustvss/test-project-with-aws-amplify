/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OwnerCreateFormInputValues = {
    name?: string;
    email?: string;
};
export declare type OwnerCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OwnerCreateFormOverridesProps = {
    OwnerCreateFormGrid?: FormProps<GridProps>;
    name?: FormProps<TextFieldProps>;
    email?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OwnerCreateFormProps = React.PropsWithChildren<{
    overrides?: OwnerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OwnerCreateFormInputValues) => OwnerCreateFormInputValues;
    onSuccess?: (fields: OwnerCreateFormInputValues) => void;
    onError?: (fields: OwnerCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: OwnerCreateFormInputValues) => OwnerCreateFormInputValues;
    onValidate?: OwnerCreateFormValidationValues;
} & React.CSSProperties>;
export default function OwnerCreateForm(props: OwnerCreateFormProps): React.ReactElement;
