import React from "react";


export interface HomePage {
    data: {
        id: number
        date: string,
        tasks?: string[]
        task?: string,
        img?: boolean
    }
}

interface TaskProgress {
    text: string | undefined
}

export interface ModalUi {
    flag: boolean,
    children:  React.ReactElement
}