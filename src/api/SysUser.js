import request from '@/utils/request'
import {serviceUrl} from '@/utils/request'


/**
 * 获取管理员表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function getById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysUser/getById',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 添加管理员表
 * @param data body对象
*/
export function save (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysUser/save',
    method: 'POST',
        data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}

/**
 * 更新管理员表
 * @param data body对象
*/
export function updateById (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysUser/updateById',
    method: 'POST',
        data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}

/**
 * 删除管理员表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function removeById (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysUser/removeById',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 管理员表列表
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function page (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysUser/page',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 管理员登录
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function login (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysUser/login',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 验证码
*/
export function validationCode (options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysUser/validationCode',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 验证验证码
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function validation (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysUser/validation',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 退出登录
*/
export function logout (options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysUser/logout',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 通过邮箱重置密码
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function resetPassByEmail (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysUser/resetPassByEmail',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 重置密码
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function resetPassword (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysUser/resetPassword',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 获取用户信息
*/
export function userInfo (options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysUser/userInfo',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 获取用户可用菜单
*/
export function menu (options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysUser/menu',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 锁定后台用户
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function lockSys (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysUser/lockSys',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 解锁后台用户
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function unlockSys (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysUser/unlockSys',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 通过ID获取权限组ID
 * @param queryParams 参数对象
 * @param options ajax其他参数
*/
export function getRoleByUid (queryParams,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysUser/getRoleByUid',
    method: 'POST',
        params:queryParams,
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 保存分配的角色
 * @param queryParams 参数对象
 * @param data body对象
 * @param options ajax其他参数
*/
export function saveRole (queryParams,data,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysUser/saveRole',
    method: 'POST',
        data: JSON.stringify(data),
        params:queryParams,
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}

/**
 * 获取用户信息
*/
export function loginUser (options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysUser/loginUser',
    method: 'POST',
    headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
    },options))
}

/**
 * 更新客服
 * @param data body对象
*/
export function saveCustomer (data,options) {
    return request(Object.assign({
    url: serviceUrl+'/system/sysUser/saveCustomer',
    method: 'POST',
        data: JSON.stringify(data),
    headers: {
    'Content-Type': 'application/json; charset=utf-8'
    }
    },options))
}
