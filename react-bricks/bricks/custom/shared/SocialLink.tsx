import { Text, Link, types,  } from 'react-bricks/rsc'
import { Icon  } from 'react-bricks/rsc/client'
//import { Icon } from 'react-bricks/frontend'

export interface SocialLinkProps {
  url: string
  icon: types.Icon
}

const SocialLink: types.Brick<SocialLinkProps> = ({
  url,
  icon
}) => {
  return (
    <Link
      href={url}
      target='_blank'
      referrerPolicy='no-referrer'
      className="text-white text-center"
    >
      <Icon
        icon={icon}
        width={32}
        height={32}
        className="text-pink-500 hover:text-pink-700"
        title="My Icon"
        description="Description for my Icon"
        fillOpacity={0.5}
      />
    </Link>
  )
}

SocialLink.schema = {
  name: 'social-link',
  label: 'Social Link',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    url: 'https://www.facebook.com',
    icon: {
      name: 'square-facebook',  // Replace with a valid Font Awesome class name or Heroicon name
      svg: '',             // Empty SVG for now, adjust if using Heroicons as default
      url: 'https://www.facebook.com',
      set: types.IconSets.FontAwesome, // Or types.IconSets.HeroIconSolid
    }
  }),
  sideEditProps: [
    {
      name: 'icon',
      label: 'Icon',
      helperText: 'Select icon',
      type: types.SideEditPropType.IconSelector,
      iconSelectorOptions: {
        iconSets: [types.IconSets.HeroIconSolid, types.IconSets.FontAwesome],
      }
    },
    {
      name: 'url',
      label: 'Link to...',
      type: types.SideEditPropType.Text,
      validate: (value) =>
        value?.startsWith('/') ||
        value?.startsWith('https://') ||
        'Please, enter a valid URL',
    },
  ],
}

export default SocialLink
      