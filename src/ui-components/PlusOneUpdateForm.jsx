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
  SelectField,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { PlusOne } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function PlusOneUpdateForm(props) {
  const {
    id: idProp,
    plusOne: plusOneModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    firstName: "",
    food: "",
    lastName: "",
    isAttending: false,
    notes: "",
  };
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [food, setFood] = React.useState(initialValues.food);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [isAttending, setIsAttending] = React.useState(
    initialValues.isAttending
  );
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = plusOneRecord
      ? { ...initialValues, ...plusOneRecord }
      : initialValues;
    setFirstName(cleanValues.firstName);
    setFood(cleanValues.food);
    setLastName(cleanValues.lastName);
    setIsAttending(cleanValues.isAttending);
    setNotes(cleanValues.notes);
    setErrors({});
  };
  const [plusOneRecord, setPlusOneRecord] = React.useState(plusOneModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(PlusOne, idProp)
        : plusOneModelProp;
      setPlusOneRecord(record);
    };
    queryData();
  }, [idProp, plusOneModelProp]);
  React.useEffect(resetStateValues, [plusOneRecord]);
  const validations = {
    firstName: [{ type: "Required" }],
    food: [],
    lastName: [{ type: "Required" }],
    isAttending: [],
    notes: [],
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
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          firstName,
          food,
          lastName,
          isAttending,
          notes,
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
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            PlusOne.copyOf(plusOneRecord, (updated) => {
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
      {...getOverrideProps(overrides, "PlusOneUpdateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={true}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName: value,
              food,
              lastName,
              isAttending,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <SelectField
        label="Food"
        placeholder="Please select an option"
        isDisabled={false}
        value={food}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              food: value,
              lastName,
              isAttending,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.food ?? value;
          }
          if (errors.food?.hasError) {
            runValidationTasks("food", value);
          }
          setFood(value);
        }}
        onBlur={() => runValidationTasks("food", food)}
        errorMessage={errors.food?.errorMessage}
        hasError={errors.food?.hasError}
        {...getOverrideProps(overrides, "food")}
      >
        <option
          children="Shrimp"
          value="SHRIMP"
          {...getOverrideProps(overrides, "foodoption0")}
        ></option>
        <option
          children="Grilled chicken"
          value="GRILLED_CHICKEN"
          {...getOverrideProps(overrides, "foodoption1")}
        ></option>
        <option
          children="Other"
          value="OTHER"
          {...getOverrideProps(overrides, "foodoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Last name"
        isRequired={true}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              food,
              lastName: value,
              isAttending,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <SwitchField
        label="Is attending"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isAttending}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              firstName,
              food,
              lastName,
              isAttending: value,
              notes,
            };
            const result = onChange(modelFields);
            value = result?.isAttending ?? value;
          }
          if (errors.isAttending?.hasError) {
            runValidationTasks("isAttending", value);
          }
          setIsAttending(value);
        }}
        onBlur={() => runValidationTasks("isAttending", isAttending)}
        errorMessage={errors.isAttending?.errorMessage}
        hasError={errors.isAttending?.hasError}
        {...getOverrideProps(overrides, "isAttending")}
      ></SwitchField>
      <TextField
        label="Notes"
        isRequired={false}
        isReadOnly={false}
        value={notes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              food,
              lastName,
              isAttending,
              notes: value,
            };
            const result = onChange(modelFields);
            value = result?.notes ?? value;
          }
          if (errors.notes?.hasError) {
            runValidationTasks("notes", value);
          }
          setNotes(value);
        }}
        onBlur={() => runValidationTasks("notes", notes)}
        errorMessage={errors.notes?.errorMessage}
        hasError={errors.notes?.hasError}
        {...getOverrideProps(overrides, "notes")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || plusOneModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || plusOneModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
