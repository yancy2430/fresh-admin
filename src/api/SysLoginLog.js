import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function getById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysLoginLog/getById',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 保存或更新
 * @param data body对象
*/
export function save (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysLoginLog/save',
    method: 'POST',
        data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}

/**
 * 删除
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function removeById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysLoginLog/removeById',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function page (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysLoginLog/page',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}
