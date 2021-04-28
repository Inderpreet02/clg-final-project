import "./Btn.css"

const Btn = ( {text, color} ) => {
    return (
        <div className="btn">
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