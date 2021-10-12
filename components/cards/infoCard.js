import {
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
} from "@mui/material";

const InfoCard = (props) => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={6}>
                <Card sx={{ minWidth: 275, textAlign: "center" }}>
                    <CardContent>
                        <Typography
                            sx={{ fontSize: 16 }}
                            color="text.secondary"
                            gutterBottom
                        >
                            Résultat
                        </Typography>
                        <Typography variant="h5" component="div">
                            {props.result}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Savoir Plus</Button>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={6}>
                <Card sx={{ minWidth: 275, textAlign: "center" }}>
                    <CardContent>
                        <Typography
                            sx={{ fontSize: 16 }}
                            color="text.secondary"
                            gutterBottom
                        >
                            Exactitude
                        </Typography>
                        <Typography variant="h5" component="div">
                            {props.accuracy}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Savoir Plus</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
};
export default InfoCard;
