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
  Radio,
  RadioGroupField,
  ScrollView,
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
export default function AttendeeCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    isAttending: undefined,
    food: "",
    lastName: "",
    notes: "",
    relatedAttendee: [],
    relatedAttendees: "",
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
  const [relatedAttendees, setRelatedAttendees] = React.useState(
    initialValues.relatedAttendees
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirstName(initialValues.firstName);
    setIsAttending(initialValues.isAttending);
    setFood(initialValues.food);
    setLastName(initialValues.lastName);
    setNotes(initialValues.notes);
    setRelatedAttendee(initialValues.relatedAttendee);
    setCurrentRelatedAttendeeValue("");
    setRelatedAttendees(initialValues.relatedAttendees);
    setErrors({});
  };
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
    relatedAttendees: [],
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
          relatedAttendees,
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
          const modelFieldsToSave = {
            firstName: modelFields.firstName,
            isAttending: modelFields.isAttending,
            food: modelFields.food,
            lastName: modelFields.lastName,
            notes: modelFields.notes,
            relatedAttendee: modelFields.relatedAttendee,
          };
          await DataStore.save(new Attendee(modelFieldsToSave));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "AttendeeCreateForm")}
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
              relatedAttendees,
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
      <RadioGroupField
        label="Is attending"
        name="isAttending"
        isReadOnly={false}
        isRequired={false}
        onChange={(e) => {
          let value = e.target.value === "true";
          if (onChange) {
            const modelFields = {
              firstName,
              isAttending: value,
              food,
              lastName,
              notes,
              relatedAttendee,
              relatedAttendees,
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
      >
        <Radio
          children="Yes"
          value="true"
          {...getOverrideProps(overrides, "isAttendingRadio0")}
        ></Radio>
        <Radio
          children="No"
          value="false"
          {...getOverrideProps(overrides, "isAttendingRadio1")}
        ></Radio>
      </RadioGroupField>
      <TextField
        label="Food"
        isRequired={false}
        isReadOnly={false}
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
              relatedAttendees,
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
      ></TextField>
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
              relatedAttendees,
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
              relatedAttendees,
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
              relatedAttendees,
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
      <TextField
        label="Related attendees"
        value={relatedAttendees}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              isAttending,
              food,
              lastName,
              notes,
              relatedAttendee,
              relatedAttendees: value,
            };
            const result = onChange(modelFields);
            value = result?.relatedAttendees ?? value;
          }
          if (errors.relatedAttendees?.hasError) {
            runValidationTasks("relatedAttendees", value);
          }
          setRelatedAttendees(value);
        }}
        onBlur={() => runValidationTasks("relatedAttendees", relatedAttendees)}
        errorMessage={errors.relatedAttendees?.errorMessage}
        hasError={errors.relatedAttendees?.hasError}
        {...getOverrideProps(overrides, "relatedAttendees")}
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
