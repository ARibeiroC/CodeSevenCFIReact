import '../css/Button.css'

export function Button({style, text, action = handleClick(e)}){

    function handleClick(e){
        e.preventDefault()
        console.log('clicou')
    }

    return <button className={style} onClick={handleClick} >{text}</button>
}