import { Button, Grid } from "@mui/material";
import ImageInput from "./input";

const Classification = (props) => {
    console.log(props.model);
    if (props.model === null) {
        return null;
    }
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <ImageInput {...props.url} />
            </Grid>
            <Grid item xs={12}>
                <Button
                    variant="contained"
                    color="error"
                    onClick={() => {
                        props.setModel(null);
                        props.setLabel("choisir modele");
                    }}
                >
                    réinitialisation
                </Button>
            </Grid>
        </Grid>
    );
};

export default Classification;
