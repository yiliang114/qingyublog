const AboutMe = () => import('@/views/AboutMe')
const Blog = () => import('@/views/Blog')
const blogs = () => import('@/views/BlogList')
const BlogDetail = () => import('@/views/BlogDetail')

export default [
  {
    name: 'me',
    path: '/me',
    component: AboutMe
  },
  // TODO: 路由设计有点问题。。。
  {
    path: '',
    component: Blog,
    children: [
      {
        path: '',
        redirect: {
          name: 'blogs'
        }
      },
      {
        path: 'blogs',
        name: 'blogs',
        component: blogs
      },
      {
        path: 'blog/:number',
        name: 'blog',
        component: BlogDetail
      }
    ]
  },
  {
    path: '*',
    redirect: '/Blog'
  }
]
