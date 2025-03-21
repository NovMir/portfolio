/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        pink: {
          light: 'rgba(255, 182, 193, 0.5)',
          DEFAULT: 'rgba(255, 105, 180, 1)',
          dark: 'rgba(219, 112, 147, 1)'
        },
        softpink: {
          light: 'rgba(255, 221, 230, 0.5)',
          DEFAULT: 'rgba(255, 192, 203, 1)',
          dark: 'rgba(219, 112, 147, 0.9)'
        },
        raisin_black: {
          light: 'rgba(48, 47, 57, 0.6)',
          DEFAULT: 'rgba(48, 47, 57, 1)',
          dark: 'rgba(20, 20, 24, 1)'
        },
        jet: {
          light: 'rgba(53, 52, 63, 0.6)',
          DEFAULT: 'rgba(53, 52, 63, 1)',
          dark: 'rgba(20, 20, 20, 1)'
        }
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)'
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'accordion': 'accordion 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'slide-in': 'slide-in 0.4s ease-out'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'accordion': {
          '0%': { height: '0', opacity: '0' },
          '100%': { height: 'var(--radix-accordion-content-height)', opacity: '1' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        }
      },
      backgroundImage: {
        'soft-gradient': 'linear-gradient(to right, var(--soft-gradient-start), var(--soft-gradient-end))',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'pink-soft-gradient': 'linear-gradient(to right, rgba(255, 105, 180, 1), rgba(255, 192, 203, 1))'
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              fontWeight: '600',
              textDecoration: 'underline',
              textDecorationStyle: 'dashed',
              '&:hover': {
                textDecorationStyle: 'solid'
              }
            }
          }
        },
        pink: {
          css: {
            '--tw-prose-body': theme('colors.pink.dark'),
            '--tw-prose-headings': theme('colors.pink.dark'),
            '--tw-prose-lead': theme('colors.pink.DEFAULT'),
            '--tw-prose-links': theme('colors.pink.dark'),
            '--tw-prose-bold': theme('colors.pink.dark'),
            '--tw-prose-counters': theme('colors.pink.DEFAULT'),
            '--tw-prose-bullets': theme('colors.pink.light'),
            '--tw-prose-hr': theme('colors.pink.light'),
            '--tw-prose-quotes': theme('colors.pink.dark'),
            '--tw-prose-quote-borders': theme('colors.pink.light'),
            '--tw-prose-captions': theme('colors.pink.DEFAULT'),
            '--tw-prose-code': theme('colors.pink.dark'),
            '--tw-prose-pre-code': theme('colors.pink.light'),
            '--tw-prose-pre-bg': theme('colors.pink.dark'),
            '--tw-prose-th-borders': theme('colors.pink.light'),
            '--tw-prose-td-borders': theme('colors.pink.light')
          }
        },
        invert: {
          css: {
            '--tw-prose-body': theme('colors.softpink.light'),
            '--tw-prose-headings': theme('colors.softpink.DEFAULT'),
            '--tw-prose-lead': theme('colors.softpink.dark'),
            '--tw-prose-links': theme('colors.softpink.DEFAULT'),
            '--tw-prose-bold': theme('colors.softpink.DEFAULT'),
            '--tw-prose-counters': theme('colors.softpink.light'),
            '--tw-prose-bullets': theme('colors.softpink.light'),
            '--tw-prose-hr': theme('colors.softpink.light'),
            '--tw-prose-quotes': theme('colors.softpink.DEFAULT'),
            '--tw-prose-quote-borders': theme('colors.softpink.light'),
            '--tw-prose-captions': theme('colors.softpink.dark'),
            '--tw-prose-code': theme('colors.softpink.DEFAULT'),
            '--tw-prose-pre-code': theme('colors.softpink.light'),
            '--tw-prose-pre-bg': theme('colors.raisin_black.DEFAULT'),
            '--tw-prose-th-borders': theme('colors.softpink.light'),
            '--tw-prose-td-borders': theme('colors.softpink.light')
          }
        }
      })
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    function({ addBase }) {
      addBase({
        'a': {
          fontWeight: '600',
          textDecoration: 'underline',
          textDecorationStyle: 'dashed',
          transition: 'text-decoration-style 0.3s ease'
        },
        'a:hover': {
          textDecorationStyle: 'solid'
        }
      });
    }
  ]
};