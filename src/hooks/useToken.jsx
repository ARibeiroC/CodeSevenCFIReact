import { useState } from "react"

export function createList(){
    const list = []
    for (let i = 33; i<=126; i++){
        if (i !== 43 && i !== 45 && i !== 95 && i !== 96 && i !== 61 && i !== 92 && i !== 124 && i !== 37){
            list.push(String.fromCharCode(i))
        }
    }
    return list
}   

export function useToken(){
    const list = createList()
    let index = null
    let chars = ''

    for (let i = 0; i <= 32; i++){
        index = Math.floor(Math.random() * list.length)
        chars = chars + list[index]
    }

    return chars
}