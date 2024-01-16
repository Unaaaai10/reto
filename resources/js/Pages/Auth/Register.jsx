import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import RadioButton from '@/Components/RadioButton';
import Navegador from '@/Components/Navegador';
import Titulo2 from '@/Components/Titulo2';
import React, {useState} from 'react';

import Footer from '@/Components/Footer';
import UserTypeSelect from '@/Components/UserTypeSelect';
import { Label } from 'reactstrap';


export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        surname: '',
        email: '',
        phone: '',
        age: '',
        password: '',
        userType: '',
        password_confirmation: '',
    });

    const items = [
        { value: 'teacher', label: 'Teacher' },
        { value: 'student', label: 'Student' },
    ];

    const [value, setValue] = useState('teacher');

    console.log({value});

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <>
        <Navegador/>
        <Titulo2
            nombre = 'Register'
        />
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>
                

                <div>
                    <InputLabel htmlFor="surname" value="Surname" />

                    <TextInput
                        id="surname"
                        name="surname"
                        value={data.surname}
                        className="mt-1 block w-full"
                        autoComplete="surname"
                        isFocused={true}
                        onChange={(e) => setData('surname', e.target.value)}
                        required
                    />

                    <InputError message={errors.surname} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="phone" value="Phone" />

                    <TextInput
                        id="phone"
                        name="phone"
                        value={data.phone}
                        className="mt-1 block w-full"
                        autoComplete="phone"
                        isFocused={true}
                        onChange={(e) => setData('phone', e.target.value)}
                        required
                    />

                    <InputError message={errors.phone} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="age" value="Age" />

                    <TextInput
                        id="age"
                        name="age"
                        value={data.age}
                        className="mt-1 block w-full"
                        autoComplete="age"
                        isFocused="true"
                        onChange={(e) => setData('age', e.target.value)}
                        required
                    />

                    <InputError message={errors.age} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="userType" value="User type" />

                    <div>
        {items.map(item => (
            <div key={item.value}>
                <input
                    name='userType'
                    type='radio'
                    value={item.value}
                    id={item.value}
                    checked={data.userType === item.value}
                    onChange={e => setData('userType', e.target.value)}
                /> <label htmlFor={item.value}>{item.label}</label>
            </div>
        ))}
    </div>

                    <InputError message={errors.userType} className="mt-2" />
                </div>

                {/*<div className="mt-4">
                    <InputLabel htmlFor="userType" value="User type" />

                    <FormGroup>
                        <FormGroup className="formGroupRdios">
                            <FormGroup>
                                <Input
                                    id="teacher"
                                    type="radio"
                                    name="userType"
                                    value="teacher"
                                 />
                                 <Label htmlFor="teacher">
                                    Teacher
                                 </Label>
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    id="student"
                                    type="radio"
                                    name="userType"
                                    value="student"
                                 />
                                 <Label htmlFor="student">
                                    Student
                                 </Label>
                            </FormGroup>
                        </FormGroup>
                    </FormGroup>

                    {/*<RadioButton
                        id="type"
                        type="type"
                        name="type"
                        value={data.type}
                        className="mt-1 block w-full"
                        autoComplete="type"
                        onChange={(e) => setData('type', e.target.value)}
                        required
    />*/}

                        {/*<div>
                            {items.map(item => (
                                <div key={item.value}>
                                    <input
                                        name='userType'
                                        type='radio'
                                        value={item.value}
                                        id={item.value}
                                        checked={value === item.value}
                                        onChange={e => setValue(e.target.value)}
                                    /> <label htmlFor={item.value}>{item.label}</label>
                                </div>
                            ))}
                            </div>
                    


                    <InputError message={errors.userType} className="mt-2" />
                </div>*/}

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
        <Footer/>
        </>
    );
}