import { useState } from 'react'

export const Form = () => {

    const [formData, setFormData] = useState({
        username: '',
        age: '',
        email: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        console.log(e.target.value)
        setFormData({
            ...formData,
            [id]: value
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <form action="submit" onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={formData.username} name='username' placeholder='Enter Username' id='username' />
            <input type="number" onChange={handleChange} value={formData.age} name="age" placeholder='Enter Age' id="age" />
            <input type="text" onChange={handleChange} value={formData.email} name="email" placeholder='Enter Email' id="email" />
            <input type="submit" value='submit' />
        </form>
    )
}