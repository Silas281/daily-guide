import React, { useEffect } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import AddGoalForm from '../../components/input/AddGoalForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectImage, fetchImage } from './ImagesSlice';
import '../../wallpaper.jpg';
import Quote from '../quotes/Quote';


export default function () {
    const dispatch = useDispatch();
    const image = useSelector(selectImage);
    //'/../../wallpaper.jpg';

    const handleImageChange = () => {
        dispatch(fetchImage());
        //console.log(image.image.small)
    }

    useEffect(() => {
        dispatch(fetchImage());
        // console.log(JSON.stringify(image));
    }, []);
    // console.log(image.image.small);

    let imageUrl = image.image === undefined ? '../../wallpaper.jpg' : image.image.small;
    return (

        <div className='image-sliders'
            style={{
                height: '40vh',
                width: '100 %',
                backgroundImage: `url(${imageUrl})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no - repeat',
                backgroundSize: 'cover',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyontent: 'space - around',
                alignItems: 'center',
                padding: '20',
                paddingTop: '0',
            }}>
            < Quote />
            <div className='add-goal-form-wrapper'>
                <div className='add-goal-form-container'>

                    <AddGoalForm />
                </div>
            </div>
            <button className='prev-image' onClick={handleImageChange}><MdKeyboardArrowLeft /></button>
            <button className='next-image' onClick={handleImageChange}> <MdKeyboardArrowRight /></button>
        </div >
    )
}
