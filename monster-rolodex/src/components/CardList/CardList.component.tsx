import React from 'react';
import { Card } from '../Card/Card.component';

export const CardList = (props: any) => {
    return (
        <>
        {props.monsters.map((monster: any) => (
                 <div className='col-md-4'>
                <Card key={monster.id} monster={monster} />
                </div>
            ))}
       
           </>
    );
};