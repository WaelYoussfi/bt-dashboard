import { Button, Grid, Menu, MenuItem, Typography } from "@mui/material";
import Segmentation from "../components/segmentation";
import { segs } from "../public/constants";
import { useState } from "react";

const Segmentations = () => {
    const [model, setModel] = useState(null);
    const [label, setLabel] = useState("Choisir segmentation");
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
    const props = {
        url: {
            typeModel: "segmentation/",
            aug: "",
            model: model,
        },
        model: model,
        setModel: setModel,
        setLabel: setLabel,
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
                        Segmentations
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" onClick={handleClick}>
                        {label}
                    </Button>

                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                        {segs.map((item) => (
                            <MenuItem
                                key={item}
                                onClick={() => handleClose(item)}
                            >
                                {item}
                            </MenuItem>
                        ))}
                    </Menu>
                </Grid>
                <Grid item xs={12}>
                    <Segmentation {...props} />
                </Grid>
            </Grid>
        </>
    );
};

export default Segmentations;
