import NavLink from '@/Components/NavLink';


export default function WelcomeLayout({ children }) {
    return (
        <div className="flex flex-col">
            <div className='flex'>
                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                    <NavLink href={route('allActivities.index')} active={route().current('allActivities.index')}>
                        All activities
                    </NavLink>
                </div>
                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                    <NavLink href={route('contact_us')} active={route().current('contact_us')}>
                        Contact us
                    </NavLink>
                </div>
            </div>

            <div>
                {children}
            </div>
        </div>
    );
}