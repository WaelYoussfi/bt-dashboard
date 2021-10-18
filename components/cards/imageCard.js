import { Card, CardMedia } from "@mui/material";

const ImageCard = (props) => {
    if (props.img === null) return null;
    return (
        <Card sx={{ minWidth: 345 }}>
            <CardMedia
                component="img"
                height={props.height}
                image={props.img}
                alt="Choisir une image"
            />
        </Card>
    );
};

export default ImageCard;
