import { createRouter , createWebHistory }from 'vue-router'

// import Development from '@/view/Development.vue';  
// import Sale from '@/view/Sale.vue';  
// import Manufacture from '@/view/Manufacture.vue';  
// import ApplyTestForm from '@/view/ApplyTestForm.vue';  
// import EditForm from '@/view/EditForm.vue'
// import TestStageRecord from '@/view/TestStageRecord.vue'
import HomePage from '@/view/HomePage.vue'



const router = createRouter({

    history:createWebHistory(import.meta.env.BASE_URL),

    routes:[
        { path:'/',
        name:'HomePage',
        component:HomePage 
        },
        { path:'/development',
        name:'Development',
        component:()=>import('@/view/Development.vue')
        },
        { path:'/sale',
        name:'Sale',
        component:()=>import('@/view/Sale.vue') 
        },
        { path:'/manufacture',
        name:'Manufacture',
        component:()=>import('@/view/Manufacture.vue')
        },
        { path:'/applyTestForm',
        name:'ApplyTestForm',
        component: ()=>import('@/view/ApplyTestForm.vue')
        },
        { path:'/editForm/:id',
        name:'EditForm',
        component: ()=>import('@/view/EditForm.vue')
        },
        { path:'/testStageRecord/:id',
        name:'TestStageRecord',
        component: ()=>import('@/view/TestStageRecord.vue')
        },
        { path:'/FinishTestForm/:id',
        name:'FinishTestForm',
        component: ()=>import('@/view/FinishTestForm.vue')
        },
        { path:'/:catchAll(.*)',
        name:'NotFoundPage',
        component:()=>import( '@/view/NotFoundPage.vue')
        },

    ]

})


export default router;