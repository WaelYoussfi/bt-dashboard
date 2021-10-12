import {
    AppBar,
    CssBaseline,
    Toolbar,
    Typography,
    Container,
} from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "../components/navbar";
const Layout = ({ children }) => {
    return (
        <>
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
        </>
    );
};

export default Layout;
