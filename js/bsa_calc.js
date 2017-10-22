function calculate() {

    var female = document.getElementsByName("sex")[1].checked;
    var male = document.getElementsByName("sex")[0].checked;

    var weight = document.getElementsByName("weight")[0].value;
    var height = document.getElementsByName("height")[0].value;
    var weightunits = document.getElementsByName("units").value;
    var heightunits = document.getElementsByName("units").value;
    console.log( 'Male = ' + male );
    console.log( 'Weight = ' + weight );
    console.log( 'Height = ' + height );

    // -------------------------------
    // Conversions
    // -------------------------------
    // lbs to kg: 1 lb = 0.454 kg
    // inch to meter: 1 in = 0.0254 m
    // inch to cm: 1 in = 2.54 cm

    // ==========================================
    // Todo: Perform conversion calculations here
    function computeConversion() {

        if (heightunits="inches") height/=39.3700787;
        if (weightunits="lbs") weight/=2.20462;

    }

    // -------------------------------
    // Body Surface Area (BSA)
    // -------------------------------

    var BSA = 0;

    // ==========================================
    // Todo: Perform BSA calculation here
    Math.sqrt(((height*weight)/3600));

    // -------------------------------
    // Ideal Body Weight (IBW)
    // -------------------------------

    var IBW = 0;

    if ( female ) {

        // ==========================================
        // Todo: Perform female IBW calculation here
        var x = 45;
        var y = 2.3;
        console.log(x+y*(height-60));


    } else if ( male ) {

        // ==========================================
        // Todo: Perform male IBW calculation here
        var z = 50;
        console.log(z+y*(height-60));

    }

    // -------------------------------
    // Body Mass Index (BMI)
    // -------------------------------

    var BMI = 0;

    // ==========================================
    // Todo: Perform BMI calculation here
    console.log(weight/height);



    // Do not modify this function call
    display( BSA, IBW, BMI );

}

// ------------------------------------
// Do not modify this function
function display( BSA, IBW, BMI ) {

    var message = 'Body Surface Area = ' + BSA.toPrecision(4) + ' m^2\nIdeal Body Weight = ' + IBW.toPrecision(4) + ' kg\nBody Mass Index = ' + BMI.toPrecision(4) + ' kg/m^2';

    document.getElementById("output").innerHTML=message;

}