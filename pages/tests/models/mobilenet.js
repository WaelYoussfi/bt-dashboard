import InfoCard from "../../../components/cards/infoCard";
import ImageInput from "../../../components/input";

const Mobilenet = () => {
    const rslt = "Négatif";
    const acrcy = "98%";
    return (
        <>
            <ImageInput />
            <InfoCard result={rslt} accuracy={acrcy} />
        </>
    );
};

export default Mobilenet;
