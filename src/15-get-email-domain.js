/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  return String(email.match(/(?<=@)[\w-]+\.[a-z]{2,3}/gi));
}

module.exports = getEmailDomain;
