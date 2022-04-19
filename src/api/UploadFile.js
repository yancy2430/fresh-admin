import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function getById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/upload/File/getById',
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
    url: serviceUrl+'/upload/File/save',
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
    url: serviceUrl+'/upload/File/removeById',
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
    url: serviceUrl+'/upload/File/page',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 上传图片
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function uploadMultipartImage (queryParams,options) {
        const formData = new FormData()
            formData.append('files',queryParams.files);
    return request(Object.assign({
    url: serviceUrl+'/upload/File/uploadMultipartImage',
    method: 'POST',
        data: formData,
    headers: {
    'Content-Type': 'multipart/form-data'
    }
    },options))
}

/**
 * 上传图片
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function uploadSingleImage (queryParams,options) {
        const formData = new FormData()
            formData.append('file',queryParams.file);
    return request(Object.assign({
    url: serviceUrl+'/upload/File/uploadSingleImage',
    method: 'POST',
        data: formData,
    headers: {
    'Content-Type': 'multipart/form-data'
    }
    },options))
}
