

export const add = (a: number, b: number) => a + b;
export const isObject = (obj: any) => Object.prototype.toString.call(obj) === "[object Object]";

// interface ICacheUtilConfig {
//   cache?: any;
//   cacheKeyGenerator?: Function;
// }

// class CacheUtil {
//   cache: any = {};
//   cacheKeyGenerator: Function | undefined;
//   private static instance: CacheUtil;

//   /**
//    *
//    * @param config
//    */
//   constructor(config: ICacheUtilConfig = {}) {
//     const { cache, cacheKeyGenerator } = config;
//     this.cache = cache || {};
//     typeof cacheKeyGenerator === "function" &&
//       (this.cacheKeyGenerator = cacheKeyGenerator);
//   }

//   _getCache(key: string) {
//     return this.cache[key];
//   }

//   _setCache(key: string, value: any) {
//     this.cache[key] = value;
//   }

//   /**
//    * 默认key生成函数
//    * @param {any} params key生成参数
//    * @returns
//    */
//   keyGenerator(params: any) {
//     if (typeof params === "object") {
//       return JSON.stringify(params);
//     }
//     return params;
//   }

//   /**
//    * 生成key
//    * @param {any} params key生成参数
//    * @returns
//    */
//   getCacheKey(params: any) {
//     if (this.cacheKeyGenerator) {
//       return this.cacheKeyGenerator(params);
//     }
//     return this.keyGenerator(params);
//   }

//   /**
//    * 获取缓存
//    * @param {any} params key生成参数
//    * @returns
//    */
//   getCache(params: any) {
//     const key = this.getCacheKey(params);
//     return this._getCache(key);
//   }

//   /**
//    * 设置缓存
//    * @param {any} params key生成参数
//    * @param {any} value 缓存值
//    */
//   setCache(params: any, value: any) {
//     const key = this.getCacheKey(params);
//     this._setCache(key, value);
//   }

//   /**
//    * 重置缓存
//    * @param {any} value 缓存值
//    */
//   reset(value: any) {
//     this.cache = value || {};
//   }

//   /**
//    * 获取通用实例
//    * @returns
//    */
//   static getInstance() {
//     if (!CacheUtil.instance) {
//       CacheUtil.instance = new CacheUtil();
//     }
//     return CacheUtil.instance;
//   }
// }

// // 全局缓存实例
// // const caches = CacheUtil.getInstance()
// // 非全局实例
// // const caches = new CacheUtil()
// export default CacheUtil;
