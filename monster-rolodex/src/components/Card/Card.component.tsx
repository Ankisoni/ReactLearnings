import React from 'react';
import { ContainerDiv } from './Card.style';

export const Card = (props: any) => (
  <ContainerDiv>
  <div className='container'>
    <div className="card text-center ">
      <div className="card-body">
        <img className="card-img-top" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster" />
        <h5 className="card-title">{props.monster.name}</h5>
        <p className="card-text">{props.monster.email}</p>
      </div>
    </div>
  </div>
  </ContainerDiv>
);