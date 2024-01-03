'use client'

import { StorageImage } from '@aws-amplify/ui-react-storage';

export default function PhotoOverlay({onClick, photo}) {
    return (
        <div onClick={onClick} className="photo-overlay">
            <div className="photo-item">
                <StorageImage objectFit={{ base: 'contain' }} key={photo.key} alt={photo.metadata?.alt} imgKey={photo.key} accessLevel="guest" />
            </div>
        </div>
    )
  } 