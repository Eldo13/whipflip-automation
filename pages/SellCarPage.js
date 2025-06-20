import { BasePage } from './BasePage';

export class SellCarPage extends BasePage {
    async schedulePickup({ address, firstName, lastName }) {
        await this.page.fill('#rc_select_0', address);
        await this.page.waitForSelector('.ant-select-item-option');
        await this.page.click('.ant-select-item-option');
        await this.page.waitForTimeout(1500);
        const datepicker = this.page.locator('#Sell_appointment_date');
        await datepicker.waitFor({ state: 'visible' });
        await this.page.click('#Sell_appointment_date');
        await this.page.getByText('Today').click();
        await this.page.click('#Sell_appointment_time');
        await this.page.waitForTimeout(1500);
        await this.page.keyboard.press('Enter');

        await this.page.fill('#Sell_first_name', firstName);
        await this.page.fill('#Sell_last_name', lastName);
        await this.page.click('//*[@id="Sell_hasTitle"]/div[1]/label');
        await this.page.click('//*[@id="Sell_hasTitle"]/div[1]/label');
        await this.page.locator('#Sell_agreed').check();
        await this.page.click('//*[@id="Sell"]/div/div[3]/div[2]/div/div[4]/div[2]/button');
        await this.page.click('[class="disagree_btn text-dark"]');
        await this.page.waitForTimeout(1500);
    }

    async finishFlow() {
        await this.page.waitForTimeout(2000);
        console.log(await this.page.url());
        await this.page.click('//*[@id="__next"]/div/div[2]/div/div[3]/div/div/div[3]/a/button');
        await this.page.waitForTimeout(2000);
    }

}
