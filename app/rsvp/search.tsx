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



const RSVPSearch = ({ firstNameValue, lastNameValue, handleInputChange, findAttendee}) => {
    return (
        <Grid className={commonStyles.headerDescription} templateColumns={'1fr 1fr 1fr 1fr 1fr 1fr'}>
            <View columnStart={{ xl: '2', large: '2', small: '1', medium: '2', base: '1'}} columnEnd={{ xl: '6', large: '6', small: '-1', medium: '6', base: '-1'}} row={2}>
                {/* RSVPSearchComponent start */}
                <View className={commonStyles.headerDescriptionSub}>Please make sure you RSVP by October 1, 2024.</View>
                <View className={commonStyles.headerDescriptionSub}>First, let’s find you in the guest list.</View>
                <View className={commonStyles.headerDescriptionSub}>You’ll be able to enter information for all members of your invited group next.</View>
                <View className={commonStyles.headerDescriptionSub}>Please search with the name that was on your invitation.</View>


                <Flex direction="column" gap="small" paddingTop="2rem" alignItems="flex-start">
                    <Label htmlFor="first_name">First Name</Label>
                    <Input value={firstNameValue} onChange={handleInputChange} id="first_name" name="first_name" />
                </Flex>
                <Flex direction="column" gap="small" paddingTop="2rem" alignItems="flex-start">
                    <Label htmlFor="last_name">Last Name</Label> 
                    <Input value={lastNameValue} onChange={handleInputChange} id="last_name" name="last_name" />
                </Flex>
               <Flex paddingTop="1rem" justifyContent="center">
                    <Button
                        variation="primary"
                        loadingText="Loading, please wait"
                        onClick={() => findAttendee() }>
                        Find
                    </Button>
               </Flex>
                {/* RSVPSearchComponent end */}
            </View>
        </Grid>
    );
}

export default RSVPSearch;
