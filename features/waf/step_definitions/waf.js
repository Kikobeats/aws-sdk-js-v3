const { Before } = require("cucumber");

Before({ tags: "@waf" }, function (scenario, callback) {
  const { WAF } = require("../../../clients/client-waf");
  this.service = new WAF({});
  callback();
});
