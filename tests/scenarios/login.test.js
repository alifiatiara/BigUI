import * as assert from '@tests/helpers/asserts';
import * as cookie from '@tests/helpers/cookie';
import * as element from '@helpers/elements';
import * as route from '@helpers/route';
import { ROUTES } from '@tests/consts/routes';
import * as loginPage from '@tests/pages/login.page';

describe('login', () => {
    beforeEach(() => {
        cookie.clearCookies();
        route.visit(ROUTES.login);
        assert.shouldBeVisible(loginPage.custLogin);
    });

    it('Success login when click button Customer Login then insert right customer name', () => {
       element.click(loginPage.custLogin);
       assert.shouldBeVisible(loginPage.formgroup);
       element.select(loginPage.userSelect, loginPage.userName);
       element.click(loginPage.logincustSelect);
    });
});

describe('login', () => {
    beforeEach(() => {
        cookie.clearCookies();
        route.visit(ROUTES.login);
        assert.shouldBeVisible(loginPage.custLogin);
    });

    it('Success login when click button Bank Manager Login', () => {
       element.click(loginPage.managerLogin);
    });
});