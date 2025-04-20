// const disposableDomains = require('disposable-email-domains');

// const disposableSet = new Set(disposableDomains);

// function isDisposable(email) {
//   const domain = email.split('@')[1]?.toLowerCase();
//   return disposableSet.has(domain);
// }

// function isGmailAlias(email) {
//   const match = email.match(/^([a-zA-Z0-9._%+-]+)\+.*@gmail\.com$/i);
//   return !!match;
// }

// module.exports = {
//   isDisposable,
//   isGmailAlias
// };


const disposableDomains = require('disposable-email-domains');

const disposableSet = new Set(disposableDomains);

function isDisposable(email) {
  const domain = email.split('@')[1]?.toLowerCase();
  return disposableSet.has(domain);
}

function isGmailAlias(email) {
  return /^.+\+.+@gmail\.com$/i.test(email);
}

module.exports = { isDisposable, isGmailAlias };
