function FooterComponent() {
  return (
    <div className="flex flex-col justify-end">
    <div className='flex justify-center bg-teal-800'>
        <div className='flex flex-row justify-between items-center py-2 w-3/4'>
            <img className = 'w-8 h-8' alt='fb-logo' src='fb.png'/>
            <img className = 'w-8 h-8' alt='ig-logo' src='ig.png'/>
            <img className = 'w-8 h-8' alt='tt-logo' src='tw.png'/>
        </div>
    </div>
    </div>
  )
}

export default FooterComponent