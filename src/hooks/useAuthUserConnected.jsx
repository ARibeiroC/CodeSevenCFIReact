export function useAuthLoginConnected(){
    let isConnected = null
    if (!localStorage.getItem('user')){
        return isConnected = false
    } else {
        return isConnected = true
    }
}