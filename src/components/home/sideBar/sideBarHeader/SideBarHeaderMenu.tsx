import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';

export function SideBarHeaderMenu(){
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    function handleClick(event: React.MouseEvent<HTMLElement>){
      setAnchorEl(event.currentTarget);
    }

    function handleClose(){
      setAnchorEl(null);
    }

    function createRoom(){
        handleClose();
    }

    function SignOut(){
        handleClose();
    }

    return (
        <>
            <IconButton
                onClick={handleClick}>
                <MoreVertIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}>
                <MenuItem onClick={createRoom}>Create a new chatroom</MenuItem>
                <MenuItem onClick={SignOut}>Sign Out</MenuItem>
            </Menu>
        </>
    )
}