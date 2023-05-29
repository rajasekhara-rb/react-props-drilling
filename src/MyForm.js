import React from 'react';

import { useState } from 'react';

const MyForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        gender: "",
        address: "",
        country: "",
        interests: [],
        agree: false,
    })
    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))

    }

    const handleinterestChange = (event) => {
        const {options} = event.target;
        const selectedInterest = [];
        for (let i = 0; i < options.length; i++) {
            selectedInterest.push(options[i].value);
        }

        setFormData((prevData) => ({
            ...prevData,
            interests: selectedInterest,
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Data', formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type='text' name='name' value={formData.name} onChange={handleInputChange}></input>
            </label>
            <br />
            <label>
                Email:
                <input type='email' name='email' value={formData.email} onChange={handleInputChange}></input>
            </label>
            <br />
            <label>
                Age:
                <input type='number' name='age' value={formData.age} onChange={handleInputChange}></input>
            </label>
            <br />
            <select name='gender' value={formData.gender}>
                {/* <option value="">Select</option> */}
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
            </select>
            <br />
            <label>
                Address:
                <input type='text' name="address" value={formData.address} onChange={handleInputChange}></input>
            </label>
            <br />
            <label>
                Country:
                <input type='text' name='country' value={formData.country} onChange={handleInputChange}></input>
            </label>
            <br />
            <label>
                Interest:
                <select name='interest' multiple value={formData.interests} onChange={handleinterestChange}>
                    <option value="reading">Reading</option>
                    <option value="music">Music</option>
                    <option value="travelling">Travelling</option>
                    <option value="sports">Sports</option>
                </select>
            </label>
            <br />
            <label>
                Agree:
                <input type='checkbox' name='agree' value={formData.agree} onChange={handleInputChange}></input>
            </label>
            <br />
            <button onSubmit={handleSubmit}>Submit</button>
        </form>
    )
}

export default MyForm;