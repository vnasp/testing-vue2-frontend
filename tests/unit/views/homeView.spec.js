import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView', () => { 
    test('Crea / valida un snapshot de la vista HomeView', async () => {
      //Selección el Sujeto de pruebas
      const wrapper = mount(HomeView)

      //Aserción
      expect(wrapper.html()).toMatchSnapshot()
    })  
 })