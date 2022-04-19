import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取系统通知
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function getById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysNotice/getById',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 添加系统通知
 * @param data body对象
*/
export function save (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysNotice/save',
    method: 'POST',
        data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}

/**
 * 更新系统通知
 * @param data body对象
*/
export function updateById (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysNotice/updateById',
    method: 'POST',
        data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}

/**
 * 删除系统通知
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function removeById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysNotice/removeById',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 系统通知列表
 * @param queryParams 参数对象
 * @param data body对象
 * @param options ajax其他参数
*/
export function page (queryParams,data,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysNotice/page',
    method: 'POST',
        data: JSON.stringify(data),
        params:queryParams,
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}
