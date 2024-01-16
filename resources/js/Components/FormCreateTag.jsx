import React, { useState, useEffect } from 'react';
import axios from 'axios';



const FormCreateTag = () => {

    const [formData, setFormData] = useState({
        name: '',
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);

        console.log(formData.name);
        try {
            console.log("dentro");
            const response = await axios.post('/tags/store/tag', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
        } catch (error) {
            console.error('Error uploading data:', error);
        }
    };

    return (
        <>
        <h3 className='centrar'>CREATE NEW TAG</h3>
        <form  onSubmit={handleSubmit} method ="post" name="form_create_tag" id="form_create_tag">
            
            <div class="mb-3 con_campo">
            <label for="exampleFormControlInput1" class="form-label">Name: </label>
            <input name="name" type="text" class="form-control" onChange={handleInputChange}></input>
            </div>

            <div id="cont_boton_submit"> 
                <button type="submit" class= "mb-2 btn btn-primary" id="boton_submit">
                Create Tag
                </button>
            </div>
        </form>

        
        </>
    );
}
export default FormCreateTag;