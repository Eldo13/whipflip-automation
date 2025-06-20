import { BasePage } from './BasePage';

export class VehiclePage extends BasePage {
  async selectVehicleDetails() {
    
    await this.page.click('//*[@id="basic"]/div[1]/div/div/div/div/div/div/div/div/span/span[1]');
    await this.page.waitForSelector('text="2020"');

    for (let i = 0; i < 5; i++) await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');

    await this.page.waitForSelector('text="BMW"');
    for (let i = 0; i < 5; i++) await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');

    await this.page.waitForSelector('text="5 Series"');
    for (let i = 0; i < 3; i++) await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');

    await this.page.waitForSelector('text="Sedan 4D M550xi AWD 4.4L V8 Turbo"');
    for (let i = 0; i < 7; i++) await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');

    await this.page.click('xpath=//*[@id="basic"]/div[5]/div[1]/button');
  }
}
