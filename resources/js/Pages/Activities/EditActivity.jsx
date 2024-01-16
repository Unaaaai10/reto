import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

import Navegador from '@/Components/Navegador';
import Titulo2 from '@/Components/Titulo2';
import WarningButton from '@/Components/WarningButton';
import FormEdit from '@/Components/FormEdit';

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
import { useForm } from '@inertiajs/react';


export default function EditActivity(props){  //{ auth, activities}{
    const {tags, activity} = props;
    return (
        <>
        <Navegador/>
        <Titulo2
            nombre = 'Edit activity'
        />    
        <AuthenticatedLayout
            user={props.auth.user}
        >
            <Head title="Edit activity" />

            <FormEdit activity={activity} tags={tags}/>
            <Footer/>
        </AuthenticatedLayout>
        </>
    );
}