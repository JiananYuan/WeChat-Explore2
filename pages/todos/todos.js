Page({

  /**
   * 页面的初始数据
   */
  data: {
    input: '',
    todos: [
      {name: 'learning HTML', completed: false},
      { name: 'learning JavaScript', completed: false },
      { name: 'learning CSS', completed: true }
    ],
    leftCnt: 2,
    allCompleted: false
  },

  add: function () {
    if(!this.data.input) return
    var todos = this.data.todos
    todos.push({
      name: this.data.input,
      completed: false
    })
    this.setData({ 
      todos: todos,
      input: '',
      leftCnt: this.data.leftCnt + 1
    })
  },

  getText: function(e) {
    this.setData({
      input: e.detail.value
    })
  },

  tagging: function(e) {
    var item = this.data.todos[e.currentTarget.dataset.index]
    item.completed = !item.completed
    var leftCnt = this.data.leftCnt + (item.completed ? -1 : 1)
    this.setData({
      todos: this.data.todos,
      leftCnt: leftCnt
    })
  },

  remove: function(e) {
    var todos = this.data.todos
    var item = todos.splice(e.currentTarget.dataset.index,1)[0]
    var leftCnt = this.data.leftCnt - (item.completed ? 0 : 1)
    this.setData({
      todos: todos,
      leftCnt: leftCnt
    })
  },

  toggle: function() {
    this.data.allCompleted = !this.data.allCompleted
    var todos = this.data.todos
    var that = this
    todos.forEach(function(item) {
      item.completed = that.data.allCompleted
    })
    var leftCnt = this.data.allCompleted ? 0 : this.data.todos.length
    this.setData({
      todos: todos,
      leftCnt: leftCnt
    })
  },

  clear: function() {
    var todos = this.data.todos.filter(function(item) {
      return !item.completed
    })
    this.setData({
      todos: todos
    })
  }
  
})