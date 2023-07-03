class Person {
    constructor(firstName, lastName, age, gender, occupation) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.occupation = occupation;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getDetails() {
      return `Name: ${this.getFullName()}, Age: ${this.age}, Gender: ${this.gender}, Occupation: ${this.occupation}`;
    }
  }
  
  // Example usage:
  const person1 = new Person("John", "Doe", 30, "Male", "Engineer");
  const person2 = new Person("Jane", "Smith", 25, "Female", "Teacher");
  
  console.log(person1.getDetails());
  // Output: "Name: John Doe, Age: 30, Gender: Male, Occupation: Engineer"
  
  console.log(person2.getDetails());
  // Output: "Name: Jane Smith, Age: 25, Gender: Female, Occupation: Teacher"