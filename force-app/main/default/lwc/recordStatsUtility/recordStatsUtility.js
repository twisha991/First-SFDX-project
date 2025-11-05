import { LightningElement } from 'lwc';

export default class RecordStatsUtility extends LightningElement {
    selectedObject = 'Case';
    totalRecords;
    statusBreakdown = [];

    handleObjectChange(event) {
        this.selectedObject = event.target.value;
        this.totalRecords = null;
        this.statusBreakdown = [];
    }

    refreshStats() {
        this.totalRecords = Math.floor(Math.random() * 1000) + 1;

        if (this.selectedObject === 'Case') {
            this.statusBreakdown = [
                { label: 'Open', count: this.randomCount() },
                { label: 'Closed', count: this.randomCount() }
            ];
        } else if (this.selectedObject === 'Lead') {
            this.statusBreakdown = [
                { label: 'New', count: this.randomCount() },
                { label: 'Converted', count: this.randomCount() },
                { label: 'Unqualified', count: this.randomCount() }
            ];
        } else if (this.selectedObject === 'Opportunity') {
            this.statusBreakdown = [
                { label: 'Prospecting', count: this.randomCount() },
                { label: 'Closed Won', count: this.randomCount() },
                { label: 'Closed Lost', count: this.randomCount() }
            ];
        }
    }

    randomCount() {
        return Math.floor(Math.random() * 300);
    }
}