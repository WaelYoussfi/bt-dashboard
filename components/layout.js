import { Brightness4, Brightness7 } from "@mui/icons-material";
import {
    AppBar,
    CssBaseline,
    Toolbar,
    Typography,
    Container,
    createTheme,
    ThemeProvider,
    IconButton,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Navbar from "../components/navbar";
const Layout = ({ children }) => {
    const dark = createTheme({
        palette: {
            mode: "dark",
        },
    });
    const light = createTheme({
        palette: {
            mode: "light",
        },
    });
    const [theme, setTheme] = useState(dark);
    const handleTheme = () => {
        if (theme.palette.mode === "dark") setTheme(light);
        else setTheme(dark);
        console.log(theme.palette.mode);
    };
    return (
        <>
            <ThemeProvider theme={theme}>
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
                            <Box
                                //ml={50vw}
                                sx={{
                                    ml: "auto",
                                }}
                            >
                                {theme.palette.mode} mode
                                <IconButton onClick={() => handleTheme()}>
                                    {theme.palette.mode === "dark" ? (
                                        <Brightness7 />
                                    ) : (
                                        <Brightness4 />
                                    )}
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </AppBar>
                    <Navbar />
                    <Box
                        component="main"
                        sx={{ flexGrow: 1, height: "100vh", overflow: "auto" }}
                    >
                        <Toolbar />
                        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                            <main>{children}</main>
                        </Container>
                    </Box>
                </Box>
            </ThemeProvider>
        </>
    );
};

export default Layout;
