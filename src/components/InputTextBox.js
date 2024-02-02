function InputComp(){
    return(
      <input onFocus={()=>console.log("focused")} onBlur={()=>console.log("blured")}></input>
    )
}
export default InputComp;