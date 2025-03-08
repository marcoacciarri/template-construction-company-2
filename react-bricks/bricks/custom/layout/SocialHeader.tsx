import React, { useState, useRef, useEffect } from 'react'
import {
  Image,
  Repeater,
  types,
  Link,
  useAdminContext,
} from 'react-bricks/frontend'
import { useReactBricksContext } from 'react-bricks/frontend'

import { FaFacebook, FaFacebookF, FaSquareFacebook, FaInstagram, FaSquareInstagram, } from 'react-icons/fa6'
import { FiMenu, FiX } from 'react-icons/fi'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import {} from 'react-icons/md'
import blockNames from '@reactbricksui/blockNames'
import { bgColors, buttonColors } from '@customui/color'
import {
  backgroundColorsEditProps,
  borderBottomEditProp,
  LayoutProps,
  sectionDefaults,
} from '@reactbricksui/LayoutSideProps'
import Section from '@reactbricksui/shared/components/Section'
import useOnClickOutside from '@reactbricksui//layout/useClickOutside'
import { ButtonProps } from '@reactbricksui/shared/bricks/Button'
import { MenuItems } from '@reactbricksui//layout/HeaderMenuItem'

interface HeaderProps extends LayoutProps {
  socialLinks: types.RepeaterItems
  logo: types.IImageSource
  hideLogo: boolean
}

const SocialHeader: types.Brick<HeaderProps> = ({
  backgroundColor,
  borderBottom,
  logo,
  hideLogo,
  socialLinks
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isDarkColorMode, toggleColorMode } = useReactBricksContext()
  const [mounted, setMounted] = useState(false)
  const { isAdmin } = useAdminContext()

  // - in Admin get the current theme from `isDarkColorMode`
  // - in the frontend page get the current theme from localStorage

  const currentTheme = isAdmin
    ? isDarkColorMode
      ? 'dark'
      : 'light'
    : typeof window === 'undefined'
    ? ''
    : localStorage.getItem('color-mode')

  useEffect(() => {
    setMounted(true)
  }, [])

  const ref = useRef<HTMLDivElement>(null)

  useOnClickOutside(ref, () => setMobileMenuOpen(false))

  return (
    <Section
      backgroundColor={backgroundColor}
      borderBottom={borderBottom ? 'full' : 'none'}
    >
      <nav className="py-5 px-5 sm:mx-[5.55555%] xl:mx-[11.1111%] flex justify-between items-center">
        {!hideLogo && (
          <Link
            href="/"
            aria-label="home"
            className="inline-flex py-1.5 px-2 mr-6"
          >
            <Image
              propName="logo"
              alt="Logo"
              source={logo}
              maxWidth={300}
              imageClassName="block w-32 h-7 object-contain object-left"
            />
          </Link>
        )}
        <div className="hidden lg:flex items-center space-x-2">
          <Repeater
            propName="socialLinks"
            items={socialLinks}
            itemProps={{ mobileRef: ref, setMobileMenuOpen }}
            renderWrapper={(items) => (
              <div 
                key={items.key} 
                className="flex flex-row space-x-2 items-center justify-between"
              >
                {items}
              </div>
            )}
          />
        </div>

        {/* DARK MODE BUTTON DESKTOP */}
        {mounted && (
          <button
            type="button"
            className="flex items-center justify-center w-8 h-8 mr-4 ml-auto lg:ml-8 text-gray-400 dark:text-gray-200"
            onClick={toggleColorMode}
          >
            {currentTheme === 'light' ? (
              <BsMoonFill />
            ) : (
              <BsSunFill className="text-xl" />
            )}
          </button>
        )}

      </nav>
    </Section>
  )
}

SocialHeader.schema = {
  name: 'social-header',
  label: 'Social Header',
  theme: 'Default',
  category: 'layout',
  tags: ['header', 'menu'],
  previewImageUrl: `/bricks-preview-images/${blockNames.Header}.png`,
  repeaterItems: [
    {
      name: 'socialLinks',
      itemType: 'social-link',
      itemLabel: 'Social Links',
      max: 6,
    }
  ],
  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [
        {
          name: 'hideLogo',
          label: 'Hide Logo',
          type: types.SideEditPropType.Boolean,
        },
        backgroundColorsEditProps, 
        borderBottomEditProp],
    }
  ],
  getDefaultProps: () => ({
    backgroundColor: bgColors.WHITE.value,
    borderBottom: 'none',
    logo: {
      src: 'https://images.reactbricks.com/original/a63a73db-8df4-4a01-9084-44b8217332cf.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/a63a73db-8df4-4a01-9084-44b8217332cf.svg',
      srcSet: '',
      width: 450,
      height: 100,
      alt: 'React Bricks',
      seoName: 'react-bricks',
    },
    socialLinks: [
      {
        url: 'https://www.facebook.com',
        icon: {
          name: 'square-facebook',  // Replace with a valid Font Awesome class name or Heroicon name
          svg: '',             // Empty SVG for now, adjust if using Heroicons as default
          url: '',
          set: types.IconSets.FontAwesome, // Or types.IconSets.HeroIconSolid
        } 
      }
    ],
    hideLogo: false,
  }),
}

export default SocialHeader
