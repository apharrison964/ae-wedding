import { Attendee } from "../../src/API";

export interface AttendeeRelated {
    attendee: Attendee | undefined;
    relatedAttendees?: Attendee[];
    searchDone: boolean;
}

export interface AttendeeRelatedProps {
    attendee: Attendee;
    relatedAttendees?: Attendee[];
}