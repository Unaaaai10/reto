import React, { useState, useEffect } from 'react';
import axios from 'axios';



const FormEdit = (props) => {

    const {tags, activity} = props;

    console.log(activity.image);

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
        title: props.activity.title,
        description: props.activity.description,
        price: props.activity.price,
        location: props.activity.location,
        start: props.activity.start,
        duration: props.activity.duration,
        capacity: props.activity.capacity,
        //tags: props.activity.tags,
        image: props.activity.image,
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
        formDataToSend.append('image', formData.image);
        //formDataToSend.append('tags[]', tagsSeleccionadas);

        
        try {
            
            const response = await axios.put('update', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(formDataToSend);
        } catch (error) {
            
            console.error('Error uploading data:', error);
        }
    };

    return (
        <>
        <h3 className='centrar'>EDIT ACTIVITY</h3>
        <form  onSubmit={handleSubmit} method ="PUT" name="form_edit_activity" id="form_edit_activity">
            <div class="mb-3 con_campo">
            <label for="exampleFormControlInput1" class="form-label">Title: </label>
            <input 
                name="title" 
                type="text" 
                class="form-control" 
                value={formData.title} 
                onChange={handleInputChange} 
            />
            </div>

            <div class="mb-3 con_campo">
                <label for="exampleFormControlTextarea1" class="form-label"> Description:</label>
                <textarea 
                    name="description" 
                    class="form-control" 
                    rows="3" 
                    value={formData.description}
                    onChange={handleInputChange}
                />
            </div>

            <div class="mb-3 con_campo">
            <label for="exampleFormControlInput1" class="form-label">Price: </label>
            <input 
                name="price" 
                type="text" 
                class="form-control" 
                value={formData.price}
                onChange={handleInputChange}
            />
            </div>

            <div class="mb-3 con_campo">
            <label for="exampleFormControlInput1" class="form-label">Location: </label>
            <input 
                name="location" 
                type="text" 
                class="form-control"
                value={formData.location} 
                onChange={handleInputChange}
            />
            </div>

            <div class="mb-3 con_campo">
            <label for="fecha_hora">Date/time:</label>
            <input 
                type="datetime-local"  
                name="start" 
                required 
                value={formData.start}
                onChange={handleInputChange}
            />
            </div>

            <div class="mb-3 con_campo">
            <label for="duracion">Duration (minutes):</label>
            <input 
                type="number" 
                name="duration" 
                required 
                value={formData.duration}
                onChange={handleInputChange}
            />
            </div>

            <div class="mb-3 con_campo">
            <label for="capacity">Capacity:</label>
            <input 
                type="number" 
                name="capacity" 
                required
                value={formData.capacity}
                onChange={handleInputChange}
            />
            </div>

            <div class="mb-2 con_campo" >
                <label for="formFile" class="form-label">Image</label>
                 <input 
                    class="form-control" 
                    onChange={handleFileChange} 
                    type="file" 
                    id="formFile" 
                    name="image"
                />
            </div>

            {/*<div  class="mb-2 con_campo">
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
                <button type="submit" class= "mb-2 btn btn-primary" id="boton_submit" onClick={handleSubmit}>
                Edit Activity
                </button>
            </div>
        </form>

        
        </>
    );
}
export default FormEdit;