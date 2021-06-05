import React from 'react';
//import Button from './Button';

const Image = (props) => {
    return (
        <>
        <img src={props.src} alt={props.alt} width={props.w} height={props.h}/>
        {/* <Button />
        <Button /> */}
        </>
    )
}

export default Image;