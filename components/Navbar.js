import { Box } from "@mui/system";
import {
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemText,
    Toolbar,
} from "@mui/material";
const drawerWidth = 240;

const Navbar = () => {
    return (
        <>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: "auto" }}>
                    <List>
                        {["UNet", "Mask R-CNN"].map((text) => (
                            <ListItem button key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {[
                            "VGG16",
                            "VGG19",
                            "ResNet50",
                            "InceptionV3",
                            "MobileNet",
                        ].map((text) => (
                            <ListItem button key={text}>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        <ListItem button>
                            <ListItemText primary="camparaison"></ListItemText>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
            <div className="logoTests">
                <h1>Tests List (navbar)</h1>
            </div>
            <a>Test</a>
            <a>Test</a>
            <a>Test</a>
        </>
    );
};

export default Navbar;
