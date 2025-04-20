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



// const disposableDomains = require('disposable-email-domains');
// const { parse } = require('tldts');

// /**
//  * Check if an email is from a disposable domain
//  */
// function isDisposable(email) {
//   const domain = email.split('@')[1].toLowerCase();
//   return disposableDomains.includes(domain);
// }

// /**
//  * Check if the email uses Gmail alias with "+"
//  */
// function isGmailAlias(email) {
//   const [local, domain] = email.toLowerCase().split('@');
//   return domain === 'gmail.com' && local.includes('+');
// }

// module.exports = {
//   isDisposable,
//   isGmailAlias,
// };


const { parse } = require('tldts');
const disposableDomains = require('disposable-email-domains');

/**
 * Check if the email is from a disposable domain
 */
function isDisposable(email) {
  const domain = email.split('@')[1].toLowerCase();
  const parsed = parse(domain);
  const baseDomain = parsed.domain || domain;
  return disposableDomains.includes(baseDomain);
}

/**
 * Check if the email uses Gmail alias with "+"
 */
function isGmailAlias(email) {
  const [local, domain] = email.toLowerCase().split('@');
  return domain === 'gmail.com' && local.includes('+');
}

module.exports = {
  isDisposable,
  isGmailAlias,
};
