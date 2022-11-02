import { faker } from '@faker-js/faker' ;

export function password(){
    return faker.internet.password();
}

export function username() {
    return "automation_" + faker.internet.userName().toLowerCase();
}