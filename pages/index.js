import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Grid,
    Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Home() {
    return (
        <Grid container spacing={4}>
            <Grid item xs={6}>
                <Typography variant="h5">Segmentations</Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h5">Models</Typography>
            </Grid>
            <Grid item xs={6}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography variant="subtitle1">Mask R-CNN</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Corrupti incidunt delectus deserunt quibusdam,
                            ullam ad eos minima ut vitae quidem dolore dolorum
                            consequatur totam explicabo aliquam. Esse alias a
                            nemo?
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography variant="subtitle1">Unet</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Corrupti incidunt delectus deserunt quibusdam,
                            ullam ad eos minima ut vitae quidem dolore dolorum
                            consequatur totam explicabo aliquam. Esse alias a
                            nemo?
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
            <Grid item xs={6}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="pane31a-header"
                    >
                        <Typography variant="subtitle1">InceptionV3</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Corrupti incidunt delectus deserunt quibusdam,
                            ullam ad eos minima ut vitae quidem dolore dolorum
                            consequatur totam explicabo aliquam. Esse alias a
                            nemo?
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                    >
                        <Typography variant="subtitle1">MobileNet</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Corrupti incidunt delectus deserunt quibusdam,
                            ullam ad eos minima ut vitae quidem dolore dolorum
                            consequatur totam explicabo aliquam. Esse alias a
                            nemo?
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel5a-content"
                        id="panel5a-header"
                    >
                        <Typography variant="subtitle1">ResNet50</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Corrupti incidunt delectus deserunt quibusdam,
                            ullam ad eos minima ut vitae quidem dolore dolorum
                            consequatur totam explicabo aliquam. Esse alias a
                            nemo?
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel6a-content"
                        id="panel6a-header"
                    >
                        <Typography variant="subtitle1">VGG16</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Corrupti incidunt delectus deserunt quibusdam,
                            ullam ad eos minima ut vitae quidem dolore dolorum
                            consequatur totam explicabo aliquam. Esse alias a
                            nemo?
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel7a-content"
                        id="panel7a-header"
                    >
                        <Typography variant="subtitle1">VGG19</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography variant="body2">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Corrupti incidunt delectus deserunt quibusdam,
                            ullam ad eos minima ut vitae quidem dolore dolorum
                            consequatur totam explicabo aliquam. Esse alias a
                            nemo?
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Grid>
        </Grid>
    );
}
