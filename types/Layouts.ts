import React from "react";

export interface Layouts {
    children: React.ReactElement
}

export interface NavBarTypes {
    children: React.ReactElement
}

export interface TitilePage{
    title: string,
    flag: boolean
}

export interface CalendarTypes {
    data: {
        id: number,
        day: number,
        status: number | undefined
    }[],
    flag: boolean
}
