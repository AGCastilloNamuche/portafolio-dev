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
    isReturn = false,
    returnkey
} : {
    array : readonly T[],
    key:K, 
    value:T[K], 
    returnkey:keyof T ,
    isReturn?:boolean,
}) : any => {
    const items = array.find((item) => value === item[key])
    if (!items) return ""
    return isReturn ? items[returnkey] : items 
}