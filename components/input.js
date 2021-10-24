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
    const [image, setImage] = useState(null);
    const [file, setFile] = useState(null);
    const [imgSeg, setImgSeg] = useState(null);
    const [accuracy, setAccuracy] = useState(null);
    const [result, setResult] = useState(null);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState(
        "Veuillez télécharger un fichier de type image"
    );

    const url =
        "http://d860-34-70-79-241.ngrok.io/" +
        props.typeModel +
        props.aug +
        props.model;

    // console.log(url);
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
        setImage(f);
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setFile(reader.result);
                console.log(file);
                console.log(image);
            }
        };
        reader.readAsDataURL(f);
    };
    const handleSend = () => {
        //send the image

        if (file === null) {
            setMessage("Choisir une image svp");
            setOpen(true);
            return 0;
        }

        let formdata = new FormData();
        formdata.append("image", image);

        fetch(url, {
            method: "POST",
            body: formdata,
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                setAccuracy(data.accuracy);
                setResult(data.test);
            })
            .catch((e) => console.log(e));

        setMessage("Votre X-ray a été envoyé avec succès!");
        setOpen(true);

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
                {imgSeg && <ImageCard img={imgSeg} height={250} />}
            </Grid>
            <Grid item xs={12}>
                <InfoCard accuracy={accuracy} result={result} />
            </Grid>
            <Snackbar
                open={open}
                autoHideDuration={5000}
                onClose={handleClose}
                message={message}
                action={action}
            />
        </Grid>
    );
};

export default ImageInput;
