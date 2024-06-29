import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

import PostsView from '@/views/PostsView.vue'



describe('PostsView', () => { 
    test('Probando la existencia de la vista PostsView ', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/posts',
                name: 'PostsViewVue',
                component: PostsView
            }],
        })
        router.push('/posts')
        await router.isReady()

        const wrapper = mount(PostsView, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.findComponent(PostsView).exists()).toBe(true)
    })  
 })