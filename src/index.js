const bridgeUrl = 'ftp://bridge.youhei-nakagawa.net/pub/open.html?url=';

function g2s(ua, selector) {
  if (g2sCheckTarget(ua)) {
    var matches = document.querySelectorAll(selector);
    matches.forEach((item) => {
      if (item.href) {
        item.href = bridgeUrl + encodeURIComponent(item.href);
      }
    });
  }
}

function checkTarget(ua) {
  console.log(ua);
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

export const g2sCheckTarget = ua => checkTarget(ua);
export default g2s;
