import { Card, CardMedia } from "@mui/material";

const ImageCard = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image=""
                alt="Image Segmenté"
            />
        </Card>
    );
};

export default ImageCard;
