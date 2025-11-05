import { LightningElement } from 'lwc';

export default class QuickNotesUtility extends LightningElement {
    noteText;
    recordId;
    notes = [];

    handleNoteChange(event) {
        this.noteText = event.target.value;
    }

    handleRecordIdChange(event) {
        this.recordId = event.target.value;
    }

    saveNote() {
        if (this.noteText) {
            const newNote = {
                id: Date.now().toString(),
                text: this.noteText,
                recordId: this.recordId
            };
            this.notes.push(newNote);
            this.noteText = '';
            this.recordId = '';
        }
    }

    clearNotes() {
        this.notes = [];
    }
}