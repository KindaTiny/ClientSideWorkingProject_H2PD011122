let ButtonClickNumberCounter: number = 0;
let ButtonClickArray: Array<ButtonClickActivity> = new Array();

class ButtonClickActivity {
    private _buttonClickNumber: number;
    private _buttonClickTime: Date;
    private static _numberOfObjectCreatedOnClass: number = 0;

    set ButtonClickNumber(ButtonClickNumber: number) {
        if (ButtonClickNumber < 3) {
            this._buttonClickNumber = ButtonClickNumber;
        }
        else {
            this._buttonClickNumber = 0;
        }
    }

    get ButtonClickNumber(): number {
        return (this._buttonClickNumber);
    }

    set ButtonClickTime(ButtonClickTime: Date) {
        this._buttonClickTime = ButtonClickTime;
    }

    get ButtonClickTime(): Date {
        return (this._buttonClickTime);
    }

    constructor(params: { ButtonClickNumber: number }) {
        this.ButtonClickNumber = params.ButtonClickNumber;
        this.ButtonClickTime = new Date();
        ButtonClickActivity._numberOfObjectCreatedOnClass++;
    }

    public GetButtonClickTime(): Date {
        return (this.ButtonClickTime);
    }

    public GetButtonClickNumberAndTime(): string {
        return ((this.ButtonClickNumber + " : " + this.ButtonClickTime).toString());
    }

    // Funktionen herunder giver en transpiling fejl. Så vi må altså ikke lave
    // Function Overload i TypeScript, som vi er vant til fra f,eks. C#.
    //public GetButtonClickTime(Test : number): Date {
    //    return (this.ButtonClickTime);
    //}

    //public toString = (): string => {
    //    return `(${(this.ButtonClickNumber + " : " + this.ButtonClickTime + " : " + ButtonClickActivity._numberOfObjectCreatedOnClass).toString()})`; 

    public toString(): string {
        return (this.ButtonClickNumber + " : " + this.ButtonClickTime + " : Number Objects : " + ButtonClickActivity._numberOfObjectCreatedOnClass);
    }
}

function DoTheShitTypeScript() {
    ButtonClickNumberCounter++;
    ButtonClickArray.push(new ButtonClickActivity({ ButtonClickNumber: ButtonClickNumberCounter }));
    ButtonClickArray[ButtonClickArray.length - 1].ButtonClickNumber =  // Set
        ButtonClickArray[ButtonClickArray.length - 1].ButtonClickNumber; // Get
}

function GetLastButtonActivity(): string {
    return (ButtonClickArray[ButtonClickArray.length - 1]).toString();
}

function GetLastButtonActivityObject(): ButtonClickActivity {
    return (ButtonClickArray[ButtonClickArray.length - 1]);
}