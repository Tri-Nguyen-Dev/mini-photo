import React from 'react'
import Banner from '../../components/Banner'
import ImgBg from '../../assets/images/pink-bg.jpg'
import FormAdd from './FormAdd'

function AddPhoto() {
    return (
        <div className="add-photo">
            <Banner imageBg={ImgBg} title="Pick your amazing photo :)" />
            <FormAdd />
        </div>
    )
}

export default AddPhoto
