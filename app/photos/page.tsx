'use client'

import { Amplify } from 'aws-amplify';
import amplifyconfig from '../../src/amplifyconfiguration.json';

Amplify.configure(amplifyconfig);
import { Grid } from '@aws-amplify/ui-react';
import React, { useEffect, useState } from 'react';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import { GetPropertiesWithPathOutput, ListAllWithPathOutput, getProperties, list } from 'aws-amplify/storage';
// import PhotoOverlay from './photo-overlay';



const getList = async () => {
    try {
        const response = await list({
            path: 'public/',
            options: {
              listAll: true,
            }
          });
        return response;
      } catch (error) {
        console.log(error);
      }
}

const getMetadata = async () => {
    const list = await getList() as ListAllWithPathOutput;
    const withMetadata = await Promise.all(list.items.map(async listItem => {
        const metadata = await getProperties({ path: listItem.path });
        return metadata;
    }));
   return withMetadata;
}

const Photos = () => {
    const [photoList, setPhotoList] = useState<GetPropertiesWithPathOutput[]>();
    // const [photo, setPhoto] = useState<GetPropertiesOutput>();
    // const [showOverlay, setShowOverlay] = useState(false);
    const repeat = photoList ? photoList.length / 3 : 6;

    useEffect(() => {
        async function getItems() {
          const response = await getMetadata();
          setPhotoList(response.filter(item => !item.contentType?.includes('application/x-directory')));
        };
    
        if (!photoList) {
            getItems();
        }
      }, []);

    return (
        <>
        <Grid templateColumns={{ xl: '1fr 1fr 1fr', large: '1fr 1fr 1fr', small: '1fr', medium: '1fr', base: '1fr'}} gap='1rem' templateRows={{xl: `repeat(${repeat}, 18rem)`, large: 'repeat(auto-fit, 18rem)'}}>
            { photoList?.map((photo) => (
                <StorageImage 
                    // onClick={() => { setShowOverlay(!showOverlay); setPhoto(photo)}} 
                    objectFit={{ xl: 'cover', large: 'cover', medium: 'cover', small: 'contain', base: 'contain'}} 
                    objectPosition={{ xl: '40% 30%', large: '40% 30%'}} width={{ xl: '100%', large: '100%'}} 
                    height={{ xl: '100%', large: '100%'}} 
                    key={photo.path} 
                    alt={photo.metadata?.alt} 
                    path={photo.path} 
                    fetchPriority='high'
                    />
            ))}
        </Grid>
        {/* {showOverlay && <PhotoOverlay photo={photo} photoList={photoList} updatePhoto={(newPhoto) => setPhoto(newPhoto)} onClick={() => setShowOverlay(!showOverlay)}></PhotoOverlay>} */}
        </>
    );
}

export default Photos;
