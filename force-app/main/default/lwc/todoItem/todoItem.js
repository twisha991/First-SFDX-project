import { api, LightningElement } from 'lwc';

export default class TodoItem extends LightningElement {
    //@track // private reactive property
    @api // public reactive property
    itemName = 'default';
    
    @api
    showTodo = false; 
        // boolean public reactive property
        // you should have default value as false. It parent component
        // passing value for it then it should be passed as a true by
        // just specifying the property name.

        // public reactive property
        // public reactive properties are readonly from same component
        // only default value can be initialized but cannot change it further.
        // we can only supply value to it from parent component.
}