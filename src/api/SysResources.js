import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取资源管理
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function getById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysResources/getById',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 添加资源管理
 * @param data body对象
*/
export function save (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysResources/save',
    method: 'POST',
        data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}

/**
 * 更新资源管理
 * @param data body对象
*/
export function updateById (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysResources/updateById',
    method: 'POST',
        data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}

/**
 * 删除资源管理
 * @param data body对象
*/
export function removeById (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysResources/removeById',
    method: 'POST',
        data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}

/**
 * 资源管理列表
 * @param queryParams 参数对象
 * @param data body对象
 * @param options ajax其他参数
*/
export function page (queryParams,data,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysResources/page',
    method: 'POST',
        data: JSON.stringify(data),
        params:queryParams,
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}

/**
 * 资源列表
*/
export function list (options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysResources/list',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 获取所有的方法接口
*/
export function methods (options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysResources/methodAll',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}
