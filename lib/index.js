// class Base64Utility {
//   private static readonly _keyStr: string =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var CacheUtil = /** @class */ (function () {
    /**
     *
     * @param config
     */
    function CacheUtil(config) {
        if (config === void 0) { config = {}; }
        this.cache = {};
        var cache = config.cache, cacheKeyGenerator = config.cacheKeyGenerator;
        this.cache = cache || {};
        typeof cacheKeyGenerator === "function" &&
            (this.cacheKeyGenerator = cacheKeyGenerator);
    }
    CacheUtil.prototype._getCache = function (key) {
        return this.cache[key];
    };
    CacheUtil.prototype._setCache = function (key, value) {
        this.cache[key] = value;
    };
    /**
     * 默认key生成函数
     * @param {any} params key生成参数
     * @returns
     */
    CacheUtil.prototype.keyGenerator = function (params) {
        if (typeof params === "object") {
            return JSON.stringify(params);
        }
        return params;
    };
    /**
     * 生成key
     * @param {any} params key生成参数
     * @returns
     */
    CacheUtil.prototype.getCacheKey = function (params) {
        if (this.cacheKeyGenerator) {
            return this.cacheKeyGenerator(params);
        }
        return this.keyGenerator(params);
    };
    /**
     * 获取缓存
     * @param {any} params key生成参数
     * @returns
     */
    CacheUtil.prototype.getCache = function (params) {
        var key = this.getCacheKey(params);
        return this._getCache(key);
    };
    /**
     * 设置缓存
     * @param {any} params key生成参数
     * @param {any} value 缓存值
     */
    CacheUtil.prototype.setCache = function (params, value) {
        var key = this.getCacheKey(params);
        this._setCache(key, value);
    };
    /**
     * 重置缓存
     * @param {any} value 缓存值
     */
    CacheUtil.prototype.reset = function (value) {
        this.cache = value || {};
    };
    /**
     * 获取通用实例
     * @returns
     */
    CacheUtil.getInstance = function () {
        if (!CacheUtil.instance) {
            CacheUtil.instance = new CacheUtil();
        }
        return CacheUtil.instance;
    };
    return CacheUtil;
}());
// 全局缓存实例
// const caches = CacheUtil.getInstance()
// 非全局实例
// const caches = new CacheUtil()
export default CacheUtil;
