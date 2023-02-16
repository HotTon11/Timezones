

// Create a timer function  
    function timer(){
        mytime=setTimeout(returnTime, 1000);
    }

    function returnTime() {
        // STEP 1 - initialize a Javascript date object (for current location).
            let now = new Date();

        // STEP 2 - express this local time as # of msec since 1/1/70  - this is what the getTime() function does exactly. 
            let localTime = now.getTime();
        // So now we have a "localTime" variable which is just number of msecs since 1/1/70, based on the "now" date variable.

        // STEP 3 - obtain UTC offset with the getTimezoneOffset method and convert to milliseconds - By default, this function "offsets" (adds or subtracts) your location vs. UTC in minutes, but we convert to msecs since we will be using that with the "localTime" variable.
            let localOffset = now.getTimezoneOffset() * 60000;
        // So now we have a "localOffset" variable/value converted to msecs.

        // STEP 4 - obtain UTC time in msec - keep in msec to do more calc's on 
            let utc = localTime + localOffset;
            // - This is where my initial logic failed.  You make a new variable called localTime that references wherever you are and compares it to the offset to get UTC - from there you can compare any timezone.

        // STEP 5 - DO THE OFFSETS and pass that value into a final variable that will be returned.
            let GreenwichOffset = 0;
            let greenwich = utc;
            let greenwichTime = new Date(greenwich);

            let newYorkOffset = (-5);
            let newYork = utc + (3600000*newYorkOffset);
            let newYorkTime = new Date(newYork);

            let dallasOffset = (-6);
            let dallas = utc + (3600000*dallasOffset);
            let dallasTime = new Date(dallas);

            let singaporeOffset = (8);
            let singapore = utc + (3600000*singaporeOffset);
            let singaporeTime = new Date(singapore);


        // STEP 6 - Change the time value calculated in the previous step to a human-readable date/time string by initializing a new Date() object with it, and calling the object’s toLocaleString() method. Return to user every second via timer function.

            document.getElementById('greenwich').innerHTML = greenwichTime.toLocaleString();
            document.getElementById('newyork').innerHTML = newYorkTime.toLocaleString();
            document.getElementById('dallas').innerHTML = dallasTime.toLocaleString();
            document.getElementById('singapore').innerHTML = singaporeTime.toLocaleString();

        
        timer();
        
    }

    