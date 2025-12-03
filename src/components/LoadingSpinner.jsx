import './LoadingSpinner.css'

const LoadingSpinner = ({ size = 'medium', message = 'Loading...', type = 'spinner' }) => {
  const getSizeValue = () => {
    switch (size) {
      case 'small': return 30
      case 'large': return 60
      default: return 40
    }
  }
  
  const sizeValue = getSizeValue()
  
  if (type === 'dots') {
    return (
      <div className={`loading-spinner loading-spinner--${size}`}>
        <img 
          src="/images/loader/dots-loader.svg" 
          alt="Loading..." 
          style={{ width: sizeValue * 2.4, height: sizeValue * 0.6 }} 
          className="loading-spinner__svg"
        />
        {message && <p className="loading-spinner__message">{message}</p>}
      </div>
    )
  }
  
  return (
    <div className={`loading-spinner loading-spinner--${size}`}>
      <img 
        src="/images/loader/spinner.svg" 
        alt="Loading..." 
        style={{ width: sizeValue, height: sizeValue }} 
        className="loading-spinner__svg"
      />
      {message && <p className="loading-spinner__message">{message}</p>}
    </div>
  )
}

export default LoadingSpinner