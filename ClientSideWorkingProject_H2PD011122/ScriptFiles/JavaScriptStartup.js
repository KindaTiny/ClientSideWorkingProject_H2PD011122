var NumberOfTimesKeyHasBeenPressed = 0;

NumberOfTimesKeyPressedElementFoundByID = null;
let NumberOfTimesKeyPressedElementFoundByName = [];

function SetupDOMElements() {
    NumberOfTimesKeyPressedElementFoundByID = document.getElementById("txtNumberOfTimesPressedID");
    NumberOfTimesKeyPressedElementFoundByName = document.getElementsByName("txtNumberOfTimesPressedName");
}

function ButtonPressed(parameter) {
    alert("Har vi ikke  sagt Godmorgen " + ++parameter + " gang(e) før h2pd011122 ???");

    //document.getElementById("txtNumberOfTimesPressedID").value = parameter;
    NumberOfTimesKeyPressedElementFoundByID.value = parameter;

    for (Counter = 0; Counter < NumberOfTimesKeyPressedElementFoundByName.length; Counter++) {
        NumberOfTimesKeyPressedElementFoundByName[Counter].value = parameter;
    }
    //NumberOfTimesKeyPressedElementFoundByName.value = parameter;

    return (parameter);
}




