// [!code word:RichText:1]
import { types, Text, RichText, Link, Image } from 'react-bricks/rsc'

interface ThumbnailProps {
  title: types.TextValue
  description: types.TextValue
  image: types.IImageSource
  hasShadow: boolean
  bgColor: types.IColor & { className: string } 
}

const Thumbnail: types.Brick<ThumbnailProps> = ({ title, description, image, hasShadow, bgColor }) => {
  return (
    <div
      className={`my-6 mx-6 p-6 text-center w-1/3 border rounded-lg ${
        hasShadow ? 'shadow-xl' : ''
      } ${bgColor?.className}`}
    >
      <Image 
        propName="image"
        source={image}
        alt="Fallback alt tag" // Fallback if the editor doesn't set an ALT tag
        maxWidth={600} // For image optimization
        imageClassName="mb-6"
      />
      <Text
        propName="title"
        value={title}
        renderBlock={({ children }) => <h1 className="text-2xl font-bold">{children}</h1>}
        placeholder="Type a title..."
      />
      <RichText
        propName="description"
        value={description}
        renderBlock={({ children }) => (
          <p className="text-lg text-gray-500">{children}</p>
        )}
        placeholder="Type a description"
        allowedFeatures={[
          types.RichTextFeatures.Bold,
          types.RichTextFeatures.Highlight,
          types.RichTextFeatures.Link, 
        ]}
        renderHighlight={({ children }) => (
          <span className="px-1 rounded bg-blue-200 text-blue-900">
            {children}
          </span>
        )}
        renderLink={({ children, href, target, rel }) => (
          <Link
            href={href}
            target={target}
            rel={rel}
            className="text-sky-500 hover:text-sky-600 transition-colors"
          >
            {children}
          </Link>
        )}
      />
    </div>
  )
}

Thumbnail.schema = {
  name: 'thumbnail',
  label: 'Thumbnail',
  getDefaultProps: () => ({
    title: 'Hello, world!',
    description: 'Lorem ipsum dolor sit amet.',
    hasShadow: true,
    bgColor: { color: '#ffffff', className: 'bg-white' } 
  }),
  sideEditProps: [
    {
      name: 'hasShadow',
      label: 'Shadow',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'bgColor',
      label: 'Background',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          {
            label: 'White',
            value: { color: '#ffffff', className: 'bg-white' },
          },
          {
            label: 'Light blue',
            value: { color: '#eff6ff', className: 'bg-blue-50' },
          },
        ],
      },
    },
  ],
}

export default Thumbnail
