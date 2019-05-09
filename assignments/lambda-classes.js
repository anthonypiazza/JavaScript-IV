// CODE here for your Lambda Classes
//* **IMPORTANT** - You'll need to create 2 - 3 objects for each class and test them according to their unique Attributes. For example:

/*
#### Person
* First we need a Person class. This will be our `base-class`
* Person receives `name` `age` `location` all as props
* Person receives `speak` as a method.
* This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props
*/

class Person{
    constructor(personAttrs){
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
    }
    speak(){
        returns `Hello my name is ${this.name}, I am from ${this.location}`;
    }
};

/*
#### Instructor

* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  * `specialty` what the Instructor is good at i.e. 'redux'
  * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  * `catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
  * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'
*/
class Instructor extends Person{
    constructor(instAttrs){
        super(instAttrs);
        this.specialty = instAttrs;
        this.favLanguage = instAttrs;
        this.catchPhrase = instAttrs;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(studAttrs, subject){
        return `${studAttrs.name} receives a perfect score on ${subject}`;
    }
};
  
/*
#### Student

* Now we need some students!
* Student uses the same attributes that have been set up by Person
* Student has the following unique props:
  * `previousBackground` i.e. what the Student used to do before Lambda School
  * `className` i.e. CS132
  * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
* Student has the following methods:
  * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
  * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
  * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`
*/
class Student extends Person{
    constructor(studAttrs){
        super(studAttrs);
        this.previousBackground = studAttrs.previousBackground;
        this.className = studAttrs.className;
        this.favSubjects = studAttrs.favSubjects;
    }
    listsSubjects(){
        return `${this.favSubjects}`;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
};

/*
#### Project Manager

* Now that we have instructors and students, we'd be nowhere without our PM's
* ProjectManagers are extensions of Instructors
* ProjectManagers have the following unique props:
  * `gradClassName`: i.e. CS1
  * `favInstructor`: i.e. Sean
* ProjectManagers have the following Methods:
  * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}`
*/
class ProjectManager extends Instructor{
    constructor(pmAttrs){
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(studAttrs, subject){
        return `${this.name} debugs ${studAttrs.name}'s code on ${subject}`;
    }
}


const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

const james = new Instructor({
    name: 'James',   
    location: 'Jumptown',
    age: 22,
    favLanguage: 'C',
    specialty: 'Back-end', 
    catchPhrase:  'Secure the bag'
});

const june = new Instructor({
    name: 'June',
    location: 'Skiptown',
    age: 54,
    favLanguage: 'CSS',
    specialty: 'LESS',
    catchPhrase: `Design is Life`
});

const tim = new Student({
    name: 'Tim',
    location: 'Townhome',
    age: 22,
    previousBackground: 'Professional Texter',
    className: 'DS4',
    favSubjects: ['LESS', 'React', 'Redux']
});

const mary = new Student({
    name: 'Mary',
    location: 'Fan Srancisco',
    age: 19,
    previousBackground: 'Monk',
    className: 'Web18',
    favSubjects: ['Javascript', 'CSS', 'HTML']
});

const anthony = new ProjectManager({
    name: 'Anthony',
    location: 'Plano',
    age: 25,
    favLanguage: 'JavaScript',
    specialty: 'React',
    catchPhrase: 'Code till I drop',
    gradClassName: 'Web20',
    favInstructor: 'Fred'
  });
  const jane = new ProjectManager({
    name: 'Anthony',
    location: 'Plano',
    age: 25,
    favLanguage: 'JavaScript',
    specialty: 'React',
    catchPhrase: 'Code till I drop',
    gradClassName: 'Web20',
    favInstructor: 'Fred'
  });
  const jack = new ProjectManager({
    name: 'Jack',
    location: 'House of Gains',
    age: 60,
    favLanguage: 'Dutch',
    specialty: 'Sleeping',
    catchPhrase: 'Pain is Gain',
    gradClassName: 'Sleep50',
    favInstructor: 'June'
  });

//INSTRUCTOR INVOCATIONS
console.log(fred.demo('Javascript IV'));
console.log(james.grade(mary, 'Javascript III'));
console.log(june);

//STUDENT INVOCATIONS
console.log(tim.listsSubjects());
console.log(tim.PRAssignment('Node.js'));
console.log(mary.sprintChallenge('Python'));
console.log(mary);

//PM INVOCATIONS
console.log(anthony.standUp('Sprint20'));
console.log(jane.debugsCode(mary, 'Sprint20'));
console.log(jack);