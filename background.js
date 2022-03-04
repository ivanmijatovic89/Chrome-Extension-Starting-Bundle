$("body").append('Test 23' );

var wrapper = $('<div class="osh-wrapper"></div>')

// Add buttons
$('<button class="btn-osh osh-1" type="button">+1</button>')
    .appendTo(wrapper);

$('<button class="btn-osh osh-2" type="button">+2</button>')
    .appendTo(wrapper);

wrapper.insertAfter('h1')

console.log('ucitao je ');

// EVENTS

$(document).on('click', '.osh-1', function() {
    console.log('osh-1');
    setEndTime();
});

function setEndTime(){
    
    console.log('set end time');

    $('#duration').trigger('click');

    $('.tippy-content').css('background','red');

    // var inputs = $(".tippy-content input");

    // console.log('inputs');

    // console.log(inputs);


    setTimeout(function() { 
        // console.log('click on end date');
        // console.log(inputs[2]);

        // 48
        // 51
        // $(inputs[2]).trigger('click');

        // Set End Date
        var dateInputs = document.querySelectorAll('input[type="date"]');
        var endDateInput = dateInputs[1];
        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            "value"
        ).set;
        nativeInputValueSetter.call(endDateInput, "2022-03-04");
        var inputEvent = new Event("input", { bubbles: true });
        endDateInput.dispatchEvent(inputEvent);     



        // Set End Time        
        var endTimeInput = document.querySelector("#end-time");
        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            "value"
        ).set;
        nativeInputValueSetter.call(endTimeInput, "16:55");
        var inputEvent = new Event("input", { bubbles: true });
        endTimeInput.dispatchEvent(inputEvent);        
        
        return;
        var endDate  = inputs[2];
        
        $(endDate).val('2022-03-04').trigger("input").trigger("change");
        $('#end-time').val('16:08').trigger("input").trigger("change");

        console.log('time changed');

        // $(inputs[2]).val('02');

        setTimeout(function() { 
            console.log('Typing Date... 2')

            $(inputs[2]).trigger ( {
                type: 'keypress', keyCode: 50, which: 50, charCode: 50
            } );

            inputs[2].dispatchEvent(new KeyboardEvent("keydown", {
                key: "2",
                keyCode: 50,        // example values.
                code: "Digit2",       // put everything you need in this object.
                which: 50,
                shiftKey: false,    // you don't need to include values
                ctrlKey: false,     // if you aren't going to use them.
                metaKey: false,      // these are here for example's sake.
                bubbles: false,
            }));
            // console.log(inputs[2]);

            // simulateKey(50);
            // simulateKey(50);

            document.dispatchEvent(
                new KeyboardEvent("keyup", {
                    key: "2",
                    bubbles: true
                })
            );
            
            document.dispatchEvent(
                new KeyboardEvent("keyup", {
                    key: "2",
                    bubbles: true
                })
            );

        }, 1000);

        
    }, 1000); // https://keycode.info/
    
}
  
function simulateKey (keyCode, type, modifiers) {
	var evtName = (typeof(type) === "string") ? "key" + type : "keydown";	
	var modifier = (typeof(modifiers) === "object") ? modifier : {};

	var event = document.createEvent("HTMLEvents");
	event.initEvent(evtName, true, false);
	event.keyCode = keyCode;
	
	for (var i in modifiers) {
		event[i] = modifiers[i];
	}

    document.dispatchEvent(event);

	
}






// end time
// $('#end-time').val('15:55');