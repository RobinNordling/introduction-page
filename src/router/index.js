import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Projects from '@/views/Projects.vue'
import Congratulations from '@/views/MyProjects/Congratulations.vue'
import GuessTheNumber from '@/views/MyProjects/GuessTheNumber.vue'
import LongestName from '@/views/MyProjects/LongestName.vue'
import ListOfNumbers from '@/views/MyProjects/ListOfNumbers.vue'
import FizzBuzz from '@/views/MyProjects/FizzBuzz.vue'
import APIBlog from '@/views/MyProjects/APIBlog.vue'
import TrainingJournal from '@/views/MyProjects/TrainingJournal.vue'
import LogBook from '@/views/MyProjects/LogBook.vue'
import FindYourRecipe from '@/views/MyProjects/FindYourRecipe.vue'
import MySurvey from '@/views/MyProjects/MySurvey.vue'
import WhatToDo from '@/views/MyProjects/WhatToDo.vue'
import CocaColaPage from '@/views/MyProjects/CocaColaPage.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },

  {
    path: '/congratulations',
    name: 'congratulations',
    component: Congratulations
  },

  {
    path: '/GuessTheNumber',
    name: 'GuessTheNumber',
    component: GuessTheNumber
  },

  {
    path: '/LongestName',
    name: 'LongestName',
    component: LongestName
  },

  {
    path: '/ListOfNumbers',
    name: 'ListOfNumbers',
    component: ListOfNumbers
  },

  {
    path: '/FizzBuzz',
    name: 'FizzBuzz',
    component: FizzBuzz
  },

  {
    path: '/APIBlog',
    name: 'APIBlog',
    component: APIBlog
  },

  {
    path: '/TrainingJournal',
    name: 'TrainingJournal',
    component: TrainingJournal
  },

  {
    path: '/LogBook',
    name: 'LogBook',
    component: LogBook
  },

  {
    path: '/FindYourRecipe',
    name: 'FindYourRecipe',
    component: FindYourRecipe
  },

  {
    path: '/MySurvey',
    name: 'MySurvey',
    component: MySurvey
  },

  {
    path: '/WhatToDo',
    name: 'WhatToDo',
    component: WhatToDo
  },

  {
    path: '/CocaColaPage',
    name: 'CocaColaPage',
    component: CocaColaPage
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
