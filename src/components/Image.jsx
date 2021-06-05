import React from 'react';
import Button from './Button';

const Image = (props) => {

    const increaseImgSize = () => {

    }

    const decreaseImgSize = () => {
        
    }
    
    return (
        <>
        <img src={props.src} alt={props.alt} width={props.w} height={props.h}/>
        <Button text="Increase" resizeImage={increaseImgSize} />
        <Button text="Decrease"resizeImage={decreaseImgSize} />
        </>
    )
}

export default Image;