const { Builder } = require("selenium-webdriver");
require("chromedriver");

const driver = new Builder().forBrowser("chrome").build();

driver.get("http://www.google.com");
driver.quit();