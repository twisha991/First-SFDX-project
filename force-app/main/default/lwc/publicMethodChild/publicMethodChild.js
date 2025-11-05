// import { api, LightningElement } from 'lwc';

// export default class PublicMethodChild extends LightningElement {
//     value = 'red';

//     options=[
//         {label:'Red Marker',value:'red'},
//         {label:'Green Marker',value:'green'},
//         {label:'Blue Marker',value:'blue'},
//         {label:'Black Marker',value:'black'}
//     ]

//     // public method - which can be called from outside i.e. from parent component
//     @api  
//     set setvalue (checkboxValue){
//         console.log('Child - selectCheckbox!');
//         const selectedCheckbox = this.options.find(checkbox => {
//             return checkbox.value === checkboxValue;
//         })
//         if(selectedCheckbox){
//             this.value=checkboxValue;
//             return 'Successfully checked!';
//         }
//         return 'No checkbox found!!';
//     }
// }









import { api, LightningElement } from 'lwc';

export default class PublicMethodChild extends LightningElement {
    _value = 'red'; // backing field for value

    options = [
        { label: 'Red Marker', value: 'red' },
        { label: 'Green Marker', value: 'green' },
        { label: 'Blue Marker', value: 'blue' },
        { label: 'Black Marker', value: 'black' }
    ];

    // Getter for value
    @api
    get value() {
        return this._value;
    }

    // Setter for value
    set value(newValue) {
        const selectedRadiobutton = this.options.find(Radiobutton => Radiobutton.value === newValue);
        if (selectedRadiobutton) {
            this._value = newValue;
        } else {
            console.warn('Invalid value passed to setter');
        }
    }

    // Public method to set value from parent
    @api
    selectedRadiobutton(Radiobutton) {
        console.log('Child - selectRadiobutton!');
        const selectedRadiobutton = this.options.find(radiobutton => radiobutton.value === radiobuttonValue);
        if (selectedRadiobutton) {
            this._value = radiobuttonValue;
            return 'Successfully checked!';
        }
        return 'No radiobutton found!!';
    }
}