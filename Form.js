class Form{
    constructor(){
        this.title = createElement('h2');
        this.eng_button = createButton('Engineer');
        this.maid_button = createButton('Maid');
        this.security_button = createButton('Security');
    }
    display(){
        this.title.html("Employment App");
        this.title.position(500,50);
        this.eng_button.position(200,200);
        this.maid_button.position(200,300);
        this.security_button.position(200,400);
        this.eng_button.mousePressed(()=>{
            this.eng_button.hide();
            this.maid_button.hide();
            this.security_button.hide();
            this.eng_form = new Engineer();
            this.eng_form.display();
        })
        /*this.maid_button.mousePressed(()=>{
            this.eng_button.hide();
            this.maid_button.hide();
            this.security_button.hide();
            maid_form = new Maid();
            maid_form.display();
        })
        this.security_button.mousePressed(()=>{
            this.eng_button.hide();
            this.maid_button.hide();
            this.security_button.hide();
            sec_form = new Security();
            sec_form.display();
        })*/
    }
}