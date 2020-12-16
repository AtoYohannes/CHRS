function init() {
  // Raven.config("https://2f500e713dac45778039dfc964098ac9@sentry.io/1469470", {
  //   release: "1.0.0",
  //   environment: "development-test"
  // }).install();
}
function log(error) {
  // Raven.captureException(error);
  console.error(error);
}

export default {
  init,
  log,
};
