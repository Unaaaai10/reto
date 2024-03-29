import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import Textarea from '@/Components/Textarea';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';



export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        surname: user.surname,
        age: user.age,
        image: user.image,
        qualifications: user.qualifications,
        biography: user.biography,
        email: user.email,
    });

    console.log(user);

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <>
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Profile Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel htmlFor="surname" value="Surname" />

                    <TextInput
                        id="surname"
                        className="mt-1 block w-full"
                        value={data.surname}
                        onChange={(e) => setData('surname', e.target.value)}
                        required
                        isFocused
                        autoComplete="surname"
                    />

                    <InputError className="mt-2" message={errors.surname} />
                </div>

                <div>
                    <InputLabel htmlFor="age" value="Age" />

                    <TextInput
                        id="age"
                        className="mt-1 block w-full"
                        value={data.age}
                        onChange={(e) => setData('age', e.target.value)}
                        required
                        isFocused
                        autoComplete="age"
                    />

                    <InputError className="mt-2" message={errors.age} />
                </div>

                <div>
                    <InputLabel htmlFor="image" value="Image" />

                    <TextInput
                        id="image"
                        className="mt-1 block w-full"
                        value={data.image}
                        onChange={(e) => setData('image', e.target.value)}
                        required
                        isFocused
                        autoComplete="image"
                    />

                    <InputError className="mt-2" message={errors.image} />
                </div>

                <div>
                    <InputLabel htmlFor="qualifications" value="Qualifications" />

                    <textarea name="qualifications" id="" cols="30" rows="10">
                        {data.qualifications}
                    </textarea>
                </div>

                <div>
                    <InputLabel htmlFor="biography" value="Biography" />

                    <textarea name="biography" id="" cols="30" rows="10">
                        {data.biography}
                    </textarea>
                </div>
  


                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600">
                                A new verification link has been sent to your email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
        
        </>
    );
}
