// import { LightningElement } from 'lwc';
// import salesforceLogo from '@salesforce/resourceUrl/Trailhead';
// import trailheadLogo from '@salesforce/resourceUrl/einsteinSF';
// import einsteinLogo from '@salesforce/resourceUrl/sForce';

// export default class ImageSwitcher extends LightningElement {
//     selectedValue = '';
//     imageUrl;
//     altText;

//     options = [
//         { label: 'Salesforce', value: 'salesforce' },
//         { label: 'Trailhead', value: 'trailhead' },
//         { label: 'Einstein', value: 'einstein' }
//     ];

//     handleChange(event) {
//         this.selectedValue = event.detail.value;

//         switch (this.selectedValue) {
//             case 'salesforce':
//                 this.imageUrl = salesforceLogo;
//                 this.altText = 'Salesforce Logo';
//                 break;
//             case 'trailhead':
//                 this.imageUrl = trailheadLogo;
//                 this.altText = 'Trailhead Logo';
//                 break;
//             case 'einstein':
//                 this.imageUrl = einsteinLogo;
//                 this.altText = 'Einstein Logo';
//                 break;
//             default:
//                 this.imageUrl = null;
//                 this.altText = '';
//         }
//     }
// }




import { LightningElement } from 'lwc';
import salesforceLogo from '@salesforce/resourceUrl/sForce';
import trailheadLogo from '@salesforce/resourceUrl/Trailhead';
import einsteinLogo from '@salesforce/resourceUrl/einsteinSF';

export default class ImageSwitcher extends LightningElement {
    selectedValue = '';
    imageUrl;
    altText;

    options = [
        { label: 'Salesforce', value: 'salesforce' },
        { label: 'Trailhead', value: 'trailhead' },
        { label: 'Einstein', value: 'einstein' }
    ];

    handleChange(event) {
        this.selectedValue = event.detail.value;

        switch (this.selectedValue) {
            case 'salesforce':
                this.imageUrl = salesforceLogo;
                this.altText = 'Salesforce Logo';
                break;
            case 'trailhead':
                this.imageUrl = trailheadLogo;
                this.altText = 'Trailhead Logo';
                break;
            case 'einstein':
                this.imageUrl = einsteinLogo;
                this.altText = 'Einstein Logo';
                break;
            default:
                this.imageUrl = null;
                this.altText = '';
        }
    }
}