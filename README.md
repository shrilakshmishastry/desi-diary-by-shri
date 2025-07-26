# DesiDiaryByShri

A personal blog showcasing technical articles and Kannada stories. Built with React, TypeScript, and MDX.

## Features

- 📝 Technical blog posts about frontend development and accessibility
- 📚 Kannada stories and cultural experiences
- 🎨 Clean, responsive design with dark mode support
- ⚡ Built with modern tech stack:
  - React + TypeScript
  - Vite for fast development
  - MDX for content management
  - Tailwind CSS for styling
  - React Router for navigation

## Project Structure

```
src/
├── components/        # Reusable React components
│   └── blog/         # Blog-specific components
├── content/          # MDX content
│   ├── tech/        # Technical blog posts
│   └── kannada/     # Kannada stories
├── layouts/          # Layout components
├── pages/           # Page components
├── types/           # TypeScript type definitions
└── utils/           # Utility functions
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)

> **Note:** This project uses pnpm as the package manager. Please do not use npm or yarn.

### Installation

1. Install pnpm if you haven't already:

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

2. Clone the repository:

```bash
git clone https://github.com/shrilakshmishastry/desi-diary-by-shri.git
cd desi-diary-by-shri
```

3. Install dependencies:

```bash
pnpm install
```

4. Start the development server:

```bash
pnpm dev
```

The site will be available at `http://localhost:5173`

## Adding Content

### Technical Blog Posts

1. Create a new MDX file in `src/content/tech/`
2. Add frontmatter:

```mdx
export const frontmatter = {
  title: "Your Title",
  date: "YYYY-MM-DD",
  type: "tech",
  description: "Brief description",
  slug: "url-friendly-title",
};

;
```

### Kannada Stories

1. Create a new MDX file in `src/content/kannada/`
2. Add frontmatter:

```mdx
export const frontmatter = {
  title: "ಕಥೆಯ ಶೀರ್ಷಿಕೆ",
  date: "YYYY-MM-DD",
  type: "kannada",
  description: "ಕಥೆಯ ಸಂಕ್ಷಿಪ್ತ ವಿವರಣೆ",
  slug: "url-friendly-title",
};

;
```

## Development

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript type checking

## Contributing

While this is primarily a personal blog, bug fixes and improvements are welcome! Please feel free to:

1. Fork the repository
2. Create a feature branch
3. Submit a Pull Request

> **Note:** Please ensure you use pnpm for package management when contributing.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Shrilakshmi Shastry**

- GitHub: [@shrilakshmishastry](https://github.com/shrilakshmishastry)
- Twitter: [@shrilakshmihg](https://twitter.com/shrilakshmihg)
- LinkedIn: [Shrilakshmi Shastry](https://www.linkedin.com/in/shrilakshmi-shastry-29737516a/)
