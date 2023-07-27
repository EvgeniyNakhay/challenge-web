import {Box, Step, StepLabel, Stepper, Typography} from "@mui/material";
import {useState} from "react";

const steps = [
    {
        label: "Основное"
    },
    {
        label: "Настройки"
    }
]

const LeftMenuCreate = () => {
    const [currentStep, setCurrentStep] = useState(0);

    return (
        <Box sx={{
            background: "#F7F8FC",
            height: "43vmax",
            boxShadow: "0px -5px 5px -5px rgba(100, 106, 111, 0.10)",
            padding: '5vh',
            paddingLeft: "7vh"
        }}>
            <Stepper orientation={"vertical"}>
                {
                    steps.map((step, index) => (
                        <Step key={step.label}>
                            <StepLabel>
                                <Typography sx={{color: "#676FE1"}}>
                                    {step.label}
                                </Typography>
                            </StepLabel>
                        </Step>
                    ))
                }
            </Stepper>
        </Box>
    )
}

export default LeftMenuCreate