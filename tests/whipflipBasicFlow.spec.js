import { test } from '@playwright/test';
import { VehiclePage } from '../pages/VehiclePage';
import { InitialOfferPage } from '../pages/InitialOfferPage';
import { ConfirmOfferPage } from '../pages/ConfirmOfferPage';
import { SellCarPage } from '../pages/SellCarPage';
import { testData } from '../utils/testData';

test.describe('Whipflip Basic Flow', () => {

  test('Complete Car Selling Flow', async ({ page }) => {

    const vehiclePage = new VehiclePage(page);
    
    const offerPage = new InitialOfferPage(page);
    const confirmPage = new ConfirmOfferPage(page);
    const sellPage = new SellCarPage(page);

    await vehiclePage.navigateTo('/');
    await vehiclePage.wait();

    await vehiclePage.selectVehicleDetails();
    await offerPage.fillInitialDetails(testData);
    await confirmPage.fillConfirmation(testData.vin);
    await sellPage.schedulePickup(testData);
    await sellPage.finishFlow();
  });
});
