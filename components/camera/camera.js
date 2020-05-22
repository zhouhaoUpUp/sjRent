Component({
  mixins: [],
  data: {
    license1:"驾驶证正页",
    license2:"驾驶证副页",
    imgFront:"../../../assets/camera/Personal_photo@2x.png",
    imgVerso:"../../../assets/camera/Personal_photo@2x.png"
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    // 获取第一张正面照片
    chooseFront() {
    my.chooseImage({
      sourceType: ['camera','album'],
      count: 2,
      success: (res) => {
       console.log(res);
       this.setData({
         imgFront:res.apFilePaths[0]
       })
      },
      fail:()=>{
        my.showToast({
          content: 'fail', // 文字内容
        });
      }
    })
  },
   // 获取第二张正面照片
  chooseVerso() {
    my.chooseImage({
      sourceType: ['camera','album'],
      count: 2,
      success: (res) => {
       console.log(res);
       this.setData({
         imgVerso:res.apFilePaths[0]
       })
      },
      fail:()=>{
        my.showToast({
          content: 'fail', // 文字内容
        });
      }
    })
  },
  },
});
