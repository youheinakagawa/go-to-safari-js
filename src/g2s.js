const bridgeUrl = 'ftp://bridge.youhei-nakagawa.net/pub/open.html?url=';

function g2s(selector, ua = window.navigator.userAgent) {
  if (checkTarget(ua)) {
    var matches = document.querySelectorAll(selector);
    matches.forEach((item) => {
      if (item.href) {
        item.href = bridgeUrl + encodeURIComponent(item.href);
        return true;
      }
    });
  }
  return false;
}

function checkTarget(ua) {
  const safari = /safari\//.test(ua.toLowerCase());
  const ios = /iphone|ipod|ipad/.test(ua.toLowerCase());
  const checkString = /\(khtml, like gecko\) version\//.test(ua.toLowerCase());
  if (ios && safari && checkString) {
      return false;
  }
  if (! ios) {
      return false;
  }
  return true;
}

// check js environment
if (typeof(exports) !== 'undefined') {
  // nodejs env
  if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = g2s;
  }
  exports.g2s = g2s;
  exports.g2sCheckTarget = checkTarget;
} else {
  // requirejs env (optional)
  if (typeof(define) === 'function' && define.amd) {
      define(function () {
          return g2s;
      });
  } else if (window) {
      // browser env
      window.g2s = g2s;
  }
}
