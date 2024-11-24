/** @type {import('tailwindcss').Config} */
export default {
  content: ['./views/**/*.pug'],
  theme: {
    extend: {
      colors: {
        'naranja': '#F2A359',           // Color base naranja
        'naranja-100': '#F5B780',       // Tonalidad más clara
        'naranja-200': '#F09C5C',       // Tonalidad media clara
        'naranja-300': '#EC8741',       // Tonalidad media
        'naranja-400': '#E67326',       // Tonalidad más oscura
        'naranja-500': '#E05F0A',       // Tonalidad aún más oscura
        'naranja-600': '#D94E00',       // Tonalidad aún más intensa
        'naranja-700': '#C63D00',       // Muy oscuro
        'naranja-800': '#B02C00',       // Casi rojo
        'naranja-900': '#A4031F',       // El tono más oscuro (rojo-anaranjado)

        'coral': '#DB9065',             // Color base coral
        'coral-100': '#E7A884',         // Tonalidad más clara
        'coral-200': '#E0855A',         // Tonalidad media clara
        'coral-300': '#D57840',         // Tonalidad media
        'coral-400': '#CC6A26',         // Tonalidad más oscura
        'coral-500': '#C35C0B',         // Tonalidad más intensa
        
        'rojo': '#A4031F',              // Color base rojo oscuro
        'rojo-100': '#B8243B',          // Tonalidad más clara
        'rojo-200': '#9D1D30',          // Tonalidad media clara
        'rojo-300': '#8B1A27',          // Tonalidad media
        'rojo-400': '#78161D',          // Tonalidad más oscura

        'negro': '#000000',             // Color negro
        'blanco': '#FFFFFF'             // Color blanco
      }
    },
  },
  plugins: [],
}
