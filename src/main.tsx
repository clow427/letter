import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import Login from './Login';
import MyAnimation from "./MyAnimation";
import Letter from './Letter';

const App = () => {
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [showTextScreen, setShowTextScreen] = useState<boolean>(false);
    const [showButton, setShowButton] = useState<boolean>(false);

    const handleLogin = (verified: boolean) => {
        setIsVerified(verified);
    };

    const handleButtonClick = () => {
        setShowTextScreen(true);
    };

    useEffect(() => {
        if (isVerified && !showTextScreen) {
            const timer = setTimeout(() => {
                setShowButton(true);
            },
            
            14000); // 10 seconds

            return () => clearTimeout(timer);
        }
    }, [isVerified, showTextScreen]);

    
    
    return (
        <div className="content">
            {isVerified ? (
                showTextScreen ? (
                    <Letter/>
                ) : (
                    <div className="animation-container">
                        <MyAnimation />
                        
                        {showButton && (
                            <button className="bottom-left-button" onClick={handleButtonClick}> Open Letter! </button>
                        )}
                        
                    </div>
                )
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
    
/*
    return(<div className = "content"><Letter/></div>);
*/
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);