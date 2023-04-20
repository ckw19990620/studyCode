const express = require('express');
const router = express.Router();

router.get('/list', (req, res) => {
  const query = req.query
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE, PUT')
  res.send({
    status: 200,
    msg: '用户数据GET访问成功',
    data: query
  })
})

router.post('/list', (req, res) => {
  console.log(req);
  const query = req.body
  res.send({
    status: 200,
    msg: '用户数据POST访问成功',
    data: query
  })
})

module.exports = router




{
  "workOrderId": "",
  "parentProcessWorkOrderId": "F202304140005",
  "statusId": "2",
  "workOrderTypeId": "1619056259815",
  "opration": {
  "id": 1619318554139,
    "name": "协办工单",
    "type": "fork",
    "uuid": 1679884687879,
    "status": "2",
    "sourceRef": 1618997875423,
    "targetRef": "1619056259815",
    "targetNodeRef": "164619318337135"
},
  "customIdentify": "test535",
  "userId": "sangxiaoshuo",
  "classifyValue": "",
  "tag": "",
  "customField": {
  "$dispatchType": "",
    "$orderType": "全流程/监控",
    "serviceCompanyId": 5,
    "serviceCompanyArea": 578,
    "handleUserIds": "zxing1",
    "CcUserIds": "",
    "productModelInfoList": [
    {
      "tableIndex": 0,
      "productModel": "42C3",
      "modelClassify": "模拟表",
      "productModelId": 1,
      "productCompanyId": 100,
      "serviceCompanyIds": "5",
      "productCompanyName": "浙江正泰仪器仪表有限责任公司—燃气表",
      "serviceCompanyNames": "浙江正泰网络科技有限公司"
    }
  ],
    "workAddress": "",
    "addressDataIp": "120.15507,30.274084"
},
  "writeFormTemplateInputDto": {
  "content": {
    "list": [
      {
        "type": "cascader",
        "icon": "icon-jilianxuanze",
        "options": {
          "defaultValue": [
            "全流程",
            "监控"
          ],
          "width": "220px",
          "placeholder": "",
          "disabled": false,
          "clearable": true,
          "options": [],
          "remote": true,
          "remoteType": "option",
          "remoteOption": "option_1621849362854",
          "remoteOptions": [
            {
              "value": "550",
              "label": "全流程",
              "parentValue": "",
              "sort": "",
              "children": [
                {
                  "value": "551",
                  "label": "监控",
                  "parentValue": "550",
                  "sort": "",
                  "children": "",
                  "useStatus": ""
                }
              ],
              "useStatus": ""
            }
          ],
          "props": {
            "children": "children",
            "label": "label",
            "value": "value"
          },
          "remoteFunc": "func_1621849362854",
          "customClass": "",
          "labelWidth": 100,
          "isLabelWidth": false,
          "hidden": false,
          "dataBind": true,
          "required": false,
          "tableColumn": false
        },
        "name": "工单分类",
        "key": "1621849362854",
        "model": "orderType",
        "rules": []
      },
      {
        "id": 73,
        "key": "1619494704236",
        "icon": "icon-diy-com-textarea",
        "name": "问题描述",
        "type": "textarea",
        "model": "problemDescription",
        "rules": [
          {
            "message": "问题描述必须填写",
            "required": true
          }
        ],
        "options": {
          "width": "100%",
          "hidden": false,
          "pattern": "",
          "dataBind": true,
          "disabled": false,
          "required": true,
          "labelWidth": 120,
          "remoteFunc": "func_1619494704236",
          "customClass": "",
          "placeholder": "",
          "defaultValue": "test535",
          "isLabelWidth": true,
          "remoteOption": "option_1619494704236"
        },
        "dataSign": "",
        "useStatus": ""
      },
      {
        "key": "1619494844815",
        "icon": "icon-RectangleCopy",
        "name": "栅格布局",
        "type": "grid",
        "model": "grid_1619494844815",
        "rules": [],
        "columns": [
          {
            "list": [
              {
                "id": 61,
                "key": "1656473012203",
                "icon": "icon-date",
                "name": "服务约定时间",
                "type": "date",
                "model": "serviceAppointmenttime",
                "rules": [],
                "novalid": {},
                "options": {
                  "type": "datetime",
                  "width": "",
                  "format": "yyyy-MM-dd HH:mm:ss",
                  "hidden": false,
                  "dataBind": true,
                  "disabled": false,
                  "editable": true,
                  "readonly": false,
                  "required": false,
                  "clearable": true,
                  "timestamp": false,
                  "labelWidth": 120,
                  "remoteFunc": "func_1656473012203",
                  "customClass": "",
                  "placeholder": "",
                  "isLabelWidth": true,
                  "remoteOption": "option_1586758377876",
                  "endPlaceholder": "",
                  "chooseBeforeTime": true,
                  "startPlaceholder": ""
                },
                "dataSign": "",
                "useStatus": ""
              }
            ],
            "span": 12
          },
          {
            "list": [
              {
                "id": 65,
                "key": "1619494853146",
                "icon": "icon-input",
                "name": "服务地址",
                "type": "input",
                "model": "serviceAddress",
                "rules": [
                  {
                    "type": "string",
                    "message": "服务地址格式不正确"
                  }
                ],
                "novalid": {},
                "options": {
                  "width": "280px",
                  "hidden": true,
                  "pattern": "",
                  "dataBind": true,
                  "dataType": "string",
                  "disabled": false,
                  "required": false,
                  "labelWidth": 100,
                  "remoteFunc": "func_1619494780246",
                  "customClass": "",
                  "placeholder": "",
                  "defaultValue": "",
                  "isLabelWidth": false,
                  "remoteOption": "option_1619494780246",
                  "showPassword": false
                },
                "dataSign": "",
                "useStatus": ""
              }
            ],
            "span": 12
          }
        ],
        "options": {
          "align": "top",
          "gutter": 0,
          "hidden": false,
          "justify": "start",
          "remoteFunc": "func_1619494844815",
          "customClass": "",
          "remoteOption": "option_1619494844815"
        }
      },
      {
        "key": "1619494835148",
        "icon": "icon-RectangleCopy",
        "name": "栅格布局",
        "type": "grid",
        "model": "grid_1619494835148",
        "rules": [],
        "columns": [
          {
            "list": [
              {
                "id": 92,
                "key": "1619494837413",
                "icon": "icon-input",
                "name": "联系人",
                "type": "input",
                "model": "contacts",
                "rules": [
                  {
                    "type": "string",
                    "message": "联系人格式不正确"
                  },
                  {
                    "message": "联系人必须填写",
                    "required": true
                  }
                ],
                "novalid": {},
                "options": {
                  "width": "280Px",
                  "hidden": false,
                  "pattern": "",
                  "dataBind": true,
                  "dataType": "string",
                  "disabled": false,
                  "required": true,
                  "labelWidth": 120,
                  "remoteFunc": "func_1619494814352",
                  "customClass": "",
                  "placeholder": "",
                  "defaultValue": "test535",
                  "isLabelWidth": true,
                  "remoteOption": "option_1619494814352",
                  "showPassword": false
                },
                "dataSign": "",
                "useStatus": ""
              }
            ],
            "span": 12
          },
          {
            "list": [
              {
                "id": 92,
                "key": "1619494840077",
                "icon": "icon-input",
                "name": "联系电话",
                "type": "input",
                "model": "contactNumber",
                "rules": [
                  {
                    "type": "string",
                    "message": "联系电话格式不正确"
                  },
                  {
                    "message": "联系电话必须填写",
                    "required": true
                  }
                ],
                "novalid": {},
                "options": {
                  "width": "280Px",
                  "hidden": false,
                  "pattern": "",
                  "dataBind": true,
                  "dataType": "string",
                  "disabled": false,
                  "required": true,
                  "labelWidth": 100,
                  "remoteFunc": "func_1619494814352",
                  "customClass": "",
                  "placeholder": "",
                  "defaultValue": "test535",
                  "isLabelWidth": false,
                  "remoteOption": "option_1619494814352",
                  "showPassword": false
                },
                "dataSign": "",
                "useStatus": ""
              }
            ],
            "span": 12
          }
        ],
        "options": {
          "align": "top",
          "gutter": 0,
          "hidden": false,
          "justify": "start",
          "remoteFunc": "func_1619494835148",
          "customClass": "",
          "remoteOption": "option_1619494835148"
        }
      },
      {
        "id": 75,
        "key": "1625149136016",
        "icon": "icon-wenjianshangchuan",
        "name": "文件",
        "type": "fileupload",
        "model": "fileupload",
        "rules": [],
        "options": {
          "tip": "提示:此文件上传为发送给产业公司文件上传按钮",
          "limit": 9,
          "token": "",
          "width": "",
          "action": "http://10.5.18.140:10020/workorderdy/v1/WorkOrder/special/uploadFile/default",
          "domain": "http://tcdn.form.xiaoyaoji.cn/",
          "hidden": false,
          "headers": [],
          "isQiniu": true,
          "dataBind": true,
          "disabled": false,
          "multiple": false,
          "tokenFunc": "funcGetToken",
          "labelWidth": 100,
          "remoteFunc": "func_1625149136016",
          "customClass": "",
          "defaultValue": [],
          "isLabelWidth": false,
          "remoteOption": "option_1625149136016"
        },
        "dataSign": "",
        "useStatus": ""
      }
    ],
      "config": {
      "size": "small",
        "labelWidth": 100,
        "customClass": "",
        "labelPosition": "right"
    },
    "modelValue": {
      "problemDescription": "test535",
        "contacts": "test535",
        "contactNumber": "test535",
        "fileupload": [],
        "orderType": [
        "550",
        "551"
      ],
        "serviceAddress": "",
        "district": "",
        "location": "120.15507,30.274084"
    }
  },
  "modelValue": {
    "problemDescription": "test535",
      "contacts": "test535",
      "contactNumber": "test535",
      "fileupload": [],
      "orderType": [
      "550",
      "551"
    ],
      "serviceAddress": "",
      "district": "",
      "location": "120.15507,30.274084"
  },
  "nodeId": 1618997875423,
    "taskId": "123TaskId",
    "nodeName": "客户中心协办内容"
},
  "workAddress": "",
  "addressDataIp": "120.15507,30.274084",
  "orderType": "550/551",
  "smartAssignId": ""
}
