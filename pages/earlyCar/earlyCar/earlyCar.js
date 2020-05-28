
Page({
  data:{
    ctime:"2015-8-23 14:00",
    showdown:false,
    showdown1:false,
    modalOpened:false
  },
  onButtomBtnTap() {
   this.setData({
     showdown: true,
   });
 },
 onPopupClose() {
   this.setData({
     showdown: false,
   });
 },
 onBtnTap() {
   this.setData({
     showdown1: true,
   })
 },
 onClose() {
   this.setData({
     showdown1: false,
   })
 },

  openModal() {
   this.setData({
     modalOpened: true,
   });
 },
 onModalClick() {
   this.setData({
     modalOpened: false,
   });
 },
 onModalClose() {
   this.setData({
     modalOpened: false,
   });
 },
 datePickerYMDHMS() {
    my.datePicker({
      format: 'yyyy-MM-dd HH:mm',
      currentDate: '2012-01-09 11:11',
      startDate: '2012-01-01 11:11',
      endDate: '2012-01-10 11:11',
      success: (res) => {
        this.setData({
          ctime:res.date
        })
      },
    });
  },
});