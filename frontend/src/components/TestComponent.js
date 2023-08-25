import { React, useEffect, useState } from 'react'
import axios from 'axios'

export default function TestComponent() {
    const [data, setData] = useState(null)

    useEffect(() => {
        // Make a GET request when the component mounts
        axios.get('http://127.0.0.1:3000/getWord?personId=fskd')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    return (
        <div>{data}</div>
    )
}
