import { LightningElement, track } from 'lwc';
import getCarData from '@salesforce/apex/CarDataController.getCarData';

export default class CarList extends LightningElement {
    @track showCarList = false;
    @track carData = [];
    @track columns = [
        { label: 'Make', fieldName: 'Make__c' },
        { label: 'Model', fieldName: 'Model__c' },
        { label: 'Year', fieldName: 'Year__c', type: 'number' },
        { label: 'Color', fieldName: 'Color__c' }
    ];

    handleClick() {
        this.showCarList = true;
        getCarData()
            .then(result => {
                this.carData = result;
            })
            .catch(error => {
                console.error('Error retrieving car data:', error);
                // Add more robust error handling here, e.g., display a user-friendly message
            });
    }
}