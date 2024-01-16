import React, { useState, useEffect } from 'react';
import { router, usePage } from '@inertiajs/react'
import axios from 'axios';



const FormCreate = (props) => {

    const {tags} = props;
    const {errors} = usePage().props;

    const [tagsSeleccionadas, setTagsSeleccionadas] = useState([]);

    const handleCheckboxChange = (event) => {
        const checkboxValue = event.target.value;
        if (event.target.checked) {
          // Si el checkbox está marcado, agrega el valor a las tags seleccionadas
          setTagsSeleccionadas((prevTags) => [...prevTags, checkboxValue]);
        } else {
          // Si el checkbox está desmarcado, quita el valor de las tags seleccionadas
          setTagsSeleccionadas((prevTags) => prevTags.filter((tag) => tag !== checkboxValue));
        }
      };

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        price: '',
        location: '',
        start: '',
        duration: '',
        capacity: '',
        tags: [],
        image: null,
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('price', formData.price);
        formDataToSend.append('location', formData.location);
        formDataToSend.append('start', formData.start);
        formDataToSend.append('duration', formData.duration);
        formDataToSend.append('capacity', formData.capacity);
        formDataToSend.append('image', formData.image.name);
        //formDataToSend.append('tags[]', tagsSeleccionadas);

        console.log(formData.image);
        try {
            const response = await axios.post('store', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(formData.image.name);
        } catch (error) {
            console.error('Error uploading data:', error);
        }
    };

    return (
        <>
        <h3 className='centrar'>CREATE NEW ACTIVITY</h3>
        <form  onSubmit={handleSubmit} method ="post" name="form_create_activity" id="form_create_activity">
            <div class="mb-3 con_campo">
            <label for="exampleFormControlInput1" class="form-label">Title: </label>
            <input name="title" type="text" class="form-control" onChange={handleInputChange}></input>
            {errors.title && <div>{errors.title}</div>}
            </div>

            <div class="mb-3 con_campo">
                <label for="exampleFormControlTextarea1" class="form-label"> Description:</label>
                <textarea name="description" class="form-control" rows="3" onChange={handleInputChange}></textarea>
            </div>

            <div class="mb-3 con_campo">
            <label for="exampleFormControlInput1" class="form-label">Price: </label>
            <input name="price" type="text" class="form-control" onChange={handleInputChange}></input>
            </div>

            <div class="mb-3 con_campo">
            <label for="exampleFormControlInput1" class="form-label">Location: </label>
            <input name="location" type="text" class="form-control" onChange={handleInputChange}></input>
            </div>

            <div class="mb-3 con_campo">
            <label for="fecha_hora">Date/time:</label>
            <input type="datetime-local"  name="start" required onChange={handleInputChange}></input>
            </div>

            <div class="mb-3 con_campo">
            <label for="duracion">Duration (minutes):</label>
            <input type="number" name="duration" required onChange={handleInputChange}></input>
            </div>

            <div class="mb-3 con_campo">
            <label for="capacity">Capacity:</label>
            <input type="number" name="capacity" required onChange={handleInputChange}></input>
            </div>

            <div class="mb-2 con_campo" >
                <label for="formFile" class="form-label">Image</label>
                 <input class="form-control" onChange={handleFileChange} type="file" id="formFile" name="image"/>
            </div>

            {/** <div  class="mb-2 con_campo" >
                {tags.map((tag) => (
                    <div>
                        <input 
                            type="checkbox" 
                            id={tag.id} 
                            name="tags[]" 
                            value={tag.name}
                            checked={tagsSeleccionadas.includes(tag.name)}
                            onChange={handleCheckboxChange}
                        />
                        <label htmlFor="tags[]">&nbsp;&nbsp;{tag.name}</label><br></br>

                    </div>
                ))}
                  
            </div>

            <div>
                <p>Tags seleccionadas: {tagsSeleccionadas.join(', ')}</p>
            </div>*/}

            <div id="cont_boton_submit"> 
                <button type="submit" class= "mb-2 btn btn-primary" id="boton_submit">
                Create Activity
                </button>
            </div>
        </form>

        
        </>
    );
}
export default FormCreate;