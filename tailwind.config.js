/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit Variable', 'system-ui', 'sans-serif'],
        serif: ['Fraunces Variable', 'Georgia', 'serif'],
        heading: ['Fraunces Variable', 'Georgia', 'serif'],
        body: ['Outfit Variable', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Pink palette
        pink: {
          50: 'rgba(255, 245, 250, 1)',
          100: 'rgba(255, 228, 241, 1)',
          light: 'rgba(255, 182, 193, 0.5)',
          200: 'rgba(255, 209, 226, 1)',
          300: 'rgba(255, 181, 204, 1)',
          400: 'rgba(255, 145, 175, 1)',
          DEFAULT: 'rgba(255, 105, 180, 1)',
          500: 'rgba(255, 105, 180, 1)',
          600: 'rgba(236, 72, 153, 1)',
          700: 'rgba(219, 39, 119, 1)',
          dark: 'rgba(219, 112, 147, 1)',
          800: 'rgba(190, 24, 93, 1)',
          900: 'rgba(157, 23, 77, 1)'
        },
        
        // Soft pink palette
        softpink: {
          50: 'rgba(254, 241, 246, 1)',
          100: 'rgba(252, 231, 238, 1)',
          light: 'rgba(255, 221, 230, 0.5)',
          200: 'rgba(251, 207, 220, 1)',
          300: 'rgba(249, 168, 194, 1)',
          400: 'rgba(244, 114, 154, 1)',
          DEFAULT: 'rgba(255, 192, 203, 1)',
          500: 'rgba(236, 72, 130, 1)',
          600: 'rgba(226, 49, 105, 1)',
          dark: 'rgba(219, 112, 147, 0.9)',
          700: 'rgba(191, 25, 81, 1)',
          800: 'rgba(159, 18, 66, 1)',
          900: 'rgba(129, 16, 54, 1)'
        },
        
        // Fairy tale palette (muted pinks)
        fairy_tale: {
          50: 'rgba(252, 242, 247, 1)',
          100: 'rgba(248, 232, 240, 1)',
          200: 'rgba(242, 220, 233, 1)',
          300: 'rgba(233, 198, 219, 1)',
          400: 'rgba(216, 162, 194, 1)',
          500: 'rgba(195, 133, 173, 1)',
          600: 'rgba(171, 104, 149, 1)',
          700: 'rgba(144, 82, 125, 1)',
          800: 'rgba(122, 65, 103, 1)',
          900: 'rgba(100, 53, 84, 1)'
        },
        
        // Raisin black palette (dark theme)
        raisin_black: {
          50: 'rgba(236, 236, 238, 1)',
          100: 'rgba(207, 206, 211, 1)',
          200: 'rgba(158, 157, 167, 1)',
          300: 'rgba(109, 108, 123, 1)',
          400: 'rgba(75, 73, 92, 1)',
          DEFAULT: 'rgba(48, 47, 57, 1)',
          500: 'rgba(48, 47, 57, 1)',
          600: 'rgba(44, 43, 52, 1)',
          700: 'rgba(39, 37, 45, 1)',
          800: 'rgba(33, 32, 38, 1)',
          900: 'rgba(24, 23, 27, 1)'
        },
        
        // Mountbatten pink (muted dusty rose)
        mountbatten_pink: {
          50: 'rgba(242, 236, 240, 1)',
          100: 'rgba(230, 218, 225, 1)',
          200: 'rgba(205, 181, 196, 1)',
          300: 'rgba(179, 144, 166, 1)',
          400: 'rgba(154, 107, 137, 1)',
          500: 'rgba(146, 120, 138, 1)',
          600: 'rgba(131, 108, 124, 1)',
          700: 'rgba(109, 90, 103, 1)',
          800: 'rgba(87, 72, 83, 1)',
          900: 'rgba(73, 60, 69, 1)'
        },
        
        // Rose pompadour (vibrant pink)
        rose_pompadour: {
          50: 'rgba(254, 242, 245, 1)',
          100: 'rgba(254, 226, 234, 1)',
          200: 'rgba(254, 205, 221, 1)',
          300: 'rgba(253, 162, 193, 1)',
          400: 'rgba(251, 113, 162, 1)',
          500: 'rgba(244, 63, 133, 1)',
          600: 'rgba(225, 29, 105, 1)',
          700: 'rgba(192, 19, 78, 1)',
          800: 'rgba(159, 18, 66, 1)',
          900: 'rgba(134, 19, 55, 1)'
        },
        
        // Amaranth pink (light, soft pink)
        amaranth_pink: {
          50: 'rgba(254, 243, 246, 1)',
          100: 'rgba(254, 233, 240, 1)',
          200: 'rgba(254, 211, 224, 1)',
          300: 'rgba(253, 180, 201, 1)',
          400: 'rgba(251, 138, 174, 1)',
          500: 'rgba(249, 114, 158, 1)',
          600: 'rgba(245, 71, 128, 1)',
          700: 'rgba(236, 40, 105, 1)',
          800: 'rgba(214, 26, 78, 1)',
          900: 'rgba(178, 21, 64, 1)'
        },
        
        // Blush (warm pink)
        blush: {
          50: 'rgba(254, 242, 242, 1)',
          100: 'rgba(254, 226, 226, 1)',
          200: 'rgba(254, 202, 202, 1)',
          300: 'rgba(252, 165, 165, 1)',
          400: 'rgba(248, 113, 113, 1)',
          500: 'rgba(239, 68, 68, 1)',
          600: 'rgba(220, 38, 38, 1)',
          700: 'rgba(185, 28, 28, 1)',
          800: 'rgba(153, 27, 27, 1)',
          900: 'rgba(127, 29, 29, 1)'
        }
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        'full': 'var(--radius-full)'
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-out': 'fade-out 0.5s ease-in-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'slide-in': 'slide-in 0.4s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'bounce-small': 'bounce-small 2s infinite'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'slide-in': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'bounce-small': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        }
      },
      backgroundImage: {
        'soft-gradient': 'var(--gradient-soft)',
        'pink-gradient': 'var(--gradient-pink)',
        'glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
        'mesh-gradient': 'radial-gradient(at 67% 33%, hsla(317, 96%, 92%, 0.8) 0px, transparent 50%), radial-gradient(at 29% 76%, hsla(343, 100%, 96%, 0.6) 0px, transparent 50%)',
        'hero-pattern': "url('/images/hero-pattern.svg')"
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'color': 'hsl(var(--color-fg))',
            'a': {
              'color': theme('colors.pink.600'),
              'fontWeight': '600',
              'textDecoration': 'underline',
              'textDecorationStyle': 'dashed',
              'textUnderlineOffset': '3px',
              '&:hover': {
                'color': theme('colors.pink.700'),
                'textDecorationStyle': 'solid'
              }
            },
            'h1, h2, h3, h4, h5, h6': {
              'color': 'hsl(var(--color-fg))',
              'fontFamily': theme('fontFamily.serif').join(', '),
              'fontWeight': theme('fontWeight.bold')
            },
            'strong': {
              'color': 'hsl(var(--color-fg))',
              'fontWeight': theme('fontWeight.bold')
            },
            'blockquote': {
              'borderLeftColor': theme('colors.pink.200'),
              'color': theme('colors.fairy_tale.600'),
              'fontStyle': 'italic'
            },
            'code': {
              'color': theme('colors.pink.700'),
              'backgroundColor': theme('colors.pink.50'),
              'padding': '2px 4px',
              'borderRadius': theme('borderRadius.sm'),
              'fontWeight': '500'
            },
            'pre': {
              'backgroundColor': theme('colors.fairy_tale.800'),
              'color': theme('colors.fairy_tale.100')
            }
          }
        },
        invert: {
          css: {
            'color': 'hsl(var(--color-fg))',
            'a': {
              'color': theme('colors.softpink.400'),
              '&:hover': {
                'color': theme('colors.softpink.300')
              }
            },
            'blockquote': {
              'borderLeftColor': theme('colors.pink.800'),
              'color': theme('colors.fairy_tale.300')
            },
            'code': {
              'color': theme('colors.softpink.300'),
              'backgroundColor': theme('colors.fairy_tale.800')
            }
          }
        }
      }),
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 15px rgba(255, 105, 180, 0.5)',
        'glow-sm': '0 0 10px rgba(255, 105, 180, 0.2)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)'
      },
      transitionDuration: {
        '400': '400ms',
        '2000': '2000ms'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    function({ addBase, theme }) {
      addBase({
        'html': {
          scrollBehavior: 'smooth'
        },
        'body': {
          fontFamily: theme('fontFamily.sans').join(', ')
        },
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: theme('fontFamily.serif').join(', '),
          fontWeight: theme('fontWeight.bold')
        },
        'a': {
          fontWeight: '600',
          textDecoration: 'underline',
          textDecorationStyle: 'dashed',
          textUnderlineOffset: '2px',
          transition: 'text-decoration-style 0.3s ease'
        },
        'a:hover': {
          textDecorationStyle: 'solid'
        }
      });
    }
  ]
};