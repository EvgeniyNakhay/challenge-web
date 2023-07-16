

interface HomePage {
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