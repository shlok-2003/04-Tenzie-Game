import React from "react"
import './Dice.css'

function One() {
    const size = window.innerWidth >= 431 ? '1.5rem' : '1.3rem'

    const styles = {
        height: size,
        width: size
    }

    return (
        <div className="one--face">
            <span className="dot" style={styles}></span>
        </div>
    )
}

function Two() {
    const size = window.innerWidth >= 431 ? '1rem' : '0.8rem'

    const styles = {
        height: size,
        width: size
    }

    return (
        <div className="two--face">
            <span className="dot" style={styles}></span>
            <span className="dot" style={styles}></span>
        </div>
    )
}

function Three() {
    const size = window.innerWidth >= 431 ? '0.9rem' : '0.7rem'

    const styles = {
        height: size,
        width: size
    }
    
    return (
        <div className="three--face">
            <span className="dot" style={styles}></span>
            <span className="dot" style={styles}></span>
            <span className="dot" style={styles}></span>
        </div>
    )
}

function Four() {
    const size = window.innerWidth >= 431 ? '0.85rem' : '0.7rem'

    const styles = {
        height: size,
        width: size
    }

    return (
        <div className="four--face">
            <div className="column">
                <span className="dot" style={styles}></span>
                <span className="dot" style={styles}></span>
            </div>
            <div className="column">
                <span className="dot" style={styles}></span>
                <span className="dot" style={styles}></span>
            </div>
        </div>
    )
}

function Five() {
    const size = window.innerWidth >= 431 ? '0.8rem' : '0.65rem'

    const styles = {
        height: size,
        width: size
    }

    return (
        <div className="five--face">
            <div className="column">
                <span className="dot" style={styles}></span>
                <span className="dot" style={styles}></span>
            </div>
            <div className="column">
                <span className="dot" style={styles}></span>
            </div>
            <div className="column">
                <span className="dot" style={styles}></span>
                <span className="dot" style={styles}></span>
            </div>
        </div>
    )
}

function Six() {
    const size = window.innerWidth >= 431 ? '0.75rem' : '0.6rem'

    const styles = {
        height: size,
        width: size
    }

    return (
        <div className="six--face">
            <div className="column">
                <span className="dot" style={styles}></span>
                <span className="dot" style={styles}></span>
                <span className="dot" style={styles}></span>
            </div>
            <div className="column">
                <span className="dot" style={styles}></span>
                <span className="dot" style={styles}></span>
                <span className="dot" style={styles}></span>
            </div>
        </div>
    )
}

export default function Dice(props) {
    const styles = {backgroundColor: props.isHeld ? '#59E391' : 'tomato'} 

    return (
        <div className="dice--body" style={styles} onClick={props.holdDice}>
            {props.value === 1 && <One />}
            {props.value === 2 && <Two />}
            {props.value === 3 && <Three />}
            {props.value === 4 && <Four />}
            {props.value === 5 && <Five />}
            {props.value === 6 && <Six />}
        </div>
    )
}