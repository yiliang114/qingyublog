const AboutMe = () => import('@/views/AboutMe')
const Blog = () => import('@/views/Blog')
const BlogList = () => import('@/views/BlogList')
const BlogDetail = () => import('@/views/BlogDetail')


export default [
  {
    name: 'AboutMe',
    path: '/AboutMe',
    component: AboutMe
  },
  // TODO: 路由设计有点问题。。。
  {
    path: '/Blog',
    component: Blog,
    children: [
      {
        path: '',
        redirect: {
          name: 'BlogList'
        }
      },
      {
        path: 'BlogList',
        name: 'BlogList',
        component: BlogList
      },
      {
        path: 'BlogDetail/:number',
        name: 'BlogDetail',
        component: BlogDetail
      }
    ]
  },
  {
    path: '*',
    redirect: '/Blog'
  }
]
