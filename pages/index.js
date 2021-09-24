import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "../components/Navbar";

export default function Home() {
    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
                <Toolbar>
                    <Typography variant="h5" noWrap component="div">
                        Détecteur de tumeur cérébrale
                    </Typography>
                </Toolbar>
            </AppBar>
            <Navbar />
        </Box>
    );
}
