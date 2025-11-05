import { LightningElement } from 'lwc';

export default class LifecycleDemoParent extends LightningElement {
    show;
    constructor(){
        super();
        console.log('Parent Constructor!');
        this.show = false;
    }

    handleChange(evt){
        this.show = evt.detail.checked;
    }

    connectedCallback(){
        console.log('Parent connectedCallback!');
        /*
        Though here DOM is inserted but not yet rendered, so you can change
        the attribute value but you can not manipulate the DOM.
        You can programatically add or remvoe any element(s).
         */
    }
    renderedCallback(){
        console.log('Parent renderedCallback!');
        /*
        This is called when the component is rendered in the DOM.
        You can manipulate the DOM here.
        You can add or remove any element(s).
         */
        /*
        Don't update public properties of fields in renderedCallback()
        Don't update @wire adapter configuration object propert in renderedCallback()
         */
    }

    errorCallback(error,stack){
        console.log('Parent errorCallback!');
        console.log('stack-parent');
        console.log(stack);
        console.log('error-parent');
        console.log(error);
             /* This is called when the component encounters an error.
        You can do any cleanup here. Release the resources.*/
        throw error;
    }

    disconnectedCallback(){
        console.log('Parent disconnectedCallback!');
        /*
        This is called when the component is removed from the DOM.
        You can do any cleanup here. Release the resources.
         */
    }
}