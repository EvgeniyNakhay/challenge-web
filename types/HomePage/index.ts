

interface HomePage {
    data: {
        id: number
        date: string,
        tasks?: string[]
        task?: string,
    }
}

interface TaskProgress {
    text: string | undefined
}