Component({
  mixins: [],
  data: {
    modalOpened:true,
     buttonss: [
      { text: '联系客服' ,extClass: 'buttonBold'},
      { text: '取消呼叫', extClass: 'buttonBold2' },
    ]
  },
  props: {},
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onModalClick() {
    this.setData({
      modalOpened: false,
    });
 },
  },
});
