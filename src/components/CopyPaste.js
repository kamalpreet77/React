function Copy({onEvent,children}){
   let event=false;
   let cut=false;
    if(onEvent==="copy"){
        event=true;
    }
    if(onEvent==="cut"){
       cut=true;
    }
    return(
        <>
        {event && <div onCopy={()=>alert("data copied")}>{children}</div>}
        {!cut && !event && <input onPaste={()=>alert("data pasted")}></input>}
        {cut && <div onCut={()=>alert("data copied")}>{children}</div>}
        
        </>
    )
}
export default Copy;