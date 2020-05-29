Page({
  data: {
    deps: ['产品部', '技术部', '暗部'],
    index:0
  },
  onLoad() {},
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      index: e.detail.value,
    });
  },
  
});
