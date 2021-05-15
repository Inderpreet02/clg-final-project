import "./Btn.css"

const Btn = ( {text, color, onClick ,show} ) => {
    let visible=true;
    let btnAppear=show;
    if(btnAppear==="hide"){
        visible=false;
    }
   if(visible===true){
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
   else{
       return(<div></div>)
   }
}
 
export default Btn;