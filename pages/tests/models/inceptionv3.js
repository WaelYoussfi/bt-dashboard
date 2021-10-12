import { Grid } from "@mui/material";
import InfoCard from "../../../components/cards/InfoCard";
import ImageInput from "../../../components/Input";

const Inceptionv3 = () => {
    const rslt = "";
    const acrcy = "";
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <ImageInput />
            </Grid>
            <Grid item xs={12}>
                <InfoCard result={rslt} accuracy={acrcy} />
            </Grid>
        </Grid>
    );
};

export default Inceptionv3;
