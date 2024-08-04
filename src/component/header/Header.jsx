import {NavLink} from "react-router-dom";
const Header = () => {
    return (
        <div className="bg-[#7eff05] py-4  " >
            <div className="logo">

            </div>
            <div className="navbar px-10 ">
                <nav>
                    <ul className="flex flex-row justify-between " >
                        <li> <NavLink to={"/registration"}  >Registration</NavLink> </li>
                        <li> <NavLink to={"/login"} >Login</NavLink> </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
