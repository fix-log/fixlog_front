import { UseFormReturn } from "react-hook-form";

interface FormRadioSelectProps {
    name: string;
    button: string[];
    from: UseFormReturn;
    label?: string;
    isRequired?: boolean;
}

export default function FormRadioSelect ({label, name, button, form, isRequired}:FormRadioSelectProps) {
    return (
        <div className="w-full">
            {label && (
                <p className="cursor-default font-bold !-mb-3">
                    {label}
                    {isRequired && <span className="text-mainRed">*</span>}
                </p>
            )}
            <ul className="flex w-full !my-[15px]">
                {button.map(item => (<button key={item} className="cursor-pointer grow border border-gray4 rounded-[5px] text-gray4 text-center leading-14 h-[60px] !mr-[20px] last:!mr-0">{item}</button>))}
            </ul>
        </div>
    )
}