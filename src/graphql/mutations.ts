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
    plusOne {
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
        plusOne {
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
    lastName
    notes
    relatedAttendee
    createdAt
    updatedAt
    attendeePlusOneId
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
    plusOne {
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
        plusOne {
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
    lastName
    notes
    relatedAttendee
    createdAt
    updatedAt
    attendeePlusOneId
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
    plusOne {
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
        plusOne {
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
    lastName
    notes
    relatedAttendee
    createdAt
    updatedAt
    attendeePlusOneId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteAttendeeMutationVariables,
  APITypes.DeleteAttendeeMutation
>;
export const createPlusOne = /* GraphQL */ `mutation CreatePlusOne(
  $input: CreatePlusOneInput!
  $condition: ModelPlusOneConditionInput
) {
  createPlusOne(input: $input, condition: $condition) {
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
      plusOne {
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
    createdAt
    updatedAt
    plusOneAttendeeId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePlusOneMutationVariables,
  APITypes.CreatePlusOneMutation
>;
export const updatePlusOne = /* GraphQL */ `mutation UpdatePlusOne(
  $input: UpdatePlusOneInput!
  $condition: ModelPlusOneConditionInput
) {
  updatePlusOne(input: $input, condition: $condition) {
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
      plusOne {
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
    createdAt
    updatedAt
    plusOneAttendeeId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePlusOneMutationVariables,
  APITypes.UpdatePlusOneMutation
>;
export const deletePlusOne = /* GraphQL */ `mutation DeletePlusOne(
  $input: DeletePlusOneInput!
  $condition: ModelPlusOneConditionInput
) {
  deletePlusOne(input: $input, condition: $condition) {
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
      plusOne {
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
    createdAt
    updatedAt
    plusOneAttendeeId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePlusOneMutationVariables,
  APITypes.DeletePlusOneMutation
>;
