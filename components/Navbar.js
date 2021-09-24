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
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CompareIcon from "@mui/icons-material/Compare";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import { useState } from "react";
const drawerWidth = 240;

const Navbar = () => {
    const [item, setItem] = useState("Accueil");
    const handleItemClick = (e, text) => {
        setItem(text);
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
                    {["UNet", "Mask R-CNN"].map((text) => (
                        <Link
                            href={`/tests/segmentations/${encodeURIComponent(
                                text.replace(" ", "").toLowerCase()
                            )}`}
                        >
                            <ListItem
                                button
                                key={text}
                                selected={text === item}
                                onClick={(event) =>
                                    handleItemClick(event, text)
                                }
                            >
                                <ListItemIcon>
                                    <ImageSearchIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Link>
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
                        <Link
                            href={`/tests/models/${encodeURIComponent(
                                text
                            ).toLowerCase()}`}
                        >
                            <ListItem
                                button
                                key={text}
                                selected={text === item}
                                onClick={(event) =>
                                    handleItemClick(event, text)
                                }
                            >
                                <ListItemIcon>
                                    <DocumentScannerIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
                <Divider />
                <List>
                    <Link href="/tests/comparison">
                        <ListItem
                            button
                            selected={"comparaison" === item}
                            onClick={(event) =>
                                handleItemClick(event, "comparaison")
                            }
                        >
                            <ListItemIcon>
                                <CompareIcon />
                            </ListItemIcon>
                            <ListItemText primary="Comparaison"></ListItemText>
                        </ListItem>
                    </Link>
                </List>
            </Box>
        </Drawer>
    );
};

export default Navbar;
