/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAttendeeInput = {
  id?: string | null,
  firstName: string,
  isAttending: boolean,
  food: Food,
  lastName: string,
  notes?: string | null,
  relatedAttendees?: Array< string | null > | null,
};

export enum Food {
  SHRIMP = "SHRIMP",
  GRILLED_CHICKEN = "GRILLED_CHICKEN",
}


export type ModelAttendeeConditionInput = {
  firstName?: ModelStringInput | null,
  isAttending?: ModelBooleanInput | null,
  food?: ModelFoodInput | null,
  lastName?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  relatedAttendees?: ModelIDInput | null,
  and?: Array< ModelAttendeeConditionInput | null > | null,
  or?: Array< ModelAttendeeConditionInput | null > | null,
  not?: ModelAttendeeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelFoodInput = {
  eq?: Food | null,
  ne?: Food | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Attendee = {
  __typename: "Attendee",
  id: string,
  firstName: string,
  isAttending: boolean,
  food: Food,
  plusOne?: ModelPlusOneConnection | null,
  lastName: string,
  notes?: string | null,
  relatedAttendees?: Array< string | null > | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelPlusOneConnection = {
  __typename: "ModelPlusOneConnection",
  items:  Array<PlusOne | null >,
  nextToken?: string | null,
};

export type PlusOne = {
  __typename: "PlusOne",
  id: string,
  firstName: string,
  food: Food,
  attendeeID: string,
  lastName: string,
  isAttending: boolean,
  notes?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAttendeeInput = {
  id: string,
  firstName?: string | null,
  isAttending?: boolean | null,
  food?: Food | null,
  lastName?: string | null,
  notes?: string | null,
  relatedAttendees?: Array< string | null > | null,
};

export type DeleteAttendeeInput = {
  id: string,
};

export type CreatePlusOneInput = {
  id?: string | null,
  firstName: string,
  food: Food,
  attendeeID: string,
  lastName: string,
  isAttending: boolean,
  notes?: string | null,
};

export type ModelPlusOneConditionInput = {
  firstName?: ModelStringInput | null,
  food?: ModelFoodInput | null,
  attendeeID?: ModelIDInput | null,
  lastName?: ModelStringInput | null,
  isAttending?: ModelBooleanInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelPlusOneConditionInput | null > | null,
  or?: Array< ModelPlusOneConditionInput | null > | null,
  not?: ModelPlusOneConditionInput | null,
};

export type UpdatePlusOneInput = {
  id: string,
  firstName?: string | null,
  food?: Food | null,
  attendeeID?: string | null,
  lastName?: string | null,
  isAttending?: boolean | null,
  notes?: string | null,
};

export type DeletePlusOneInput = {
  id: string,
};

export type ModelAttendeeFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  isAttending?: ModelBooleanInput | null,
  food?: ModelFoodInput | null,
  lastName?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  relatedAttendees?: ModelIDInput | null,
  and?: Array< ModelAttendeeFilterInput | null > | null,
  or?: Array< ModelAttendeeFilterInput | null > | null,
  not?: ModelAttendeeFilterInput | null,
};

export type ModelAttendeeConnection = {
  __typename: "ModelAttendeeConnection",
  items:  Array<Attendee | null >,
  nextToken?: string | null,
};

export type ModelPlusOneFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  food?: ModelFoodInput | null,
  attendeeID?: ModelIDInput | null,
  lastName?: ModelStringInput | null,
  isAttending?: ModelBooleanInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelPlusOneFilterInput | null > | null,
  or?: Array< ModelPlusOneFilterInput | null > | null,
  not?: ModelPlusOneFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionAttendeeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  isAttending?: ModelSubscriptionBooleanInput | null,
  food?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  relatedAttendees?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionAttendeeFilterInput | null > | null,
  or?: Array< ModelSubscriptionAttendeeFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionPlusOneFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  food?: ModelSubscriptionStringInput | null,
  attendeeID?: ModelSubscriptionIDInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  isAttending?: ModelSubscriptionBooleanInput | null,
  notes?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPlusOneFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlusOneFilterInput | null > | null,
};

export type CreateAttendeeMutationVariables = {
  input: CreateAttendeeInput,
  condition?: ModelAttendeeConditionInput | null,
};

export type CreateAttendeeMutation = {
  createAttendee?:  {
    __typename: "Attendee",
    id: string,
    firstName: string,
    isAttending: boolean,
    food: Food,
    plusOne?:  {
      __typename: "ModelPlusOneConnection",
      nextToken?: string | null,
    } | null,
    lastName: string,
    notes?: string | null,
    relatedAttendees?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAttendeeMutationVariables = {
  input: UpdateAttendeeInput,
  condition?: ModelAttendeeConditionInput | null,
};

export type UpdateAttendeeMutation = {
  updateAttendee?:  {
    __typename: "Attendee",
    id: string,
    firstName: string,
    isAttending: boolean,
    food: Food,
    plusOne?:  {
      __typename: "ModelPlusOneConnection",
      nextToken?: string | null,
    } | null,
    lastName: string,
    notes?: string | null,
    relatedAttendees?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAttendeeMutationVariables = {
  input: DeleteAttendeeInput,
  condition?: ModelAttendeeConditionInput | null,
};

export type DeleteAttendeeMutation = {
  deleteAttendee?:  {
    __typename: "Attendee",
    id: string,
    firstName: string,
    isAttending: boolean,
    food: Food,
    plusOne?:  {
      __typename: "ModelPlusOneConnection",
      nextToken?: string | null,
    } | null,
    lastName: string,
    notes?: string | null,
    relatedAttendees?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePlusOneMutationVariables = {
  input: CreatePlusOneInput,
  condition?: ModelPlusOneConditionInput | null,
};

export type CreatePlusOneMutation = {
  createPlusOne?:  {
    __typename: "PlusOne",
    id: string,
    firstName: string,
    food: Food,
    attendeeID: string,
    lastName: string,
    isAttending: boolean,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlusOneMutationVariables = {
  input: UpdatePlusOneInput,
  condition?: ModelPlusOneConditionInput | null,
};

export type UpdatePlusOneMutation = {
  updatePlusOne?:  {
    __typename: "PlusOne",
    id: string,
    firstName: string,
    food: Food,
    attendeeID: string,
    lastName: string,
    isAttending: boolean,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlusOneMutationVariables = {
  input: DeletePlusOneInput,
  condition?: ModelPlusOneConditionInput | null,
};

export type DeletePlusOneMutation = {
  deletePlusOne?:  {
    __typename: "PlusOne",
    id: string,
    firstName: string,
    food: Food,
    attendeeID: string,
    lastName: string,
    isAttending: boolean,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetAttendeeQueryVariables = {
  id: string,
};

export type GetAttendeeQuery = {
  getAttendee?:  {
    __typename: "Attendee",
    id: string,
    firstName: string,
    isAttending: boolean,
    food: Food,
    plusOne?:  {
      __typename: "ModelPlusOneConnection",
      nextToken?: string | null,
    } | null,
    lastName: string,
    notes?: string | null,
    relatedAttendees?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAttendeesQueryVariables = {
  filter?: ModelAttendeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAttendeesQuery = {
  listAttendees?:  {
    __typename: "ModelAttendeeConnection",
    items:  Array< {
      __typename: "Attendee",
      id: string,
      firstName: string,
      isAttending: boolean,
      food: Food,
      lastName: string,
      notes?: string | null,
      relatedAttendees?: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlusOneQueryVariables = {
  id: string,
};

export type GetPlusOneQuery = {
  getPlusOne?:  {
    __typename: "PlusOne",
    id: string,
    firstName: string,
    food: Food,
    attendeeID: string,
    lastName: string,
    isAttending: boolean,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlusOnesQueryVariables = {
  filter?: ModelPlusOneFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlusOnesQuery = {
  listPlusOnes?:  {
    __typename: "ModelPlusOneConnection",
    items:  Array< {
      __typename: "PlusOne",
      id: string,
      firstName: string,
      food: Food,
      attendeeID: string,
      lastName: string,
      isAttending: boolean,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PlusOnesByAttendeeIDQueryVariables = {
  attendeeID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPlusOneFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PlusOnesByAttendeeIDQuery = {
  plusOnesByAttendeeID?:  {
    __typename: "ModelPlusOneConnection",
    items:  Array< {
      __typename: "PlusOne",
      id: string,
      firstName: string,
      food: Food,
      attendeeID: string,
      lastName: string,
      isAttending: boolean,
      notes?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateAttendeeSubscriptionVariables = {
  filter?: ModelSubscriptionAttendeeFilterInput | null,
};

export type OnCreateAttendeeSubscription = {
  onCreateAttendee?:  {
    __typename: "Attendee",
    id: string,
    firstName: string,
    isAttending: boolean,
    food: Food,
    plusOne?:  {
      __typename: "ModelPlusOneConnection",
      nextToken?: string | null,
    } | null,
    lastName: string,
    notes?: string | null,
    relatedAttendees?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAttendeeSubscriptionVariables = {
  filter?: ModelSubscriptionAttendeeFilterInput | null,
};

export type OnUpdateAttendeeSubscription = {
  onUpdateAttendee?:  {
    __typename: "Attendee",
    id: string,
    firstName: string,
    isAttending: boolean,
    food: Food,
    plusOne?:  {
      __typename: "ModelPlusOneConnection",
      nextToken?: string | null,
    } | null,
    lastName: string,
    notes?: string | null,
    relatedAttendees?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAttendeeSubscriptionVariables = {
  filter?: ModelSubscriptionAttendeeFilterInput | null,
};

export type OnDeleteAttendeeSubscription = {
  onDeleteAttendee?:  {
    __typename: "Attendee",
    id: string,
    firstName: string,
    isAttending: boolean,
    food: Food,
    plusOne?:  {
      __typename: "ModelPlusOneConnection",
      nextToken?: string | null,
    } | null,
    lastName: string,
    notes?: string | null,
    relatedAttendees?: Array< string | null > | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlusOneSubscriptionVariables = {
  filter?: ModelSubscriptionPlusOneFilterInput | null,
};

export type OnCreatePlusOneSubscription = {
  onCreatePlusOne?:  {
    __typename: "PlusOne",
    id: string,
    firstName: string,
    food: Food,
    attendeeID: string,
    lastName: string,
    isAttending: boolean,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlusOneSubscriptionVariables = {
  filter?: ModelSubscriptionPlusOneFilterInput | null,
};

export type OnUpdatePlusOneSubscription = {
  onUpdatePlusOne?:  {
    __typename: "PlusOne",
    id: string,
    firstName: string,
    food: Food,
    attendeeID: string,
    lastName: string,
    isAttending: boolean,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlusOneSubscriptionVariables = {
  filter?: ModelSubscriptionPlusOneFilterInput | null,
};

export type OnDeletePlusOneSubscription = {
  onDeletePlusOne?:  {
    __typename: "PlusOne",
    id: string,
    firstName: string,
    food: Food,
    attendeeID: string,
    lastName: string,
    isAttending: boolean,
    notes?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
