/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createAttendee = /* GraphQL */ `mutation CreateAttendee(
  $input: CreateAttendeeInput!
  $condition: ModelAttendeeConditionInput
) {
  createAttendee(input: $input, condition: $condition) {
    id
    firstName
    isAttending
    food
    lastName
    notes
    relatedAttendee
    hasPlusOne
    addedPlusOne
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateAttendeeMutationVariables,
  APITypes.CreateAttendeeMutation
>;
export const updateAttendee = /* GraphQL */ `mutation UpdateAttendee(
  $input: UpdateAttendeeInput!
  $condition: ModelAttendeeConditionInput
) {
  updateAttendee(input: $input, condition: $condition) {
    id
    firstName
    isAttending
    food
    lastName
    notes
    relatedAttendee
    hasPlusOne
    addedPlusOne
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateAttendeeMutationVariables,
  APITypes.UpdateAttendeeMutation
>;
export const deleteAttendee = /* GraphQL */ `mutation DeleteAttendee(
  $input: DeleteAttendeeInput!
  $condition: ModelAttendeeConditionInput
) {
  deleteAttendee(input: $input, condition: $condition) {
    id
    firstName
    isAttending
    food
    lastName
    notes
    relatedAttendee
    hasPlusOne
    addedPlusOne
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAttendeeMutationVariables,
  APITypes.DeleteAttendeeMutation
>;
