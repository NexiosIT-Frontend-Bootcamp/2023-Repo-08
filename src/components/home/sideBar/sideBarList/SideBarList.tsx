import { Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";

export function SideBarList(){
    // const [messages, setMessages] = useState([]);
    // const webSocket = useRef(null);

    // useEffect(() => {
    //     webSocket.current = new WebSocket("ws://url");
    //     webSocket.current.onmessage = (message) => {
    //         setMessages(prev => [...prev, message.data]);
    //     };
    //     return () => webSocket.current.close();
    // }, []);
    // return <p>{messages.join(" ")}</p>;

    return (
        <>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemAvatar><Avatar>TE</Avatar></ListItemAvatar>
                        <ListItemText primary="test" secondary={"last message"}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemAvatar><Avatar>TE</Avatar></ListItemAvatar>
                        <ListItemText primary="test" secondary={"last message"}/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemAvatar><Avatar>TE</Avatar></ListItemAvatar>
                        <ListItemText primary="test" secondary={"last message"}/>
                    </ListItemButton>
                </ListItem>
            </List>
        </>
    )
}