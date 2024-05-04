/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAttendeeInput = {
  id?: string | null,
  name: string,
  isAttending: boolean,
  food?: Food | null,
  attendeePlusOneId?: string | null,
};

export enum Food {
  CHICKEN = "CHICKEN",
  BEEF = "BEEF",
  FISH = "FISH",
}


export type ModelAttendeeConditionInput = {
  name?: ModelStringInput | null,
  isAttending?: ModelBooleanInput | null,
  food?: ModelFoodInput | null,
  and?: Array< ModelAttendeeConditionInput | null > | null,
  or?: Array< ModelAttendeeConditionInput | null > | null,
  not?: ModelAttendeeConditionInput | null,
  attendeePlusOneId?: ModelIDInput | null,
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
  name: string,
  isAttending: boolean,
  food?: Food | null,
  plusOne?: PlusOne | null,
  createdAt: string,
  updatedAt: string,
  attendeePlusOneId?: string | null,
};

export type PlusOne = {
  __typename: "PlusOne",
  id: string,
  name: string,
  food: Food,
  createdAt: string,
  updatedAt: string,
};

export type UpdateAttendeeInput = {
  id: string,
  name?: string | null,
  isAttending?: boolean | null,
  food?: Food | null,
  attendeePlusOneId?: string | null,
};

export type DeleteAttendeeInput = {
  id: string,
};

export type CreatePlusOneInput = {
  id?: string | null,
  name: string,
  food: Food,
};

export type ModelPlusOneConditionInput = {
  name?: ModelStringInput | null,
  food?: ModelFoodInput | null,
  and?: Array< ModelPlusOneConditionInput | null > | null,
  or?: Array< ModelPlusOneConditionInput | null > | null,
  not?: ModelPlusOneConditionInput | null,
};

export type UpdatePlusOneInput = {
  id: string,
  name?: string | null,
  food?: Food | null,
};

export type DeletePlusOneInput = {
  id: string,
};

export type ModelAttendeeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  isAttending?: ModelBooleanInput | null,
  food?: ModelFoodInput | null,
  and?: Array< ModelAttendeeFilterInput | null > | null,
  or?: Array< ModelAttendeeFilterInput | null > | null,
  not?: ModelAttendeeFilterInput | null,
  attendeePlusOneId?: ModelIDInput | null,
};

export type ModelAttendeeConnection = {
  __typename: "ModelAttendeeConnection",
  items:  Array<Attendee | null >,
  nextToken?: string | null,
};

export type ModelPlusOneFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  food?: ModelFoodInput | null,
  and?: Array< ModelPlusOneFilterInput | null > | null,
  or?: Array< ModelPlusOneFilterInput | null > | null,
  not?: ModelPlusOneFilterInput | null,
};

export type ModelPlusOneConnection = {
  __typename: "ModelPlusOneConnection",
  items:  Array<PlusOne | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionAttendeeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  isAttending?: ModelSubscriptionBooleanInput | null,
  food?: ModelSubscriptionStringInput | null,
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
  name?: ModelSubscriptionStringInput | null,
  food?: ModelSubscriptionStringInput | null,
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
    name: string,
    isAttending: boolean,
    food?: Food | null,
    plusOne?:  {
      __typename: "PlusOne",
      id: string,
      name: string,
      food: Food,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    attendeePlusOneId?: string | null,
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
    name: string,
    isAttending: boolean,
    food?: Food | null,
    plusOne?:  {
      __typename: "PlusOne",
      id: string,
      name: string,
      food: Food,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    attendeePlusOneId?: string | null,
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
    name: string,
    isAttending: boolean,
    food?: Food | null,
    plusOne?:  {
      __typename: "PlusOne",
      id: string,
      name: string,
      food: Food,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    attendeePlusOneId?: string | null,
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
    name: string,
    food: Food,
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
    name: string,
    food: Food,
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
    name: string,
    food: Food,
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
    name: string,
    isAttending: boolean,
    food?: Food | null,
    plusOne?:  {
      __typename: "PlusOne",
      id: string,
      name: string,
      food: Food,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    attendeePlusOneId?: string | null,
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
      name: string,
      isAttending: boolean,
      food?: Food | null,
      createdAt: string,
      updatedAt: string,
      attendeePlusOneId?: string | null,
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
    name: string,
    food: Food,
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
      name: string,
      food: Food,
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
    name: string,
    isAttending: boolean,
    food?: Food | null,
    plusOne?:  {
      __typename: "PlusOne",
      id: string,
      name: string,
      food: Food,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    attendeePlusOneId?: string | null,
  } | null,
};

export type OnUpdateAttendeeSubscriptionVariables = {
  filter?: ModelSubscriptionAttendeeFilterInput | null,
};

export type OnUpdateAttendeeSubscription = {
  onUpdateAttendee?:  {
    __typename: "Attendee",
    id: string,
    name: string,
    isAttending: boolean,
    food?: Food | null,
    plusOne?:  {
      __typename: "PlusOne",
      id: string,
      name: string,
      food: Food,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    attendeePlusOneId?: string | null,
  } | null,
};

export type OnDeleteAttendeeSubscriptionVariables = {
  filter?: ModelSubscriptionAttendeeFilterInput | null,
};

export type OnDeleteAttendeeSubscription = {
  onDeleteAttendee?:  {
    __typename: "Attendee",
    id: string,
    name: string,
    isAttending: boolean,
    food?: Food | null,
    plusOne?:  {
      __typename: "PlusOne",
      id: string,
      name: string,
      food: Food,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    attendeePlusOneId?: string | null,
  } | null,
};

export type OnCreatePlusOneSubscriptionVariables = {
  filter?: ModelSubscriptionPlusOneFilterInput | null,
};

export type OnCreatePlusOneSubscription = {
  onCreatePlusOne?:  {
    __typename: "PlusOne",
    id: string,
    name: string,
    food: Food,
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
    name: string,
    food: Food,
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
    name: string,
    food: Food,
    createdAt: string,
    updatedAt: string,
  } | null,
};
