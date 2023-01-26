import { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from "react";

export const Input = forwardRef<
    HTMLInputElement,
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
>(({ className, ...rest }, ref) => {
    return (
        <input
            className={`px-2 py-1 border border-gray-600 focus:border-blue-500 outline-none rounded w-full ${className}`}
            {...rest}
            ref={ref}
        />
    );
});
