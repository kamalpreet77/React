import '../styles/image.css'
function ImageComp(){
    function handleEvent(e){
        e.stopPropagation();
        e.target.style.width="250px"
        e.target.style.height="250px"
        
    }
    function outEvent(e){
        e.stopPropagation();
        e.target.style.width="180px"
        e.target.style.height="120px"
    }
    return(
      <img  src="https://media.istockphoto.com/id/1325578537/photo/happy-indian-mother-having-fun-with-her-daughter-outdoor-family-and-love-concept-focus-on-mum.jpg?s=1024x1024&w=is&k=20&c=X6ed13r_BH1qYAwUDRd9uxtZeS7RDJ5usjifJU9zp2Y="
      onMouseOver={handleEvent}
      onMouseOut={outEvent}
      style={{ width: '180px', height: '120px' }}
      ></img>
    )
}
export default ImageComp;