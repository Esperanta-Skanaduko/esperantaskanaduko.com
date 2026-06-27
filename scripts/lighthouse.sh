#!/usr/bin/env bash
# lighthouse.sh
# Runs a Lighthouse performance audit against the production build.
#
# Usage: bash scripts/lighthouse.sh
# Or:    npm run audit:lighthouse
#
# Prerequisites:
#   npm install -g lighthouse
#   (Chromium/Chrome must be installed)
#
# Target scores (documented in README):
#   Performance    ≥ 90
#   Accessibility  ≥ 95
#   Best Practices ≥ 90
#   SEO            ≥ 95

set -euo pipefail

PORT=4173
URL="http://localhost:${PORT}"
REPORT_DIR="lighthouse-reports"
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
REPORT_PREFIX="${REPORT_DIR}/lighthouse-${TIMESTAMP}"

echo "🏗️  Building production bundle..."
npm run build

echo ""
echo "🚀 Starting preview server on port ${PORT}..."
npm run preview -- --port "${PORT}" &
PREVIEW_PID=$!

# Give the server a moment to start
sleep 3

# Ensure cleanup on exit
cleanup() {
  echo ""
  echo "🛑 Stopping preview server (PID ${PREVIEW_PID})..."
  kill "${PREVIEW_PID}" 2>/dev/null || true
}
trap cleanup EXIT

mkdir -p "${REPORT_DIR}"

echo ""
echo "🔍 Running Lighthouse audit against ${URL}..."
lighthouse "${URL}" \
  --output html \
  --output json \
  --output-path "${REPORT_PREFIX}" \
  --chrome-flags="--headless --no-sandbox --disable-gpu" \
  --only-categories=performance,accessibility,best-practices,seo \
  --preset=desktop

echo ""
echo "✅ Lighthouse report saved:"
echo "   HTML → ${REPORT_PREFIX}.report.html"
echo "   JSON → ${REPORT_PREFIX}.report.json"
echo ""
echo "📊 Target scores:"
echo "   Performance    ≥ 90"
echo "   Accessibility  ≥ 95"
echo "   Best Practices ≥ 90"
echo "   SEO            ≥ 95"

# Parse scores from JSON report and display them
if command -v node &>/dev/null && [ -f "${REPORT_PREFIX}.report.json" ]; then
  echo ""
  echo "📈 Actual scores:"
  node -e "
    const r = JSON.parse(require('fs').readFileSync('${REPORT_PREFIX}.report.json', 'utf-8'));
    const cats = r.categories;
    const fmt = (key, label) => {
      const score = Math.round((cats[key]?.score ?? 0) * 100);
      const pass = score >= (key === 'accessibility' || key === 'seo' ? 95 : 90);
      console.log('   ' + (pass ? '✅' : '❌') + ' ' + label + ': ' + score);
    };
    fmt('performance', 'Performance');
    fmt('accessibility', 'Accessibility');
    fmt('best-practices', 'Best Practices');
    fmt('seo', 'SEO');
  " 2>/dev/null || true
fi
