import ImageCard from "./cards/imageCard";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Snackbar, IconButton, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { Fragment, useState } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import InfoCard from "./cards/infoCard";
import app from "../public/firebaseConfig";

const Input = styled("input")({
    display: "none",
});

const storage = getStorage(app);

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
    let url;
    if (props.model === "maskrcnn") {
        url = "http://1a3e-35-245-97-193.ngrok.io/segmentation/maskrcnn";
    } else
        url =
            "http://e6bf-35-186-160-248.ngrok.io/" +
            props.typeModel +
            props.aug +
            props.model;

    console.log(url);
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
            setMessage("Veuillez télécharger un fichier de type image");
            setOpen(true);
            return 0;
        }
        setOpen(false);
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
        setAccuracy(null);
        setResult(null);
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
        setMessage("Attendez votre image est en cours de traitement");
        setOpen(true);
        fetch(url, {
            method: "POST",
            body: formdata,
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data);
                const pathReference = ref(storage, data.image_path);
                getDownloadURL(pathReference)
                    .then((url) => {
                        setImgSeg(url);
                        setOpen(false);
                    })
                    .catch((e) => console.log(e));
                setResult(data.test);
                setAccuracy(data.accuracy);
            })
            .catch((e) => console.log(e));

        if (!imgSeg) {
            setImgSeg(false);
        }
        if (accuracy === undefined) {
            setAccuracy(false);
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
                <ImageCard img={file} />
            </Grid>

            <Grid item xs={4}>
                {imgSeg && <ImageCard img={imgSeg} />}
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
