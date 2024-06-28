import { IconType } from "react-icons"
import { FaHome } from "react-icons/fa"

interface Navlinks {
    id:number, 
    lable:string , 
    icon? : IconType
    path:string , 
}


export const NavLinks:Navlinks[] = [
    {id:1, lable:"Home", icon:FaHome, path:"/"}, 
    {id:2 , lable:"Properties", icon:FaHome , path:"./page1"}, 
    {id:3 , lable:"Services", icon:FaHome , path:"./page2"}, 
    {id:4 , lable:"About", icon:FaHome , path:"./page3"}, 
    {id:4 , lable:"Contact", icon:FaHome , path:"./page4"}, 
] 