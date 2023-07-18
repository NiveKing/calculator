import "./buttons.css"

const Buttons = (props) => {
    return (
        <div className="button-wrapper" style={{backgroundColor: props.color}} onClick={() => {props.handleClick(props.symbol)}} >{props.symbol}</div>
    )
}

export default Buttons