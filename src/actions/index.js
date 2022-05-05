export const increment = (numberOfIncrement) => {
    return {
        type: 'INCREMENT',
        payload: numberOfIncrement
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}