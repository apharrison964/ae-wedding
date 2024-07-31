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
    plusOne {
      id
      firstName
      food
      lastName
      isAttending
      notes
      createdAt
      updatedAt
      plusOneAttendeeId
      __typename
    }
    lastName
    notes
    relatedAttendee
    createdAt
    updatedAt
    attendeePlusOneId
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
    plusOne {
      id
      firstName
      food
      lastName
      isAttending
      notes
      createdAt
      updatedAt
      plusOneAttendeeId
      __typename
    }
    lastName
    notes
    relatedAttendee
    createdAt
    updatedAt
    attendeePlusOneId
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
    plusOne {
      id
      firstName
      food
      lastName
      isAttending
      notes
      createdAt
      updatedAt
      plusOneAttendeeId
      __typename
    }
    lastName
    notes
    relatedAttendee
    createdAt
    updatedAt
    attendeePlusOneId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteAttendeeSubscriptionVariables,
  APITypes.OnDeleteAttendeeSubscription
>;
export const onCreatePlusOne = /* GraphQL */ `subscription OnCreatePlusOne($filter: ModelSubscriptionPlusOneFilterInput) {
  onCreatePlusOne(filter: $filter) {
    id
    firstName
    food
    lastName
    isAttending
    notes
    Attendee {
      id
      firstName
      isAttending
      food
      lastName
      notes
      relatedAttendee
      createdAt
      updatedAt
      attendeePlusOneId
      __typename
    }
    createdAt
    updatedAt
    plusOneAttendeeId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePlusOneSubscriptionVariables,
  APITypes.OnCreatePlusOneSubscription
>;
export const onUpdatePlusOne = /* GraphQL */ `subscription OnUpdatePlusOne($filter: ModelSubscriptionPlusOneFilterInput) {
  onUpdatePlusOne(filter: $filter) {
    id
    firstName
    food
    lastName
    isAttending
    notes
    Attendee {
      id
      firstName
      isAttending
      food
      lastName
      notes
      relatedAttendee
      createdAt
      updatedAt
      attendeePlusOneId
      __typename
    }
    createdAt
    updatedAt
    plusOneAttendeeId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePlusOneSubscriptionVariables,
  APITypes.OnUpdatePlusOneSubscription
>;
export const onDeletePlusOne = /* GraphQL */ `subscription OnDeletePlusOne($filter: ModelSubscriptionPlusOneFilterInput) {
  onDeletePlusOne(filter: $filter) {
    id
    firstName
    food
    lastName
    isAttending
    notes
    Attendee {
      id
      firstName
      isAttending
      food
      lastName
      notes
      relatedAttendee
      createdAt
      updatedAt
      attendeePlusOneId
      __typename
    }
    createdAt
    updatedAt
    plusOneAttendeeId
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePlusOneSubscriptionVariables,
  APITypes.OnDeletePlusOneSubscription
>;
