import { BasePage } from './BasePage';

export class ConfirmOfferPage extends BasePage {

  async fillConfirmation(vin) {

    await this.page.fill('[id="confirm_info_vinNumber"]', vin);
    await this.page.click('//*[@id="confirm_conditions_0_yes"]/div[2]/div/label');
    await this.page.locator('//*[@id="confirm"]/div/div[3]/div[3]/div/div[1]/div/div[2]/div/div/div/div[2]/div/div[6]/div/div/div/div/div/div/label').check();
    await this.page.locator('//*[@id="confirm"]/div/div[3]/div[3]/div/div[1]/div/div[2]/div/div/div/div[2]/div/div[11]/div/div/div/div/div/div/label').check();
    await this.page.click('//*[@id="confirm_conditions_1_yes"]/div[2]/div/label');
    await this.page.locator('//*[@id="confirm"]/div/div[3]/div[3]/div/div[2]/div/div[2]/div/div/div/div[2]/div/div[5]/div/div/div/div/div/div/label').check();
    await this.page.locator('//*[@id="confirm"]/div/div[3]/div[3]/div/div[2]/div/div[2]/div/div/div/div[2]/div/div[6]/div/div/div/div/div/div/label').check();
    await this.page.click('//*[@id="confirm_conditions_2_yes"]/div[1]/div/label');
    await this.page.click('//*[@id="confirm_conditions_3_yes"]/div[1]/div/label');
    await this.page.click('//*[@id="confirm"]/div/div[4]/div[2]/div/div/div/div/div/div/div/div/div/div[2]/label/span[2]/h3');
    await this.page.click('//*[@id="confirm_cosmetic_exterior"]/div[2]/label/span[1]/img');
    await this.page.click('//*[@id="confirm_cosmetic_interior"]/div[2]/label');
    await this.page.click('//*[@id="confirm"]/div/div[6]/button');
    await this.page.waitForTimeout(1500);
    await this.page.getByLabel('Utility 4D Dynamic 4WD 5.0L V8 Supercharged').first().check();
    await this.page.getByText('Skip to Final Offer').click();
    await this.page.getByText('Pick a Time to Sell').click();
  }
}
