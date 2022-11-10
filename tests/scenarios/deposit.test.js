import * as assert from '@tests/helpers/asserts';
import * as cookie from '@tests/helpers/cookie';
import * as element from '@helpers/elements';
import * as route from '@helpers/route';
import { ROUTES } from '@tests/consts/routes';
import * as loginPage from '@tests/pages/login.page';
import * as depositPage from '@tests/pages/deposit.page';
import * as auth from '@tests/data/deposit.data';

describe('login', () => {
    beforeEach(() => {
        cookie.clearCookies();
        route.visit(ROUTES.login);
        assert.shouldBeVisible(loginPage.custLogin);
    });

    it('The balance will increase according to the amount entered, and the system will display a message', () => {
       element.click(loginPage.custLogin);
       assert.shouldBeVisible(loginPage.formgroup);
       element.select(loginPage.userSelect, loginPage.userName);
       element.click(loginPage.logincustSelect);
       element.click(depositPage.custDeposit);
       element.fillField(depositPage.formcontrol, auth.AMOUNT_DEPOSIT.amount_Deposit);
       element.click(depositPage.amountDeposit);

       assert.textVisible(depositPage.succes, 'Deposit Successful');
    });
});