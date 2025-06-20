export class BasePage {
    
  constructor(page) {
    this.page = page;
  }

  async navigateTo(path = '') {
    await this.page.goto(path);
  }

  async wait(seconds = 1.5) {
    await this.page.waitForTimeout(seconds * 1000);
  }
}
