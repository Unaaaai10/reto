import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import Navegador from '@/Components/Navegador';
import Titulo2 from '@/Components/Titulo2';

import Footer from '@/Components/Footer';
import Card from '@/Components/Card';
import imgvaloracion from '@/img/imgvaloracion.png';



export default function Dashboard(props){  //{ auth, activities}{
    return (
        <>
        <Navegador/>
        <Titulo2
            nombre = 'My activities'
        />    
        <AuthenticatedLayout
            user={props.auth.user}
        >
            <Head title="My activities" />

            <div className="py-12">
                
            </div>
            <div id="contenedor_carteles">


                {props.activities.map(activity => (
                    <Card 
                        key= {activity.id}
                        imagen = {activity.image}
                        titulo = {activity.title}
                        descripcion={activity.description}
                        imgvaloracion= {imgvaloracion}
                        price = {activity.price}
                        id={activity.id}
                        onDelete={(id) => handleDelete(id)}
                    />
                ))}


                

            </div>




            <Footer/>
        </AuthenticatedLayout>
        </>
    );
}
