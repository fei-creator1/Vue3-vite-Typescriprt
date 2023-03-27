/**
 * @param key cookie的键
 * @param value cookie的值
 * @param expires cookie的过期时间（天数），不传则关闭会话后失效，传参为负数则清除该cookie
 * @param path cookie生效路径范围，默认"/"全局生效
 */
export function setCookie(key: string, value: string | number, expires: number = 0, path: string = '/') {
  let cookie = `${key}=${encodeURIComponent(value)};path=${path};${import.meta.env.MODE === 'production' ? 'SameSite=None;Secure' : ''}`
  if (expires !== 0) {
    const date = new Date()
    date.setDate(date.getDate() + expires)
    cookie += `;expires=${date.toUTCString()}`
  }
  document.cookie = cookie
}

/**
 * @param key cookie的键
 * @returns cookie的值
 */
export function getCookie(key: string) {
  const reg = new RegExp("(^| )" + encodeURIComponent(key) + "=([^;]+)")
  const match = document.cookie.match(reg)
  return match ? decodeURIComponent(match[2]) : ""
}

/**
 * @param key cookie键
 */
export function removeCookie(key: string) {
  setCookie(key, '', -1)
}



const toString = Object.prototype.toString;

/**
 * @description: 判断值是否未某个类型
 */
export function is(val: unknown, type: string) {
	return toString.call(val) === `[object ${type}]`;
}

/**
 * @description:  是否为函数
 */
export function isFunction<T = Function>(val: unknown): val is T {
	return is(val, "Function");
}

/**
 * @description: 是否已定义
 */
export const isDef = <T = unknown>(val?: T): val is T => {
	return typeof val !== "undefined";
};

export const isUnDef = <T = unknown>(val?: T): val is T => {
	return !isDef(val);
};
/**
 * @description: 是否为对象
 */
export const isObject = (val: any): val is Record<any, any> => {
	return val !== null && is(val, "Object");
};

/**
 * @description:  是否为时间
 */
export function isDate(val: unknown): val is Date {
	return is(val, "Date");
}

/**
 * @description:  是否为数值
 */
export function isNumber(val: unknown): val is number {
	return is(val, "Number");
}

/**
 * @description:  是否为AsyncFunction
 */
export function isAsyncFunction<T = any>(val: unknown): val is Promise<T> {
	return is(val, "AsyncFunction");
}

/**
 * @description:  是否为promise
 */
export function isPromise<T = any>(val: unknown): val is Promise<T> {
	return is(val, "Promise") && isObject(val) && isFunction(val.then) && isFunction(val.catch);
}

/**
 * @description:  是否为字符串
 */
export function isString(val: unknown): val is string {
	return is(val, "String");
}

/**
 * @description:  是否为boolean类型
 */
export function isBoolean(val: unknown): val is boolean {
	return is(val, "Boolean");
}

/**
 * @description:  是否为数组
 */
export function isArray(val: any): val is Array<any> {
	return val && Array.isArray(val);
}

/**
 * @description: 是否客户端
 */
export const isClient = () => {
	return typeof window !== "undefined";
};

/**
 * @description: 是否为浏览器
 */
export const isWindow = (val: any): val is Window => {
	return typeof window !== "undefined" && is(val, "Window");
};

export const isElement = (val: unknown): val is Element => {
	return isObject(val) && !!val.tagName;
};

export const isServer = typeof window === "undefined";

// 是否为图片节点
export function isImageDom(o: Element) {
	return o && ["IMAGE", "IMG"].includes(o.tagName);
}

export function isNull(val: unknown): val is null {
	return val === null;
}

export function isNullAndUnDef(val: unknown): val is null | undefined {
	return isUnDef(val) && isNull(val);
}

export function isNullOrUnDef(val: unknown): val is null | undefined {
	return isUnDef(val) || isNull(val);
}
