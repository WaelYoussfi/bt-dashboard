import InfoCard from "../../../components/cards/InfoCard";
import ImageInput from "../../../components/Input";

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
