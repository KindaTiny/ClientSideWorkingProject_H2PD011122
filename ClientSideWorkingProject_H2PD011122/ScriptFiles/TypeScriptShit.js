var ButtonClickNumberCounter = 0;
var ButtonClickArray = new Array();
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
            if (ButtonClickNumber < 3) {
                this._buttonClickNumber = ButtonClickNumber;
            }
            else {
                this._buttonClickNumber = 0;
            }
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
    //public toString = (): string => {
    //    return `(${(this.ButtonClickNumber + " : " + this.ButtonClickTime + " : " + ButtonClickActivity._numberOfObjectCreatedOnClass).toString()})`; 
    ButtonClickActivity.prototype.toString = function () {
        return (this.ButtonClickNumber + " : " + this.ButtonClickTime + " : Number Objects : " + ButtonClickActivity._numberOfObjectCreatedOnClass);
    };
    ButtonClickActivity._numberOfObjectCreatedOnClass = 0;
    return ButtonClickActivity;
}());
function DoTheShitTypeScript() {
    ButtonClickNumberCounter++;
    ButtonClickArray.push(new ButtonClickActivity({ ButtonClickNumber: ButtonClickNumberCounter }));
    ButtonClickArray[ButtonClickArray.length - 1].ButtonClickNumber = // Set
        ButtonClickArray[ButtonClickArray.length - 1].ButtonClickNumber; // Get
}
function GetLastButtonActivity() {
    return (ButtonClickArray[ButtonClickArray.length - 1]).toString();
}
function GetLastButtonActivityObject() {
    return (ButtonClickArray[ButtonClickArray.length - 1]);
}
//# sourceMappingURL=TypeScriptShit.js.map