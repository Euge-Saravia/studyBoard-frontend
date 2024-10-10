import { useEffect, useState } from "react"
import "./joinButton.scss"

const JoinButton = ( { color, onClick, initialJoined} ) => {

  const [hasJoined, setHasJoined] = useState(false);

  useEffect(() => {
    setHasJoined(initialJoined);
  }, [initialJoined]);

  const handleClick = () => {
    if (!hasJoined) {
      setHasJoined(true); // Cambiamos el estado a true solo si aún no se ha unido
      if (onClick) onClick();
    }
  }

  return (
    <button className={`joinbtn ${color}`} onClick={handleClick}>
        <div>
          {!hasJoined ? (

        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          fill="none" 
          viewBox="0 0 24 24"
        >
            <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="1.5" 
            d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 1 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21C7.043 21 4.862 20.355 3 19.234v.001Z"
            />
        </svg>
          ) : (
          <div>
            <svg width="19" height="19" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.75001 10.675L7.875 16.8L19.25 5.42499" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          )}
        
        
        </div>
    </button>
  )
}

export default JoinButton
