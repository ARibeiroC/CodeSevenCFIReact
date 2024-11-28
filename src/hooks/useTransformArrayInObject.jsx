export function useTransformArrayInObject(array, fetch){
    const object = {}
    const keys = ["registerCandidate","nameComplete","emailCandidate","telephoneCandidate","nameResponsible","cellphoneResponsible"]
    keys.forEach((key, index)=>{
        object[key] = array[index]
    })
    object["passwordCandidate"] = "123"
    // fetch(object, "POST")
}