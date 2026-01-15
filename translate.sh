#!/bin/bash

# Machine Translation Quick Start Script
# Automates the entire translation process for Esperanta Skanaduko

set -e  # Exit on error

echo "======================================"
echo "Machine Translation Setup & Execution"
echo "======================================"
echo ""

# Check if Python 3 is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ ERROR: Python 3 is not installed"
    echo "Please install Python 3.8 or higher first"
    exit 1
fi

echo "✅ Python 3 detected: $(python3 --version)"
echo ""

# Check if deep-translator is installed
echo "Checking for deep-translator library..."
if ! python3 -c "import deep_translator" 2>/dev/null; then
    echo "⚠️  deep-translator not found. Installing..."
    pip3 install deep-translator
    echo "✅ deep-translator installed successfully"
else
    echo "✅ deep-translator already installed"
fi
echo ""

# Verify installation
echo "Verifying installation..."
if python3 -c "from deep_translator import GoogleTranslator; print('OK')" 2>/dev/null; then
    echo "✅ Translation library is working correctly"
else
    echo "❌ ERROR: Translation library verification failed"
    exit 1
fi
echo ""

# Show warning
echo "======================================"
echo "⚠️  IMPORTANT WARNINGS"
echo "======================================"
echo ""
echo "1. This will translate ALL 64 language files"
echo "2. Translations are AI-generated (Google Translate)"
echo "3. ALL translations REQUIRE human review before production"
echo "4. This process may take 2-5 hours to complete"
echo "5. You need a stable internet connection"
echo ""
echo "Supported: 54 languages via Google Translate"
echo "Manual translation needed: 10 languages (br, cv, lb, oc, os, rm, rn, sb, tg, wa)"
echo ""

# Ask for confirmation
read -p "Do you want to continue? (yes/no): " response
if [[ ! "$response" =~ ^[Yy][Ee][Ss]$ ]]; then
    echo "Translation cancelled."
    exit 0
fi

echo ""
echo "======================================"
echo "Starting Translation Process"
echo "======================================"
echo ""

# Run the translation script
python3 scripts/translate_all_files.py

echo ""
echo "======================================"
echo "Translation Complete!"
echo "======================================"
echo ""
echo "Next steps:"
echo ""
echo "1. Verify translations:"
echo "   npm run build"
echo ""
echo "2. Test in browser:"
echo "   npm run dev"
echo "   Open http://localhost:5173"
echo ""
echo "3. Test language switcher with multiple languages"
echo ""
echo "4. Create GitHub issues for native speaker review"
echo "   See MACHINE_TRANSLATION_GUIDE.md for details"
echo ""
echo "⚠️  REMEMBER: All translations need human review!"
echo ""
