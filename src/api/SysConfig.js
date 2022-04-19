import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取配置分组数据
*/
export function configGroupList (options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysConfig/configGroupList',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 保存配置数据
 * @param data body对象
*/
export function saveConfig (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysConfig/saveConfig',
    method: 'POST',
        data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}
