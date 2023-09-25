var ComponentParameterToReturn;
(function (ComponentParameterToReturn) {
    ComponentParameterToReturn[ComponentParameterToReturn["NumberParameter"] = 0] = "NumberParameter";
    ComponentParameterToReturn[ComponentParameterToReturn["DateParameter"] = 1] = "DateParameter";
})(ComponentParameterToReturn || (ComponentParameterToReturn = {}));
var ButtonClickNumberCounter = 0;
var ButtonClickArray = [];
var TestNumber = 0;
var ComponentsToReturn = [{
        WhichComponentParameterToReturn: ComponentParameterToReturn.NumberParameter,
        WhichComponentParameterToReturnText: "Get Number from Object"
    },
    {
        WhichComponentParameterToReturn: ComponentParameterToReturn.DateParameter,
        WhichComponentParameterToReturnText: "Get Date from Object"
    }];
// Eksemplet herunder viser, at man ikke umiddelbart kan lave function overload i 
// TypeScript heller ikke på modul niveau. 
// Det kan lade sig gøre at lave function overload på både modul niveau
// og klasse niveau i TypeScript. Men ikke på samme "lette" måde som 
// vi kender det fra f.eks. C#. Og det kan absolut ikke tilrådes at gøre det !!! 
//function TestOverload(Test: number):number {
//    TestNumber = Test;
//    return (TestNumber);
//}
//function TestOverload():void {
//    TestNumber = 10;
//}
var ButtonClickActivity = /** @class */ (function () {
    function ButtonClickActivity(params) {
        this.ButtonClickNumber = params.ButtonClickNumber;
        this.ButtonClickTime = new Date();
        ButtonClickActivity._numberOfObjectCreatedOnClass++;
    }
    Object.defineProperty(ButtonClickActivity.prototype, "ButtonClickNumber", {
        get: function () {
            return (this._buttonClickNumber);
        },
        set: function (ButtonClickNumber) {
            this._buttonClickNumber = ButtonClickNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ButtonClickActivity.prototype, "ButtonClickTime", {
        get: function () {
            return (this._buttonClickTime);
        },
        set: function (ButtonClickTime) {
            this._buttonClickTime = ButtonClickTime;
        },
        enumerable: false,
        configurable: true
    });
    ButtonClickActivity.prototype.GetButtonClickTime = function () {
        return (this.ButtonClickTime);
    };
    ButtonClickActivity.prototype.GetButtonClickNumberAndTime = function () {
        return ((this.ButtonClickNumber + " : " + this.ButtonClickTime).toString());
    };
    // Funktionen herunder giver en transpiling fejl. Så vi må altså ikke lave
    // Function Overload i TypeScript, som vi er vant til fra f,eks. C#.
    //public GetButtonClickTime(Test : number): Date {
    //    return (this.ButtonClickTime);
    //}
    // Funktionen herunder bruger en genreisk parameter til at bestemme hvilke af de 2 elementer 
    // i et objekt af klassen her, vi vil have returneret.
    ButtonClickActivity.ReturnParameterInObject = function (WhichParameterType, ButtonClickActivityObject) {
        if ("number" === typeof (WhichParameterType)) {
            return (ButtonClickActivityObject.ButtonClickNumber.toString());
        }
        else {
            if (WhichParameterType instanceof Date) {
                return (ButtonClickActivityObject.ButtonClickTime.toString());
            }
        }
        return ("-1");
    };
    //public toString = (): string => {
    //    return `(${(this.ButtonClickNumber + " : " + this.ButtonClickTime + " : " + ButtonClickActivity._numberOfObjectCreatedOnClass).toString()})`; 
    ButtonClickActivity.prototype.toString = function () {
        return (this.ButtonClickNumber + " : " + this.ButtonClickTime + " : Number Objects : " + ButtonClickActivity._numberOfObjectCreatedOnClass).toString();
    };
    ButtonClickActivity._numberOfObjectCreatedOnClass = 0;
    return ButtonClickActivity;
}());
function TypeScriptStuff() {
    //let ButtonClickActivity_Object: ButtonClickActivity = new ButtonClickActivity({ ButtonClickNumber: ButtonClickNumberCounter })
    ButtonClickNumberCounter++;
    ButtonClickArray.push(new ButtonClickActivity({ ButtonClickNumber: ButtonClickNumberCounter }));
}
function GetLastButtonActivity() {
    //return (ButtonClickArray[ButtonClickArray.length - 1]);
    return (ButtonClickArray[ButtonClickArray.length - 1].GetButtonClickNumberAndTime());
}
function GetLastButtonActivityObject() {
    return (ButtonClickArray[ButtonClickArray.length - 1]);
}
function GetLastButtonActivityNumber() {
    return (ButtonClickArray.length - 1);
}
function GetContentOfSelctedObjectparameter(SelectedObjectNumber, SelectedObjectParameter) {
    var SelectedObjectParameterContent;
    var TestNumber = 3;
    var TestDate = new Date();
    if (ComponentParameterToReturn.NumberParameter == SelectedObjectParameter) {
        SelectedObjectParameterContent =
            ButtonClickActivity.ReturnParameterInObject(TestNumber, ButtonClickArray[SelectedObjectNumber]);
        return (SelectedObjectParameterContent);
    }
    else {
        if (ComponentParameterToReturn.DateParameter == SelectedObjectParameter) {
            SelectedObjectParameterContent =
                ButtonClickActivity.ReturnParameterInObject(TestDate, ButtonClickArray[SelectedObjectNumber]);
            return (SelectedObjectParameterContent);
        }
    }
    return ("-2");
}
function GetComponentsValueAndTexts(SelectComponent) {
    for (var Counter = 0; Counter < ComponentsToReturn.length; Counter++) {
        var Option_1 = document.createElement("option");
        Option_1.value = ComponentsToReturn[Counter].WhichComponentParameterToReturn.toString();
        Option_1.text = ComponentsToReturn[Counter].WhichComponentParameterToReturnText;
        SelectComponent.options.add(Option_1);
    }
}
//# sourceMappingURL=TypeScriptStuff.js.map