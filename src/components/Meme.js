import Arraydata from '../MemesData';
import { useState } from 'react';

function Meme(){
    function getimage(){
        let image = Arraydata.data.memes[(Math.floor(Math.random() * Arraydata.data.memes.length))];
        setMemeImage(image.url);
    }
    const [memeImage, setMemeImage] = useState("")

    return(
            <section className="Meme">
                <div className="Meme--form">
                    <input type="text" placeholder="Enter some text"/>
                    <input type="text" placeholder="Put some more text here" className="Meme--button2"/>
                </div>
                <button className="Meme--button" onClick={getimage} >Get a new image</button><br></br>
                
                <img src={memeImage} alt="This is a meme" className='Meme--image'/>
           
            </section>

    );
}
export default Meme;