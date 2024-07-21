'use client'

import { Amplify } from 'aws-amplify';
import amplifyconfig from '../../src/amplifyconfiguration.json';

Amplify.configure(amplifyconfig);

import React, { useEffect, useState } from 'react';
import commonStyles from '../../styles/common.module.scss';
import { Button, Flex, Grid, Input, Label, Radio, RadioGroupField, View } from '@aws-amplify/ui-react';
import { AttendeeRelated, AttendeeRelatedProps } from '../model/attendee-related';
import { Food } from '../../src/API';



const RSVPList = ({ attendee, relatedAttendees }: AttendeeRelatedProps) => {
    console.log('what is happening', attendee, relatedAttendees);
    return (
        <Grid className={commonStyles.headerDescription} templateColumns={'1fr 1fr 1fr 1fr 1fr 1fr'}>
            <View columnStart={{ xl: '2', large: '2', small: '1', medium: '2', base: '1' }} columnEnd={{ xl: '6', large: '6', small: '-1', medium: '6', base: '-1' }} row={2}>
                <View className={commonStyles.headerDescriptionSub}>Please accept or decline for each person, and if accepting the invitation, choose a meal for each member of your party.</View>

                <Flex direction="column" gap="small" paddingTop="2rem" alignItems="flex-start">
                    <View className={commonStyles.headerDescriptionSubheader}>{attendee.firstName} {attendee.lastName}</View>
                    <Flex direction="column" gap="small" paddingTop="2rem" alignItems="flex-start">
                        <Label htmlFor="attendee-rsvp">RSVP Status</Label>
                        <RadioGroupField id="attendee-rsvp" legendHidden={true} direction="row" legend="RSVP Status" name="atendee-attending" onChange={(e) => attendee.isAttending = Boolean(e.target.value)}>
                            <Radio value={String(attendee.isAttending)} checked={attendee.isAttending === true}>Accept</Radio>
                            <Radio value={String(attendee!.isAttending)} checked={attendee.isAttending === false}>Decline</Radio>
                        </RadioGroupField>
                    </Flex>
                    <Flex direction="column" gap="small" paddingTop="2rem" alignItems="flex-start">
                        <Label htmlFor="attendee-meal">Meal Selection</Label>
                        <RadioGroupField id="attendee-meal" legendHidden={true} direction="row" legend="Meal Selection" name="attendee-meal" onChange={(e) => { attendee.food = Food[e.target.value]; }}>
                            <Radio value={Food.GRILLED_CHICKEN} checked={attendee.food === Food.GRILLED_CHICKEN}>Grilled Chicken</Radio>
                            <Radio value={Food.SHRIMP} checked={attendee.food === Food.SHRIMP}>Shrimp</Radio>
                            <Radio value={Food.DIETARY_RESTRICTION} checked={attendee.food === Food.DIETARY_RESTRICTION}>Dietery Restriction</Radio>
                        </RadioGroupField>
                    </Flex>
                </Flex>
                {relatedAttendees?.map(relatedAttendee => (
                    <Flex key={relatedAttendee.id} direction="column" gap="small" paddingTop="2rem" alignItems="flex-start">
                        <View className={commonStyles.headerDescriptionSubheader}>{relatedAttendee.firstName} {relatedAttendee.lastName}</View>
                        <Flex style={{ paddingBlockStart: 0}} direction="column" gap="small" paddingTop="2rem" alignItems="flex-start">
                            <Label htmlFor="rsvp">RSVP Status</Label>
                            <RadioGroupField id="rsvp" legendHidden={true} direction="row" legend="RSVP Status" name="attending" onChange={(e) => relatedAttendee.isAttending = Boolean(e.target.value)} errorMessage="This is a required field. Please select an option."
                                hasError={!relatedAttendee.isAttending}>
                                <Radio value={String(relatedAttendee.isAttending)} checked={relatedAttendee.isAttending === true}>Accept</Radio>
                                <Radio value={String(relatedAttendee.isAttending)} checked={relatedAttendee.isAttending === false}>Decline</Radio>
                            </RadioGroupField>
                        </Flex>
                        <Flex direction="column" gap="small" paddingTop="2rem" alignItems="flex-start">
                            <Label htmlFor="meal">Meal Selection</Label>
                            <RadioGroupField id="meal" legendHidden={true} direction="row" legend="Meal Selection" name="meal" onChange={(e) => { relatedAttendee.food = Food[e.target.value] }}>
                                <Radio value={Food.GRILLED_CHICKEN} checked={relatedAttendee.food === Food.GRILLED_CHICKEN}>Grilled Chicken</Radio>
                                <Radio value={Food.SHRIMP} checked={relatedAttendee.food === Food.SHRIMP}>Shrimp</Radio>
                                <Radio value={Food.DIETARY_RESTRICTION} checked={relatedAttendee.food === Food.DIETARY_RESTRICTION}>Dietery Restriction</Radio>
                            </RadioGroupField>
                        </Flex>
                    </Flex>

                ))}
                {/* <Flex direction="column" gap="small" paddingTop="2rem" alignItems="flex-start">
                    <Label htmlFor="last_name">Last Name</Label> 
                    <Input value={lastNameValue} onChange={handleInputChange} id="last_name" name="last_name" />
                </Flex>
               <Flex paddingTop="1rem" justifyContent="center">
                    HI!
               </Flex> */}
            </View>
        </Grid>
    );
}

export default RSVPList;
