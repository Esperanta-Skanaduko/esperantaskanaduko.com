#!/usr/bin/env python3
"""
Machine Translation Automation for Esperanta Skanaduko
This script translates all 64 placeholder language files using AI/Google Translate API.

REQUIREMENTS:
- Python 3.8+
- pip install deep-translator (for Google Translate - free, no API key needed)
- OR pip install googletrans==4.0.0-rc1 (alternative free option)

USAGE:
    python translate_all_files.py

WARNING: These are AI-generated translations requiring human review before production use.
"""

import json
import os
from pathlib import Path
from typing import Dict, Any
import sys

try:
    from deep_translator import GoogleTranslator
    print("✅ deep-translator library found")
except ImportError:
    print("❌ deep-translator not found. Install with: pip install deep-translator")
    sys.exit(1)

# Language mappings (ISO 639-1 codes for Google Translate)
LANGUAGE_MAPPINGS = {
    'af': 'af',   # Afrikaans
    'ar': 'ar',   # Arabic
    'be': 'be',   # Belarusian
    'bg': 'bg',   # Bulgarian
    'bn': 'bn',   # Bengali
    'bs': 'bs',   # Bosnian
    'ca': 'ca',   # Catalan
    'cs': 'cs',   # Czech
    'cy': 'cy',   # Welsh
    'da': 'da',   # Danish
    'de': 'de',   # German
    'el': 'el',   # Greek
    'es': 'es',   # Spanish
    'et': 'et',   # Estonian
    'eu': 'eu',   # Basque
    'fa': 'fa',   # Persian
    'fi': 'fi',   # Finnish
    'fr': 'fr',   # French
    'fy': 'fy',   # Frisian
    'ga': 'ga',   # Irish
    'gl': 'gl',   # Galician
    'he': 'he',   # Hebrew
    'hi': 'hi',   # Hindi
    'hr': 'hr',   # Croatian
    'hu': 'hu',   # Hungarian
    'id': 'id',   # Indonesian
    'is': 'is',   # Icelandic
    'it': 'it',   # Italian
    'ja': 'ja',   # Japanese
    'ko': 'ko',   # Korean
    'lt': 'lt',   # Lithuanian
    'lv': 'lv',   # Latvian
    'mg': 'mg',   # Malagasy
    'mk': 'mk',   # Macedonian
    'mt': 'mt',   # Maltese
    'nl': 'nl',   # Dutch
    'no': 'no',   # Norwegian
    'pl': 'pl',   # Polish
    'pt': 'pt',   # Portuguese
    'ro': 'ro',   # Romanian
    'ru': 'ru',   # Russian
    'sk': 'sk',   # Slovak
    'sl': 'sl',   # Slovenian
    'sq': 'sq',   # Albanian
    'sr': 'sr',   # Serbian
    'sv': 'sv',   # Swedish
    'sw': 'sw',   # Swahili
    'te': 'te',   # Telugu
    'th': 'th',   # Thai
    'tl': 'tl',   # Tagalog
    'tr': 'tr',   # Turkish
    'uk': 'uk',   # Ukrainian
    'vi': 'vi',   # Vietnamese
    'zh': 'zh-CN', # Chinese (Simplified)
}

# Languages not supported by Google Translate (will use English with note)
UNSUPPORTED_LANGS = ['br', 'cv', 'lb', 'oc', 'os', 'rm', 'rn', 'sb', 'tg', 'wa']

def translate_text(text: str, target_lang: str) -> str:
    """Translate text to target language using Google Translate"""
    try:
        if not text or text.strip() == "":
            return text

        # Preserve special formatting
        if text == "Esperanta\nSkanaduko":
            return text  # Keep site name unchanged

        # Preserve interpolation syntax
        if "{{" in text and "}}" in text:
            # Translate around interpolation
            translator = GoogleTranslator(source='en', target=target_lang)
            result = translator.translate(text)
            # Ensure interpolation syntax is preserved
            import re
            placeholders = re.findall(r'\{\{[^}]+\}\}', text)
            for placeholder in placeholders:
                if placeholder not in result:
                    # Try to restore placeholder
                    result = re.sub(r'\{\s*\{[^}]+\}\s*\}', placeholder, result, count=1)
            return result

        translator = GoogleTranslator(source='en', target=target_lang)
        return translator.translate(text)
    except Exception as e:
        print(f"  ⚠️  Translation error for '{text[:30]}...': {e}")
        return text  # Return original on error

def translate_dict(data: Dict[str, Any], target_lang: str, path: str = "") -> Dict[str, Any]:
    """Recursively translate all string values in a dictionary"""
    result = {}
    for key, value in data.items():
        current_path = f"{path}.{key}" if path else key

        # Skip metadata
        if key == "_meta":
            result[key] = value
            continue

        if isinstance(value, dict):
            result[key] = translate_dict(value, target_lang, current_path)
        elif isinstance(value, str):
            print(f"  📝 Translating: {current_path}")
            result[key] = translate_text(value, target_lang)
        else:
            result[key] = value

    return result

def process_language_file(lang_code: str, locales_dir: Path):
    """Process a single language file"""
    file_path = locales_dir / f"{lang_code}.json"

    print(f"\n{'='*60}")
    print(f"🌍 Processing: {lang_code}.json")
    print(f"{'='*60}")

    # Check if language is supported
    if lang_code in UNSUPPORTED_LANGS:
        print(f"⚠️  {lang_code} not supported by Google Translate - marking for manual translation")
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)

        data['_meta']['translationStatus'] = 'needs-manual-translation'
        data['_meta']['note'] = 'This language is not supported by automatic translation. Manual translation required.'
        data['_meta']['lastUpdated'] = '2025-10-11'

        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
            f.write('\n')

        print(f"✅ Updated metadata for unsupported language\n")
        return

    # Load the file
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Get target language code
    target_lang = LANGUAGE_MAPPINGS.get(lang_code, lang_code)

    # Translate all content (except _meta)
    translated_data = {}
    for key, value in data.items():
        if key == "_meta":
            # Update metadata
            translated_data[key] = {
                'language': value['language'],
                'code': value['code'],
                'translationStatus': 'machine-translated',
                'note': 'This file contains AI-generated translations. Human review and editing recommended before production use.',
                'lastUpdated': '2025-10-11',
                'translator': 'Google Translate API (deep-translator)',
                'reviewStatus': 'pending-human-review'
            }
        elif isinstance(value, dict):
            translated_data[key] = translate_dict(value, target_lang, key)
        else:
            translated_data[key] = value

    # Write back to file
    with open(file_path, 'w', encoding='utf-8') as f:
        json.dump(translated_data, f, ensure_ascii=False, indent=2)
        f.write('\n')

    print(f"\n✅ Completed: {lang_code}.json\n")

def main():
    """Main execution function"""
    print("🌍 ESPERANTA SKANADUKO - Machine Translation Script")
    print("="*60)
    print("⚠️  WARNING: AI-generated translations require human review")
    print("="*60)
    print()

    # Get locales directory
    script_dir = Path(__file__).parent
    locales_dir = script_dir.parent / 'src' / 'i18n' / 'locales'

    if not locales_dir.exists():
        print(f"❌ Locales directory not found: {locales_dir}")
        sys.exit(1)

    # Get all language codes to process
    all_langs = list(LANGUAGE_MAPPINGS.keys()) + UNSUPPORTED_LANGS

    print(f"📁 Found {len(all_langs)} language files to process")
    print(f"   Supported: {len(LANGUAGE_MAPPINGS)}")
    print(f"   Unsupported: {len(UNSUPPORTED_LANGS)}\n")

    confirm = input("Continue with translation? (yes/no): ")
    if confirm.lower() not in ['yes', 'y']:
        print("Cancelled.")
        sys.exit(0)

    # Process each language
    success_count = 0
    error_count = 0

    for lang_code in all_langs:
        try:
            process_language_file(lang_code, locales_dir)
            success_count += 1
        except Exception as e:
            print(f"❌ Error processing {lang_code}: {e}\n")
            error_count += 1

    # Summary
    print("\n" + "="*60)
    print("📊 TRANSLATION SUMMARY")
    print("="*60)
    print(f"✅ Successfully processed: {success_count} files")
    print(f"❌ Errors: {error_count} files")
    print(f"\n⚠️  IMPORTANT NEXT STEPS:")
    print("   1. All translations are AI-generated and need human review")
    print("   2. Test the application with different languages")
    print("   3. Recruit native speakers for quality assurance")
    print("   4. Update production deployment only after human review")
    print("="*60)

if __name__ == "__main__":
    main()
