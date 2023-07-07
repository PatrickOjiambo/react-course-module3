import Arraydata from '../MemesData';
import { useState } from 'react';

function Meme() {
    const [allMemeImages, setAllMemeImages] = useState(Arraydata)
    function getimage() {
        let image = allMemeImages.data.memes[(Math.floor(Math.random() * allMemeImages.data.memes.length))];
        setMeme(prevImage => {
            return {
                ...prevImage,
                randomImage: image.url
            }
        });
    }
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
        function handleChange(event){

            setMeme(prevMeme =>({
            ...prevMeme, 
            [event.target.name]: event.target.value}))
        }

    return (
        <section className="Meme">
            <div className="Meme--form">
                <input 
                type="text" 
                placeholder="Top text" 
                className='inputs' 
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />

                <input type="text" 
                placeholder="Bottom text" 
                className="inputs" 
                name="bottomText" 
                value={meme.bottomText}
                onChange={handleChange}
                />


                <button className="Meme--button" 
                onClick={getimage} >
                    Get a new image
                    </button>
            </div>
            
            <div className='meme'>
                <img src={meme.randomImage} alt="This is a meme" className='Meme--image' />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </section>

    );
}
export default Meme;