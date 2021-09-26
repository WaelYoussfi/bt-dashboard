import { Card, CardMedia } from "@mui/material";

const ImageCard = (props) => {
    console.log(props);
    return (
        <Card sx={{ minWidth: 345 }}>
            <CardMedia
                component="img"
                height="200"
                image={props.img}
                alt="Choisir une image"
            />
        </Card>
    );
};

export default ImageCard;
