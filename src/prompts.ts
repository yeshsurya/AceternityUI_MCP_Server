export const prompts = {
  component_usage: {
    name: 'component_usage',
    description: 'Get guidance on how to use a specific Aceternity UI component',
    arguments: [
      {
        name: 'componentName',
        description: 'The name or slug of the component',
        required: true
      }
    ]
  },
  animation_guide: {
    name: 'animation_guide',
    description: 'Get recommendations for animation and effect components',
    arguments: [
      {
        name: 'useCase',
        description: 'The use case or effect you want to achieve',
        required: true
      }
    ]
  },
  background_selector: {
    name: 'background_selector',
    description: 'Get help choosing the right background component for your needs',
    arguments: [
      {
        name: 'style',
        description: 'The style or mood you want (e.g., "minimal", "dramatic", "playful")',
        required: false
      }
    ]
  }
};

export const promptHandlers: Record<string, (args: any) => { description: string; messages: any[] }> = {
  component_usage: (args: { componentName?: string }) => ({
    description: `Guide for using ${args.componentName || 'an Aceternity UI component'}`,
    messages: [
      {
        role: 'assistant',
        content: {
          type: 'text',
          text: `# Using ${args.componentName || 'Aceternity UI Components'}

To use ${args.componentName ? `the ${args.componentName} component` : 'any Aceternity UI component'}:

## Installation

1. Make sure you have the required dependencies:
\`\`\`bash
npm install framer-motion clsx tailwind-merge
\`\`\`

2. Visit the component page on Aceternity UI
3. Copy the component code
4. Paste it into your project

## Configuration

Most Aceternity UI components require:
- **React** 18 or higher
- **Tailwind CSS** configured in your project
- **Framer Motion** for animations

## Customization

Aceternity UI components are designed to be customizable:
- Modify colors using Tailwind CSS classes
- Adjust animations through Framer Motion props
- Adapt to your design system

${args.componentName ? `\nFor detailed information about ${args.componentName}, use the get_component tool.` : ''}
`
        }
      }
    ]
  }),
  animation_guide: (args: { useCase?: string }) => ({
    description: `Animation recommendations for ${args.useCase || 'your use case'}`,
    messages: [
      {
        role: 'assistant',
        content: {
          type: 'text',
          text: `# Aceternity UI Animation Guide

${args.useCase ? `## For: ${args.useCase}\n` : ''}
Aceternity UI offers various animation components:

## Background Animations
- **Background Beams**: Great for hero sections and landing pages
- **Aurora Background**: Subtle, elegant effects
- **Wavy Background**: Dynamic, flowing animations
- **Meteors**: Dramatic shooting star effects

## Interactive Effects
- **Canvas Reveal Effect**: Hover-based reveals
- **SVG Mask Effect**: Cursor-following mask reveals
- **Background Ripple Effect**: Click-based interactions

## 3D Effects
- **3D Pin**: Product showcases
- **3D Marquee**: Testimonials and features
- **GitHub Globe**: Global presence visualization

## Choosing the Right Component

Consider:
1. **Purpose**: Hero section, CTA, background decoration
2. **Performance**: Simpler animations for mobile
3. **Brand**: Match the animation style to your brand personality

Use search_components to find components matching your needs.
`
        }
      }
    ]
  }),
  background_selector: (args: { style?: string }) => ({
    description: `Background component recommendations${args.style ? ` for ${args.style} style` : ''}`,
    messages: [
      {
        role: 'assistant',
        content: {
          type: 'text',
          text: `# Choosing Background Components

${args.style ? `## Style: ${args.style}\n` : ''}
## Background Categories

### Minimal & Subtle
- **Grid and Dot Backgrounds**: Clean, professional
- **Aurora Background**: Gentle, elegant
- **Background Gradient**: Smooth, modern

### Dynamic & Energetic
- **Wavy Background**: Flowing movement
- **Background Beams**: Directional energy
- **Meteors**: Dramatic motion

### Interactive
- **Background Ripple Effect**: Click interactions
- **Canvas Reveal Effect**: Hover reveals
- **Background Boxes**: Hover highlights

### Dramatic & Bold
- **Background Beams With Collision**: High energy
- **Shooting Stars**: Night sky effect
- **Vortex**: Swirling, attention-grabbing

## Tips

1. Use subtle backgrounds for content-heavy pages
2. Use dramatic backgrounds for hero sections and CTAs
3. Ensure good contrast with text
4. Test performance on mobile devices

Use list_components with category "backgrounds" to see all background options.
`
        }
      }
    ]
  })
};
