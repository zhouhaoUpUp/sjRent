Page({
  data: {
    items: [
      { name: 'angular'},
      { name: 'react'},
      { name: 'polymer'},
      { name: 'vue'},
      { name: 'ember'},
      { name: 'backbone'},
    ],
    imgSrc:-1
  },
  onLoad() {},
  radioChange(e) {
    console.log('你选择的框架是：', e.detail.value);
  },
  toNext(){
    my.navigateTo({
      url: '../carList/carList'
    });
  },
  select(e){
        console.log(e.target.dataset.id)
      this.setData({
        imgSrc:e.target.dataset.id
        })
  }
});
