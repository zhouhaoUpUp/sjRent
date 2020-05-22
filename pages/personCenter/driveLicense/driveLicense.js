Page({
  data: {
    focus: false,
    nameValue: '',
    cardNumValue:''
  },
  onLoad() {},
   bindKeyInput(e) {
    this.setData({
      nameValue: e.detail.value,
    });
  },
   bindKeyInput2(e) {
    this.setData({
      cardNumValue: e.detail.value,
    });
  },
});
