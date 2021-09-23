import { AppBar, CssBaseline, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Footer from "../components/Footer";
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
            {/* <div>
                <h1>This is the dashboard</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima aliquid sed quisquam. Eius architecto molestias,
                    dolore dolorem aliquid aspernatur fugiat est obcaecati quam
                    necessitatibus, modi pariatur. Voluptatum quo sequi quam!
                </p>
            </div>
            <Footer></Footer> */}
        </Box>
    );
}
