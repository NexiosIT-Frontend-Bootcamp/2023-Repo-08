import { Grid } from "@mui/material";
import { SideBar } from "../components/home/sideBar/SideBar";
import { Chat } from "../components/home/chat/Chat";

export function Home(){
    return (
        <>
            <Grid container style={{width: '100vw', height: '100vh', backgroundColor: 'blue'}}>
                <Grid item xs={3}>
                    <SideBar/>
                </Grid>
                <Grid item xs={9}>
                    <Chat/>
                </Grid>
            </Grid>
        </>
    )
}