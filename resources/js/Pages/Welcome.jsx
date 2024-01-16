import React, { useState } from 'react';
import { Link, Head } from '@inertiajs/react';
import Titulo from '@/Components/Titulo';
import Navegador from '@/Components/Navegador';
import Footer from '@/Components/Footer';
import Card from '@/Components/Card';
import imagen1 from '@/img/img9.jpg';
import surf from '@/img/surf.jpeg';
import Busqueda from '@/Components/Busqueda';
import FormularioContacto from '@/Components/FormularioContacto';
import AboutUs from '@/Components/AboutUs';
import imgvaloracion from '@/img/imgvaloracion.png';
import CardSimple from '@/Components/CardSimple';
import WelcomeLayout from '@/Layouts/WelcomeLayout';

export default function Welcome( props ) {

    const [filteredActivities, setFilteredActivities] = useState(props.activities);

    const handleSearch = (searchTerm) => {
        const filtered = props.activities.filter((activity) =>
            activity.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredActivities(filtered);
    };

    return (
        <>
            <Navegador/>

            <Titulo
                nombre='HOP UP'
            />
            
            <WelcomeLayout></WelcomeLayout>

                    <div id="contenedor_carteles">
                        {filteredActivities.map(activity => (
                            <CardSimple
                                imagen={activity.image}
                                titulo={activity.title}
                                descripcion={activity.description}
                                imgvaloracion={imgvaloracion}
                                price={activity.price}
                                id={activity.id}
                            />
                        ))}
                    </div>
        
            <AboutUs></AboutUs>
           
            <FormularioContacto></FormularioContacto>

    


            <Footer/>

            <Head title="Welcome" />
           
        </>
    );
}
