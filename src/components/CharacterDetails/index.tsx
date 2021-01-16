import React from 'react';

import { CharacterDetailsInterface } from './interface'

// styles
import './CharacterDetails.scss'

export default ({ data }: CharacterDetailsInterface) => {
  
  const renderLocationData = (type: string, location?: any) => (
    <div className="character-details__location">
      <h3>{type}</h3>
      <div><span>Name</span><span>{location.name}</span></div>
      <div><span>Dimension</span><span>{location.dimension || 'unknown'}</span></div>
      <div><span>Amount Of Residents</span><span>{location.residents?.length || 'unknown'}</span></div>
    </div>
  )

  const renderChapter = (chapters: string[]) => (
    <div className="character-details__chapters">
      <h3>Chapters Featured ({chapters.length})</h3>
      <div>{chapters.map((url: string, key: number) => <span key={key}>Episode {url.split('/')[url.split('/').length - 1]}</span>)}</div>
    </div>
  )

  return (
    <div className="character-details">
      <div className="character-details__image-wrapper">
        <img className="character-details__image" src={data.image} alt=""/>
      </div>
      <div className="character-details__header">
        <h2>{data.name}</h2>
        <div><span>{data.species}</span> - <span>{data.gender} </span></div>
        <span className={data.status.toLowerCase()}>{data.status}</span>
      </div>
      {renderLocationData('Origin Location', data.origin)}
      {renderLocationData('Current Location', data.location)}
      {renderChapter(data.episode)}
    </div>
  )
}