import { Avatar, Stack } from "@mui/material";
import { useUserContext } from "../../../../utils/hooks/useUserContext";
import { SideBarHeaderMenu } from "./SideBarHeaderMenu";

export function SideBarHeader(){
    const { user } = useUserContext();

    return (
        <>
            <Stack direction="row" spacing={2} style={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}>
                <Avatar>{user?.username.substring(0,2).toUpperCase()}</Avatar>
                <p style={{margin: 'auto 10px'}}>{user?.username}</p>
                <SideBarHeaderMenu/>
            </Stack>
        </>
    )
}