import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import WelcomeLayout from '@/Layouts/WelcomeLayout';
import { Head } from '@inertiajs/react';
import Navegador from '@/Components/Navegador';
import Titulo2 from '@/Components/Titulo2';
import Footer from '@/Components/Footer';
import PrimaryButton from '@/Components/PrimaryButton';


export default function TeacherInfo(props) {  //{ auth, activities}{
    console.log(props.teacher);
    return (
        <>
            <Navegador />
            <Titulo2
                nombre='Teacher information'
            />

{props.auth.user ? (
                <AuthenticatedLayout
                    user={props.auth.user}
                >
                    <Head title="Teacher info" />
                    <div className="py-12">
                    </div>
                    <div id="contenedor_info_teacher">
                        <h3 className="text-center">{props.teacher.name} {props.teacher.surname}</h3>
                        <p className="p_act_info"><strong>Phone number: </strong>{props.teacher.phone}</p>
                        <p className="p_act_info"><strong>Age: </strong>{props.teacher.age}</p>
                        <p className="p_act_info"><strong>Email: </strong>{props.teacher.email}</p>
                        <p className="p_act_info"><strong>Qualifications: </strong>{props.teacher.qualifications}</p>
                        <p className="p_act_info"><strong>Biography: </strong>{props.teacher.biography}</p>
                        <div id="cont_btn_act_info">
                            <PrimaryButton>Rate teacher</PrimaryButton>
                            <PrimaryButton> <a className='go_back_button' href={route('allActivities.index')}>Go back</a> </PrimaryButton>
                        </div>


                    </div>
                    <Footer />
                </AuthenticatedLayout>
            ) : (
                <WelcomeLayout>
                    <Head title="My activities" />
                    <div className="py-12">
                    </div>
                    <div id="contenedor_info_activity">

                    </div>
                    <Footer />
                </WelcomeLayout>
            )}

            
            <h1>Hola</h1>
        </>
    );
}