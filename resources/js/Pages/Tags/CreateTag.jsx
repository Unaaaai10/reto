import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import Navegador from '@/Components/Navegador';
import Titulo2 from '@/Components/Titulo2';
import WarningButton from '@/Components/WarningButton';

import Footer from '@/Components/Footer';
import Busqueda from '@/Components/Busqueda';
import Card from '@/Components/Card';


import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import FormCreate from '@/Components/FormCreate';
import FormCreateTag from '@/Components/FormCreateTag';
import { useForm } from '@inertiajs/react';


export default function CreateActivity(props){  //{ auth, activities}{
    return (
        <>
        <Navegador/>
        <Titulo2
            nombre = 'Create tag'
        />    
        <AuthenticatedLayout
            user={props.auth.user}
        >
            <Head title="Create tag" />

            <FormCreateTag/>
            <Footer/>
        </AuthenticatedLayout>
        </>
    );
}
