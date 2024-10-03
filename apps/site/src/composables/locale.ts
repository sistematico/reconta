import { en } from './en';
import { zhCn } from './zhCn';
import { ptBR } from './ptBR';
import { cs } from './cs';
import { config } from '../consts';

const ui = { en, 'zh-cn': zhCn, 'pt-br': ptBR, cs };

// export function useTranslations(lang: keyof typeof ui) {
export function useTranslations(lang: string) {
  return function t(key: string) {
    return ui[lang][key] || ui[config.lang][key];
  }
}

export const t = useTranslations(config.lang)

// mouse.js
import { ref, onMounted, onUnmounted } from 'vue'

// by convention, composable function names start with "use"
export function useTranslations() {
  // state encapsulated and managed by the composable
  const x = ref(0)
  const y = ref(0)

  // a composable can update its managed state over time.
  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  // a composable can also hook into its owner component's
  // lifecycle to setup and teardown side effects.
  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))

  // expose managed state as return value
  return { x, y }
}