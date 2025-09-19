# 46.  ### Что такое вложенные маршруты?

Generally, the app is composed of nested components which are nested multiple levels deep. The segments of a URL corresponds to a certain structure of these nested components. To render components into the nested outlet, you need to use the `children` option in `VueRouter` constructor config.
     Let's take a user app composed of profile and posts nested components with respective routes. You can also define a default route configuration when there is no matching nested route.
     ```javascript
     const router = new VueRouter({
       routes: [
         { path: '/user/:id', component: User,
           children: [
             {
               // UserProfile will be rendered inside User's <router-view> when /user/:id/profile is matched
               path: 'profile',
               component: UserProfile
             },
             {
               // UserPosts will be rendered inside User's <router-view> when /user/:id/posts is matched
               path: 'posts',
               component: UserPosts
             },
               // UserHome will be rendered inside User's <router-view> when /user/:id is matched
             {  path: '',
                component: UserHome },
           ]
         }
       ]
     })
     ```