/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  Heading,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
export default function OrderCancel(props) {
  const { onSubmit, onValidate, onChange, overrides, ...rest } = props;
  const { tokens } = useTheme();
  const initialValues = {
    name: "",
    phoneNo: "",
    title: "",
    authors: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [phoneNo, setPhoneNo] = React.useState(initialValues.phoneNo);
  const [title, setTitle] = React.useState(initialValues.title);
  const [authors, setAuthors] = React.useState(initialValues.authors);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setPhoneNo(initialValues.phoneNo);
    setTitle(initialValues.title);
    setAuthors(initialValues.authors);
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    phoneNo: [{ type: "Required" }, { type: "Phone" }],
    title: [],
    authors: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
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
      padding={tokens.space.large.value}
      onSubmit={async (event) => {
        event.preventDefault();
        const modelFields = {
          name,
          phoneNo,
          title,
          authors,
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
        await onSubmit(modelFields);
      }}
      {...getOverrideProps(overrides, "OrderCancel")}
      {...rest}
    >
      <Heading
        level={4}
        children="Cancel an order or reservation"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <TextField
        label="Name"
        isRequired={true}
        placeholder="Your Name"
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              phoneNo,
              title,
              authors,
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
        label="Mobile Phone Number"
        isRequired={true}
        placeholder="The number you used for ordering"
        type="tel"
        value={phoneNo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phoneNo: value,
              title,
              authors,
            };
            const result = onChange(modelFields);
            value = result?.phoneNo ?? value;
          }
          if (errors.phoneNo?.hasError) {
            runValidationTasks("phoneNo", value);
          }
          setPhoneNo(value);
        }}
        onBlur={() => runValidationTasks("phoneNo", phoneNo)}
        errorMessage={errors.phoneNo?.errorMessage}
        hasError={errors.phoneNo?.hasError}
        {...getOverrideProps(overrides, "phoneNo")}
      ></TextField>
      <TextField
        label="Book Title"
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phoneNo,
              title: value,
              authors,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Authors/Editors"
        value={authors}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              phoneNo,
              title,
              authors: value,
            };
            const result = onChange(modelFields);
            value = result?.authors ?? value;
          }
          if (errors.authors?.hasError) {
            runValidationTasks("authors", value);
          }
          setAuthors(value);
        }}
        onBlur={() => runValidationTasks("authors", authors)}
        errorMessage={errors.authors?.errorMessage}
        hasError={errors.authors?.hasError}
        {...getOverrideProps(overrides, "authors")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
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
