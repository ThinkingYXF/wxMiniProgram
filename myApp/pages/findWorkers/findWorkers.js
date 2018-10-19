Page({
  data:{
    itemUrls: [
      '../../images/image1.jpg',
      '../../images/image2.jpg',
      '../../images/image3.jpg',
    ],
    indicator: true,
    autoplay: true,
    interval: 5000,
    duration: 800
  },
  onLoad: function(){
    console.log(111);
  }
})