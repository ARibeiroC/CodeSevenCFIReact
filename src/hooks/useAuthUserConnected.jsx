export function useAuthLoginConnected(){
    let isConnected = null
    if (!localStorage.getItem('token')){
        return isConnected = false
    } else {
        return isConnected = true
    }
}