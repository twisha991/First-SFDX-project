import { createElement } from '@lwc/engine-dom';

import RoomTile from 'c/roomTile';

describe('c-room-tile', () => {
    let element;

    beforeEach(() => {
        element = createElement('c-room-tile', {
            is: RoomTile
        });
        element.room = { id: '1', name: 'Koshi', capacity: 5 };
        document.body.appendChild(element);
    });

    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('renders room details correctly', () => {
        const title = element.shadowRoot.querySelector('lightning-card').title;
        expect(title).toBe('Koshi');

        const capacityText = element.shadowRoot.querySelector('span').textContent;
        expect(capacityText).toContain('Capacity: 5');
    });

    it('shows "Book Room" button when isBooked is false', () => {
        const button = element.shadowRoot.querySelector('lightning-button');
        expect(button.label).toBe('Book Room');
        expect(button.variant).toBe('brand');
    });

    it('shows "Cancel" button when isBooked is true', () => {
        element.isBooked = true;
        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector('lightning-button');
            expect(button.label).toBe('Cancel');
            expect(button.variant).toBe('destructive');
        });
    });

    it('dispatches "roomaction" event with correct details on click', () => {
        const handler = jest.fn();
        element.addEventListener('roomaction', handler);

        const button = element.shadowRoot.querySelector('lightning-button');
        button.click();

        return Promise.resolve().then(() => {
            expect(handler).toHaveBeenCalled();
            const eventDetail = handler.mock.calls[0][0].detail;
            expect(eventDetail.id).toBe('1');
            expect(eventDetail.action).toBe('book'); // Default state
        });
    });

    it('dispatches "cancel" action when isBooked is true', () => {
        element.isBooked = true;
        const handler = jest.fn();
        element.addEventListener('roomaction', handler);

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector('lightning-button');
            button.click();

            expect(handler).toHaveBeenCalled();
            const eventDetail = handler.mock.calls[0][0].detail;
            expect(eventDetail.action).toBe('cancel');
        });
    });
});