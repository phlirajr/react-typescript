import NavComponent from "../navbar/NavComponent"

function ContentComponent() {
  return (
    <div className="flex-1 flex-col justify-center">
      <h1 className='text-center text-xl py-2'>React API Example</h1>
      <NavComponent/>
    </div>
  )
}

export default ContentComponent