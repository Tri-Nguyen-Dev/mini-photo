import React from 'react'
import Banner from '../../components/Banner'
import ListPhoto from './ListPhoto'


function Home() {
    return (
        <div className="home">
            <Banner title="Your awesome photo :)" />
            <ListPhoto />
        </div>
    )
}

export default Home
