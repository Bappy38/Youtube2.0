export const toFormattedNumber = (number) => {

    if (number >= 1e9)
        return `${(number / 1e9).toFixed(1)}B`;
    if (number >= 1e6)
        return `${(number / 1e6).toFixed(1)}M`;
    if (number >= 1e3)
        return `${(number / 1e3).toFixed(0)}K`;
    return number;
}

export const toFormattedPositiveNumber = (number) => {

    if (number >= 1e9)
        return `${(number / 1e9).toFixed(1)}B`;
    if (number >= 1e6)
        return `${(number / 1e6).toFixed(1)}M`;
    if (number >= 1e3)
        return `${(number / 1e3).toFixed(0)}K`;
    return number === 0 ? '' : number;
}