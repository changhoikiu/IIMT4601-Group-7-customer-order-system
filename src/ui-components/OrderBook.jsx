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
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
export default function OrderBook(props) {
  const { onSubmit, onValidate, onChange, overrides, ...rest } = props;
  const { tokens } = useTheme();
  const initialValues = {
    Field4: "",
    Field3: "",
    Field0: "",
    Field1: "",
    Field2: undefined,
  };
  const [Field4, setField4] = React.useState(initialValues.Field4);
  const [Field3, setField3] = React.useState(initialValues.Field3);
  const [Field0, setField0] = React.useState(initialValues.Field0);
  const [Field1, setField1] = React.useState(initialValues.Field1);
  const [Field2, setField2] = React.useState(initialValues.Field2);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setField4(initialValues.Field4);
    setField3(initialValues.Field3);
    setField0(initialValues.Field0);
    setField1(initialValues.Field1);
    setField2(initialValues.Field2);
    setErrors({});
  };
  const validations = {
    Field4: [{ type: "Required" }],
    Field3: [{ type: "Required" }, { type: "Phone" }],
    Field0: [{ type: "Required" }],
    Field1: [{ type: "Required" }],
    Field2: [],
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
      columnGap={tokens.space.xs.value}
      padding={tokens.space.large.value}
      onSubmit={async (event) => {
        event.preventDefault();
        const modelFields = {
          Field4,
          Field3,
          Field0,
          Field1,
          Field2,
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
        children="Order Book"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <TextField
        label="Name"
        isRequired={true}
        placeholder="Your Name"
        value={Field4}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field4: value,
              Field3,
              Field0,
              Field1,
              Field2,
            };
            const result = onChange(modelFields);
            value = result?.Field4 ?? value;
          }
          if (errors.Field4?.hasError) {
            runValidationTasks("Field4", value);
          }
          setField4(value);
        }}
        onBlur={() => runValidationTasks("Field4", Field4)}
        errorMessage={errors.Field4?.errorMessage}
        hasError={errors.Field4?.hasError}
        {...getOverrideProps(overrides, "Field4")}
      ></TextField>
      <TextField
        label="Mobile Phone Number"
        isRequired={true}
        placeholder="Please enter a number that can receive SMS"
        type="tel"
        value={Field3}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field4,
              Field3: value,
              Field0,
              Field1,
              Field2,
            };
            const result = onChange(modelFields);
            value = result?.Field3 ?? value;
          }
          if (errors.Field3?.hasError) {
            runValidationTasks("Field3", value);
          }
          setField3(value);
        }}
        onBlur={() => runValidationTasks("Field3", Field3)}
        errorMessage={errors.Field3?.errorMessage}
        hasError={errors.Field3?.hasError}
        {...getOverrideProps(overrides, "Field3")}
      ></TextField>
      <TextField
        label="Book Title"
        isRequired={true}
        value={Field0}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field4,
              Field3,
              Field0: value,
              Field1,
              Field2,
            };
            const result = onChange(modelFields);
            value = result?.Field0 ?? value;
          }
          if (errors.Field0?.hasError) {
            runValidationTasks("Field0", value);
          }
          setField0(value);
        }}
        onBlur={() => runValidationTasks("Field0", Field0)}
        errorMessage={errors.Field0?.errorMessage}
        hasError={errors.Field0?.hasError}
        {...getOverrideProps(overrides, "Field0")}
      ></TextField>
      <TextField
        label="Authors/Editors"
        isRequired={true}
        value={Field1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field4,
              Field3,
              Field0,
              Field1: value,
              Field2,
            };
            const result = onChange(modelFields);
            value = result?.Field1 ?? value;
          }
          if (errors.Field1?.hasError) {
            runValidationTasks("Field1", value);
          }
          setField1(value);
        }}
        onBlur={() => runValidationTasks("Field1", Field1)}
        errorMessage={errors.Field1?.errorMessage}
        hasError={errors.Field1?.hasError}
        {...getOverrideProps(overrides, "Field1")}
      ></TextField>
      <SelectField
        label="Genre"
        placeholder="Please select the most suitable genre"
        value={Field2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Field4,
              Field3,
              Field0,
              Field1,
              Field2: value,
            };
            const result = onChange(modelFields);
            value = result?.Field2 ?? value;
          }
          if (errors.Field2?.hasError) {
            runValidationTasks("Field2", value);
          }
          setField2(value);
        }}
        onBlur={() => runValidationTasks("Field2", Field2)}
        errorMessage={errors.Field2?.errorMessage}
        hasError={errors.Field2?.hasError}
        {...getOverrideProps(overrides, "Field2")}
      >
        <option
          children="二手書架"
          value="二手書架"
          {...getOverrideProps(overrides, "Field2option0")}
        ></option>
        <option
          children="電影/戲劇"
          value="電影/戲劇"
          {...getOverrideProps(overrides, "Field2option1")}
        ></option>
        <option
          children="城市地理"
          value="城市地理"
          {...getOverrideProps(overrides, "Field2option2")}
        ></option>
        <option
          children="雜誌/期刊"
          value="雜誌/期刊"
          {...getOverrideProps(overrides, "Field2option3")}
        ></option>
        <option
          children="文學"
          value="文學"
          {...getOverrideProps(overrides, "Field2option4")}
        ></option>
        <option
          children="文化 藝術理論"
          value="文化 藝術理論"
          {...getOverrideProps(overrides, "Field2option5")}
        ></option>
        <option
          children="中國研究"
          value="中國研究"
          {...getOverrideProps(overrides, "Field2option6")}
        ></option>
        <option
          children="台灣研究"
          value="台灣研究"
          {...getOverrideProps(overrides, "Field2option7")}
        ></option>
        <option
          children="亞太研所"
          value="亞太研所"
          {...getOverrideProps(overrides, "Field2option8")}
        ></option>
        <option
          children="香港研究"
          value="香港研究"
          {...getOverrideProps(overrides, "Field2option9")}
        ></option>
        <option
          children="宗教 神學"
          value="宗教 神學"
          {...getOverrideProps(overrides, "Field2option10")}
        ></option>
        <option
          children="哲學"
          value="哲學"
          {...getOverrideProps(overrides, "Field2option11")}
        ></option>
        <option
          children="精神分析"
          value="精神分析"
          {...getOverrideProps(overrides, "Field2option12")}
        ></option>
        <option
          children="中國哲學"
          value="中國哲學"
          {...getOverrideProps(overrides, "Field2option13")}
        ></option>
        <option
          children="政治哲學"
          value="政治哲學"
          {...getOverrideProps(overrides, "Field2option14")}
        ></option>
        <option
          children="性別研究"
          value="性別研究"
          {...getOverrideProps(overrides, "Field2option15")}
        ></option>
        <option
          children="次文化"
          value="次文化"
          {...getOverrideProps(overrides, "Field2option16")}
        ></option>
        <option
          children="同人誌"
          value="同人誌"
          {...getOverrideProps(overrides, "Field2option17")}
        ></option>
        <option
          children="歷史與政治"
          value="歷史與政治"
          {...getOverrideProps(overrides, "Field2option18")}
        ></option>
        <option
          children="社會 文化 經濟"
          value="社會 文化 經濟"
          {...getOverrideProps(overrides, "Field2option19")}
        ></option>
        <option
          children="Literature"
          value="Literature"
          {...getOverrideProps(overrides, "Field2option20")}
        ></option>
        <option
          children="Hong Kong Studies"
          value="Hong Kong Studies"
          {...getOverrideProps(overrides, "Field2option21")}
        ></option>
        <option
          children="Social science and history"
          value="Social science and history"
          {...getOverrideProps(overrides, "Field2option22")}
        ></option>
        <option
          children="Philosophy"
          value="Philosophy"
          {...getOverrideProps(overrides, "Field2option23")}
        ></option>
        <option
          children="Urban studies"
          value="Urban studies"
          {...getOverrideProps(overrides, "Field2option24")}
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
          gap={tokens.space.xs.value}
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
