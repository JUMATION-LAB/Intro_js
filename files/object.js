class Student{
    

    constructor(n,a,g,b,iG){
        this.naame = n;
        this.age = a;
        this.grade = g;
        this.subjects = b;
        this.isGraduate = iG;

    }

    details(){
        console.log(this.naame)
        console.log(this.age)
        console.log(this.grade)
        console.log(this.subjects)
        console.log(this.isGraduate)
    }

}

const student1 = new Student("Juam", 23, "A", ["Geo","AI"], true);
console.log(student1[0]);


function add( a, b){
    if( typeof a !== 'number' || typeof b !== 'number' ){
        throw new Error("Insert a number");
    }

    return a+b;

}

function subtract(a, b){
    return a-b;
}


module.exports = {
add, subtract 
}


