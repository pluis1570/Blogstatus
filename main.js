function init() {
    Tabletop.init({
      key: 'https://docs.google.com/spreadsheets/d/19c5VxyfV5P3-4jUwramk5fiyFLm4IPGqqLqo8_6f7-o/pubhtml',
      callback: function (tabletopData, tabletop) {
        console.log(tabletopData)
   
        var app4 = new Vue({
          el: '#app-4',
          data: {
            list: tabletopData,
          }
        })
        var box2 = new Vue({
          el: '#box2',
          data: {
            list: tabletopData,
          }
        })
        var box3 = new Vue({
          el: '#box3',
          data: {
            list: tabletopData,
          }
        })
      },
      simpleSheet: true
    })
   }
   
   window.addEventListener('DOMContentLoaded', init)