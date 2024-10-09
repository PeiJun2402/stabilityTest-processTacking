import { createRouter , createWebHistory }from 'vue-router'

import Development from '@/view/Development.vue';  
import Sale from '@/view/Sale.vue';  
import Manufacture from '@/view/Manufacture.vue';  


const router = createRouter({

    history:createWebHistory(import.meta.env.BASE_URL),

    routes:[
        { path:'/development',
        name:'Development',
        component:Development 
        },
        { path:'/sale',
        name:'Sale',
        component:Sale 
        },
        { path:'/manufacture',
        name:'Manufacture',
        component: Manufacture
        },

    ]

})


export default router;