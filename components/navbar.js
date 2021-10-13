import Link from "next/link";
import { Box } from "@mui/system";
import {
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    ListItemIcon,
    Menu,
    MenuItem,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CompareIcon from "@mui/icons-material/Compare";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import { useState } from "react";
const drawerWidth = 240;

const Navbar = () => {
    const sansAug = "Classification sans augmentation";
    const avecAug = "Classification avec augmentation";
    const [label, setlabel] = useState("Classification sans mask");
    const [item, setItem] = useState("Accueil");
    const handleItemClick = (e, text) => {
        setItem(text);
        setlabel("Classification sans mask");
    };

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (str) => {
        setAnchorEl(null);
        if (typeof str !== "string") {
            return;
        }
        setlabel(str);
    };

    return (
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
                    <Link href="/">
                        <ListItem
                            button
                            selected={item === "Accueil"}
                            onClick={(event) =>
                                handleItemClick(event, "Accueil")
                            }
                        >
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Accueil" />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <Link href="/segmentations">
                        <ListItem
                            button
                            selected={item === "Segmentation"}
                            onClick={(event) =>
                                handleItemClick(event, "Segmentation")
                            }
                        >
                            <ListItemIcon>
                                <ImageSearchIcon />
                            </ListItemIcon>
                            <ListItemText primary="Segmentation" />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <Link href="/classification/avecMask">
                        <ListItem
                            button
                            selected={item === "Classification avec mask"}
                            onClick={(event) =>
                                handleItemClick(
                                    event,
                                    "Classification avec mask"
                                )
                            }
                        >
                            <ListItemIcon>
                                <DocumentScannerIcon />
                            </ListItemIcon>
                            <ListItemText primary="Classification avec mask" />
                        </ListItem>
                    </Link>
                </List>
                <Divider />
                <List>
                    <ListItem
                        button
                        selected={item === "Classification"}
                        aria-controls="basic-menu"
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={(event) => {
                            handleItemClick(event, "Classification");
                            handleClick(event);
                        }}
                    >
                        <ListItemIcon>
                            <DocumentScannerIcon />
                        </ListItemIcon>
                        <ListItemText primary={label} />
                    </ListItem>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <Link href="/classification/sansAug">
                            <MenuItem onClick={() => handleClose(sansAug)}>
                                {sansAug}
                            </MenuItem>
                        </Link>
                        <Link href="/classification/avecAug">
                            <MenuItem onClick={() => handleClose(avecAug)}>
                                {avecAug}
                            </MenuItem>
                        </Link>
                    </Menu>
                </List>
                <Divider />
                <List>
                    <Link href="/">
                        <ListItem
                            button
                            selected={item === "Comparaison"}
                            onClick={(event) =>
                                handleItemClick(event, "Comparaison")
                            }
                        >
                            <ListItemIcon>
                                <CompareIcon />
                            </ListItemIcon>
                            <ListItemText primary="Comparaison" />
                        </ListItem>
                    </Link>
                </List>
            </Box>
        </Drawer>
    );
};

export default Navbar;
