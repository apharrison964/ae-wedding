'use client'

import { Amplify } from 'aws-amplify';
import amplifyconfig from '../../src/amplifyconfiguration.json';

Amplify.configure(amplifyconfig);
import { Grid } from '@aws-amplify/ui-react';
import React, { useEffect, useState } from 'react';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { GetPropertiesOutput, ListAllOutput, getProperties, list } from 'aws-amplify/storage';
import PhotoOverlay from './photo-overlay';



const getList = async () => {
    try {
        const response = await list({
            options: {
              listAll: true,
            }
          })
        return response;
      } catch (error) {
        console.log(error);
      }
}

const getMetadata = async () => {
    const list = await getList() as ListAllOutput;
    const withMetadata = await Promise.all(list.items.map(async listItem => {
        const metadata = await getProperties({ key: listItem.key, options: { accessLevel: 'guest'}});
        return metadata;
    }))

   return withMetadata;
}

const Photos = () => {
    const [photoList, setPhotoList] = useState<GetPropertiesOutput[]>();
    const [photo, setPhoto] = useState<GetPropertiesOutput>();
    const [showOverlay, setShowOverlay] = useState(false);
    useEffect(() => {
        console.log('here');
        // React advises to declare the async function directly inside useEffect
        async function getItems() {
          const response = await getMetadata();
          setPhotoList(response.filter(item => item.key !== ''));
        };
    
        if (!photoList) {
            getItems();
        }
      }, []);
    return (
        <>
        <Grid templateColumns={{ xl: '1fr 1fr 1fr', large: '1fr 1fr 1fr', small: '1fr', medium: '1fr', base: '1fr'}} gap='1rem' templateRows={{xl: 'repeat(auto-fit, 18rem)', large: 'repeat(auto-fit, 18rem)'}}>
            { photoList?.map(photo => (
                <StorageImage onClick={() => { setShowOverlay(!showOverlay); setPhoto(photo)}} objectFit={{ xl: 'cover', large: 'cover', medium: 'cover', small: 'contain', base: 'contain'}} objectPosition={{ xl: '40% 30%', large: '40% 30%'}} width={{ xl: '100%', large: '100%'}} height={{ xl: '100%', large: '100%'}} key={photo.key} alt={photo.metadata?.alt} imgKey={photo.key} accessLevel="guest" />
            ))}
        </Grid>
        {showOverlay && <PhotoOverlay photo={photo} onClick={() => setShowOverlay(!showOverlay)}></PhotoOverlay>}
        </>
    );
}

export default Photos;
