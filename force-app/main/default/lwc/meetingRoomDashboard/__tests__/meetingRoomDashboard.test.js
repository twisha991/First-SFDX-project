import { createElement } from '@lwc/engine-dom';

import MeetingRoomDashboard from 'c/meetingRoomDashboard';

describe('c-meeting-room-dashboard', () => {
    let element;

    beforeEach(() => {
        element = createElement('c-meeting-room-dashboard', {
            is: MeetingRoomDashboard
        });
        document.body.appendChild(element);
    });

    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('should display available rooms initially', () => {
        const cards = element.shadowRoot.querySelectorAll('lightning-card');
        expect(cards.length).toBe(5); // 5 rooms initially
    });

    it('should move room from available to booked on booking', () => {
        const button = element.shadowRoot.querySelector('lightning-button[data-id="1"]');
        button.click();
        return Promise.resolve().then(() => {
            const availableCards = element.shadowRoot.querySelectorAll('lightning-card');
            expect(availableCards.length).toBe(5); // Still 5 cards, but different sections
            expect(element.bookedRooms.length).toBe(1);
            expect(element.availableRooms.length).toBe(4);
        });
    });

    it('should move room back to available on cancellation', () => {
        // Book first
        element.handleBookClick({ target: { dataset: { id: '1' } } });
        // Cancel
        element.handleCancelClick({ target: { dataset: { id: '1' } } });
        expect(element.bookedRooms.length).toBe(0);
        expect(element.availableRooms.length).toBe(5);
    });
});