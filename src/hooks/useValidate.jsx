export function useValidate(){
    function validateInputNumber(input){
        const validateNumber = input.replace(/[^0-9]/g, '')
        return validateNumber
    }

    function validateInputText(input){
        const validateText = input.replace(/[^ A-Za-z]/g, '')
        return validateText 
    }
    
    return {validateInputNumber, validateInputText}
}