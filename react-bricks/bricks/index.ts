import { types } from 'react-bricks/frontend'

import HeroUnit from './custom/MyHeroUnit'
import SocialHeader from './custom/layout/SocialHeader'
import SocialLink from './custom/shared/SocialLink'
import Pokemon from './custom/Pokemon'
import Button from './custom/shared/Button'
import reactBricksUITheme from './react-bricks-ui'
import Thumbnail from './custom/Thumbnail'

const bricks: types.Theme[] = [
  reactBricksUITheme, // React Bricks UI
  {
    themeName: 'Default',
    categories: [
      {
        categoryName: 'Custom',
        bricks: [SocialHeader], // Custom Bricks
      },
      {
        categoryName: 'Hero sections',
        bricks: [HeroUnit], // Custom Bricks
      },
      {
        categoryName: 'Shared',
        bricks: [Button, SocialLink ], // Custom Bricks
      },
      {
        categoryName: 'Pokemon',
        bricks: [Pokemon, Thumbnail], // External data Bricks
      },
    ],
  },
]

export default bricks