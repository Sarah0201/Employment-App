class Form1{
    constructor(){
        this.name = createInput("Name");
        this.age = createInput("Age");
        this.location = createInput("Location");
        this.experience = createInput("Experience");
        this.salary = createInput("Salary");
        this.submit = createButton("Submit");
    }
    display(){
        this.name.position(600,200);
        this.age.position(600,250);
        this.location.position(600,300);
        this.experience.position(600,350);
        this.salary.position(600,400);
        this.submit.position(600,500);
        }
}