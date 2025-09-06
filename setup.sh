#!/bin/bash

# Frontend Boilerplate Setup Script
echo "🚀 Setting up Frontend Boilerplate..."

# Check if pnpm is installed
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm is not installed. Please install pnpm first:"
    echo "npm install -g pnpm"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install

# Create environment file if it doesn't exist
if [ ! -f .env.local ]; then
    echo "🔧 Creating environment file..."
    cp env.example .env.local
    echo "✅ Created .env.local from env.example"
    echo "📝 Please update .env.local with your configuration"
else
    echo "✅ .env.local already exists"
fi

# Run type check
echo "🔍 Running type check..."
pnpm typecheck

# Run linting
echo "🧹 Running linter..."
pnpm lint

# Build the project
echo "🏗️  Building project..."
pnpm build

echo ""
echo "✅ Setup complete! Your frontend boilerplate is ready."
echo ""
echo "Next steps:"
echo "1. Update .env.local with your API configuration"
echo "2. Run 'pnpm dev' to start the development server"
echo "3. Open http://localhost:3000 in your browser"
echo ""
echo "Happy coding! 🎉"
