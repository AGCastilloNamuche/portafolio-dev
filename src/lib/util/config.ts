export const filters = <T, K extends keyof T>({
        array,
        key,
        value
} : {
        array : readonly T[], 
        key:K, 
        value:Array<T[K]> 
    }) : T[] =>  {
    
    return array.filter((item) => value.includes(item[key]))
}

export const findValue = <T, K extends keyof T> ({
    array,
    key,
    value,
    returnkey
} : {
    array : readonly T[],
    key:K, 
    value:T[K], 
    returnkey:keyof T 
}) : any => {
    const items = array.find((item) => value === item[key])
    return items ? items[returnkey] : ""
}