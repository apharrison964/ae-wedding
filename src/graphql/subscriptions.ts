/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAttendee = /* GraphQL */ `subscription OnCreateAttendee($filter: ModelSubscriptionAttendeeFilterInput) {
  onCreateAttendee(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateAttendeeSubscriptionVariables,
  APITypes.OnCreateAttendeeSubscription
>;
export const onUpdateAttendee = /* GraphQL */ `subscription OnUpdateAttendee($filter: ModelSubscriptionAttendeeFilterInput) {
  onUpdateAttendee(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateAttendeeSubscriptionVariables,
  APITypes.OnUpdateAttendeeSubscription
>;
export const onDeleteAttendee = /* GraphQL */ `subscription OnDeleteAttendee($filter: ModelSubscriptionAttendeeFilterInput) {
  onDeleteAttendee(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteAttendeeSubscriptionVariables,
  APITypes.OnDeleteAttendeeSubscription
>;
