/* eslint-disable quotes */
import axios from 'axios';

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

export function getPatientList() {
  var request = {
    "userId": 93242,
    "accountNumber": "15012670416",
    "userType": 1,
    "orgId": 34,
    "orgType": 2,
    "pageNo": 1,
    "pageSize": 10
  };

  var url = 'http://apitest.gyenno.com/pdms/queryPatientList';
  return encapsulatePromise(url, request);
};

export function getPatientInfo() {
  var request = {
    "userId": 93242,
    "accountNumber": "15012670416",
    "userType": 1,
    "orgId": 34,
    "orgType": 2,
    "patientId": 112,
    "patientPersonVersion": 98
  };

  var url = 'http://apitest.gyenno.com/pdms/queryPatientPerson';

  return encapsulatePromise(url, request);
}