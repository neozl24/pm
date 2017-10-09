/* eslint-disable quotes */
import axios from 'axios';

// axios.post 本身就是个 Promise 对象，这里我们再用 Promise 封装一次，在本文件内对响应数据进行处理，对外只暴露请求成功时的有效数据
function encapsulatePromise(url, request) {

  var promise = new Promise(function(resolve) {

    axios.post(url, request).then((response) => {
      if (response.data.code === 0) {
        resolve(response.data.data);
      } else {
        console.log('参数错误: ', response.data.msg);
      }

    }).catch(function(error) {
      console.error('请求出错: ', error);
    });
  });

  return promise;
}

export function getDictionary() {
  var request = {
    "userId": 93242,
    "accountNumber": "15527231713",
    "userType": 2,
    "orgId": 34,
    "orgType": 2,
    "version": 43
  };

  var url = 'http://apitest.gyenno.com/pdms/queryDictionary';

  return encapsulatePromise(url, request);
};

export function getTemplate() {
  var request = {
    "userId": 93242,
    "accountNumber": "15527231713",
    "userType": 2,
    "orgId": 34,
    "orgType": 2,
    "activeType": 1
  };

  var url = 'http://apitest.gyenno.com/pdms/queryTemplate';

  return encapsulatePromise(url, request);
};

// 获取分组信息
export function getGroupList() {
  var request = {
    "userId": 93242,
    "accountNumber": "15527231713",
    "userType": 2,
    "orgId": 34,
    "orgType": 2
  };
  var url = 'http://apitest.gyenno.com/pdms/queryGroupList';

  return encapsulatePromise(url, request);
};

export function getUserList() {
  var request = {
    "userId": 93242,
    "accountNumber": "15527231713",
    "userType": 2,
    "orgId": 34,
    "orgType": 2
  };

  var url = 'http://apitest.gyenno.com/usermgr/queryUserList';

  return encapsulatePromise(url, request);
};

export function getRoleList() {
  var request = {
    "userId": 93242,
    "accountNumber": "15527231713",
    "userType": 2,
    "orgId": 34,
    "orgType": 2,
    "pageNo": 1,
    "pageSize": 10,
    "roleIdList": [
      "402831815996c167015996ca6cdb0020",
      "402831815ad9e7e7015ad9ecfab90009",
      "402831815bccdd69015bccea151f0006"
    ],
    "roleName": "%",
    "roleType": 2,
    "org": {
      "id": "8a9e2d385ea7264f015ea8361036008b"
    }
  };

  var url = 'http://apitest.gyenno.com/pdms/queryRoleList';

  return encapsulatePromise(url, request);
};
