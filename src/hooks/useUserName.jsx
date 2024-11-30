

export function useUserName(){
    const user = localStorage.getItem('user')
    const nameUser = user.split(' ')

    return nameUser[0]
}