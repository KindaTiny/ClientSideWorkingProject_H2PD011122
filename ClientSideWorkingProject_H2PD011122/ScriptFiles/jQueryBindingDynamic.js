var ButtonAddedCounter = 0;
var CurrentButton;

var txtButtonContext = $("#txtButtonContext");
var ButtonAddedClass = $(".ButtonsAdded");

$("#btnAddNewButton").on('click', function () {
    var WorkString = "<input id='btnDynamic" + ++ButtonAddedCounter + "' ";
    WorkString += "value='btnDynamic" + ButtonAddedCounter + "' ";
    WorkString += "type='button'";
    WorkString += " />";
    WorkString += "<br>";
    ButtonAddedClass.append(WorkString);
    var Button = $("<input type='button' id='btnDynamic" + (++ButtonAddedCounter).toString() + "' value = 'btnDynamic" + ButtonAddedCounter + "' /> ");
    ButtonAddedClass.append(Button);
    ButtonAddedClass.append("<br />");
});

ButtonAddedClass.delegate("input", "click", function () {
    CurrentButton = $(this);
    var TextToTextField = $(this).val();
    txtButtonContext.val(TextToTextField);
    txtButtonContext.width(CalculateWidthOnControl(txtButtonContext));
});

txtButtonContext.on('input', function () {
    CurrentButton.val($(this).val());
    txtButtonContext.width(CalculateWidthOnControl(txtButtonContext));
});

function CalculateWidthOnControl(Control_Object) {
    ControlWidth = Control_Object.val().length;
    return (ControlWidth * 9 + 25);
}
