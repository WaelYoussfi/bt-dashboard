import { Button, Grid, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import Classification from "../../components/classification";
import { models } from "../../public/constants";
const AvecAugmentation = () => {
    const [model, setModel] = useState(null);
    const [label, setLabel] = useState("Choisir modele");
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (item) => {
        console.log(item);
        setAnchorEl(null);
        if (typeof item !== "string") {
            return;
        }
        setLabel(item);
        setModel(item);
    };

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ textAlign: "center" }}
                    >
                        Classification sans mask avec augmentation
                    </Typography>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained" onClick={handleClick}>
                        {label}
                    </Button>

                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                        {models.map((item) => (
                            <MenuItem
                                key={item}
                                onClick={() => handleClose(item)}
                            >
                                {item}
                            </MenuItem>
                        ))}
                    </Menu>
                </Grid>
                <Grid item xs={10}>
                    <Classification
                        model={model}
                        setModel={setModel}
                        setLabel={setLabel}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default AvecAugmentation;
