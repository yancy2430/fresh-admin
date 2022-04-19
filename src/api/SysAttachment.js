import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取附件表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function getById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysAttachment/getById',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 保存或更新附件表
 * @param data body对象
*/
export function save (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysAttachment/save',
    method: 'POST',
        data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}

/**
 * 删除附件表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function removeById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysAttachment/removeById',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 附件表列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function page (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysAttachment/page',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 文件上传
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function upload (queryParams,options) {
        const formData = new FormData()
            formData.append('file',queryParams.file);
    return request(Object.assign({
    url: serviceUrl+'/system/sysAttachment/upload',
    method: 'POST',
        data: formData,
    headers: {
    'Content-Type': 'multipart/form-data'
    }
    },options))
}

/**
 * 文件上传
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function uploads (queryParams,options) {
        const formData = new FormData()
            formData.append('files',queryParams.files);
    return request(Object.assign({
    url: serviceUrl+'/system/sysAttachment/uploads',
    method: 'POST',
        data: formData,
    headers: {
    'Content-Type': 'multipart/form-data'
    }
    },options))
}
