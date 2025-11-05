import { registerListener, unregisterAllListeners } from 'c/pubSub';
import {CurrentPageReference} from 'lightning/navigation';
import { LightningElement, wire } from 'lwc';

export default class SelectedHotelRoom extends LightningElement {
    selectedHotelRoom = {roomName:'ABC Room',roomCapacity:4};

    @wire(CurrentPageReference)
    pageRef;

    connectedCallback(){
        // subscribe to 'pubsubtileclick' event
        registerListener('pubsubtileclick',this.hotelRoomSelectedHandler,this);
    }

    // Event listener for pubsubtileclick
    hotelRoomSelectedHandler(evt){
        console.log('hotelRoomSelectedHandler!');
        console.log(JSON.stringify(evt));
        this.selectedHotelRoom = evt;
    }

    disconnectedCallback(){
        // Unsubscribe to all events
        unregisterAllListeners(this);
    }
}