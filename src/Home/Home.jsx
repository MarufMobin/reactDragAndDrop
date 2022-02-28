import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    const [ modalControlar , setMordalControlar ] = useState( false );
    
    const formData = e =>{
        e.preventDefault();
        console.log("Form Control")
    }
    const modalOpen = () =>{
        setMordalControlar(true)
    }
    const modalClose = () =>{
        setMordalControlar(false)
    }
    const dragOption = () =>{
        // let files = []
        // e.target.files.push(files)
        // console.log(files)
      
    }
    return (
        <div className='form-div'>
            <div className={ modalControlar ? `modal-show` : `modal-hidden`}>
                <div className='modal-body'>
                    <div className="custom-card">
                        <form action="" onSubmit={formData} >
                            <textarea name="" className='text-area'></textarea>
                            <div className='image-drug' onDrag={dragOption}>
                                    <input type="file" className='file-upload-button' />
                            </div>
                            <input type="submit" />
                        </form>
                        <dir onClick={modalClose} className="modal-closer">
                            *
                        </dir>
                    </div>
                </div>
            </div>
                <div onClick={modalOpen} className="post-button">Upload A Post</div>
        </div>
    );
};

export default Home;