'use client'

import { Amplify } from 'aws-amplify';
import amplifyconfig from '../../src/amplifyconfiguration.json';

Amplify.configure(amplifyconfig);

import React, { useState } from 'react';
import commonStyles from '../../styles/common.module.scss';
import { Button, Flex, Grid, Input, Label, View } from '@aws-amplify/ui-react';
import { nameRegex } from '../constants/regex-constants';


const RSVPSearch = ({ firstNameValue, lastNameValue, handleInputChange, userNotFound, findAttendee}) => {
    const [submitPressed, setSubmitPressed] = useState(false);

    
    const search = () => {
        setSubmitPressed(true);
        setTimeout(checkNames);
    }

    const checkNames = () => {
        if (firstNameValue.length > 0 && lastNameValue.length > 0 && nameRegex.test(firstNameValue) && nameRegex.test(lastNameValue)) {
            findAttendee();
        }
    }

    return (
        <Grid className={commonStyles.headerDescription} templateColumns={'1fr 1fr 1fr 1fr 1fr 1fr'}>
            <View columnStart={{ xl: '2', large: '2', small: '1', medium: '2', base: '1'}} columnEnd={{ xl: '6', large: '6', small: '-1', medium: '6', base: '-1'}} row={2}>
                <View className={commonStyles.headerDescriptionSub}>Please make sure you RSVP by October 1, 2024.</View>
                <View className={commonStyles.headerDescriptionSub}>First, let’s find you in the guest list.</View>
                <View className={commonStyles.headerDescriptionSub}>You’ll be able to enter information for all members of your invited group next.</View>
                <View className={commonStyles.headerDescriptionSub}>Please search with the name that was on your invitation.</View>


                <Flex direction="column" gap="small" paddingTop="2rem" alignItems="flex-start">
                    <Label htmlFor="first_name">First Name</Label>
                    <Input value={firstNameValue} onChange={handleInputChange} id="first_name" name="first_name" />
                    { submitPressed && (firstNameValue.length === 0 || nameRegex.test(firstNameValue) === false) ? <div className="validation-error">Please enter a valid first name.</div> : null}
                </Flex>
                <Flex direction="column" gap="small" paddingTop="2rem" alignItems="flex-start">
                    <Label htmlFor="last_name">Last Name</Label> 
                    <Input value={lastNameValue} onChange={handleInputChange} id="last_name" name="last_name" />
                    { submitPressed && (lastNameValue.length === 0 || nameRegex.test(lastNameValue) === false) ? <div className="validation-error">Please enter a valid last name.</div> : null}
                </Flex>
                {
                    userNotFound === true ?
                        <View paddingTop='1rem' color='red' style={{ display: 'flex', flexDirection: 'column', gap: '1rem'}} >
                            <div>Hmm, we are having trouble finding your name.</div>
                            <div>Please try again, and make sure your name matches up with the invitation.</div>
                            <div>If you are still having trouble, please contact <a style={{ textDecoration: 'underline' }} href="mailto:eaharrisonwedding2024@gmail.com">Allie & Elizabeth</a></div>
                         </View> : null
                }
               <Flex paddingTop="1rem" paddingBottom="1rem" justifyContent="center">
                    <Button
                        variation="primary"
                        loadingText="Loading, please wait"
                        onClick={() => search() }>
                        Find
                    </Button>
               </Flex>
            </View>
        </Grid>
    );
}

export default RSVPSearch;
