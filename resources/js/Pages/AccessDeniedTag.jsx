import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import Navegador from '@/Components/Navegador';
import Titulo2 from '@/Components/Titulo2';

import Footer from '@/Components/Footer';


export default function AccessDeniedTag({ auth,user }) {
    return (
        <>
        <Navegador/>
        <Titulo2
            nombre = 'Access denied'
        />    
        <AuthenticatedLayout
            user={auth.user}
        >
            <Head title="Access denied" />

            <div className="py-12 centrar" id='access_denied'>
                <h3>Access only for administrators!</h3>
            </div>
            <Footer/>
        </AuthenticatedLayout>
        </>
    );
}
