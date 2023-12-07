import { Divider } from "@mui/material";
import { SideBarHeader } from "./sideBarHeader/SideBarHeader";
import { SideBarList } from "./sideBarList/SideBarList";

export function SideBar(){
    return (
        <div style={{width: '100%'}}>
            <SideBarHeader/>
            <Divider/>
            <SideBarList/>
        </div>
    )
}