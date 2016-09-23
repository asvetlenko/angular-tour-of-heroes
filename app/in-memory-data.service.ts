import {InMemoryDbService} from 'angular2-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb(){
        let heroes = [
            {
                id: 11,
                firstName: 'John',
                lastName: 'Tolkien',
                email: 'tolkien@inklings.com',
                phone: '867-5309'
            },
            {
                id: 12,
                firstName: 'Clive',
                lastName: 'Lewis',
                email: 'lewis@inklings.com',
                phone: '867-5309'
            },
            {
                id: 13,
                firstName: 'Owen',
                lastName: 'Barfield',
                email: 'barfield@inklings.com',
                phone: '867-5309'
            },
            {
                id: 14,
                firstName: 'Charles',
                lastName: 'Williams',
                email: 'williams@inklings.com',
                phone: '867-5309'
            },
            {
                id: 15,
                firstName: 'Roger',
                lastName: 'Green',
                email: 'green@inklings.com',
                phone: '867-5309'
            },
            {
                id: 16,
                firstName: 'Carl',
                lastName: 'Brisly',
                email: 'carloso.brisly@gmail.com',
                phone: '555-84754'
            },
            {
                id: 17,
                firstName: 'Peruano',
                lastName: 'Mondelo',
                email: 'p.mondelo@gmail.com',
                phone: '758-95412'
            },
            {
                id: 18,
                firstName: 'Durandal',
                lastName: 'Freime',
                email: 'f.durandal@torento.com',
                phone: '844-44874'
            },
            {
                id: 19,
                firstName: 'Alexand',
                lastName: 'Orlov',
                email: 'alexandr.orlov@mail.ru',
                phone: '977-87459'
            },
            {
                id: 20,
                firstName: 'Vasiliy',
                lastName: 'Petrov',
                email: 'petia.vasichkin@mumu.com',
                phone: '111-77788'
            }
        ];

        return {heroes};
    }
}