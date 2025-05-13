// import logo from '../assets/logo.svg';
// import {createContext, useContext, useState} from "react"
// import PropTypes from 'prop-types';
// import {RiArrowDownSLine, RiArrowLeftSLine, RiArrowRightSLine, RiArrowUpSLine} from "react-icons/ri";
// import {Link} from "react-router-dom";
//
// const NavbarContext = createContext();
//
// const Navbar = ({children}) => {
//
//     const [expanded, setExpanded] = useState(true)
//     return (
//         <>
//             <aside className="h-screen">
//                 <nav className="h-full flex flex-col bg-white border-r shadow-sm">
//                     <div className="p-4 pb-8 pt-8 flex justify-between items-center">
//                         <img src={logo} className={`overflow-hidden transition-all ${expanded ? "w-32" : "w-0"}`}/>
//                         <button onClick={() => setExpanded((curr) => !curr)}
//                                 className="rounded-lg hover:bg-gray-100">
//                             {expanded ? <RiArrowLeftSLine className="h-8 w-8"/> :
//                                 <RiArrowRightSLine className="h-8 w-8"/>}
//                         </button>
//                     </div>
//
//                     <NavbarContext.Provider value={{expanded}}>
//                         <ul className="flex-1 px-3">{children}</ul>
//                     </NavbarContext.Provider>
//                 </nav>
//             </aside>
//         </>
//     )
// }
//
// Navbar.propTypes = {
//     children: PropTypes.node.isRequired
// };
//
// export default Navbar;
//
// const NavbarItem = ({ icon, text, active, alert, to, dropdownItems }) => {
//     const { expanded } = useContext(NavbarContext);
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//
//     const handleDropdownToggle = () => {
//         setDropdownOpen((prevState) => !prevState);
//     };
//
//     return (
//         <li className={`relative flex flex-col py-2 px-3 my-1 font-light rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr bg-main-blue-color-op-15 main-blue-color" : "hover:bg-indigo-50 main-grey"}`}>
//             <div className="flex items-center justify-between w-full">
//                 <Link to={to} className="flex items-center w-full" onClick={dropdownItems ? handleDropdownToggle : undefined}>
//                     {icon}
//                     <span className={`overflow-hidden transition-all ${expanded ? "w-40 ml-3" : "w-0"}`}>{text}</span>
//                 </Link>
//                 {dropdownItems && (
//                     <button onClick={handleDropdownToggle} className="ml-3">
//                         {dropdownOpen ? <RiArrowUpSLine className="h-5 w-5" /> : <RiArrowDownSLine className="h-5 w-5" />}
//                     </button>
//                 )}
//             </div>
//             {alert && (
//                 <div className={`absolute right-2 w-2 h-2 rounded bg-main-blue-color ${expanded ? "" : "top-2"}`}></div>
//             )}
//             {!expanded && (
//                 <div
//                     className={`absolute left-full rounded-md px-2 py-1 ml-6 bg-main-blue-color-op-15 main-blue-color text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
//                     {text}
//                 </div>
//             )}
//
//             {/* Dropdown Menu (Vertical Expansion) */}
//             {dropdownOpen && (
//                 <ul className={`mt-2 space-y-1 ${expanded ? "block" : "hidden"}`}>
//                     {dropdownItems.map((item, index) => (
//                         <li key={index} className="py-1">
//                             <Link to={item.to} className="text-sm flex items-center pl-8">
//                                 {item.icon && <span className="mr-2">{item.icon}</span>}
//                                 {item.text}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </li>
//     );
// };
//
// NavbarItem.propTypes = {
//     icon: PropTypes.element.isRequired,
//     text: PropTypes.string.isRequired,
//     active: PropTypes.bool,
//     alert: PropTypes.bool,
//     to: PropTypes.string.isRequired,
//     dropdownItems: PropTypes.arrayOf(
//         PropTypes.shape({
//             to: PropTypes.string.isRequired,
//             text: PropTypes.string.isRequired,
//             icon: PropTypes.element,
//         })
//     ),
// };
//
// export {NavbarItem};