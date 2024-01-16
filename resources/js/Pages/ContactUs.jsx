import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import WelcomeLayout from '@/Layouts/WelcomeLayout';
import { Head } from '@inertiajs/react';

import Navegador from '@/Components/Navegador';
import Titulo2 from '@/Components/Titulo2';

import Footer from '@/Components/Footer';
import FormularioContacto from '@/Components/FormularioContacto';



export default function ContactUs(props) {  //{ auth, activities}{
    return (
        <>
            <Navegador />
            <Titulo2
                nombre='Contact us'
            />
            {props.auth.user ? (
                <AuthenticatedLayout
                    user={props.auth.user}
                >
                    <Head title="Contact us" />
                    <FormularioContacto />
                    <Footer />
                </AuthenticatedLayout>
            ) : (
                <WelcomeLayout>
                    <Head title="Contact us" />
                    <FormularioContacto />
                    <Footer />
                </WelcomeLayout>
            )}
        </>
    );
}