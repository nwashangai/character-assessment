import React from 'react';

import { CharacterInterface } from './interface'

// styles
import './Character.scss'

const renderLocation = (type: string, name: string) => <div className="character__location">
  <h3>{type}</h3>
  <div>{name}</div>
</div>

export default (props: CharacterInterface) => {
  return (
    <div className={`character ${props.data.status.toLowerCase()}`} onClick={() => props.onClick(props.data.id)}>
      <img className="character__image" src={props.data.image} alt=""/>
      <div className="character__data">
        <div className="character__head">
          <h2>{props.data.name}</h2>
          <div><span>{props.data.species}</span> - <span>{props.data.gender} </span></div>
        </div>
        {renderLocation('Origin', props.data.origin.name)}
        {renderLocation('Current Location', props.data.location.name)}
      </div>
    </div>
  )
}