// import { LightningElement } from 'lwc';

// export default class HighlightCities extends LightningElement {
//     cities = ['Pune', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai'];

//     cityClass(city) {
//         if (city.first) {
//             return 'first-city';
//         } else if (city.last) {
//             return 'last-city';
//         }
//         return 'normal-city';
//     }
// }



// import { LightningElement } from 'lwc';

// export default class HighlightCities extends LightningElement {
//     rawCities = ['Pune', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai'];

//     get cities() {
//         return this.rawCities.map((city, index, array) => {
//             let className = 'normal-city';
//             if (index === 0) {
//                 className = 'first-city';
//             } else if (index === array.length - 1) {
//                 className = 'last-city';
//             }
//             return {
//                 name: city,
//                 index,
//                 className
//             };
//         });
//     }
// }





import { LightningElement, track } from 'lwc';
 
export default class HighlightCities extends LightningElement {
    @track 

    cities = ['Pune', 'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad'];
 
    country = 'India';
 
    get countryName(){
        return this.country;
    }
    set countryName(value){
        this.country = value;
    }
 
    //get firstCity()
    //set firstCity()
 
    // bind firstCity with input type text
    // and also render it with h2
 
    get cityList() {
        return this.cities.map((city, index, arr) => {
            let className = 'any-city';
            if (index === 0) {
                className = 'first-city';
            } else if (index === arr.length - 1) {
                className = 'last-city';
            }
            return { name: city, className };
        });
    }
}