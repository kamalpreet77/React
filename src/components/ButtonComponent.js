import '../styles/Button.css'
function ButtonComp({onDClick, onSingleClick,children}){

    return(
      
      <button onClick={onSingleClick} onDoubleClick={onDClick}>{children}</button>
      
    )
}
export default ButtonComp;
