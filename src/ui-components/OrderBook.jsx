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
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
export default function OrderBook(props) {
  const { onSubmit, onValidate, onChange, overrides, ...rest } = props;
  const initialValues = {
    name: "",
    email: "",
    phoneNo: "",
    title: "",
    authors: "",
    genre: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [phoneNo, setPhoneNo] = React.useState(initialValues.phoneNo);
  const [title, setTitle] = React.useState(initialValues.title);
  const [authors, setAuthors] = React.useState(initialValues.authors);
  const [genre, setGenre] = React.useState(initialValues.genre);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setEmail(initialValues.email);
    setPhoneNo(initialValues.phoneNo);
    setTitle(initialValues.title);
    setAuthors(initialValues.authors);
    setGenre(initialValues.genre);
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    email: [{ type: "Required" }, { type: "Email" }],
    phoneNo: [{ type: "Required" }, { type: "Phone" }],
    title: [{ type: "Required" }],
    authors: [{ type: "Required" }],
    genre: [],
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
      padding="0px"
      onSubmit={async (event) => {
        event.preventDefault();
        const modelFields = {
          name,
          email,
          phoneNo,
          title,
          authors,
          genre,
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
      {...getOverrideProps(overrides, "OrderBook")}
      {...rest}
    >
      <Heading
        level={4}
        children="Order a book that you want us to get for you."
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <TextField
        label="Name"
        isRequired={true}
        placeholder="Your name"
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              email,
              phoneNo,
              title,
              authors,
              genre,
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
        label="Email"
        isRequired={true}
        placeholder="Your email"
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email: value,
              phoneNo,
              title,
              authors,
              genre,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Mobile Phone Number"
        isRequired={true}
        placeholder="Your mobile phone number"
        type="tel"
        value={phoneNo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              phoneNo: value,
              title,
              authors,
              genre,
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
        isRequired={true}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              phoneNo,
              title: value,
              authors,
              genre,
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
        isRequired={true}
        value={authors}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              phoneNo,
              title,
              authors: value,
              genre,
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
      <SelectField
        label="Genre"
        placeholder="Please select the most suitable genre"
        value={genre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              phoneNo,
              title,
              authors,
              genre: value,
            };
            const result = onChange(modelFields);
            value = result?.genre ?? value;
          }
          if (errors.genre?.hasError) {
            runValidationTasks("genre", value);
          }
          setGenre(value);
        }}
        onBlur={() => runValidationTasks("genre", genre)}
        errorMessage={errors.genre?.errorMessage}
        hasError={errors.genre?.hasError}
        {...getOverrideProps(overrides, "genre")}
      >
        <option
          children="二手書架"
          value="二手書架"
          {...getOverrideProps(overrides, "genreoption0")}
        ></option>
        <option
          children="電影/戲劇"
          value="電影/戲劇"
          {...getOverrideProps(overrides, "genreoption1")}
        ></option>
        <option
          children="城市地理"
          value="城市地理"
          {...getOverrideProps(overrides, "genreoption2")}
        ></option>
        <option
          children="雜誌/期刊"
          value="雜誌/期刊"
          {...getOverrideProps(overrides, "genreoption3")}
        ></option>
        <option
          children="文學"
          value="文學"
          {...getOverrideProps(overrides, "genreoption4")}
        ></option>
        <option
          children="文化 藝術理論"
          value="文化 藝術理論"
          {...getOverrideProps(overrides, "genreoption5")}
        ></option>
        <option
          children="中國研究"
          value="中國研究"
          {...getOverrideProps(overrides, "genreoption6")}
        ></option>
        <option
          children="台灣研究"
          value="台灣研究"
          {...getOverrideProps(overrides, "genreoption7")}
        ></option>
        <option
          children="亞太研所"
          value="亞太研所"
          {...getOverrideProps(overrides, "genreoption8")}
        ></option>
        <option
          children="香港研究"
          value="香港研究"
          {...getOverrideProps(overrides, "genreoption9")}
        ></option>
        <option
          children="宗教 神學"
          value="宗教 神學"
          {...getOverrideProps(overrides, "genreoption10")}
        ></option>
        <option
          children="哲學"
          value="哲學"
          {...getOverrideProps(overrides, "genreoption11")}
        ></option>
        <option
          children="精神分析"
          value="精神分析"
          {...getOverrideProps(overrides, "genreoption12")}
        ></option>
        <option
          children="中國哲學"
          value="中國哲學"
          {...getOverrideProps(overrides, "genreoption13")}
        ></option>
        <option
          children="政治哲學"
          value="政治哲學"
          {...getOverrideProps(overrides, "genreoption14")}
        ></option>
        <option
          children="性別研究"
          value="性別研究"
          {...getOverrideProps(overrides, "genreoption15")}
        ></option>
        <option
          children="次文化"
          value="次文化"
          {...getOverrideProps(overrides, "genreoption16")}
        ></option>
        <option
          children="同人誌"
          value="同人誌"
          {...getOverrideProps(overrides, "genreoption17")}
        ></option>
        <option
          children="歷史與政治"
          value="歷史與政治"
          {...getOverrideProps(overrides, "genreoption18")}
        ></option>
        <option
          children="社會 文化 經濟"
          value="社會 文化 經濟"
          {...getOverrideProps(overrides, "genreoption19")}
        ></option>
        <option
          children="Literature"
          value="Literature"
          {...getOverrideProps(overrides, "genreoption20")}
        ></option>
        <option
          children="Hong Kong Studies"
          value="Hong Kong Studies"
          {...getOverrideProps(overrides, "genreoption21")}
        ></option>
        <option
          children="Social Science and History"
          value="Social Science and History"
          {...getOverrideProps(overrides, "genreoption22")}
        ></option>
        <option
          children="Philosophy"
          value="Philosophy"
          {...getOverrideProps(overrides, "genreoption23")}
        ></option>
        <option
          children="Urban Studies"
          value="Urban Studies"
          {...getOverrideProps(overrides, "genreoption24")}
        ></option>
      </SelectField>
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
