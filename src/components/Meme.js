import { useState } from 'react';
import { useEffect } from 'react';

    /**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */
function Meme() {
    useEffect(() =>{
        let url = "https://api.imgflip.com/get_memes";
        fetch(url)
        .then( response => response.json())
        .then(data => setAllMemeImages(data))
    }, [])
   
    const [allMemeImages, setAllMemeImages] = useState({})
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