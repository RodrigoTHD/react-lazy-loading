export default class Utils {
  static isString(value) {
    return typeof value === 'string';
  }

  static isFunction(func) {
    return func && {}.toString.call(func) === '[object Function]';
  }

  static isNumber(value) {
    return typeof value === 'number' && isFinite(value);
  }

  static isObject(value) {
    return value && value.length === undefined && typeof value === 'object';
  }

  static isEmptyObject(obj) {
    return Utils.isObject(obj) && Object.keys(obj).length === 0;
  }

  static isEmpty(value, allowEmptyString) {
    return (
      value === null ||
      value === undefined ||
      (Array.isArray(value) && !value.length) ||
      (allowEmptyString ? false : value === '') ||
      (Utils.isObject(value) && Utils.isEmptyObject(value))
    );
  }
}
