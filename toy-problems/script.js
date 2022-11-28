//toy problem 2


let carSpeed = (speed) => {
    let points= (speed-70)/5;
if(speed<70){
    return 'OK'
}
else if( speed>=70 && points<=12 ){
return (points)
}
else if(points>12){
    return 'licence revoked'
}
};
//------if your carspeed is above the limit you start getting points---------
console.log(carSpeed(80));
