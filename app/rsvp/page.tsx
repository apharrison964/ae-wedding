'use client'

import { Amplify } from 'aws-amplify';
import amplifyconfig from '../../src/amplifyconfiguration.json';

Amplify.configure(amplifyconfig);

import React, { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listAttendees } from '../../src/graphql/queries';
import commonStyles from '../../styles/common.module.scss';
import { Button, Flex, Grid, Input, Label, View } from '@aws-amplify/ui-react';
import { Attendee, Food } from '../../src/API';
import RSVPSearch from './search';
import { AttendeeRelated } from '../model/attendee-related';
import RSVPList from './list';
import RSVPConfirmation from './confirmation';

   
const client = generateClient();



const RSVP = () => {
    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [attendeesList, setAttendeesList] = useState<Array<Attendee>>();
    const [attendee, setAttendee] = useState<Attendee>();
    const [relatedAttendees, setRelatedAttendees] = useState<Attendee[]>();
    const [searchDone, setSearchDone] = useState<boolean>(false);
    const testing = false;

    const handleInputChange = (event) => {
        if (event.target.name === 'first_name') {
            console.log('first name', event.target.value);
            setFirstNameValue(event.target.value);
        } else if (event.target.name === 'last_name') {
            console.log('last name', event.target.value)
            setLastNameValue(event.target.value);
        }
      };

    const updateAttendeeIsAttending = (isAttending: boolean) => {
        if (attendee) {
            attendee.isAttending = isAttending;
            setAttendee({...attendee});
        }
    }

    const updateAttendeeFood = (food: Food) => {
        if (attendee) {
            attendee.food = food;
            setAttendee({...attendee});
        }
    }

    const updateRelatedAttendeeIsAttending = (isAttending: boolean, id: string) => {
        if (relatedAttendees) {
            relatedAttendees.forEach(ra => {
                if (ra.id === id) {
                    ra.isAttending = isAttending;
                }
            });
            setRelatedAttendees([...relatedAttendees])
        }
    }

    const updateRelatedFood = (food: Food, id: string) => {
        if (relatedAttendees) {
            relatedAttendees.forEach(ra => {
                if (ra.id === id) {
                    ra.food = food;
                }
            });
            setRelatedAttendees([...relatedAttendees])
        }
    }

    const updatedRelatedNotes = (note: string, id: string) => {
        if (relatedAttendees) {
            relatedAttendees.forEach(ra => {
                if (ra.id === id) {
                    ra.notes = note;
                }
            });
            setRelatedAttendees([...relatedAttendees])
        }
    }

    const updateAttendeeNotes = (note: string) => {
        if (attendee) {
            attendee.notes = note;
            setAttendee({...attendee});
        }
    }

    const updateData = () => {
        console.log('Submit', attendee, relatedAttendees);
    }

    const findAttendee = () => {
        const attendee = attendeesList?.find(attendee => attendee.firstName.toLowerCase() === firstNameValue.toLowerCase() && attendee.lastName.toLowerCase() === lastNameValue.toLowerCase());
        setAttendee(attendee);

        if (attendee) {
            const related = findRelatedAttendees(attendee?.relatedAttendee as string[]);
            setRelatedAttendees(related);

        } 
        
        console.log('attendee and related', attendee, relatedAttendees);
        setSearchDone(attendee ? true : false);
    } 
    
    const findRelatedAttendees = (relatedList: string[]) => {
        let list: Attendee[] = [];
        relatedList.forEach(id => {
            list.push(attendeesList!.find(attendee => attendee.id === id) as Attendee)
        });

        return list;
    }

    useEffect(() => {
        async function getAttendees() {
            const response = await client.graphql({ query: listAttendees });
            console.log('RESULT', response.data.listAttendees);
            setAttendeesList(response.data.listAttendees.items)
        };
    
        if (!attendeesList) {
            getAttendees();
        }
        
      }, []);

    return (
        <Grid className={commonStyles.headerDescription} templateColumns={'1fr 1fr 1fr 1fr 1fr 1fr'}>
            <View columnStart={{ xl: '2', large: '2', small: '1', medium: '2', base: '1'}} columnEnd={{ xl: '6', large: '6', small: '-1', medium: '6', base: '-1'}} row={2}>
                { !searchDone ? <RSVPSearch firstNameValue={firstNameValue} lastNameValue={lastNameValue} findAttendee={findAttendee} handleInputChange={handleInputChange}></RSVPSearch> : null }
                { searchDone ? 
                <RSVPList 
                    relatedAttendees={relatedAttendees} 
                    attendee={attendee!} 
                    updateAttendeeIsAttending={updateAttendeeIsAttending} 
                    updateAttendeeFood={updateAttendeeFood} 
                    updateRelatedAttendeeIsAttending={updateRelatedAttendeeIsAttending} 
                    updateRelatedFood={updateRelatedFood} 
                    updateData={updateData}
                    updateRelatedNotes={updatedRelatedNotes}
                    updateAttendeeNotes={updateAttendeeNotes}>
                </RSVPList> : null }
                {/* { testing ? <RSVPConfirmation attendeeRelated={attendeeRelated}></RSVPConfirmation> : null } */}
            </View>
        </Grid>
    );
}

export default RSVP;
