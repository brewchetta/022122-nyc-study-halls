function IsItOn({isOn, setIsOn, onClick}) {

    console.log(onClick);
    return (
        <p onClick={onClick}>{isOn ? "The IT is on" : "The IT is NOT on"}</p>
    )
}

export default IsItOn