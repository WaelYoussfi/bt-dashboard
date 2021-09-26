import { Card, CardMedia } from "@mui/material";

const ImageCard = (img) => {
    console.log(img);
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={img.img}
                alt="Image Segmenté"
            />
        </Card>
    );
};

export default ImageCard;
