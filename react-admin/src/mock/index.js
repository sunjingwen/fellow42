import Mock from 'mockjs'

Mock.mock('https:www.qmtech.com/getBannerList', {
  'list|15-25': [
    {
      'id|+1': 1,
      'title': '@ctitle',
      'status|1': true,
      'action': true
    }
  ]
})