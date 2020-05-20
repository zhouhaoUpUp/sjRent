Page({
  data: {
    imgTypeSrc:"",
    modaltype:false,
    buttons:[
      {
        text:"取消",
        extClass:"btn-modal-1"
      },
      {
        text:"确定",
        extClass:"btn-modal-2"
      }
    ]
  },
  subApplication(){
    console.log(this.data.modaltype) 
    this.setData({
      modaltype: true
    })
  },
  onLoad() {},
});
