/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { Attendee } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function AttendeeUpdateForm(props) {
  const {
    id: idProp,
    attendee: attendeeModelProp,
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
    isAttending: false,
    food: "",
    lastName: "",
    notes: "",
    relatedAttendee: [],
  };
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [isAttending, setIsAttending] = React.useState(
    initialValues.isAttending
  );
  const [food, setFood] = React.useState(initialValues.food);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [relatedAttendee, setRelatedAttendee] = React.useState(
    initialValues.relatedAttendee
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = attendeeRecord
      ? { ...initialValues, ...attendeeRecord }
      : initialValues;
    setFirstName(cleanValues.firstName);
    setIsAttending(cleanValues.isAttending);
    setFood(cleanValues.food);
    setLastName(cleanValues.lastName);
    setNotes(cleanValues.notes);
    setRelatedAttendee(cleanValues.relatedAttendee ?? []);
    setCurrentRelatedAttendeeValue("");
    setErrors({});
  };
  const [attendeeRecord, setAttendeeRecord] = React.useState(attendeeModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Attendee, idProp)
        : attendeeModelProp;
      setAttendeeRecord(record);
    };
    queryData();
  }, [idProp, attendeeModelProp]);
  React.useEffect(resetStateValues, [attendeeRecord]);
  const [currentRelatedAttendeeValue, setCurrentRelatedAttendeeValue] =
    React.useState("");
  const relatedAttendeeRef = React.createRef();
  const validations = {
    firstName: [{ type: "Required" }],
    isAttending: [],
    food: [],
    lastName: [{ type: "Required" }],
    notes: [],
    relatedAttendee: [],
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
          isAttending,
          food,
          lastName,
          notes,
          relatedAttendee,
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
            Attendee.copyOf(attendeeRecord, (updated) => {
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
      {...getOverrideProps(overrides, "AttendeeUpdateForm")}
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
              isAttending,
              food,
              lastName,
              notes,
              relatedAttendee,
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
              isAttending: value,
              food,
              lastName,
              notes,
              relatedAttendee,
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
              isAttending,
              food: value,
              lastName,
              notes,
              relatedAttendee,
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
              isAttending,
              food,
              lastName: value,
              notes,
              relatedAttendee,
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
              isAttending,
              food,
              lastName,
              notes: value,
              relatedAttendee,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              firstName,
              isAttending,
              food,
              lastName,
              notes,
              relatedAttendee: values,
            };
            const result = onChange(modelFields);
            values = result?.relatedAttendee ?? values;
          }
          setRelatedAttendee(values);
          setCurrentRelatedAttendeeValue("");
        }}
        currentFieldValue={currentRelatedAttendeeValue}
        label={"Related attendee"}
        items={relatedAttendee}
        hasError={errors?.relatedAttendee?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "relatedAttendee",
            currentRelatedAttendeeValue
          )
        }
        errorMessage={errors?.relatedAttendee?.errorMessage}
        setFieldValue={setCurrentRelatedAttendeeValue}
        inputFieldRef={relatedAttendeeRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Related attendee"
          isRequired={false}
          isReadOnly={false}
          value={currentRelatedAttendeeValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.relatedAttendee?.hasError) {
              runValidationTasks("relatedAttendee", value);
            }
            setCurrentRelatedAttendeeValue(value);
          }}
          onBlur={() =>
            runValidationTasks("relatedAttendee", currentRelatedAttendeeValue)
          }
          errorMessage={errors.relatedAttendee?.errorMessage}
          hasError={errors.relatedAttendee?.hasError}
          ref={relatedAttendeeRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "relatedAttendee")}
        ></TextField>
      </ArrayField>
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
          isDisabled={!(idProp || attendeeModelProp)}
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
              !(idProp || attendeeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
