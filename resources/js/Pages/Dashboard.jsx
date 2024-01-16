import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import Navegador from '@/Components/Navegador';
import Titulo2 from '@/Components/Titulo2';
import imgvaloracion from '@/img/imgvaloracion.png';
import Footer from '@/Components/Footer';
import Busqueda from '@/Components/Busqueda';
import PrimaryButton from '@/Components/PrimaryButton';
import Card from '@/Components/Card';
import CardSimple from '@/Components/CardSimple';
import imagen1 from '@/img/img9.jpg';
import surf from '@/img/surf.jpeg';
import FormularioContacto from '@/Components/FormularioContacto';
import AboutUs from '@/Components/AboutUs';

export default function Dashboard({ auth, user, activities }) {
    const userType = auth.user.userType;
    if(userType == 'admin'){
        return (
            <>
                <Navegador />
                <Titulo2
                    nombre='Dashboard'
                />
                <AuthenticatedLayout
                    user={auth.user}
                    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Welcome {user.name}!</h2>}
                >
                    <Head title="Dashboard" />
    
                    <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            
                            <div id="contenedor_carteles">
                            {activities.map(activity => (
                                <Card
                                    imagen = {activity.image}
                                    titulo = {activity.title}
                                    descripcion={activity.description}
                                    imgvaloracion= {imgvaloracion}
                                    price = {activity.price}
                                    id={activity.id}
                                />
                            ))}
    
                            </div>
                        </div>
                    </div>
              
                    <AboutUs></AboutUs>
                    <FormularioContacto></FormularioContacto>
                    <Footer />
                </AuthenticatedLayout>
            </>
        );
    }else{
        return (
            <>
                <Navegador />
                <Titulo2
                    nombre='Dashboard'
                />
                <AuthenticatedLayout
                    user={auth.user}
                    header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Welcome {user.name}!</h2>}
                >
                    <Head title="Dashboard" />
    
                    <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div id="cont_busqueda">
                                <Busqueda />
                            </div>
                            <div id="contenedor_carteles">
                            {activities.map(activity => (
                                <CardSimple
                                    imagen = {activity.image}
                                    titulo = {activity.title}
                                    descripcion={activity.description}
                                    imgvaloracion= {imgvaloracion}
                                    price = {activity.price}
                                    id={activity.id}
                                />
                            ))}
                            </div>
                        </div>
                    </div>
              
                    <AboutUs></AboutUs>
                    <FormularioContacto></FormularioContacto>
                    <Footer />
                </AuthenticatedLayout>
            </>
        );
    }
}
