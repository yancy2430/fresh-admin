import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取短信记录
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function getById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysSmsRecord/getById',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 添加短信记录
 * @param data body对象
*/
export function save (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysSmsRecord/save',
    method: 'POST',
        data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}

/**
 * 更新短信记录
 * @param data body对象
*/
export function updateById (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysSmsRecord/updateById',
    method: 'POST',
        data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}

/**
 * 删除短信记录
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function removeById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysSmsRecord/removeById',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 短信记录列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function page (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysSmsRecord/page',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}
