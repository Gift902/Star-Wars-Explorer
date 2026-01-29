/**
 * @typedef {Object} Character
 * @property {string} name
 * @property {string} birth_year
 * @property {string} height
 * @property {string} mass
 * @property {string} gender
 * @property {string[]} films
 * @property {string} url
 */

/**
 * @typedef {Object} Film
 * @property {string} title
 * @property {string} url
 */

/**
 * @template T
 * @typedef {Object} SWAPIResponse
 * @property {number} count
 * @property {string|null} next
 * @property {string|null} previous
 * @property {T[]} results
 */
