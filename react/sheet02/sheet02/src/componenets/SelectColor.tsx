 const SelectColor = ({setColor})=>{
  
  return (
    <>
    <form onSubmit={(e) => {
      e.preventDefault()
      console.log(e.target.elements.inp.value);
      setColor(e.target.elements.inp.value)
    }}
>
    <input type="text"  id="inp"/>
    <button>Click Me</button>
    </form>
    </>
  )

}

export default SelectColor
