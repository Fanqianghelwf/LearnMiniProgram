Page({
    data:{
     name:"樊强",
     age:19,
     sex:"男",
     students:[
       {id:110,name:"薛东",age:32},
       {id:111,name:"魏敏",age:31},
       {id:112,name:"王磊",age:33},
       {id:113,name:"雷帝鹏",age:34},
     ],
     numner:[
       1,2,3
     ],
     count:0
    },
   handleBtnClick(){
     //console.log("按钮发生了点击")
     //this.data.count+=1
     this.setData({
       count:this.data.count+1
     })
   },
   HandBtnSub(){
    this.setData({
      count:this.data.count-1
    })
   }
})