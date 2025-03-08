//====================
// TAILWIND COLORS
//====================

type TailwindColor = {
  name: string
  label: string
  color500: string
}
type TailwindColors = Record<string, TailwindColor>

const tailwindColors = {
  WHITE: {
    name: 'white',
    label: 'White',
    color500: '#ffffff',
  },
  GRAY: {
    name: 'gray',
    label: 'Gray',
    color500: '#6b7280',
  },
  YELLOW: {
    name: 'yellow',
    label: 'Yellow',
    color500: '#fec13d',
  },
  BLUE: {
    name: 'blue',
    label: 'Blue',
    color500: '#202d45',
  },
} as const satisfies TailwindColors


const white = tailwindColors.WHITE

//====================
// TEXT COLORS
//====================
export const textColors = {
  GRAY_900: 'text-gray-900 dark:text-white',
  GRAY_800: 'text-gray-800 dark:text-white',
  GRAY_700: 'text-gray-700 dark:text-white',
  GRAY_600: 'text-gray-600 dark:text-white',
  GRAY_500: 'text-gray-500 dark:text-white',
  GRAY_400: 'text-gray-400 dark:text-gray-100',
} as const satisfies Record<string, string>

//====================
// TYPE COLORS
//====================
type Color = {
  label: string
  value: {
    color: string
    className: string
  }
}

type Colors = Record<string, Color>

//====================
// BG COLORS
//====================
export const bgColors = {
  WHITE: {
    label: tailwindColors.WHITE.label,
    value: {
      color: tailwindColors.WHITE.color500,
      className: 'bg-white dark:bg-gray-900',
    },
  },
  LIGHT_GRAY: {
    label: `Light ${tailwindColors.GRAY.label}`,
    value: {
      color: '#f5f5f5',
      className: 'bg-gray-50 dark:bg-gray-900',
    },
  },
  GRAY: {
    label: tailwindColors.GRAY.label,
    value: {
      color: '#f3f4f6',
      className: 'bg-gray-100 dark:bg-gray-900',
    },
  },
  DARK_GRAY: {
    label: `Dark ${tailwindColors.GRAY.label}`,
    value: {
      color: '#1f2937',
      className: 'dark bg-gray-800 dark:bg-gray-900',
    },
  },
  YELLOW: {
    label: tailwindColors.YELLOW.label,
    value: {
      color: '#fef9c3',
      className: 'bg-yellow-100 dark:bg-gray-900',
    },
  },
  BLUE: {
    label: tailwindColors.BLUE.label,
    value: {
      color: '#dbeafe',
      className: 'bg-blue-100 dark:bg-gray-900',
    },
  },
  DARK_BLUE: {
    label: 'Dark ' + tailwindColors.BLUE.label,
    value: {
      color: '#dbeafe',
      className: 'dark bg-blue-900 dark:bg-blue-900',
    },
  }
} as const satisfies Colors

//====================
// HIGHLIGHT TEXT COLORS
//====================
export const highlightTextColors = {
  GRAY: {
    label: tailwindColors.GRAY.label,
    value: {
      color: tailwindColors.GRAY.color500,
      className: 'text-gray-500 dark:text-white',
    },
  },
  YELLOW: {
    label: tailwindColors.YELLOW.label,
    value: {
      color: tailwindColors.YELLOW.color500,
      className: 'text-yellow-500 dark:text-yellow-400',
    },
  },
  BLUE: {
    label: tailwindColors.BLUE.label,
    value: {
      color: tailwindColors.BLUE.color500,
      className: 'text-blue-500 dark:text-blue-400',
    },
  },
} as const satisfies Colors

//====================
// HIGHLIGHT BG COLORS
//====================
export const highlightBgColors = {
  GRAY: {
    label: tailwindColors.GRAY.label,
    value: {
      color: tailwindColors.GRAY.color500,
      className: 'bg-gray-500 text-white',
    },
  },
  YELLOW: {
    label: tailwindColors.YELLOW.label,
    value: {
      color: tailwindColors.YELLOW.color500,
      className: 'bg-yellow-500 text-white',
    },
  },
  BLUE: {
    label: tailwindColors.BLUE.label,
    value: {
      color: tailwindColors.BLUE.color500,
      className: 'bg-blue-500 text-white',
    },
  },
} as const satisfies Colors

//====================
// BUTTON COLORS
//====================
type ButtonColor = {
  label: string
  value: {
    color: string
    classNameSolid: string
    classNameOutline: string
    classNameGhost: string
  }
}

type ButtonColors = Record<string, ButtonColor>

export const buttonColors = {
  GRAY: {
    label: tailwindColors.GRAY.label,
    value: {
      color: tailwindColors.GRAY.color500,
      classNameSolid: 'bg-gray-500 text-white hover:bg-gray-600',
      classNameOutline:
        'border border-gray-600 text-gray-600 dark:border-white dark:text-white',
      classNameGhost: 'text-gray-600 dark:text-white',
    },
  },
  YELLOW: {
    label: tailwindColors.YELLOW.label,
    value: {
      color: tailwindColors.YELLOW.color500,
      classNameSolid: 'bg-yellow-500 text-white hover:bg-yellow-600',
      classNameOutline:
        'border border-yellow-600 text-yellow-600 dark:border-white dark:text-white',
      classNameGhost: 'text-yellow-600 dark:text-white',
    },
  },
  BLUE: {
    label: tailwindColors.BLUE.label,
    value: {
      color: tailwindColors.BLUE.color500,
      classNameSolid: 'bg-blue-500 text-white hover:bg-blue-600',
      classNameOutline:
        'border border-blue-600 text-blue-600 dark:border-white dark:text-white',
      classNameGhost: 'text-blue-600 dark:text-white',
    },
  },
} as const satisfies ButtonColors

//====================
// GRADIENTS
//====================
type Gradient = {
  label: string
  value: string
  className: string
}

export const gradients = {
  NONE: { label: 'None', value: 'NONE', className: '' },
} as const satisfies Record<string, Gradient>

//====================
// PRICING COLORS
//====================

export type PricingColorValue = {
  color: string
  mainDivClassName: string
  popularTagClassName: string
  planNameClassName: string
  buttonClassName: string
  featureTagClassName: string
}

type PricingColor = {
  label: string
  value: PricingColorValue
}

type PricingColors = Record<string, PricingColor>

export const pricingColors = {
  GRAY: {
    label: tailwindColors.GRAY.label,
    value: {
      color: tailwindColors.GRAY.color500,
      mainDivClassName: 'border-t-gray-500',
      popularTagClassName: 'bg-gray-500',
      planNameClassName: 'text-gray-500',
      buttonClassName:
        'text-gray-600 dark:text-gray-500 border-gray-500 hover:bg-gray-500',
      featureTagClassName:
        'bg-gray-200 dark:bg-gray-200/30 text-gray-800 dark:text-white',
    },
  },
  YELLOW: {
    label: tailwindColors.YELLOW.label,
    value: {
      color: tailwindColors.YELLOW.color500,
      mainDivClassName: 'border-t-yellow-500',
      popularTagClassName: 'bg-yellow-500',
      planNameClassName: 'text-yellow-500',
      buttonClassName:
        'text-yellow-600 dark:text-yellow-500 border-yellow-500 hover:bg-yellow-500',
      featureTagClassName:
        'bg-yellow-200 dark:bg-yellow-200/30 text-yellow-800 dark:text-white',
    },
  },
  BLUE: {
    label: tailwindColors.BLUE.label,
    value: {
      color: tailwindColors.BLUE.color500,
      mainDivClassName: 'border-t-blue-500',
      popularTagClassName: 'bg-blue-500',
      planNameClassName: 'text-blue-500',
      buttonClassName:
        'text-blue-600 dark:text-blue-500 border-blue-500 hover:bg-blue-500',
      featureTagClassName:
        'bg-blue-200 dark:bg-blue-200/30 text-blue-800 dark:text-white',
    },
  },
} as const satisfies PricingColors
