import { Card, CardContent, Typography } from "@mui/material";

const InfoCard = () => {
    return (
        <Card xs={{ minWidth: 275 }}>
            <CardContent>
                <Typography
                    sx={{ fontSize: 16 }}
                    color="text.secondary"
                    gutterBottom
                >
                    Résultat
                </Typography>
            </CardContent>
        </Card>
    );
};
export default InfoCard;
