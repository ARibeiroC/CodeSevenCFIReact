import '../css/Button.css'

export function Button({style, text, action = ()=>{}, disabled = false, }){

    function handleClick(e){
        action(e)
    }

    if (disabled){
        return <button className={style} onClick={handleClick} disabled={disabled}>{text}</button>
    }else {
        return <button className={style} onClick={handleClick} onSubmit={handleClick}>{text}</button>
    }

}