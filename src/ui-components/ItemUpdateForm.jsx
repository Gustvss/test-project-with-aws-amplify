/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Item } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function ItemUpdateForm(props) {
  const {
    id,
    item,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: undefined,
    description: undefined,
    photo: undefined,
    ItemType: undefined,
    Owner: {},
    itemOwnerId: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [photo, setPhoto] = React.useState(initialValues.photo);
  const [ItemType, setItemType] = React.useState(initialValues.ItemType);
  const [Owner, setOwner] = React.useState(initialValues.Owner);
  const [itemOwnerId, setItemOwnerId] = React.useState(
    initialValues.itemOwnerId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...itemRecord };
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setPhoto(cleanValues.photo);
    setItemType(cleanValues.ItemType);
    setOwner(cleanValues.Owner);
    setItemOwnerId(cleanValues.itemOwnerId);
    setErrors({});
  };
  const [itemRecord, setItemRecord] = React.useState(item);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Item, id) : item;
      setItemRecord(record);
    };
    queryData();
  }, [id, item]);
  React.useEffect(resetStateValues, [itemRecord]);
  const validations = {
    name: [],
    description: [],
    photo: [{ type: "URL" }],
    ItemType: [],
    Owner: [],
    itemOwnerId: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          description,
          photo: photo || undefined,
          ItemType,
          Owner,
          itemOwnerId,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(
            Item.copyOf(itemRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "ItemUpdateForm")}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              photo,
              ItemType,
              Owner,
              itemOwnerId,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        defaultValue={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              photo,
              ItemType,
              Owner,
              itemOwnerId,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Photo"
        isRequired={false}
        isReadOnly={false}
        defaultValue={photo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              photo: value,
              ItemType,
              Owner,
              itemOwnerId,
            };
            const result = onChange(modelFields);
            value = result?.photo ?? value;
          }
          if (errors.photo?.hasError) {
            runValidationTasks("photo", value);
          }
          setPhoto(value);
        }}
        onBlur={() => runValidationTasks("photo", photo)}
        errorMessage={errors.photo?.errorMessage}
        hasError={errors.photo?.hasError}
        {...getOverrideProps(overrides, "photo")}
      ></TextField>
      <SelectField
        label="Item type"
        placeholder="Please select an option"
        isDisabled={false}
        value={ItemType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              photo,
              ItemType: value,
              Owner,
              itemOwnerId,
            };
            const result = onChange(modelFields);
            value = result?.ItemType ?? value;
          }
          if (errors.ItemType?.hasError) {
            runValidationTasks("ItemType", value);
          }
          setItemType(value);
        }}
        onBlur={() => runValidationTasks("ItemType", ItemType)}
        errorMessage={errors.ItemType?.errorMessage}
        hasError={errors.ItemType?.hasError}
        {...getOverrideProps(overrides, "ItemType")}
      >
        <option
          children="Shirt"
          value="SHIRT"
          {...getOverrideProps(overrides, "ItemTypeoption0")}
        ></option>
        <option
          children="Shorts"
          value="SHORTS"
          {...getOverrideProps(overrides, "ItemTypeoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Owner"
        placeholder="Please select an option"
        isDisabled={false}
        value={Owner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              photo,
              ItemType,
              Owner: value,
              itemOwnerId,
            };
            const result = onChange(modelFields);
            value = result?.Owner ?? value;
          }
          if (errors.Owner?.hasError) {
            runValidationTasks("Owner", value);
          }
          setOwner(value);
        }}
        onBlur={() => runValidationTasks("Owner", Owner)}
        errorMessage={errors.Owner?.errorMessage}
        hasError={errors.Owner?.hasError}
        {...getOverrideProps(overrides, "Owner")}
      ></SelectField>
      <TextField
        label="Item owner id"
        isRequired={false}
        isReadOnly={false}
        defaultValue={itemOwnerId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              photo,
              ItemType,
              Owner,
              itemOwnerId: value,
            };
            const result = onChange(modelFields);
            value = result?.itemOwnerId ?? value;
          }
          if (errors.itemOwnerId?.hasError) {
            runValidationTasks("itemOwnerId", value);
          }
          setItemOwnerId(value);
        }}
        onBlur={() => runValidationTasks("itemOwnerId", itemOwnerId)}
        errorMessage={errors.itemOwnerId?.errorMessage}
        hasError={errors.itemOwnerId?.hasError}
        {...getOverrideProps(overrides, "itemOwnerId")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
