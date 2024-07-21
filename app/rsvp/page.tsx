'use client'

import { Amplify } from 'aws-amplify';
import amplifyconfig from '../../src/amplifyconfiguration.json';

Amplify.configure(amplifyconfig);

import React, { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listAttendees } from '../../src/graphql/queries';
import commonStyles from '../../styles/common.module.scss';
import { Button, Flex, Grid, Input, Label, View } from '@aws-amplify/ui-react';
import { Attendee } from '../../src/API';
import RSVPSearch from './search';
import { AttendeeRelated } from '../model/attendee-related';
import RSVPList from './list';
import RSVPConfirmation from './confirmation';

   
const client = generateClient();



const RSVP = () => {
    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [attendeesList, setAttendeesList] = useState<Array<Attendee>>();
    const [attendeeRelated, setAttendeeRelated] = useState<AttendeeRelated>();
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

    const findAttendee = () => {
        const attendee = attendeesList?.find(attendee => attendee.firstName.toLowerCase() === firstNameValue.toLowerCase() && attendee.lastName.toLowerCase() === lastNameValue.toLowerCase());
        let attendeeRelated: AttendeeRelated;
        if (attendee) {
            const related = findRelatedAttendees(attendee?.relatedAttendee as string[]);
            console.log('ATTENDEE', attendee);
            console.log('RELEATED ATTENDEES', findRelatedAttendees(attendee?.relatedAttendee as string[]));
            attendeeRelated = {
                attendee: attendee as Attendee,
                relatedAttendees: related,
                searchDone: true
            }
           
        } else {
            attendeeRelated = {
                attendee: attendee,
                searchDone: false
            }
        }
        console.log('attendeeRelated', attendeeRelated);
        setAttendeeRelated(attendeeRelated);
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
        //   setPhotoList(response.filter(item => !item.contentType?.includes('application/x-directory')));
        };
    
        if (!attendeesList) {
            getAttendees();
        }
        
      }, []);
    // const result = await client.graphql({ query: listAttendees });
    // console.log('RESULT', result.data.listAttendees);
    return (
        <Grid className={commonStyles.headerDescription} templateColumns={'1fr 1fr 1fr 1fr 1fr 1fr'}>
            <View columnStart={{ xl: '2', large: '2', small: '1', medium: '2', base: '1'}} columnEnd={{ xl: '6', large: '6', small: '-1', medium: '6', base: '-1'}} row={2}>
                { !attendeeRelated?.searchDone ? <RSVPSearch firstNameValue={firstNameValue} lastNameValue={lastNameValue} findAttendee={findAttendee} handleInputChange={handleInputChange}></RSVPSearch> : null }
                { attendeeRelated?.searchDone ? <RSVPList relatedAttendees={attendeeRelated.relatedAttendees} attendee={attendeeRelated.attendee!}></RSVPList> : null }
                { testing ? <RSVPConfirmation attendeeRelated={attendeeRelated}></RSVPConfirmation> : null }
            </View>
        </Grid>
    );
}

export default RSVP;
