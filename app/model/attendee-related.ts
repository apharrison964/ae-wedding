import { Attendee, Food } from "../../src/API";

export interface AttendeeRelated {
    attendee: Attendee | undefined;
    relatedAttendees?: Attendee[];
    searchDone: boolean;
}

export interface AttendeeRelatedProps {
    attendee: Attendee;
    relatedAttendees?: Attendee[];
    updateAttendeeIsAttending(isAttending: boolean);
    updateAttendeeFood(food: Food);
    updateRelatedAttendeeIsAttending(isAttending: boolean, id: string);
    updateRelatedFood(food: Food, id: string);
    updateRelatedNotes(note: string, id: string);
    updateAttendeeNotes(note: string);
    updateData();
}