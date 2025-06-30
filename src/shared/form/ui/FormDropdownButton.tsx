import { Dispatch, SetStateAction } from 'react';
import FormDropdownToggle from './FormDropdownToggle';
import {selectOptions, selectOptionsType } from "@/features/signup/model/SelectOptions"

interface FormDropdownButtonProps {
    label: string;
    data: keyof selectOptionsType;
    open: string | undefined;
    setOpen: Dispatch<SetStateAction<string | undefined>>;
    placeholder: string;
    isRequired?: boolean;
}

export default function FormDropdownButton({ open, setOpen, data, label, placeholder, isRequired }: FormDropdownButtonProps) {
    function handleClick() {
        setOpen(open === label ? undefined : label);
    }

    return (
        <div className="w-full">
            {label && (
                <p className="cursor-default font-bold !-mb-3">
                    {label}
                    {isRequired && <span className="text-mainRed">*</span>}
                </p>
            )}
            <button
                type="button"
                onClick={() => handleClick()}
                className={"cursor-pointer border-1 border-gray4 rounded-[5px] bg-mainWhite text-left text-gray4 text-[20px] w-full min-h-[60px] !my-[15px]" + (open === label ? " !pt-[14px]" : "")}
            >
                <div className="flex w-full">
                    <p className="grow !pl-[17px]">{placeholder}</p>
                    <p className='!pr-[20px]'>화살표</p>
                </div>
                {open === label && <FormDropdownToggle data={selectOptions[data]} />}
            </button>
        </div>
    );
}
