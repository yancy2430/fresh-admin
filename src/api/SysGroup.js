import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 删除权限组
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function removeGroupById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysGroup/removeGroupById',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 更新数据
 * @param data body对象
*/
export function submitGroup (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysGroup/submitGroup',
    method: 'POST',
        data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}

/**
 * 获取用户组详情
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function getById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysGroup/getById',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 分组
*/
export function list (options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysGroup/list',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}
