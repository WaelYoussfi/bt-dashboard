import {
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    Typography,
} from "@mui/material";

const InfoCard = (props) => {
    let flwidth = 6;
    if (props.accuracy === null && props.result === null) {
        return null;
    }
    if (props.accuracy === false) {
        flwidth = 12;
        console.log(flwidth);
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={flwidth}>
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
                    {/* <CardActions>
                        <Button size="small">Savoir Plus</Button>
                    </CardActions> */}
                </Card>
            </Grid>
            {props.accuracy && (
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
                                {props.accuracy + "%"}
                            </Typography>
                        </CardContent>
                        {/* <CardActions>
                        <Button size="small">Savoir Plus</Button>
                    </CardActions> */}
                    </Card>
                </Grid>
            )}
        </Grid>
    );
};
export default InfoCard;
