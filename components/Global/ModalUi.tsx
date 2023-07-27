import {Modal} from "@mui/material";
import React, {useState} from "react";
import {ModalUi} from "@/types/HomePage";

const ModalUi: React.FC<ModalUi> = ({flag, children}) => {
    const [open, setOpen] = useState(flag);

    return (
        <>
            <Modal open={flag} sx={{
                marginTop: '25vh',
                marginLeft: '38vw',
                width: '20em',
            }}>
                {children}
            </Modal>
        </>
    )
}

export default ModalUi;