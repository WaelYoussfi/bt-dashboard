import { Button } from "@mui/material";
import InfoCard from "./cards/infoCard";
import ImageInput from "./input";

const Segmentation = (props) => {
    if (props.model === null) {
        return null;
    }
    return (
        <>
            <ImageInput />
            <InfoCard />
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
        </>
    );
};

export default Segmentation;
