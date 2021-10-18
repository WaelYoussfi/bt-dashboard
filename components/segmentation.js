import { Button, Grid } from "@mui/material";
import ImageInput from "./input";

const Segmentation = (props) => {
    if (props.model === null) {
        return null;
    }
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <ImageInput />
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => {
                            props.setModel(null);
                            props.setLabel("choisir segmentation");
                        }}
                    >
                        réinitialisation
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default Segmentation;
