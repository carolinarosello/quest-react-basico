
const showLabel = (label) =>{
    alert ('A label dentro desse botão é ' + label)
}
const Button = ({label}) => {
    return(
        <button onClick={() => showLabel(label)}> {label} </button>
    )
}

Button.defaultProps = {
    label: 'Seu texto aqui!'
}
export default Button