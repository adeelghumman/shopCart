/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          base: 'var(--ion-color-primary)',
          contrast: 'var(--ion-color-primary-contrast)',
          shade: 'var(--ion-color-primary-shade)',
          tint: 'var(--ion-color-primary-tint)',
          light: 'var(--ion-color-primary-light)'
        },
        secondary: {
          base: 'var(--ion-color-secondary)',
          contrast: 'var(--ion-color-secondary-contrast)',
          shade: 'var(--ion-color-secondary-shade)',
          tint: 'var(--ion-color-secondary-tint)',
          light: 'var(--ion-color-secondary-light)'
        },
        tertiary: {
          base: 'var(--ion-color-tertiary)',
          contrast: 'var(--ion-color-tertiary-contrast)',
          shade: 'var(--ion-color-tertiary-shade)',
          tint: 'var(--ion-color-tertiary-tint)',
          light: 'var(--ion-color-tertiary-light)'
        },
        link: {
          base: 'var(--ion-color-link)',
          contrast: 'var(--ion-color-link-contrast)',
          shade: 'var(--ion-color-link-shade)',
          tint: 'var(--ion-color-link-tint)'
        },
        success: {
          base: 'var(--ion-color-success)',
          contrast: 'var(--ion-color-success-contrast)',
          shade: 'var(--ion-color-success-shade)',
          tint: 'var(--ion-color-success-tint)'
        },
        warning: {
          base: 'var(--ion-color-warning)',
          contrast: 'var(--ion-color-warning-contrast)',
          shade: 'var(--ion-color-warning-shade)',
          tint: 'var(--ion-color-warning-tint)'
        },
        danger: {
          base: 'var(--ion-color-danger)',
          contrast: 'var(--ion-color-danger-contrast)',
          shade: 'var(--ion-color-danger-shade)',
          tint: 'var(--ion-color-danger-tint)'
        },
        medium: {
          base: 'var(--ion-color-medium)',
          contrast: 'var(--ion-color-medium-contrast)',
          shade: 'var(--ion-color-medium-shade)',
          tint: 'var(--ion-color-medium-tint)'
        },
        light: {
          base: 'var(--ion-color-light)',
          contrast: 'var(--ion-color-light-contrast)',
          shade: 'var(--ion-color-light-shade)',
          tint: 'var(--ion-color-light-tint)'
        },
        accordion: {
          background: {
            light: 'var(--ion-color-submodule-background)'
          }
        },
        cardBorder: {
          light: 'var(--ion-color-cardBorder)'
        },
        black: '#222222',
        probability: {
          label: '#D8FFDC'
        },
        stepper: {
          text: '#6B7280'
        },
        provider: {
          dropdown: 'var(--dropdown-border)'
        },
        stepper: {
          'header': 'var(--stepper-header)'
        }, 
        extended:{
          'header' : 'var(--extended-header-bg)'
        },
        accordian:{
          'hover-none' : 'var(--background-hover)'
        },
        customer: {
          'information': 'var(--customer-information)',
          'information-text': 'var(--customer-information-text)',
        },
        data_colors: {
          sales_strategy: {
            government: 'var(--sales-strategy-government)',
            contractor: 'var(--sales-strategy-contractor)',
            enterprise: 'var(--sales-strategy-enterprise)',
            standard: 'var(--sales-strategy-standard)'
          },
          tech_adoption: {
            high: 'var(--tech-adoption-high)',
            medium: 'var(--tech-adoption-medium)',
            low: 'var(--tech-adoption-low)'
          },
          growth: {
            high: 'var(--growth-high)',
            medium: 'var(--growth-medium)',
            low: 'var(--growth-low)'
          },
          customer_status: {
            qualified: 'var(--customer-status-qualified)',
            unqualified: 'var(--customer-status-unqualified)'
          },
          opportunity_status: {
            'preparing-proposal': 'var(--preparing-proposal)',
            'appointment-scheduled': 'var(--appointment-scheduled)',
            'proposal-sent': 'var(--proposal-sent)',
            'proposal-won': 'var(--proposal-won)',
            'proposal-lost': 'var(--proposal-lost)'
          }
        }
      },
    },
  },
  plugins: [],
}

