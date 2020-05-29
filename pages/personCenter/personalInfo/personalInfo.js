Page({
  data: {
    petName:"猫", //昵称
    birthday:"1997-10-19", //生日
    city:"四川成都", //城市
    mobile:"18888888888", // 手机号
    email:"Talice163.com", //邮箱

    licenseType:"未认证" //驾照认证状态
  },
  onLoad() {},
// 选择时间
   datePicker() {
    my.datePicker({
      currentDate: '2016-10-10',
      startDate: '2016-10-9',
      endDate: '2017-10-9',
      success: (res) => {
        my.alert({
          title: 'datePicker response: ' + JSON.stringify(res)
        });
      },
    });
  },
  // 城市级联选择器 后续配置
   openMultiLevelSelect() {
    my.multiLevelSelect({
        title: '多级联选择器',//级联选择标题
        list: [
        {
            name: "杭州市",//条目名称
            subList: [
                {
                    name: "西湖区",
                    subList: [
                        {
                            name: "古翠街道"
                        },
                        {
                            name: "文新街道"
                        }
                    ]
                },
                {
                    name: "上城区",
                    subList: [
                        {
                            name: "延安街道"
                        },
                        {
                            name: "龙翔桥街道"
                        }
                    ]
                }
            ]//级联子数据列表
        }],//级联数据列表
        success:(res)=>{
            my.alert({title:JSON.stringify(res)})
        }
    });
  }
});
