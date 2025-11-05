import { LightningElement, track } from 'lwc';

export default class HotelRooms extends LightningElement {
    hotelRoomsInfo;

    selectedHotelRoom;

    constructor() {
        super();

        this.selectedHotelRoom = { roomName: 'Koshi', roomCapacity: 4 };

        this.hotelRoomsInfo = [
            { roomName: 'A-01', roomCapacity: 4 },
            { roomName: 'A-02', roomCapacity: 2 },
            { roomName: 'A-03', roomCapacity: 1 },
            { roomName: 'B-01', roomCapacity: 3 },
            { roomName: 'B-02', roomCapacity: 5 },
            { roomName: 'C-01', roomCapacity: 6 },
            { roomName: 'C-02', roomCapacity: 2 }
        ]
    }

    connectedCallback() {
        // Provide eventlistener for 'tileclick' event of hotelRoom component
        this.template.addEventListener('tileclick', this.tileClickHandler.bind(this));
    }
    tileClickHandler(evt) {
        console.log('tileClickHandler!');
        console.log(evt.detail.roomName);
        this.selectedHotelRoom = evt.detail;
    }
}