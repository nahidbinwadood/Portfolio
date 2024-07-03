import NavLink from "./NavLink";

 

const MenuOverlay = ({links}) => {
    return (
        <ul className="flex flex-col p-5 items-center">
            {
                links.map((link,index)=>(
                   <li key={index}>
                     <NavLink className="visited:text-white" href={link.href} title={link.title}/>
                   </li>
                ))
            }
        </ul>
    );
};

export default MenuOverlay;