import {ButtonStyled, DisabledStyled} from '../css/ButtonCSS'

export function Button({text = 'aguarde...', action = ()=>{}, wait = false, }){

    function handleClick(e){
        action(e)
    }

    if (wait === true){
        return <DisabledStyled onClick={handleClick} disabled={wait}>{text}</DisabledStyled>
    }else {
        return <ButtonStyled onClick={handleClick} onSubmit={handleClick}>{text}</ButtonStyled>
    }

}