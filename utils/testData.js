import { faker } from '@faker-js/faker';

export const testData = {
    
    mileage: faker.number.int({ min: 10000, max: 70000 }).toString(),
    zip: '19701',
    email: 'eldose@yopmail.com',
    //phone: '7' + faker.string.numeric(9),
    phone: '7132590671',
    vin: 'SALWR2FE6HA163216',
    address: '2504 Red Lion Road',
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
};
