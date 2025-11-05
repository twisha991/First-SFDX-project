import multiply from 'c/demoCommonOperation';       
import { LightningElement } from 'lwc';

export default class MultSquareHelperComp extends LightningElement {
    cardTitle = 'Mult & Square';
    
    multResult = 0;
    squareResult = 0;

    number1 = 0;
    number2 = 0;

    changeHandler1(evt){
        this.number1 = evt.target.value;
    }
    
    changeHandler2(evt){
        this.number2 = evt.target.value;
    }

    multiply(){
        //this.multResult = this.number1 * this.number2;
        // call common logic here for 2 numbers
        this.multResult = multiply(this.number1,this.number2);
    }
    square(){
        //this.squareResult = this.number1 * this.number1;
        // call common logic here for number1 only
        this.squareResult = multiply(this.number1,this.number1);
    }
}