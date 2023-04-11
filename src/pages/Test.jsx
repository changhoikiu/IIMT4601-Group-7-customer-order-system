// /***************************************************************************
//  * The contents of this file were generated with Amplify Studio.           *
//  * Please refrain from making any modifications to this file.              *
//  * Any changes to this file will be overwritten when running amplify pull. *
//  **************************************************************************/

// /* eslint-disable */
// import * as React from "react";
// import {
//   Button,
//   CheckboxField,
//   Flex,
//   Grid,
//   Heading,
//   TextField,
//   useTheme,
// } from "@aws-amplify/ui-react";
// import { getOverrideProps } from "@aws-amplify/ui-react/internal";
// import { fetchByPath, validateField } from "./utils";
// export default function SubmitReservation(props) {
//   const { onSubmit, onValidate, onChange, overrides, ...rest } = props;
//   const { tokens } = useTheme();
//   const initialValues = {
//     name: "",
//     phoneNo: "",
//     agreement: false,
//   };
//   const [name, setName] = React.useState(initialValues.name);
//   const [phoneNo, setPhoneNo] = React.useState(initialValues.phoneNo);
//   const [agreement, setAgreement] = React.useState(initialValues.agreement);
//   const [errors, setErrors] = React.useState({});
//   const resetStateValues = () => {
//     setName(initialValues.name);
//     setPhoneNo(initialValues.phoneNo);
//     setAgreement(initialValues.agreement);
//     setErrors({});
//   };
//   const validations = {
//     name: [{ type: "Required" }],
//     phoneNo: [{ type: "Required" }, { type: "Phone" }],
//     agreement: [{ type: "Required" }],
//   };
//   const runValidationTasks = async (
//     fieldName,
//     currentValue,
//     getDisplayValue
//   ) => {
//     const value =
//       currentValue && getDisplayValue
//         ? getDisplayValue(currentValue)
//         : currentValue;
//     let validationResponse = validateField(value, validations[fieldName]);
//     const customValidator = fetchByPath(onValidate, fieldName);
//     if (customValidator) {
//       validationResponse = await customValidator(value, validationResponse);
//     }
//     setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
//     return validationResponse;
//   };
//   return (
//     <Grid
//       as="form"
//       rowGap="15px"
//       columnGap="15px"
//       padding={tokens.space.large.value}
//       onSubmit={async (event) => {
//         event.preventDefault();
//         const modelFields = {
//           name,
//           phoneNo,
//           agreement,
//         };
//         const validationResponses = await Promise.all(
//           Object.keys(validations).reduce((promises, fieldName) => {
//             if (Array.isArray(modelFields[fieldName])) {
//               promises.push(
//                 ...modelFields[fieldName].map((item) =>
//                   runValidationTasks(fieldName, item)
//                 )
//               );
//               return promises;
//             }
//             promises.push(
//               runValidationTasks(fieldName, modelFields[fieldName])
//             );
//             return promises;
//           }, [])
//         );
//         if (validationResponses.some((r) => r.hasError)) {
//           return;
//         }
//         await onSubmit(modelFields);
//       }}
//       {...getOverrideProps(overrides, "SubmitReservation")}
//       {...rest}
//     >
//       <Heading
//         level={4}
//         children="Personal information"
//         {...getOverrideProps(overrides, "SectionalElement0")}
//       ></Heading>
//       <TextField
//         label="Name"
//         isRequired={true}
//         placeholder="Your name"
//         value={name}
//         onChange={(e) => {
//           let { value } = e.target;
//           if (onChange) {
//             const modelFields = {
//               name: value,
//               phoneNo,
//               agreement,
//             };
//             const result = onChange(modelFields);
//             value = result?.name ?? value;
//           }
//           if (errors.name?.hasError) {
//             runValidationTasks("name", value);
//           }
//           setName(value);
//         }}
//         onBlur={() => runValidationTasks("name", name)}
//         errorMessage={errors.name?.errorMessage}
//         hasError={errors.name?.hasError}
//         {...getOverrideProps(overrides, "name")}
//       ></TextField>
//       <TextField
//         label="Mobile phone number"
//         isRequired={true}
//         placeholder="A number that can receive SMS"
//         type="tel"
//         value={phoneNo}
//         onChange={(e) => {
//           let { value } = e.target;
//           if (onChange) {
//             const modelFields = {
//               name,
//               phoneNo: value,
//               agreement,
//             };
//             const result = onChange(modelFields);
//             value = result?.phoneNo ?? value;
//           }
//           if (errors.phoneNo?.hasError) {
//             runValidationTasks("phoneNo", value);
//           }
//           setPhoneNo(value);
//         }}
//         onBlur={() => runValidationTasks("phoneNo", phoneNo)}
//         errorMessage={errors.phoneNo?.errorMessage}
//         hasError={errors.phoneNo?.hasError}
//         {...getOverrideProps(overrides, "phoneNo")}
//       ></TextField>
//       <CheckboxField
//         label="I agreed that I will come to pick up the reserved books in person within 7 days after making this reservation."
//         isRequired={true}
//         name="fieldName"
//         value="fieldName"
//         checked={agreement}
//         onChange={(e) => {
//           let value = e.target.checked;
//           if (onChange) {
//             const modelFields = {
//               name,
//               phoneNo,
//               agreement: value,
//             };
//             const result = onChange(modelFields);
//             value = result?.agreement ?? value;
//           }
//           if (errors.agreement?.hasError) {
//             runValidationTasks("agreement", value);
//           }
//           setAgreement(value);
//         }}
//         onBlur={() => runValidationTasks("agreement", agreement)}
//         errorMessage={errors.agreement?.errorMessage}
//         hasError={errors.agreement?.hasError}
//         {...getOverrideProps(overrides, "agreement")}
//       ></CheckboxField>
//       <Flex
//         justifyContent="space-between"
//         {...getOverrideProps(overrides, "CTAFlex")}
//       >
//         <Button
//           children="Clear"
//           type="reset"
//           onClick={(event) => {
//             event.preventDefault();
//             resetStateValues();
//           }}
//           {...getOverrideProps(overrides, "ClearButton")}
//         ></Button>
//         <Flex
//           gap="15px"
//           {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
//         >
//           <Button
//             children="Submit"
//             type="submit"
//             variation="primary"
//             isDisabled={Object.values(errors).some((e) => e?.hasError)}
//             {...getOverrideProps(overrides, "SubmitButton")}
//           ></Button>
//         </Flex>
//       </Flex>
//     </Grid>
//   );
// }
