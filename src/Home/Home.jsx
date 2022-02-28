import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    const [ modalControlar , setMordalControlar ] = useState( false );
    const [ post , setPost ] = useState({
        title: '',
        desc: '',
        photos: []
    });
    const [ heighLite, setHeighLite ] = useState(false);
    
     const { title , desc, photos } = post;
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
    const handleChange = e =>{
        setPost({
            ...post,
            [e.target.name] : e.target.value
        })
    }

    const handleFileChange = e =>{
        let files = e.target.files;
        handlefiles(files)
    }
    const handlefiles = files =>{
        let photoArr = [];
        // console.log(files)
        for( let file of files ){
            let render = new FileReader();
            render.readAsDataURL(file);
            render.addEventListener('load', () =>{
                    let fileobj = {
                        name: file.name,
                        type: file.type,
                        size: file.size,
                        src: render.result
                    }
                    photoArr.push(fileobj)
                    setPost({
                        ...post,
                        photo: [...photos, ...photoArr]
                    })
            })
        }
    }
    const handleDelete = e =>{
        let target = e.target.perentElemnt;
        let targetIndex = target.dataset.imgindex;
        console.log(target, targetIndex)
        setPost( {
            ...post,
            photos: [ ...photos.slice(0,  targetIndex ), ...photos.slice(targetIndex + 1 )]
        })
    }

    const handlehighlight = e =>{
        e.preventDefault();
        e.stopPropagation()
        setHeighLite(true)
    }
    const handleunhighlight = e =>{
        e.preventDefault();
        e.stopPropagation()
        setHeighLite(false)
    }
    const handledrop = e =>{
        e.preventDefault();
        e.stopPropagation()

        let dt = e.dataTransfer;
        let files = dt.files;
        handlefiles(files)
        console.log(files)
    }
    return (
        <div className='form-div'>
            <div className={ modalControlar ? `modal-show` : `modal-hidden`}>
                <div className='modal-body'>
                    <div className="custom-card">
                        <form action="" onSubmit={formData} encType="multipart/form-data">
                            <input type="text" name="text"  onChange={handleChange} className="text-area " />
                            <input type="text" name="desc"  onChange={handleChange} className="text-area " />
                        
                           <div className='image-drug' onDragEnter={handlehighlight} onDragOver={handlehighlight} onDragLeave={handleunhighlight} onDrop={handledrop}>
                                    <input type="file" name="photos" multiple onChange={handleFileChange} id="filephotos" />
                           </div>

                           {
                               photos.length > 0 && photos.map( (item , index)=> () =>{
                                   <div key={index} data-imgindex={index}>
                                       {
                                           console.log("paralife",item.src)
                                       }
                                       <span onClick={handleDelete}>&times;</span>
                                       <img src={item.src} alt={item.name} />
                                   </div>
                               })
                           }
                           <input type="submit" value="Values" />
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