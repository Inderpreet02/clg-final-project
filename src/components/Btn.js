import "./Btn.css"

const Btn = ( {text, color, onClick} ) => {
    return (
        <div className="btn" onClick={onClick}>
            {color ? (
                <div className="btn__containerBlue">
                    <h4>{text}</h4>
                </div>
            ) : (
                <div className="btn__containerWhite">
                    <h4>{text}</h4>
                </div>
            )}
        </div>
    );
}
 
export default Btn;