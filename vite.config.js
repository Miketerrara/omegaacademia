import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: './',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                horarios: resolve(__dirname, 'horarios.html'),
                fraquia: resolve(__dirname, 'fraqueado.html'),
                unidade: resolve(__dirname, 'unidades.html'),
                vaga: resolve(__dirname, 'vagas.html'),
                denuncia: resolve(__dirname, 'denuncia.html'),
                contact: resolve(__dirname, 'contact.html')
            }
        }
    }
})