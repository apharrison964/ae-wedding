'use client'

import { Amplify } from 'aws-amplify';
import amplifyconfig from '../../src/amplifyconfiguration.json';

Amplify.configure(amplifyconfig);

import React, { useEffect, useState } from 'react';
import commonStyles from '../../styles/common.module.scss';
import { Button, Flex, Grid, Input, Label, Radio, RadioGroupField, View } from '@aws-amplify/ui-react';
import { AttendeeRelated, AttendeeRelatedProps } from '../model/attendee-related';
import { Attendee, Food } from '../../src/API';



const RSVPList = ({ attendee, relatedAttendees, updateAttendeeIsAttending, updateAttendeeFood, updateRelatedAttendeeIsAttending, updateRelatedFood, updateData }: AttendeeRelatedProps) => {
    console.log('what is happening', attendee, relatedAttendees);
    const [childAttendee, setChildAttendee] = useState<Attendee>();
    const [childRelated, setChildRelated] = useState<Attendee[]>();

    const updateAttending = (isAttending: string, type: string, id?: string) => {
        if (type === 'attendee') {
            updateAttendeeIsAttending(isAttending === 'true');
        } else {
            updateRelatedAttendeeIsAttending(isAttending === 'true', id!);
        }
    }

    const updateFood = (food: string, type: string, id?: string) => {
        if (type === 'attendee') {
            updateAttendeeFood(Food[food]);
        } else {
            updateRelatedFood(Food[food], id!);
        }
    }

    useEffect(() => {
        console.log('HELLO??', attendee, relatedAttendees);
        setChildAttendee(attendee);
        setChildRelated(relatedAttendees);
    }, [attendee, relatedAttendees]);

    return (
        <Grid className={commonStyles.headerDescription} templateColumns={'1fr 1fr 1fr 1fr 1fr 1fr'}>
            <View columnStart={{ xl: '2', large: '2', small: '1', medium: '2', base: '1' }} columnEnd={{ xl: '6', large: '6', small: '-1', medium: '6', base: '-1' }} row={2}>
                <View className={commonStyles.headerDescriptionSub}>Please accept or decline for each person, and if accepting the invitation, choose a meal for each member of your party.</View>

                <Flex direction="column" gap="small" paddingTop="2rem" alignItems="flex-start">
                    <View className={commonStyles.headerDescriptionSubheader}>{attendee.firstName} {attendee.lastName}</View>
                    <Flex direction="column" gap="small" paddingTop="2rem" alignItems="flex-start">
                        <Label htmlFor="attendee-rsvp">RSVP Status</Label>
                        <RadioGroupField id="attendee-rsvp" legendHidden={true} direction="row" legend="RSVP Status" name="attendee-rsvp" onChange={(e) => { updateAttending(e.target.value, 'attendee'); console.log('what is the attendee value', e.target.value) } }>
                            <Radio value="true" checked={childAttendee?.isAttending === true}>Accept</Radio>
                            <Radio value="false" checked={childAttendee?.isAttending === false}>Decline</Radio>
                        </RadioGroupField>
                    </Flex>
                    <Flex direction="column" gap="small" paddingTop="2rem" alignItems="flex-start">
                        <Label htmlFor="attendee-meal">Meal Selection</Label>
                        <RadioGroupField id="attendee-meal" legendHidden={true} direction="row" legend="Meal Selection" name="attendee-meal" onChange={(e) => updateFood(e.target.value, 'attendee')}>
                            <Radio value={Food.GRILLED_CHICKEN} checked={attendee.food === Food.GRILLED_CHICKEN}>Grilled Chicken</Radio>
                            <Radio value={Food.SHRIMP} checked={attendee.food === Food.SHRIMP}>Shrimp</Radio>
                            <Radio value={Food.DIETARY_RESTRICTION} checked={attendee.food === Food.DIETARY_RESTRICTION}>Dietary Restriction</Radio>
                        </RadioGroupField>
                    </Flex>
                </Flex>
                {childRelated?.map(relatedAttendee => (
                    <Flex key={relatedAttendee.id} direction="column" gap="small" paddingTop="2rem" alignItems="flex-start">
                        <View className={commonStyles.headerDescriptionSubheader}>{relatedAttendee.firstName} {relatedAttendee.lastName}</View>
                        <Flex style={{ paddingBlockStart: 0 }} direction="column" gap="small" paddingTop="2rem" alignItems="flex-start">
                            <Label htmlFor={`related-${relatedAttendee.id}-rsvp`}>RSVP Status</Label>
                            <RadioGroupField id={`related-${relatedAttendee.id}-rsvp`} legendHidden={true} direction="row" legend="RSVP Status" name={`related-${relatedAttendee.id}-rsvp`} onChange={(e) => { updateAttending(e.target.value, 'related', relatedAttendee.id); console.log('what is the attendee value', e.target.value) } }>
                                <Radio value="true" checked={relatedAttendee.isAttending === true}>Accept</Radio>
                                <Radio value="false" checked={relatedAttendee.isAttending === false}>Decline</Radio>
                            </RadioGroupField>
                        </Flex>
                        <Flex direction="column" gap="small" paddingTop="2rem" alignItems="flex-start">
                            <Label htmlFor={`related-${relatedAttendee.id}-meal`}>Meal Selection</Label>
                            <RadioGroupField id={`related-${relatedAttendee.id}-meal`} legendHidden={true} direction="row" legend="Meal Selection" name={`related-${relatedAttendee.id}-meal`} onChange={(e) => updateFood(e.target.value, 'related', relatedAttendee.id)}>
                                <Radio value={Food.GRILLED_CHICKEN} checked={relatedAttendee.food === Food.GRILLED_CHICKEN}>Grilled Chicken</Radio>
                                <Radio value={Food.SHRIMP} checked={relatedAttendee.food === Food.SHRIMP}>Shrimp</Radio>
                                <Radio value={Food.DIETARY_RESTRICTION} checked={relatedAttendee.food === Food.DIETARY_RESTRICTION}>Dietery Restriction</Radio>
                            </RadioGroupField>
                        </Flex>
                    </Flex>

                ))}
                <Flex paddingTop="1rem" justifyContent="center">
                    <Button
                        variation="primary"
                        loadingText="Loading, please wait"
                        onClick={() => console.log('back')}>
                        Back
                    </Button>
                    <Button
                        variation="primary"
                        loadingText="Loading, please wait"
                        onClick={() => updateData() }>
                        Finish
                    </Button>
                </Flex>
            </View>
        </Grid>
    );
}

export default RSVPList;
