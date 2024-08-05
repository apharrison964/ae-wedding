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
      hasPlusOne
      addedPlusOne
      createdAt
      updatedAt
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
