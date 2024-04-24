import './bootstrap';

import 'admin-lte/plugins/jquery/jquery.min.js';
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js';
import 'admin-lte/dist/js/adminlte.min.js?v=3.2.0';
import { createApp } from 'vue';
import { createRouter, createWebHistory  } from 'vue-router';

const app = createApp({});
const router = createRouter({
    routes: '',
    history: createWebHistory(),
});