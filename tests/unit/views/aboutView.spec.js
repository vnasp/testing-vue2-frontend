import { shallowMount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue'

describe('AboutView', () => { 
    test('Probando la existencia de la vista AboutView', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/about',
                name: 'AboutView',
                component: AboutView
            }],
        })
        router.push('/about')
        await router.isReady()

        const wrapper = shallowMount(AboutView, {
            global: {
                plugins: [router]
            }
        })
        expect(wrapper.findComponent(AboutView).exists()).toBe(true)
    })  

    test('Crea / valida un snapshot de la vista AboutView', async () => {
        const wrapper = shallowMount(AboutView)
        expect(wrapper.html()).toMatchSnapshot()
    })  
})
