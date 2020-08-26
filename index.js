console.log("It's just for testing");
setInterval(()=>{
    date=new Date();
    
    htime=date.getHours();
    mtime=date.getMinutes();
    stime=date.getSeconds();
    
    hrotation = 30*htime + mtime/2
    mrotation = 6*mtime
    srotation = 6*stime

    hour.style.transform = `rotate(${hrotation}deg)`
    minute.style.transform = `rotate(${mrotation}deg)`
    second.style.transform = `rotate(${srotation}deg)`

},1000)


//--------- Logic behind it ---------
// 12 hrs=360 degree
// 1 hr=30 degree
// h hrs= 30*h degree

// 1 hr=30 degree
// 60 min=30 degree
// 1 min=1/2 degree
// m min=1/2 * m degree

// for some moment of hour hand it will be
// 1.
// hour hand=30*h+min/2

// same for Minutes
// 60 min=360 degree
// 1 min =6 degree
// 2.
// m minutes= 6*m degree

// for Seconds
// 60 sec=360 degree
// 1 sec=6 degree

// 3.
// s sec= 6*s degree