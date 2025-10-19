export interface Component {
  name: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  dependencies?: string[];
  props?: Record<string, any>;
  url: string;
}

export const components: Record<string, Component> = {
  // Backgrounds & Effects
  'dotted-glow-background': {
    name: 'Dotted Glow Background',
    slug: 'dotted-glow-background',
    description: 'A background effect with opacity animation, glow effect and more',
    category: 'backgrounds',
    tags: ['background', 'glow', 'animation', 'dots'],
    url: 'https://ui.aceternity.com/components/dotted-glow-background'
  },
  'background-ripple-effect': {
    name: 'Background Ripple Effect',
    slug: 'background-ripple-effect',
    description: 'A grid of cells that ripple when clicked',
    category: 'backgrounds',
    tags: ['background', 'ripple', 'interactive', 'grid'],
    url: 'https://ui.aceternity.com/components/background-ripple-effect'
  },
  'sparkles': {
    name: 'Sparkles',
    slug: 'sparkles',
    description: 'Configurable sparkles for backgrounds or standalone use',
    category: 'backgrounds',
    tags: ['sparkles', 'particles', 'animation', 'decorative'],
    url: 'https://ui.aceternity.com/components/sparkles'
  },
  'background-gradient': {
    name: 'Background Gradient',
    slug: 'background-gradient',
    description: 'Animated gradient for cards, buttons, or containers',
    category: 'backgrounds',
    tags: ['gradient', 'animation', 'background'],
    url: 'https://ui.aceternity.com/components/background-gradient'
  },
  'background-gradient-animation': {
    name: 'Gradient Animation',
    slug: 'background-gradient-animation',
    description: 'A smooth and elegant background gradient animation',
    category: 'backgrounds',
    tags: ['gradient', 'animation', 'background', 'smooth'],
    url: 'https://ui.aceternity.com/components/background-gradient-animation'
  },
  'wavy-background': {
    name: 'Wavy Background',
    slug: 'wavy-background',
    description: 'A cool background effect with waves that move',
    category: 'backgrounds',
    tags: ['waves', 'animation', 'background'],
    url: 'https://ui.aceternity.com/components/wavy-background'
  },
  'background-boxes': {
    name: 'Background Boxes',
    slug: 'background-boxes',
    description: 'A full width background box container that highlights on hover',
    category: 'backgrounds',
    tags: ['boxes', 'grid', 'hover', 'interactive'],
    url: 'https://ui.aceternity.com/components/background-boxes'
  },
  'background-beams': {
    name: 'Background Beams',
    slug: 'background-beams',
    description: 'Multiple background beams that follow a path of SVG',
    category: 'backgrounds',
    tags: ['beams', 'svg', 'animation', 'hero'],
    url: 'https://ui.aceternity.com/components/background-beams'
  },
  'background-beams-with-collision': {
    name: 'Background Beams With Collision',
    slug: 'background-beams-with-collision',
    description: 'Exploding beams in the background',
    category: 'backgrounds',
    tags: ['beams', 'collision', 'animation', 'particles'],
    url: 'https://ui.aceternity.com/components/background-beams-with-collision'
  },
  'background-lines': {
    name: 'Background Lines',
    slug: 'background-lines',
    description: 'A set of svg paths that animate in a wave pattern',
    category: 'backgrounds',
    tags: ['lines', 'svg', 'wave', 'animation'],
    url: 'https://ui.aceternity.com/components/background-lines'
  },
  'aurora-background': {
    name: 'Aurora Background',
    slug: 'aurora-background',
    description: 'A subtle Aurora or Southern Lights background',
    category: 'backgrounds',
    tags: ['aurora', 'lights', 'gradient', 'animation'],
    url: 'https://ui.aceternity.com/components/aurora-background'
  },
  'meteors': {
    name: 'Meteors',
    slug: 'meteors',
    description: 'A group of beams in the background of a container',
    category: 'backgrounds',
    tags: ['meteors', 'animation', 'beams', 'particles'],
    url: 'https://ui.aceternity.com/components/meteors'
  },
  'glowing-stars-effect': {
    name: 'Glowing Stars',
    slug: 'glowing-stars-effect',
    description: 'Card background stars that animate on hover',
    category: 'backgrounds',
    tags: ['stars', 'glow', 'hover', 'animation'],
    url: 'https://ui.aceternity.com/components/glowing-stars-effect'
  },
  'shooting-stars-and-stars-background': {
    name: 'Shooting Stars',
    slug: 'shooting-stars-and-stars-background',
    description: 'A shooting star animation on top of a starry background',
    category: 'backgrounds',
    tags: ['stars', 'shooting', 'animation', 'night-sky'],
    url: 'https://ui.aceternity.com/components/shooting-stars-and-stars-background'
  },
  'vortex': {
    name: 'Vortex',
    slug: 'vortex',
    description: 'A wavy, swirly, vortex background ideal for CTAs',
    category: 'backgrounds',
    tags: ['vortex', 'swirl', 'animation', 'cta'],
    url: 'https://ui.aceternity.com/components/vortex'
  },
  'spotlight': {
    name: 'Spotlight',
    slug: 'spotlight',
    description: 'A spotlight effect with Tailwind CSS',
    category: 'backgrounds',
    tags: ['spotlight', 'effect', 'hover', 'highlight'],
    url: 'https://ui.aceternity.com/components/spotlight'
  },
  'canvas-reveal-effect': {
    name: 'Canvas Reveal Effect',
    slug: 'canvas-reveal-effect',
    description: 'A dot background that expands on hover',
    category: 'backgrounds',
    tags: ['canvas', 'reveal', 'hover', 'dots'],
    url: 'https://ui.aceternity.com/components/canvas-reveal-effect'
  },
  'svg-mask-effect': {
    name: 'SVG Mask Effect',
    slug: 'svg-mask-effect',
    description: 'A mask reveal effect, hover the cursor to reveal',
    category: 'backgrounds',
    tags: ['svg', 'mask', 'reveal', 'cursor'],
    url: 'https://ui.aceternity.com/components/svg-mask-effect'
  },
  'tracing-beam': {
    name: 'Tracing Beam',
    slug: 'tracing-beam',
    description: 'A Beam that follows the path of an SVG as user scrolls',
    category: 'backgrounds',
    tags: ['beam', 'scroll', 'svg', 'path'],
    url: 'https://ui.aceternity.com/components/tracing-beam'
  },
  'lamp-effect': {
    name: 'Lamp Effect',
    slug: 'lamp-effect',
    description: 'A lamp effect as seen on linear, great for section headers',
    category: 'backgrounds',
    tags: ['lamp', 'light', 'header', 'effect'],
    url: 'https://ui.aceternity.com/components/lamp-effect'
  },
  'grid-and-dot-backgrounds': {
    name: 'Grid and Dot Backgrounds',
    slug: 'grid-and-dot-backgrounds',
    description: 'A simple grid and dots background',
    category: 'backgrounds',
    tags: ['grid', 'dots', 'background', 'pattern'],
    url: 'https://ui.aceternity.com/components/grid-and-dot-backgrounds'
  },
  'google-gemini-effect': {
    name: 'Google Gemini Effect',
    slug: 'google-gemini-effect',
    description: 'An effect of SVGs as seen on the Google Gemini Website',
    category: 'backgrounds',
    tags: ['gemini', 'google', 'svg', 'animation'],
    url: 'https://ui.aceternity.com/components/google-gemini-effect'
  },

  // 3D Components
  '3d-marquee': {
    name: '3D Marquee',
    slug: '3d-marquee',
    description: 'A 3D Marquee effect with grid, good for showcasing testimonials',
    category: '3d',
    tags: ['3d', 'marquee', 'testimonials', 'carousel'],
    url: 'https://ui.aceternity.com/components/3d-marquee'
  },
  '3d-pin': {
    name: '3D Pin',
    slug: '3d-pin',
    description: 'A gradient pin that animates on hover, perfect for product links',
    category: '3d',
    tags: ['3d', 'pin', 'hover', 'gradient'],
    url: 'https://ui.aceternity.com/components/3d-pin'
  },

  // Modals & Tooltips
  'animated-modal': {
    name: 'Animated Modal',
    slug: 'animated-modal',
    description: 'A customizable, compound modal component with animated transitions',
    category: 'overlays',
    tags: ['modal', 'dialog', 'animation', 'overlay'],
    url: 'https://ui.aceternity.com/components/animated-modal'
  },
  'animated-tooltip': {
    name: 'Animated Tooltip',
    slug: 'animated-tooltip',
    description: 'A cool tooltip that reveals on hover, follows mouse pointer',
    category: 'overlays',
    tags: ['tooltip', 'hover', 'animation', 'pointer'],
    url: 'https://ui.aceternity.com/components/animated-tooltip'
  },
  'link-preview': {
    name: 'Link Preview',
    slug: 'link-preview',
    description: 'Dynamic link previews for your anchor tags',
    category: 'overlays',
    tags: ['link', 'preview', 'hover', 'tooltip'],
    url: 'https://ui.aceternity.com/components/link-preview'
  },

  // Carousels & Sliders
  'images-slider': {
    name: 'Images Slider',
    slug: 'images-slider',
    description: 'A full page slider with images navigable with keyboard',
    category: 'carousel',
    tags: ['slider', 'images', 'keyboard', 'fullpage'],
    url: 'https://ui.aceternity.com/components/images-slider'
  },
  'carousel': {
    name: 'Carousel',
    slug: 'carousel',
    description: 'A customizable carousel with microinteractions and slider',
    category: 'carousel',
    tags: ['carousel', 'slider', 'swipe', 'navigation'],
    url: 'https://ui.aceternity.com/components/carousel'
  },
  'apple-cards-carousel': {
    name: 'Apple Cards Carousel',
    slug: 'apple-cards-carousel',
    description: 'A sleek and minimal carousel implementation, as seen on apple.com',
    category: 'carousel',
    tags: ['carousel', 'cards', 'apple', 'minimal'],
    url: 'https://ui.aceternity.com/components/apple-cards-carousel'
  },
  'animated-testimonials': {
    name: 'Testimonials',
    slug: 'animated-testimonials',
    description: 'Minimal testimonials sections with image and quote',
    category: 'carousel',
    tags: ['testimonials', 'reviews', 'carousel', 'quotes'],
    url: 'https://ui.aceternity.com/components/animated-testimonials'
  },

  // Layout & Grid
  'layout-grid': {
    name: 'Layout Grid',
    slug: 'layout-grid',
    description: 'A layout effect animating grid items on click',
    category: 'layout',
    tags: ['grid', 'layout', 'animation', 'masonry'],
    url: 'https://ui.aceternity.com/components/layout-grid'
  },
  'bento-grid': {
    name: 'Bento Grid',
    slug: 'bento-grid',
    description: 'A skewed grid layout with Title, description and header',
    category: 'layout',
    tags: ['grid', 'bento', 'layout', 'cards'],
    url: 'https://ui.aceternity.com/components/bento-grid'
  },
  'container-cover': {
    name: 'Container Cover',
    slug: 'container-cover',
    description: 'A Cover component providing beams and space effect',
    category: 'layout',
    tags: ['container', 'cover', 'beams', 'wrapper'],
    url: 'https://ui.aceternity.com/components/container-cover'
  },

  // Data Visualization
  'github-globe': {
    name: 'GitHub Globe',
    slug: 'github-globe',
    description: 'A globe animation as seen on GitHub homepage',
    category: 'visualization',
    tags: ['globe', '3d', 'github', 'world'],
    url: 'https://ui.aceternity.com/components/github-globe'
  }
};

export const categories = {
  backgrounds: 'Backgrounds & Effects',
  '3d': '3D Components',
  overlays: 'Overlays & Popovers',
  carousel: 'Carousels & Sliders',
  layout: 'Layout & Grid',
  visualization: 'Data & Visualization'
};

export function getComponentsByCategory(category?: string): Component[] {
  if (!category) {
    return Object.values(components);
  }
  return Object.values(components).filter(c => c.category === category);
}

export function searchComponents(query: string): Component[] {
  const lowerQuery = query.toLowerCase();
  return Object.values(components).filter(component => {
    return (
      component.name.toLowerCase().includes(lowerQuery) ||
      component.description.toLowerCase().includes(lowerQuery) ||
      component.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  });
}

export function getComponent(slug: string): Component | undefined {
  return components[slug];
}
