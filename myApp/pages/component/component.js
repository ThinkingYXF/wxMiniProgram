Component({
  options: {
    multipleSlots: true    //可使用多slot多节点
  },
  properties: {
    innerText: {
      type: String,
      value: "I am a customize component"
    }
  },
  data: {
    //组件内部数据
    someData: {}
  },
  methods: {
    //自定义方法
    customeMethod: function(){}
  }
})