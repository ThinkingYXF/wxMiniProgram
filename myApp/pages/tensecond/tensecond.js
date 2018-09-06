Page({
	data: {
		s: 0,
		s1: 0,
		s2: 0,
		interval: null
	},
	onload: function(){

	},
	timer: function(callback, stopPrame, restart){
		if(restart){
			this.setData({
				s: 0,s1:0,s2:0
			});
			clearInterval(this.data.interval);
			return false;
		}
		if(stopPrame){
			clearInterval(this.data.interval);
			return false;
		}
		this.setData({
			interval: setInterval(callback, 10)
		});
	},
	//开始游戏
	startGame: function(){
		var s = this.data.s,
			s1 = this.data.s1,
			s2 = this.data.s2;
		var that = this;
		this.timer(function(){
			s2 ++;
			if(s2 > 9){
				s2 = 0;
				s1++;
				if(s1 > 9){
					s1 = 0;
					s++;
				}
			}
			that.setData({
				s: s,
				s1: s1,
				s2: s2
			});
		})
	},
	//结束时间
	stopGame: function(){
		this.timer(null, true);
		if(this.data.s == 10 && this.data.s1 == 0 && this.data.s2 == 0){
			wx.showModal({
				title: '提示',
				content: '恭喜你，挑战成功!',
				success: function(res) {
					if (res.confirm) {
						console.log('用户点击确定');
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			});
		}
	},
	//重新开始
	restart: function(){
		this.timer(null, null, true);
	}
})
