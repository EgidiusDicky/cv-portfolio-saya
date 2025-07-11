import { createRouter, createWebHistory } from 'vue-router';

// Import views
import HomeView                           from '../views/HomeView.vue';
import NotFound                           from '../views/NotFound.vue';

// Import components
import ProjectsView                       from '../components/Projects.vue';
import EducationView                      from '../components/Education.vue';
import SkillsView                         from '../components/Skills.vue';
import ProjectDetail                      from '../components/ProjectDetail.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsView
        },
        {
            path: '/projects/:id',
            name: 'project-detail',
            component: ProjectDetail,
        },
        {
            path: '/education',
            name: 'education',
            component: EducationView
        },
        {
            path: '/skills',
            name: 'skills',
            component: SkillsView
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        }
    ]
});

export default router;