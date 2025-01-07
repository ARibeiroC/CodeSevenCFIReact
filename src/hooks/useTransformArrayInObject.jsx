export function useTransformArrayInObject(array, keys){
    const candidate = {}

    array.forEach((item, index)=>{
        candidate[keys[index]] = item
    })
    
    candidate["passwordCandidate"] = "123"

    return candidate
}