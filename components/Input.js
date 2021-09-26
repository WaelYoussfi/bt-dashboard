import PhotoCamera from "@mui/icons-material/PhotoCamera";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Stack, Snackbar, IconButton } from "@mui/material";
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

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
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
    };
    const handleSend = (event) => {
        //send the image
        console.log(file);
        setMessage("Votre X-ray a été envoyé avec succès!");
        setOpen(true);
    };
    return (
        <Stack direction="row" alignItems="center" spacing={4}>
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
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={message}
                action={action}
            />
        </Stack>
    );
};

export default ImageInput;
