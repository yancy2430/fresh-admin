import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function getById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysNoticeGroup/getById',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 添加
 * @param data body对象
*/
export function save (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysNoticeGroup/save',
    method: 'POST',
        data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}

/**
 * 更新
 * @param data body对象
*/
export function updateById (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysNoticeGroup/updateById',
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
    url: serviceUrl+'/system/sysNoticeGroup/removeById',
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
 * @param data body对象
 * @param options ajax其他参数
*/
export function page (queryParams,data,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysNoticeGroup/page',
    method: 'POST',
        data: JSON.stringify(data),
        params:queryParams,
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}
