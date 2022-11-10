import * as assert from '@tests/helpers/asserts';
import * as cookie from '@tests/helpers/cookie';
import * as element from '@helpers/elements';
import * as route from '@helpers/route';
import { ROUTES } from '@tests/consts/routes';
import * as loginPage from '@tests/pages/login.page';
import * as depositPage from '@tests/pages/deposit.page';
import * as withdrawlPage from '@tests/pages/withdrawl.page';
import * as authwithdrawl from '@tests/data/withdrawl.data';

describe('login', () => {
    beforeEach(() => {
        cookie.clearCookies();
        route.visit(ROUTES.login);
        assert.shouldBeVisible(loginPage.custLogin);
    });

    it('The balance has been successfully reduced according to what was entered on the withdrawal form and the system displays a message "Transaction Successfull', () => {
       element.click(loginPage.custLogin);
       assert.shouldBeVisible(loginPage.formgroup);
       element.select(loginPage.userSelect, withdrawlPage.userName);
       element.click(loginPage.logincustSelect);
       element.click(withdrawlPage.custWithdrawl);
       element.fillField(depositPage.formcontrol, authwithdrawl.AMOUNT_WITHDRAWL_SUCCESS.amount_WithdrawlSuccess);
       element.click(depositPage.amountDeposit);

       assert.textVisible(depositPage.succes, 'Transaction successful');
    });
});

describe('login', () => {
    beforeEach(() => {
        cookie.clearCookies();
        route.visit(ROUTES.login);
        assert.shouldBeVisible(loginPage.custLogin);
    });

    it('The balance will not decrease and the system displays a message "Transaction Failed. You can not withdraw amount more than the balance.', () => {
       element.click(loginPage.custLogin);
       assert.shouldBeVisible(loginPage.formgroup);
       element.select(loginPage.userSelect, withdrawlPage.userName);
       element.click(loginPage.logincustSelect);
       element.click(withdrawlPage.custWithdrawl);
       element.fillField(depositPage.formcontrol, authwithdrawl.AMOUNT_WITHDRAWL_FAILED.amount_WithdrawlFailed);
       element.click(depositPage.amountDeposit);

       assert.textVisible(depositPage.succes, 'Transaction Failed. You can not withdraw amount more than the balance.');
    });
});