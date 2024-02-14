class Person{
    static count = 0
    // constructor gives the default values for class
    constructor(){
        this.firstname = 'please provide firstname'
        this.lastname = 'please provide lastname'
        this.age = 0
        Person.count +=1
    }
    setFirstname(value){
        this.firstname = value
    }
    getFirstname(){
        return this.firstname
    }

    setLastname(value){
    this.lastname = value 
    }

    getLastname(){
        return this.lastname
    }

    setAge(value){
        return this.age = value
    }
    getAge(){
        return this.age
    }
    display(){
        console.log(`=====Person ID: ${Person.count}=====
                    First name: ${this.firstname}
                    Last name: ${this.lastname}
                    Age: ${this.age}`);
    }
}

export{Person}