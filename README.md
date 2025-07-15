# Recipe Finder Web App 🍳

A responsive Recipe Finder Web App built with React.js, Next.js, and Tailwind CSS. Search for recipes by name or ingredient, view detailed information, and save your favorite recipes.

## 🌟 Features

- **Search Functionality**: Search recipes by name or ingredient using TheMealDB API
- **Recipe Listing**: Display search results in responsive cards with images and titles
- **Recipe Details**: View full recipe instructions, ingredients, and video tutorials
- **Favorites Management**: Save and remove favorite recipes with persistent storage
- **Responsive Design**: Mobile-friendly layout built with Tailwind CSS
- **External API Integration**: Fetches data from TheMealDB (no API key required)

## 🛠️ Technologies Used

- **React.js** with Next.js App Router
- **Tailwind CSS** for styling
- **TypeScript** for type safety
- **React Hooks** (useState, useEffect, useContext)
- **Context API** for state management
- **Fetch API** for HTTP requests
- **Local Storage** for data persistence

## 📁 Project Structure

\`\`\`
src/
├── api/             # API integration functions
├── components/      # Reusable UI components
├── context/         # Context providers for state management
├── hooks/           # Custom React hooks
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
└── app/             # Next.js app directory
\`\`\`

## 🚀 Getting Started

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd recipe-finder-app
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to \`http://localhost:3000\`

## 🌐 API Integration

This app uses **TheMealDB API** which provides free access to recipe data:

- **Search by name**: \`https://www.themealdb.com/api/json/v1/1/search.php?s={query}\`
- **Search by ingredient**: \`https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}\`
- **Recipe details**: \`https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}\`

## 📱 Key Components

- **SearchBar**: Input field for recipe searches
- **RecipeCard**: Displays recipe preview with favorite toggle
- **RecipeModal**: Shows detailed recipe information
- **FavoritesModal**: Displays saved favorite recipes
- **RecipeGrid**: Responsive grid layout for recipe cards

## 💾 State Management

- **FavoritesContext**: Manages favorite recipes using React Context
- **Local Storage**: Persists favorites between sessions
- **Custom Hooks**: \`useFetchRecipes\` for API data fetching

## 🎨 Responsive Design

- Mobile-first approach with Tailwind CSS
- Responsive grid layouts (1-4 columns based on screen size)
- Touch-friendly interface for mobile devices
- Optimized images with hover effects

## 🔧 Custom Hooks

- **useFetchRecipes**: Handles recipe search and loading states
- **useFavorites**: Manages favorite recipes state

## 📦 Deployment

This app is ready for deployment on platforms like:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using React.js, Next.js, and Tailwind CSS
