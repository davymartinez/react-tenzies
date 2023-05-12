/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react"

export default function Die({ value, holdDice, isHeld }) {
    /**
     * Dice code adapted from https://codesandbox.io/s/react-css-grid-dice-cly4v
     */
    const Pip = () => <span className="pip" />

    const Face = ({ children }) => {
        return (
            <div 
                className="face" 
                style={styles}
                onClick={holdDice}
            >
                {children}
            </div>
        )
    }
    
    const styles = {
        backgroundColor: isHeld ? "#59E391" : "white"
    }
    
    let pips = Number.isInteger(value) 
        ? Array(value).fill(0).map((_, i) => <Pip key={i} />) 
        : null
    
    return (
        <Face>
            {pips}
        </Face>
    )
}