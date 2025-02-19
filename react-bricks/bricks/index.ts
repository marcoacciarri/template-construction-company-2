import { types } from 'react-bricks/frontend'

import HeroUnit from './custom/MyHeroUnit'
import Pokemon from './custom/Pokemon'
import Button from './custom/Button'
import Button2 from './custom/Button2'
import reactBricksUITheme from './react-bricks-ui'
import Thumbnail from './custom/Thumbnail'

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Hero sections',
        bricks: [HeroUnit], // Custom Bricks
      },
      {
        categoryName: 'Shared',
        bricks: [Button, Button2], // Custom Bricks
      },
      {
        categoryName: 'Pokemon',
        bricks: [Pokemon, Thumbnail], // External data Bricks
      },
    ],
  },
]

export default bricks
