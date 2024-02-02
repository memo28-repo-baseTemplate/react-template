/*
 * @Author: @memo28.repo
 * @Date: 2024-01-10 23:07:57
 * @LastEditTime: 2024-02-02 17:18:26
 * @Description: 
 * @FilePath: /baseReact/vite.config.ts
 */
import { Engine } from '@memo28/vitebuild'
import { defineConfig } from 'vite'

const config = new Engine().setTechnologyStack('react').getBuildConfig({
  css: {
    postcss: './postcss.config.js'
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  ...config,
})
