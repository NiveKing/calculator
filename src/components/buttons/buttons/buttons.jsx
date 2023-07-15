import "./buttons.css"

const Buttons = (props) => {
    return (
        <div className="button-wrapper" style={{backgroundColor: props.color}}>{props.symbol}</div>
    )
}

export default Buttons