export function useTransformArrayInObject(array){
    const object = {}
    const keys = ["registerCandidate","nameComplete","emailCandidate","telephoneCandidate","nameResponsible","cellphoneResponsible"]
    keys.forEach((key, index)=>{
        object[key] = array[index]
    })
    object["passwordCandidate"] = "123"
}