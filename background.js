console.log('Loading OS Relist plugin');

let serverTime = moment(getServerTime());
let now = moment();
var diff = serverTime.diff(now);

console.log('Server Time');
console.log(serverTime.format('YYYY-MM-DD HH:mm'));
console.log('Local Time : ');
console.log(now.format('YYYY-MM-DD HH:mm'));

var wrapper = $('<div class="osh-wrapper"></div>');

// Create clickable buttons
for (let i = 1; i < 30; i++) {
    var d = serverTime.clone().add(i, 'minutes');
    $('<button class="btn-osh setEndDateTime" type="button" data-date="'+d.format('YYYY-MM-DD')+'" data-time="'+d.format('HH:mm')+'">' + d.format('HH:mm') + '</button>')
        .appendTo(wrapper);
}

wrapper.insertAfter('article');

// CLOCK
$('<div class="clock-wrapper"><div id="clock"></div></div>').insertBefore('.osh-wrapper');
$('<div class="clock-wrapper"><div id="clock-date"></div><div id="clock-time"></div></div>').insertBefore('.osh-wrapper');
window.setInterval(function () {
    var serverRealTime = moment().add(diff, 'milliseconds');
    // $('#clock').html(serverRealTime.format('YYYY-MM-DD HH:mm:ss'));
    $('#clock-date').html(serverRealTime.format('MMMM Do YYYY'));
    $('#clock-time').html(serverRealTime.format('HH:mm:ss'));
}, 1000);


// EVENTS > Click
$(document).on('click', '.setEndDateTime', function() {
    console.log('Set end date to ');
    var date = $(this).attr('data-date');
    var time = $(this).attr('data-time');

    console.log(date);
    console.log(time);
    
    if(!date || !time){
        alert('somethings wrong...');
        return;
    }
    setEndTime(date, time);
});

// SET END TIME FUNCTION
function setEndTime(date, time){
    
    console.log('setEndTime function');

    $('#duration').trigger('click');

    $('.tippy-content').css('background','red');

    setTimeout(function() { 

        // Set End DATE
        var dateInputs = document.querySelectorAll('input[type="date"]');
        var endDateInput = dateInputs[1];
        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            "value"
        ).set;
        nativeInputValueSetter.call(endDateInput, date);
        var inputEvent = new Event("input", { bubbles: true });
        endDateInput.dispatchEvent(inputEvent);     

        // Set End TIME        
        var endTimeInput = document.querySelector("#end-time");
        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
            window.HTMLInputElement.prototype,
            "value"
        ).set;
        nativeInputValueSetter.call(endTimeInput, time);
        var inputEvent = new Event("input", { bubbles: true });
        endTimeInput.dispatchEvent(inputEvent);        

        

        // SET PRICE
        setPrice(0.1);
        
        $('h1').trigger('click');

        // SUBMIT
        submit(diff, date, time);
        
    }, 1000); // https://keycode.info/   
}

function setPrice(price){
    // SET PRICE
    $("input[name=price]");
    
    var priceInputs = document.querySelector('input[name="price"]');
    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value"
        ).set;
    nativeInputValueSetter.call(priceInputs, price);
    var inputEvent = new Event("input", { bubbles: true });
    priceInputs.dispatchEvent(inputEvent);     
    
    
}

// SUBMIT FORM
function submit(diff, date, time){
    setTimeout(function() { 
        console.log('submit form');

        var endDate  = moment(`${date} ${time}`)
        console.log('submit-form-norm: ' + endDate.format('YYYY-MM-DD HH:mm:ss'));
        console.log('submit-form-unix: ' + endDate.unix());

        var serverRealTime = moment().add(diff, 'milliseconds');
        var seconds = serverRealTime.seconds();
        var endDate  = moment(`${date} ${time}:${seconds}`)
        console.log('submit-form-norm: ' + endDate.format('YYYY-MM-DD HH:mm:ss'));
        console.log('submit-form-unix: ' + endDate.unix());
        

        $("button[type=submit]").trigger('click');
    });
}

// GET SERVER TIME
function getServerTime(){
    var xmlHttp;
    try {
        //FF, Opera, Safari, Chrome
        xmlHttp = new XMLHttpRequest();
    }
    catch (err1) {
        //IE
        try {
            xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
        }
        catch (err2) {
            try {
                xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
            }
            catch (eerr3) {
                //AJAX not supported, use CPU time.
                alert("AJAX not supported");
            }
        }
    }
    xmlHttp.open('HEAD',window.location.href.toString(),false);
    xmlHttp.setRequestHeader("Content-Type", "text/html");
    xmlHttp.send('');
    return xmlHttp.getResponseHeader("Date");
}