import React from 'react';

function ScreenVideo({children}) {
    return (
        <div className="screenBorderBase">
            <div className="screenBorderBase2">
                <div className="screenBorder">
                    <div className="rectangle"></div>
                    <video id="screenVideo" autoPlay="1" muted="1" loop="1" playsInline="1">
                        <source src={children}/>
                    </video>
                </div>
            </div>
        </div>
    );
}

export default ScreenVideo;