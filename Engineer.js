class Engineer extends Form1{
    constructor(){
        super();
    }
   /* update(){
        eng_details = database.ref('Engineers').set({
            'Name':this.name,
            'Age':this.age
        })
    }*/
    display(){
        super.display();
        this.submit.mousePressed(()=>{
            this.name.hide();
            this.age.hide();
            this.location.hide();
            this.experience.hide();
            this.salary.hide();
            this.submit.hide();
            //this.update();
        })
    }
}