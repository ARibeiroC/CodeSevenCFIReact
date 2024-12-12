import bg1 from '../assets/estagio/form.jpg'
import bg2 from '../assets/estagio/form2.jpg'
import bg3 from '../assets/estagio/bg-low.jpg'

// HOOKs
import { useState } from 'react'

export function useCarrossel(){
    const background = ['backgroundImg1', 'backgroundImg2', 'backgroundImg3']
    const [bgImg, setBgImg] = useState(background[0])
    let index = 0

    function changeBackground(index){
        setBgImg(background[index])
    }
    
    setInterval(()=> {
        index = index + 1
        if (index === 3){
            index = 0
        }
        changeBackground(index)
    }, 5000)

    return {bgImg}
}