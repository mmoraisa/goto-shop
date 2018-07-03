export const convertToFixedDecimal = value => value
                                                .toFixed(2)
                                                .replace('.',',')