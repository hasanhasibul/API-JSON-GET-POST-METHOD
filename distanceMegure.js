function triangle(a,b,c){
    if(a+b>c && a+c>b && b+c>a){
        console.log("it is possible to make a triangle");
    }
    else{
        console.log("not possible");
    }
}
triangle(1,10,12)