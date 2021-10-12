import Segmentation from "../../../components/segmentation";

const Unet = () => {
    const rslt = "Négatif";
    const acrcy = "98%";
    return (
        // <>
        //     <ImageInput />
        //     <InfoCard result={rslt} accuracy={acrcy} />
        // </>
        <Segmentation />
    );
};
export default Unet;
