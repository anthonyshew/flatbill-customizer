import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import StoryCenterer from '../StorybookWrappers/StoryCenterer'
import SVG from './SVG'

export default {
    component: SVG,
    title: 'SVG',
    decorators: [withKnobs, withA11y, story => <StoryCenterer>{story()}</StoryCenterer>],
    excludeStories: /.*Data$/
}

export const Logo = () => <SVG name="logo" title="Shewperman Logo" desc="The Shewperman Logo looks a lot like the Superman Logo....with a shoe." alt="Shewperman Logo" />

export const WithClassName = () => <SVG name="logo" className="logo-test" title="Shewperman Logo" desc="The Shewperman Logo looks a lot like the Superman Logo....with a shoe." alt="Shewperman Logo" />

export const Hamburger = () => <SVG name="hamburger" handleClick={action('open-menu')} title="Hamburger Button" desc="This image acts as a button used for opening the mobile menu." alt="Hamburger button for opening the mobile menu" />