import {useState, useEffect} from 'react'

// using fetch API in react to fetch images
const Fetch = () => {
    const [photos, Setphotos] = useState([]);
    const [error, SetError] = useState(null)
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        // .then((res) =>{
        //     if (!res.ok)
        // return res.json()})
        .then((res) =>{
            if(!res.ok){
                throw new Error ('failed to fetch');
            }
            return res.json()
        })

        .then((data) =>{
            console.log(data);
            Setphotos(data);
        })

        .catch((error) =>{
            console.error('Error fetching data:', error);
            SetError('Failed to fetch data')
        })

        
    }, []);



  return (
    <div>
        {error && <p>{error}</p>}
        {photos.map((photo) =>(
            <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
        ))}
    </div>
  )
}

export default Fetch