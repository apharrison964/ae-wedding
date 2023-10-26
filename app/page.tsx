import Head from 'next/head';
import styles from '../styles/common.module.scss';
import React from 'react';
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import awsExports from '../src/aws-exports';
import { listAttendees } from '../src/graphql/queries';
import '@aws-amplify/ui-react/styles.css';
import { ListAttendeesQuery } from '../src/API';
import { GraphQLResult } from "@aws-amplify/api";

Amplify.configure(awsExports);

const Home = async () => {
    const attendeeData = (await API.graphql(graphqlOperation(listAttendees))) as GraphQLResult<ListAttendeesQuery>;
    const attendees = attendeeData.data?.listAttendees?.items;
    return (

        <>
            <div className={styles.grid}>
            {attendees?.map((attendee) => (
                <a className={styles.card} key={attendee?.id}>
                <h3>{attendee?.name}</h3>
                <p>{attendee?.food}</p>
                </a>
            ))}
            </div>
        </>
    );
}

export default Home;
