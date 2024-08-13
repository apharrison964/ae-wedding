'use client'

import { Amplify } from 'aws-amplify';
import amplifyconfig from '../../src/amplifyconfiguration.json';

Amplify.configure(amplifyconfig);

import React, { useEffect, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listAttendees } from '../../src/graphql/queries';
import { createAttendee, updateAttendee } from '../../src/graphql/mutations';
import commonStyles from '../../styles/common.module.scss';
import { Grid, Loader, View } from '@aws-amplify/ui-react';
import { Attendee, CreateAttendeeInput, Food, UpdateAttendeeInput } from '../../src/API';
import RSVPSearch from './search';
import RSVPList from './list';
import RSVPConfirmation from './confirmation';

   
const client = generateClient();



const RSVP = () => {
    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');
    const [attendeesList, setAttendeesList] = useState<Array<Attendee>>();
    const [attendee, setAttendee] = useState<Attendee>();
    const [relatedAttendees, setRelatedAttendees] = useState<Attendee[]>();
    const [addPlusOne, setAddPlusOne] = useState<boolean>();
    const [plusOne, setPlusOne] = useState<CreateAttendeeInput>();
    const [searchDone, setSearchDone] = useState<boolean>(false);
    const [updateDone, setUpdateDone] = useState<boolean>(false);
    const [updateStarted, setUpdateStarted] = useState<boolean>(false);
    const [userNotFound, setUserNotFound] = useState<boolean>(false);


    const handleInputChange = (event) => {
        if (event.target.name === 'first_name') {
            setFirstNameValue(event.target.value);
        } else if (event.target.name === 'last_name') {
            setLastNameValue(event.target.value);
        }
      };

    const updatePlusOne = (addPlusOne) => {
        setAddPlusOne(addPlusOne);
        if (addPlusOne === true) {
            setPlusOne({
                firstName: '',
                lastName: ''
            })
        }
    }  
    const updatePlusOneFirstName = (plusOneFirstName: string) => {
        if (plusOne) {
            plusOne.firstName = plusOneFirstName;
            setPlusOne({...plusOne});
        }
    }

    const updatePlusOneLastName = (plusOneLastName: string) => {
        if (plusOne) {
            plusOne.lastName = plusOneLastName;
            setPlusOne({...plusOne});
        }
    }


    const updatePlusOneFood = (food: Food) => {
        if (plusOne) {
            plusOne.food= food;
            setPlusOne({...plusOne});
        }
    }

    const updatePlusOneNotes = (notes: string) => {
        if (plusOne) {
            plusOne.notes= notes;
            setPlusOne({...plusOne});
        }
    }

    const updateAttendeeIsAttending = (isAttending: boolean) => {
        if (attendee) {
            attendee.isAttending = isAttending;
            attendee.food = null;
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
                    ra.food = null;
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

    const updateData = async () => {
        setUpdateStarted(true);
        if (attendee && plusOne && addPlusOne) {
            const updatePlusOne = {
                ...plusOne,
                isAttending: true,
                relatedAttendee: [attendee.id]
            }
            
            const newAttendee = await client.graphql( { query: createAttendee, variables: { input: updatePlusOne }});
            if (attendeesList) {
                attendeesList?.push(newAttendee.data.createAttendee);
                setAttendeesList([...attendeesList]);
            }
            
            // if I have free time, if they come back to edit, they could change the name of the plus one. doing this, they can't
            // the way to do it would be knowing they have a plus one and then getting the user and making them a plus one
            setPlusOne(undefined);
            if (attendee) {
                attendee.relatedAttendee?.push(newAttendee.data.createAttendee.id);
                attendee.addedPlusOne = true;
                setAttendee({...attendee, addedPlusOne: true});
                const related = findRelatedAttendees(attendee?.relatedAttendee as string[]);
                setRelatedAttendees([...related]);

            }
        }

        if (relatedAttendees) {
            for (const ra of relatedAttendees) {
                const input: UpdateAttendeeInput = {
                    id: ra.id,
                    firstName: ra.firstName,
                    isAttending: ra.isAttending,
                    food: ra.food,
                    lastName: ra.lastName,
                    notes: ra.notes,
                    relatedAttendee: ra.relatedAttendee
                }
                const update = await client.graphql({ query: updateAttendee, variables: { input }});
            }
        }
        
        if (attendee) {
            const input: UpdateAttendeeInput = {
                id: attendee.id,
                firstName: attendee.firstName,
                isAttending: attendee.isAttending,
                food: attendee.food,
                lastName: attendee.lastName,
                notes: attendee.notes,
                relatedAttendee: attendee.relatedAttendee,
                hasPlusOne: attendee.hasPlusOne,
                addedPlusOne: attendee.addedPlusOne
            }
            const update = await client.graphql({ query: updateAttendee, variables: { input }});
            
        }
        setTimeout(() => {
            setUpdateDone(true);
            setUpdateStarted(false);
        }, 2000);

        // todo tests if this works
    }

    const findAttendee = () => {
        const attendee = attendeesList?.find(attendee => attendee.firstName.trim().toLowerCase() === firstNameValue.trim().toLowerCase() && attendee.lastName.trim().toLowerCase() === lastNameValue.trim().toLowerCase());
        setAttendee(attendee);

        if (attendee) {
            setUserNotFound(false);
            const related = findRelatedAttendees(attendee?.relatedAttendee as string[]);
            setRelatedAttendees(related);
            if (attendee.food) {
                setUpdateDone(true);
            }
        } else {
            setUserNotFound(true);
        }
       
        setSearchDone(attendee ? true : false);
    } 
    
    const findRelatedAttendees = (relatedList: string[]) => {
        let list: Attendee[] = [];
        relatedList.forEach(id => {
            const value = attendeesList!.find(attendee => attendee.id.trim() === id.trim()) as Attendee;
            list.push(value)
        });
        return list;
    }


    useEffect(() => {
        async function getAttendees() {
            const response = await client.graphql({ query: listAttendees });
            setAttendeesList(response.data.listAttendees.items)
        };
    
        if (!attendeesList) {
            getAttendees();
        }
        
      }, []);

    return (
        <Grid className={commonStyles.headerDescription} templateColumns={'1fr 1fr 1fr 1fr 1fr 1fr'}>
            <View columnStart={{ xl: '2', large: '2', small: '1', medium: '2', base: '1'}} columnEnd={{ xl: '6', large: '6', small: '-1', medium: '6', base: '-1'}} row={2}>
                { !searchDone ? <RSVPSearch firstNameValue={firstNameValue} lastNameValue={lastNameValue} findAttendee={findAttendee} handleInputChange={handleInputChange} userNotFound={userNotFound}></RSVPSearch> : null }
                { searchDone && !updateDone && !updateStarted ? 
                <RSVPList 
                    relatedAttendees={relatedAttendees} 
                    attendee={attendee!} 
                    addPlusOne={addPlusOne}
                    plusOne={plusOne}
                    updateAttendeeIsAttending={updateAttendeeIsAttending} 
                    updateAttendeeFood={updateAttendeeFood} 
                    updateRelatedAttendeeIsAttending={updateRelatedAttendeeIsAttending} 
                    updateRelatedFood={updateRelatedFood} 
                    updateData={updateData}
                    updateRelatedNotes={updatedRelatedNotes}
                    updateAttendeeNotes={updateAttendeeNotes}
                    updatePlusOneFirstName={updatePlusOneFirstName}
                    updatePlusOneLastName={updatePlusOneLastName}
                    updatePlusOneFood={updatePlusOneFood}
                    updatePlusOneNotes={updatePlusOneNotes}
                    setAddPlusOne={updatePlusOne}
                    updateSearchDone={setSearchDone}>
                </RSVPList> : null }
                { searchDone && updateDone && !updateStarted ? <RSVPConfirmation attendee={attendee} relatedAttendees={relatedAttendees} plusOne={plusOne} addPlusOne={addPlusOne} setUpdateDone={setUpdateDone}></RSVPConfirmation> : null }
                { updateStarted ?  <Loader filledColor='rgb(171, 193, 171)' variation="linear" /> : null}
            </View>
        </Grid>
    );
}

export default RSVP;
