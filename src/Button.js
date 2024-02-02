import './Button.css'
function Button({ onSingleClick,children}){
// event handle krlena using e.stopPropogation
    return(
      
      <button
      onClick={onSingleClick}>{children}</button>
      
    )
}
export default Button;
