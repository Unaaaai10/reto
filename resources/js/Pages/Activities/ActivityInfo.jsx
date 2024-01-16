import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import WelcomeLayout from '@/Layouts/WelcomeLayout';
import { Head } from '@inertiajs/react';
import Navegador from '@/Components/Navegador';
import Titulo2 from '@/Components/Titulo2';
import Footer from '@/Components/Footer';
import PrimaryButton from '@/Components/PrimaryButton';


export default function ActivityInfo(props) {  //{ auth, activities}{
    console.log(props.activity);
    return (
        <>
            <Navegador />
            <Titulo2
                nombre='My activities'
            />
            {props.auth.user ? (
                <AuthenticatedLayout
                    user={props.auth.user}
                >
                    <Head title="My activities" />
                    <div className="py-12">
                    </div>
                    <div id="contenedor_info_activity">
                        <h3 className="text-center">{props.activity.title}</h3>
                        <div id="div_img_act_info"><img src="" alt="" /></div>
                        <p className="p_act_info"><strong>Description: </strong>{props.activity.description}</p>
                        <p className="p_act_info"><strong>Price: </strong>{props.activity.price}€</p>
                        <p className="p_act_info"><strong>Location: </strong>{props.activity.location}</p>
                        <p className="p_act_info"><strong>Date: </strong>{props.activity.start}</p>
                        <p className="p_act_info"><strong>Duration: </strong>{props.activity.duration}</p>
                        <p className="p_act_info"><strong>Capacity: </strong>{props.activity.capacity}</p>
                        <p className="p_act_info"><strong>Teacher`s name: </strong><a href={route('teacher_info', {id: props.teacher.id})}>{props.teacher.name}</a></p>
                        <p className="p_act_info"><strong>Teacher qualifications: </strong>{props.teacher.qualifications}</p>
                        <p className="p_act_info"><strong>Teacher age: </strong>{props.teacher.age}</p>
                        <div id="cont_btn_act_info">
                            <PrimaryButton>Book</PrimaryButton>
                            <PrimaryButton><a href="">See comments</a></PrimaryButton>
                            <PrimaryButton> <a className='go_back_button' href={route('dashboard')}>Go back</a> </PrimaryButton>
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
                        <h3 className="text-center">{props.activity.title}</h3>
                        <div id="div_img_act_info"><img src="" alt="" /></div>
                        <p className="p_act_info"><strong>Description: </strong>{props.activity.description}</p>
                        <p className="p_act_info"><strong>Price: </strong>{props.activity.price}€</p>
                        <p className="p_act_info"><strong>Location: </strong>{props.activity.location}</p>
                        <p className="p_act_info"><strong>Date: </strong>{props.activity.start}</p>
                        <p className="p_act_info"><strong>Duration: </strong>{props.activity.duration}</p>
                        <p className="p_act_info"><strong>Capacity: </strong>{props.activity.capacity}</p>
                        <p className="p_act_info"><strong>Teacher`s name: </strong><a href={route('allActivities.index')}>{props.teacher.name}</a></p>
                        <p className="p_act_info"><strong>Teacher qualifications: </strong>{props.teacher.qualifications}</p>
                        <p className="p_act_info"><strong>Teacher age: </strong>{props.teacher.age}</p>
                        <div id="cont_btn_act_info">
                            <PrimaryButton><a className='go_back_button' href={route('register')}>Register to book activity</a></PrimaryButton>
                            <PrimaryButton> <a className='go_back_button' href={route('allActivities.index')}>Go back</a> </PrimaryButton>
                        </div>

                    </div>
                    <Footer />
                </WelcomeLayout>
            )}
        </>
    );
}