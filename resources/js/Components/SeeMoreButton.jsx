export default function SeeMoreButton({ className = '', disabled, children, ...props }) {
    return (
        <button 
            {...props}
            className={
                `boton_edit_cards inline-flex items-center px-2 py-2 bg-green-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-500 focus:bg-green-700 active:bg-green-900 focus:outline-none transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}