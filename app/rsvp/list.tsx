'use client'

import { Amplify } from 'aws-amplify';
import amplifyconfig from '../../src/amplifyconfiguration.json';

Amplify.configure(amplifyconfig);

import React, { useEffect, useState } from 'react';
import commonStyles from '../../styles/common.module.scss';
import { Button, Flex, Grid, Input, Label, Radio, RadioGroupField, TextAreaField, View } from '@aws-amplify/ui-react';
import { AttendeeRelatedProps } from '../model/attendee-info';
import { Attendee, CreateAttendeeInput, Food } from '../../src/API';



const RSVPList = ({ 
    attendee, 
    relatedAttendees, 
    addPlusOne,
    plusOne,
    updateAttendeeIsAttending, 
    updateAttendeeFood, 
    updateRelatedAttendeeIsAttending, 
    updateRelatedFood, 
    updateData, 
    updateRelatedNotes, 
    updateAttendeeNotes,
    updatePlusOneFirstName,
    updatePlusOneLastName,
    updatePlusOneFood,
    updatePlusOneNotes,
    setAddPlusOne,
    updateSearchDone
    }: AttendeeRelatedProps) => {

    const [childAttendee, setChildAttendee] = useState<Attendee>();
    const [childRelated, setChildRelated] = useState<Attendee[]>();
    const [childPlusOne, setChildPlusOne] = useState<CreateAttendeeInput>();
    const [childAddPlusOne, setChildAddPlusOne] = useState<boolean>();


    

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
        setChildAttendee(attendee);
        setChildRelated(relatedAttendees);
        setChildAddPlusOne(addPlusOne);
        setChildPlusOne(plusOne);
    }, [attendee, relatedAttendees, addPlusOne, plusOne]);

    return (
        <Grid className={commonStyles.headerDescription} templateColumns={'1fr 1fr 1fr 1fr 1fr 1fr'}>
            <View columnStart={{ xl: '2', large: '2', small: '1', medium: '2', base: '1' }} columnEnd={{ xl: '6', large: '6', small: '-1', medium: '6', base: '-1' }} row={2}>
                <View className={commonStyles.headerDescriptionSub}>Please accept or decline for each person, and if accepting the invitation, choose a meal for each member of your party.</View>
                <View className={commonStyles.headerDescriptionSub}>The main course will be a butternut squash ravioli, with your choice of grilled chicken or brown butter shrimp. If you have any dietary restictions, you will be able to note them.</View>

                <Flex direction="column" gap="small" paddingTop="2rem" alignItems="flex-start" width="100%">
                        <View className={commonStyles.headerDescriptionSubheader}>{attendee.firstName} {attendee.lastName}</View>
                        <Label htmlFor="attendee-rsvp">RSVP Status</Label>
                        <RadioGroupField id="attendee-rsvp" legendHidden={true} direction="row" legend="RSVP Status" name="attendee-rsvp" onChange={(e) => updateAttending(e.target.value, 'attendee') }>
                            <Radio value="true" checked={childAttendee?.isAttending === true}>Accept</Radio>
                            <Radio value="false" checked={childAttendee?.isAttending === false}>Decline</Radio>
                        </RadioGroupField>
                   { childAttendee?.isAttending === true ?  
                        <Flex width="100%" direction="column" gap="small" paddingTop="2rem" alignItems="flex-start">
                            <Label htmlFor="attendee-meal">Meal Selection</Label>
                            <RadioGroupField id="attendee-meal" legendHidden={true} direction="row" legend="Meal Selection" name="attendee-meal" onChange={(e) => updateFood(e.target.value, 'attendee')}>
                                <Radio value={Food.GRILLED_CHICKEN} checked={childAttendee.food === Food.GRILLED_CHICKEN}>Grilled Chicken</Radio>
                                <Radio value={Food.SHRIMP} checked={childAttendee.food === Food.SHRIMP}>Shrimp</Radio>
                                <Radio value={Food.OTHER} checked={childAttendee.food === Food.OTHER}>Vegetarian</Radio>
                            </RadioGroupField>
                            <TextAreaField width="100%" textAlign="left"
                                descriptiveText="Any additional details on the food selections"
                                labelHidden={true}
                                label="food selection details"
                                name="dietery_info"
                                value={childAttendee.notes ? childAttendee.notes : ''}
                                onChange={(e) => updateAttendeeNotes(e.target.value)} // update this to have the parent handle it.
                                placeholder="Please give any additonal information needed for dietary restrictions."
                                rows={3}/> 
                        </Flex> : null}
                </Flex>
                {childAttendee?.isAttending === true && childAttendee?.hasPlusOne && childAttendee?.relatedAttendee?.length === 0 ? 
                <Flex direction="column" gap="small" paddingTop="2rem" alignItems="flex-start" width='100%'>
                    <Label htmlFor="attendee-rsvp">Is an additional person attending with you?</Label>
                    <RadioGroupField id="attendee-plusone" legendHidden={true} direction="row" legend="Plus One Status" name="attendee-plusone" onChange={(e) => setAddPlusOne(e.target.value === 'true') }>
                        <Radio value="true">Yes</Radio>
                        <Radio value="false">No</Radio>
                    </RadioGroupField>
                    { childAddPlusOne === true ? 
                    
                    <Flex width='100%' style={{ paddingBlockStart: 0 }} direction="column" gap="small" paddingTop="2rem" alignItems="flex-start">
                        <Label htmlFor='attendee-plus-one-first'>Plus One First Name</Label>
                        <Input id='attendee-plus-one-first' value={childPlusOne!.firstName} onChange={(e) => updatePlusOneFirstName(e.target.value)}></Input>
                        <Label htmlFor='attendee-plus-one-first'>Plus One Last Name</Label>
                        <Input id='attendee-plus-one-first' value={childPlusOne!.lastName} onChange={(e) => updatePlusOneLastName(e.target.value)}></Input>
                        <Label htmlFor="attendee-plus-one-meal">Meal Selection</Label>
                            <RadioGroupField id="attendee-plus-one-meal" legendHidden={true} direction="row" legend="Meal Selection" name="attendee-plus-one-meal" onChange={(e) => updatePlusOneFood(Food[e.target.value])}>
                                <Radio value={Food.GRILLED_CHICKEN}>Grilled Chicken</Radio>
                                <Radio value={Food.SHRIMP}>Shrimp</Radio>
                                <Radio value={Food.OTHER}>Vegetarian</Radio>
                            </RadioGroupField>
                            <TextAreaField width="100%" textAlign="left"
                                descriptiveText="Any additional details on the food selections"
                                labelHidden={true}
                                label="food selection details"
                                name="dietery_info"
                                value={childPlusOne!.notes ? childPlusOne!.notes : ''}
                                onChange={(e) => updatePlusOneNotes(e.target.value)}
                                placeholder="Please give any additonal information needed for dietary restrictions."
                                rows={3}/> 
                          
                    </Flex>
                    
                    : null}
                </Flex>
                : null}
                {childRelated?.map(relatedAttendee => (
                    <Flex key={relatedAttendee.id} direction="column" gap="small" paddingTop="2rem" alignItems="flex-start" width="100%">
                        <View className={commonStyles.headerDescriptionSubheader}>{relatedAttendee.firstName} {relatedAttendee.lastName}</View>
                            <Label htmlFor={`related-${relatedAttendee.id}-rsvp`}>RSVP Status</Label>
                            <RadioGroupField id={`related-${relatedAttendee.id}-rsvp`} legendHidden={true} direction="row" legend="RSVP Status" name={`related-${relatedAttendee.id}-rsvp`} onChange={(e) => updateAttending(e.target.value, 'related', relatedAttendee.id) }>
                                <Radio value="true" checked={relatedAttendee.isAttending === true}>Accept</Radio>
                                <Radio value="false" checked={relatedAttendee.isAttending === false}>Decline</Radio>
                            </RadioGroupField>
                        { relatedAttendee.isAttending ? <Flex direction="column" gap="small" paddingTop="2rem" alignItems="flex-start" width='100%'>
                            <Label htmlFor={`related-${relatedAttendee.id}-meal`}>Meal Selection</Label>
                            <RadioGroupField id={`related-${relatedAttendee.id}-meal`} legendHidden={true} direction="row" legend="Meal Selection" name={`related-${relatedAttendee.id}-meal`} onChange={(e) => updateFood(e.target.value, 'related', relatedAttendee.id)}>
                                <Radio value={Food.GRILLED_CHICKEN} checked={relatedAttendee.food === Food.GRILLED_CHICKEN}>Grilled Chicken</Radio>
                                <Radio value={Food.SHRIMP} checked={relatedAttendee.food === Food.SHRIMP}>Shrimp</Radio>
                                <Radio value={Food.OTHER} checked={relatedAttendee.food === Food.OTHER}>Vegetarian</Radio>
                            </RadioGroupField>
                           <TextAreaField width="100%" textAlign="left"
                                descriptiveText="Any additional details on the food selections"
                                labelHidden={true}
                                label="food selection details"
                                name={`dietery_info_${relatedAttendee.id}`}
                                value={relatedAttendee.notes ? relatedAttendee.notes : ''}
                                onChange={(e) => updateRelatedNotes(e.target.value, relatedAttendee.id)} // update this to have the parent handle it.
                                placeholder="Please give any additonal information needed for dietary restrictions."
                                rows={3}/> 
                        </Flex> : null}
                    </Flex>

                ))}
                <Flex paddingTop="1rem" justifyContent="center">
                    <Button
                        variation="primary"
                        loadingText="Loading, please wait"
                        onClick={() => updateSearchDone(false)}>
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
