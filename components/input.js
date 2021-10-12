import ImageCard from "./cards/imageCard";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import {
    Button,
    Snackbar,
    IconButton,
    Grid,
    Switch,
    FormGroup,
    FormControlLabel,
} from "@mui/material";
import { styled } from "@mui/system";
import { Fragment, useState } from "react";

const Input = styled("input")({
    display: "none",
});

const ImageInput = () => {
    const [file, setFile] = useState(null);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState(
        "Veuillez télécharger un fichier de type image"
    );
    const [checked, setChecked] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };
    const handleSwitch = (event) => {
        setChecked(event.target.checked);
    };
    //action of the snackbar
    const action = (
        <Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </Fragment>
    );
    const handleFile = (e) => {
        //check the type of file and preview if image
        const f = e.target.files[0];
        if (f.type.substr(0, 5) !== "image") {
            setOpen(true);
        }
        setFile(f);
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setFile(reader.result);
            }
        };
        reader.readAsDataURL(f);
    };
    const handleSend = (event) => {
        //send the image
        console.log(file);
        setMessage("Votre X-ray a été envoyé avec succès!");
        setOpen(true);
    };
    return (
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <label htmlFor="icon-btn">
                    <Input
                        accept="image/*"
                        id="icon-btn"
                        type="file"
                        onChange={handleFile}
                    />
                    <Button
                        variant="outlined"
                        startIcon={<PhotoCamera />}
                        component="span"
                    >
                        X-RAY
                    </Button>
                </label>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={checked}
                                onChange={handleSwitch}
                                inputProps={{ "aria-label": "controlled" }}
                            />
                        }
                        label="Augmentation"
                    />
                </FormGroup>
            </Grid>
            <Grid item xs={2}>
                <label htmlFor="send-btn">
                    <Button
                        variant="contained"
                        endIcon={<SendIcon />}
                        onClick={(event) => {
                            handleSend(event);
                        }}
                    >
                        Envoyer
                    </Button>
                </label>
            </Grid>
            <Grid item xs={4}>
                <ImageCard img={file} />
            </Grid>
            <Grid item xs={4}>
                <ImageCard img={file} />
            </Grid>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={message}
                action={action}
            />
        </Grid>
    );
};

export default ImageInput;
