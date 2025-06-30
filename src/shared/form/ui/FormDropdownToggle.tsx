interface FormDropdownToggleProps {
    data: string[];
}

export default function FormDropdownToggle({ data }: FormDropdownToggleProps) {
    return (
        <ul className="flex flex-wrap w-full !py-[25px] !pl-[17px]">
            {data.map(item => (
                <li className="rounded-[20px] bg-gray6 text-gray4 !px-[10px] !py-[5px] !mr-[15px] !my-[5px]" key={item}>
                    {item}
                </li>
            ))}
        </ul>
    );
}
