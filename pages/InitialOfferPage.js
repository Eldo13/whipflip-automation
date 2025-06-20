import { BasePage } from './BasePage';

export class InitialOfferPage extends BasePage {
  
  async fillInitialDetails({ mileage, zip, email, phone }) {
    await this.page.fill('#initial-offer_mileage', mileage);
    await this.page.click('#dropdown-basic');
    await this.page.click('//*[@id="5"]/span');
    await this.page.getByText('Automatic').click();
    await this.page.getByText('Yes').click();
    await this.page.fill('#initial-offer_user_zip', zip);
    await this.page.fill('#initial-offer_user_email', email);
    await this.page.fill('#initial-offer_user_phone', phone);
    await this.page.locator('.ant-checkbox-input').check();
    await this.page.getByText('Get My Initial Offer').click();
  }
}
