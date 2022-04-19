import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取配置
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function config (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/api/system/config',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 获取配置
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function configGroup (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/api/system/configGroup',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}
