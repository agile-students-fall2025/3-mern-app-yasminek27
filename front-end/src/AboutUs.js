import React, {useState , useEffect} from 'react';
import axios from 'axios';

const AboutUs = () => {
    const[content, setContent] = useState(null)
    useEffect(() => {
        axios.get('http://localhost:5002/about-us')
            .then(response => setContent(response.data))
            .catch(error => console.error('Error:', error))
    },[])
    if(!content){
        return <div>Loading...</div>
    }
    return(
        <div>
            <h1>{content.title}</h1>
            <img src ={content.imageUrl} alt="About Us" style={{maxWidth:'400px'}} />
            {content.paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
            )
            )}
        </div>
    )
}

export default AboutUs