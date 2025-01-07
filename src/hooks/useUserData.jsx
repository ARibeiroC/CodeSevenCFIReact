export function useUserData(){
    const user = localStorage.getItem('user')
    const nameUser = user.split(' ')

    const id = localStorage.getItem('_id')

    return [nameUser[0], id] 
}