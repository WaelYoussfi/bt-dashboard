import ImageCard from "./cards/imageCard";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Snackbar, IconButton, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { Fragment, useState } from "react";
import InfoCard from "./cards/infoCard";

const Input = styled("input")({
    display: "none",
});

const ImageInput = (props) => {
    const [file, setFile] = useState(null);
    const [imgSeg, setImgSeg] = useState(null);
    const [accuracy, setAccuracy] = useState(null);
    const [result, setResult] = useState(null);
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
    const handleSend = () => {
        //send the image
        //console.log(file);
        fetch(
            "http://c73b-154-111-84-246.ngrok.io/mask_classification/resnet50/no16.jpg?fbclid=IwAR0CuOQA31TCFQZNcdr1xjBk2hvi8nQ_vpaD0fHgCHuyQ-Q4bgUZiAI_-wc"
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setResult(data.test);
                setAccuracy(data.accuracy);
            });

        setMessage("Votre X-ray a été envoyé avec succès!");
        setOpen(true);
        //console.log(response);

        if (!imgSeg) {
            setImgSeg(false);
        }
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
            </Grid>
            <Grid item xs={2}>
                <label htmlFor="send-btn">
                    <Button
                        color="success"
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
                <ImageCard img={file} height={250} />
            </Grid>

            <Grid item xs={4}>
                {imgSeg && <ImageCard img={file} height={250} />}
            </Grid>
            <Grid item xs={12}>
                <InfoCard accuracy={accuracy} result={result} />
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
