import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import WelcomeLayout from '@/Layouts/WelcomeLayout';
import { Head } from '@inertiajs/react';
import Navegador from '@/Components/Navegador';
import Titulo2 from '@/Components/Titulo2';
import Footer from '@/Components/Footer';
import Busqueda from '@/Components/Busqueda';
import Card from '@/Components/Card';
import imgvaloracion from '@/img/imgvaloracion.png';
import CardSimple from '@/Components/CardSimple';

export default function AllActivities(props) {  //{ auth, activities}{
    const userType = props.user?.userType;

    const [filteredActivities, setFilteredActivities] = useState(props.activities);

    const handleSearch = (searchTerm) => {
        const filtered = props.activities.filter((activity) =>
            activity.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredActivities(filtered);
    };

    const Layout = props.auth.user ? AuthenticatedLayout : WelcomeLayout;

    if (userType == 'admin') {
        return (
            <>
                <Navegador />
                <Titulo2
                    nombre='All activities'
                />
                <AuthenticatedLayout
                    user={props.auth.user}
                >
                    <Head title="All activities" />

                    <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div id="cont_busqueda">
                                <div id="cont_busqueda">
                                    <Busqueda onSearch={handleSearch} /></div>
                            </div>
                        </div>
                    </div>

                    <div id="contenedor_carteles">
                        {filteredActivities.map(activity => (
                            <Card
                                imagen={activity.image}
                                titulo={activity.title}
                                descripcion={activity.description}
                                imgvaloracion={imgvaloracion}
                                price={activity.price}
                                id={activity.id}
                            />
                        ))}
                    </div>




                    <Footer />
                </AuthenticatedLayout>
            </>
        );
    } else if (userType == 'teacher' || userType == 'student') {
        return (
            <>
                <Navegador />
                <Titulo2
                    nombre='All activities'
                />
                <AuthenticatedLayout
                    user={props.auth.user}
                >
                    <Head title="All activities" />

                    <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div id="cont_busqueda">
                                <div id="cont_busqueda">
                                    <Busqueda onSearch={handleSearch} /></div>
                            </div>
                        </div>
                    </div>

                    <div id="contenedor_carteles">
                        {filteredActivities.map(activity => (
                            <Card
                                imagen={activity.image}
                                titulo={activity.title}
                                descripcion={activity.description}
                                imgvaloracion={imgvaloracion}
                                price={activity.price}
                                id={activity.id}
                            />
                        ))}
                    </div>




                    <Footer />
                </AuthenticatedLayout>
            </>
        );
    } else {
        return (
            <>
                <Navegador />
                <Titulo2 nombre="All activities" />
                <Layout user={props.auth.user}>
                    <Head title="All activities" />

                    <div className="py-12">
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div id="cont_busqueda">
                                <Busqueda onSearch={handleSearch} />
                            </div>
                        </div>
                    </div>

                    <div id="contenedor_carteles">
                        {filteredActivities.map((activity) => (
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

                    <Footer />
                </Layout>
            </>
        );
    }
}