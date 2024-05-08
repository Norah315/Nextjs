import Link from "next/link";

const NavLink=({href, title}) => {
    return(
        <li href={href} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
        {title}
        </li>
    )
};

export default NavLink;