// import { LightningElement } from 'lwc';

// export default class LifecycleDemoChild extends LightningElement {
//     simpleText;
//     constructor(){
//         super();
//         console.log('Child Constructor!');
//         this.simpleText = 'default';
//     }

//     changeHandler(evt){
//         this.simpleText = evt.target.value;
//     }

//     connectedCallback(){
//         console.log('Child connectedCallback!');
//         /*
//         Though here DOM is inserted but not yet rendered, so you can change
//         the attribute value but you can not manipulate the DOM.
//         You can programatically add or remvoe any element(s).
//          */
//     }
//     renderedCallback(){
//         console.log('Child renderedCallback!');
//         /*
//         This is called when the component is rendered in the DOM.
//         You can manipulate the DOM here.
//         You can add or remove any element(s).
//          */
//         /*
//         Don't update public properties of fields in renderedCallback()
//         Don't update @wire adapter configuration object propert in renderedCallback()
//          */
//         throw new Error('Opps, Something went wrong!');
//     }

//     errorCallback(error,stack){
//         console.log('Child errorCallback!');
//              /* This is called when the component encounters an error.
//         You can do any cleanup here. Release the resources.*/
//     }

//     disconnectedCallback(){
//         console.log('Child disconnectedCallback!');
//         /*
//         This is called when the component is removed from the DOM.
//         You can do any cleanup here. Release the resources.
//          */
//     }
// }





import { LightningElement } from 'lwc';

export default class LifecycleDemoChild extends LightningElement {
    simpleText;
    counter = 0;
    intervalId;

    constructor() {
        super();
        console.log('Child Constructor!');
        this.simpleText = 'default';
    }

    changeHandler(evt) {
        this.simpleText = evt.target.value;
    }

    connectedCallback() {
        console.log('Child connectedCallback!');

        // Start a timer that logs the counter every second
        this.intervalId = setInterval(() => {
            this.counter++;
            console.log(`Counter: ${this.counter}`);
        }, 1000);
    }

    renderedCallback() {
        console.log('Child renderedCallback!');
    }

    errorCallback(error, stack) {
        console.log('Child errorCallback!', error, stack);
    }

    disconnectedCallback() {
        console.log('Child disconnectedCallback!');

        // Clear the timer when component is removed
        clearInterval(this.intervalId);
    }
}
