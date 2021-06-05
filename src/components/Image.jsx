import React from 'react';
import {useState}  from 'react';
import Button from './Button';


const Image = (props) => {
    let[Imagesize, setImage] = useState(props.w);
    
    const increaseImgSize = () =>  {
        const widthValue = parseInt(props.w);
        setImage(Imagesize = widthValue + 0.2 * widthValue)
}

    const decreaseImgSize = () => {
        const widthValue = parseInt(props.w);
        setImage(Imagesize = widthValue - 0.2 * widthValue)
}
   
    return (
        <>
        <img src={props.src} alt={props.alt} width={props.w} height={props.h}/>

        {/* render buttons to increase and decrease image sizes */}
        <Button text="Increase" resizeImage={increaseImgSize} />
        <Button text="Decrease" resizeImage={decreaseImgSize} />
        </>
    )
}

export default Image;