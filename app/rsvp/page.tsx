import styles from '../../styles/common.module.scss';
import React from 'react';
import { generateClient } from 'aws-amplify/api';
import { listAttendees } from '../../src/graphql/queries';

const client = generateClient();

const RSVP = async () => {
    const result = await client.graphql({ query: listAttendees });
    console.log('RESULT', result.data.listAttendees);
    return (
        <>
            <h3 className={styles.secondary}>
            RSVP - Coming Soon!
            </h3>
            <div style={{margin: '0.5rem'}}>
            </div>
            <div style={{margin: '0.5rem'}}>
            </div>
            <div style={{margin: '0.5rem'}}>
            </div>
            <div style={{margin: '0.5rem'}}>
            </div>
            <div style={{margin: '0.5rem'}}>
            </div>
            <div style={{margin: '0.5rem'}}>
            </div>
            <div style={{margin: '0.5rem'}}>
            </div>
            <div style={{margin: '0.5rem'}}>
            </div>
            <div style={{margin: '0.5rem'}}>
            </div>
            <div style={{margin: '0.5rem'}}>
            </div>
            <div style={{margin: '0.5rem'}}>
            </div>
            <div style={{margin: '0.5rem'}}>
            </div>
            <div style={{margin: '0.5rem'}}>
            </div>
            <div style={{margin: '0.5rem'}}>
            </div>
            <div style={{margin: '0.5rem'}}>
            </div>
            <div style={{margin: '0.5rem'}}>
            </div>
            <div style={{margin: '0.5rem'}}>
            </div>
        </>
    );
}

export default RSVP;
