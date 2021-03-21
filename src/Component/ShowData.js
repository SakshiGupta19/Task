import React from 'react';
import './ShowData.css'
import SampleData from './sampleData'
import { Image } from 'react-bootstrap'

function ShowData() {
    return (
        <div>
            <div className='navbar'>
                <div className='navbarBrand'>Dashboard</div>
                <div className='navbarBrand' style={{ color: 'red', marginRight: '10px' }}>Logout</div>

            </div>
            <div className='container'>
                {SampleData.map((item) => {
                    return (
                        <div className='row'>
                            <div className='col-4'>
                                <div className='card'>
                                    <div className='upper'>
                                        <Image className='image' src={item.avatar} ></Image>
                                        <h3>{item.first_name} {item.last_name}</h3>
                                    </div>
                                    <p>{item.description}</p>
                                <button className='Button'>{item.following===true?'Following':'Not Following'}</button>

                                </div>
                            </div>


                        </div>
                    )
                })}
            </div>
        </div>

    )

}



export default ShowData
