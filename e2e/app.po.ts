import { browser, by, element } from 'protractor';

export class DbAnonymizerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('db-root h1')).getText();
  }
}
