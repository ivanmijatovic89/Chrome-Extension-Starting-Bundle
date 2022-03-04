var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);


setTimeout(function(){
    // Do the first thing
    console.log("one");
    setTimeout(function() {
        // Do a second thing
        console.log("two");
    }, 1000);
}, 1000);

setTimeout(function() {
    console.log('hello');
}, 1000);


setTimeout(function() { 
    console.log('2 secounds latter...');

    console.log('----------------------------------------------------------------------------------------');

    $('#duration').trigger('click');

    $('.tippy-content').css('background','red');

    var inputs = $(".tippy-content input");

    console.log('inputs');

    console.log(inputs);

    setTimeout(function() { 
        console.log('click on end date');
        console.log(inputs[2]);

        // 48
        // 51
        $(inputs[2]).trigger('click');
        // $(inputs[2]).val('02');

        setTimeout(function() { 
            console.log('Typing Date... 2')
            // console.log(inputs[2]);

            // simulateKey(50);
            // simulateKey(50);

            inputs[2].addEventListener('keydown', (e) => {
                console.log('na input event');
                console.log(e);
            });
            window.addEventListener('keydown', (e) => {
                console.log(e)
              })
              
            window.dispatchEvent(new KeyboardEvent('keydown', {
                'key': '2',
                'code': '50', 
                'isTrusted': true,
              }));
            window.dispatchEvent(new KeyboardEvent('keydown', {
                'key': '2',
                'code': '50', 
                'isTrusted': true,
              }));
            window.dispatchEvent(new KeyboardEvent('keydown', {
                'key': '2',
                'code': '50', 
                'isTrusted': true,
              }));

        }, 1000);
        
    }, 1000); // https://keycode.info/
    
}, 1000);