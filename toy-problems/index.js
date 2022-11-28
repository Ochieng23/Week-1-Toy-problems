//toy problem 1
let studentGrader = (mark) => {
    if(mark>79 && mark<=100){
        return 'A'
    }
    else if(mark>=60 && mark<=79){
        return 'B'
    }
    else if (mark>=49 && mark<=59){
        return 'C'
    }
    else if(mark>=40 && mark<=49){
        return 'D'
    }
    else if (mark<40){
        return 'E'
    };
     
};
console.log(studentGrader(80));