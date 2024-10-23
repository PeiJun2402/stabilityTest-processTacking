import { createRouter , createWebHistory }from 'vue-router'

import Development from '@/view/Development.vue';  
import Sale from '@/view/Sale.vue';  
import Manufacture from '@/view/Manufacture.vue';  
import ApplyTestForm from '@/view/ApplyTestForm.vue';  
import EditForm from '@/view/EditForm.vue'
import TestStageRecord from '@/view/TestStageRecord.vue'
import HomePage from '@/view/HomePage.vue'
import NotFoundPage from '@/view/NotFoundPage.vue'


const router = createRouter({

    history:createWebHistory(import.meta.env.BASE_URL),

    routes:[
        { path:'/',
        name:'HomePage',
        component:HomePage 
        },
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
        { path:'/applyTestForm',
        name:'ApplyTestForm',
        component: ApplyTestForm
        },
        { path:'/editForm/:id',
        name:'EditForm',
        component: EditForm
        },
        { path:'/testStageRecord/:id',
        name:'TestStageRecord',
        component: TestStageRecord
        },
        { path:'/:catchAll(.*)',
        name:'NotFoundPage',
        component: NotFoundPage
        },

    ]

})


export default router;