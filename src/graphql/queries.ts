/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getAttendee = /* GraphQL */ `query GetAttendee($id: ID!) {
  getAttendee(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetAttendeeQueryVariables,
  APITypes.GetAttendeeQuery
>;
export const listAttendees = /* GraphQL */ `query ListAttendees(
  $filter: ModelAttendeeFilterInput
  $limit: Int
  $nextToken: String
) {
  listAttendees(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAttendeesQueryVariables,
  APITypes.ListAttendeesQuery
>;
export const getPlusOne = /* GraphQL */ `query GetPlusOne($id: ID!) {
  getPlusOne(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPlusOneQueryVariables,
  APITypes.GetPlusOneQuery
>;
export const listPlusOnes = /* GraphQL */ `query ListPlusOnes(
  $filter: ModelPlusOneFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlusOnes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPlusOnesQueryVariables,
  APITypes.ListPlusOnesQuery
>;
