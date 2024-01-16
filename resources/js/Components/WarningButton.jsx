export default function WarningButton({ className = '', disabled, children, ...props }) {
    return (
        <button 
            {...props}
            className={
                `boton_edit_cards inline-flex items-center px-2 py-2 bg-yellow-400 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-yellow-500 focus:bg-yellow-700 active:bg-gray-900 focus:outline-none transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}