import styles from '../../styles/common.module.scss';
import React from 'react';
// import { Amplify, API, graphqlOperation } from 'aws-amplify'
// import awsExports from '../../src/aws-exports';
// import { listAttendees } from '../../src/graphql/queries';
import '@aws-amplify/ui-react/styles.css';
// import { ListAttendeesQuery } from '../../src/API';
// import { GraphQLResult } from "@aws-amplify/api";

// Amplify.configure(awsExports);

const FAQ = async () => {
    // const attendeeData = (await API.graphql(graphqlOperation(listAttendees))) as GraphQLResult<ListAttendeesQuery>;
    // const attendees = attendeeData.data?.listAttendees?.items;
    return (
        <>
            <h3 className={styles.secondary}>
            FAQ
            </h3>
            <div>
                Stuff will go here.
            </div>
            <div>
                Stuff will go here.
            </div>
            <div>
                Stuff will go here.
            </div>
            <div>
                Stuff will go here.
            </div>
            <div>
                Stuff will go here.
            </div>
            <div>
                Stuff will go here.
            </div>
            <div>
                Stuff will go here.
            </div>
            <div>
                Stuff will go here.
            </div>
            <div>
                Stuff will go here.
            </div>
            <div>
                Stuff will go here.
            </div>
            <div>
                Stuff will go here.
            </div>
            <div>
                Stuff will go here.
            </div>
            <div>
                Stuff will go here.
            </div>
            <div>
                Stuff will go here.
            </div>
            <div>
                Stuff will go here.
            </div>
            <div>
                Stuff will go here.
            </div>
            <div>
                Stuff will go here.
            </div>


            {/* <div className={styles.grid}>
            {attendees?.map((attendee) => (
                <a className={styles.card} key={attendee?.id}>
                <h3>{attendee?.name}</h3>
                <p>{attendee?.food}</p>
                </a>
            ))}
            </div> */}
        </>
    );
}

export default FAQ;
