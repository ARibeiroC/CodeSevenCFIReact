import '../css/Button.css'

export function Button({style, text, disabled = false, action = ()=>{}}){

    function handleClick(e){
        e.preventDefault()
        action(e)
    }

    if (disabled){
        return <button className={style} disabled={disabled}>{text}</button>
    }else {
        return <button className={style} >{text}</button>
    }

}