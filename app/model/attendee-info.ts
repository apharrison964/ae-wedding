import { Attendee, CreateAttendeeInput, Food, UpdateAttendeeInput } from "../../src/API";

export interface AttendeeRelatedProps {
    attendee: Attendee;
    relatedAttendees?: Attendee[];
    addPlusOne?: boolean;
    plusOne?: CreateAttendeeInput | undefined;
    updateAttendeeIsAttending(isAttending: boolean);
    updateAttendeeFood(food: Food);
    updateRelatedAttendeeIsAttending(isAttending: boolean, id: string);
    updateRelatedFood(food: Food, id: string);
    updateRelatedNotes(note: string, id: string);
    updateAttendeeNotes(note: string);
    updatePlusOneFirstName(plusOneFirstName: string);
    updatePlusOneLastName(plusOneLastName: string);
    updatePlusOneFood(food: Food);
    updatePlusOneNotes(notes: string);
    setAddPlusOne(addPlusOne: boolean);
    updateData();
    updateSearchDone(searchDone: boolean);
}