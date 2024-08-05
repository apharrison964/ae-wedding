'use client'

import { Amplify } from 'aws-amplify';
import amplifyconfig from '../../src/amplifyconfiguration.json';

Amplify.configure(amplifyconfig);

import React, { useEffect, useState } from 'react';
import commonStyles from '../../styles/common.module.scss';
import { Button, Flex, Grid, Input, Label, View } from '@aws-amplify/ui-react';
import { FaCheck, FaX } from "react-icons/fa6";
import RSVPConfirmationItem from './confirmation-item';





const RSVPConfirmation = ({attendee, relatedAttendees, plusOne, setUpdateDone }) => {
    return (
        <Grid className={commonStyles.headerDescription} templateColumns={'1fr 1fr 1fr 1fr 1fr 1fr'}>
            <View columnStart={{ xl: '2', large: '2', small: '1', medium: '2', base: '1'}} columnEnd={{ xl: '6', large: '6', small: '-1', medium: '6', base: '-1'}} row={2}>
                <View className={commonStyles.headerDescriptionSub}>We've got your RSVP information saved below. You are welcome to leave this page and continue browsing the wedding website.</View>

                
                {/* <Flex direction="column" gap="small" paddingTop="2rem" alignItems="flex-start">
                    <Label htmlFor="last_name">Last Name</Label> 
                    <Input value={lastNameValue} onChange={handleInputChange} id="last_name" name="last_name" />
                </Flex> */}
               <Flex paddingTop="1rem" width='100%' direction='column' alignItems='flex-start'>
                    <RSVPConfirmationItem attendeeInfo={attendee}></RSVPConfirmationItem>

                    { relatedAttendees.map(relatedAttendee => (
                        <RSVPConfirmationItem key={relatedAttendee.id} attendeeInfo={relatedAttendee}></RSVPConfirmationItem>
                    ))}
                    {plusOne ? <RSVPConfirmationItem attendeeInfo={plusOne}></RSVPConfirmationItem> : null}

                    <View fontWeight='300' fontSize='1.25rem' display='flex'>Something doesn't look right? <span style={{ fontWeight: '400', textDecoration: 'underline', cursor: 'pointer', paddingLeft: '0.25rem'}} onClick={() => setUpdateDone(false)}>Edit RSVP information</span></View>
               </Flex>
            </View>
        </Grid>
    );
}

export default RSVPConfirmation;
