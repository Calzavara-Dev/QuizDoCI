#!/usr/bin/env bash
set -euo pipefail

# build-ios.sh
# Automated helper to produce an iOS .ipa from the web build using Capacitor + Xcode
# Run on macOS with Xcode installed. This script will NOT work on Windows.

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
echo "Project root: $PROJECT_ROOT"

echo "1) Building web assets (Vite)"
cd "$PROJECT_ROOT"
npm run build:web

echo "2) Copying web assets to iOS project via Capacitor"
npx cap copy ios

# Capacitor typically creates the iOS app in ios/App
IOS_WORKSPACE="$PROJECT_ROOT/ios/App/App.xcworkspace"
IOS_SCHEME="App"
BUILD_DIR="$PROJECT_ROOT/ios-build"
ARCHIVE_PATH="$BUILD_DIR/App.xcarchive"
IPA_EXPORT_PATH="$BUILD_DIR/export"

echo "3) Checking for Xcode workspace: $IOS_WORKSPACE"
if [ ! -e "$IOS_WORKSPACE" ]; then
  echo "ERROR: iOS Xcode workspace not found. Run 'npx cap add ios' on a macOS machine first and open the project in Xcode to configure signing." >&2
  exit 2
fi

mkdir -p "$BUILD_DIR"

echo "4) Archiving with xcodebuild (Release)"
# Note: user must configure signing in Xcode or provide a valid export options plist.
xcodebuild -workspace "$IOS_WORKSPACE" -scheme "$IOS_SCHEME" -configuration Release archive -archivePath "$ARCHIVE_PATH"

echo "5) Exporting IPA"
EXPORT_OPTIONS_PLIST="$PROJECT_ROOT/scripts/ExportOptions.plist"
if [ ! -f "$EXPORT_OPTIONS_PLIST" ]; then
  echo "Export options plist not found at $EXPORT_OPTIONS_PLIST. Please create one based on the template scripts/ExportOptions.plist.template" >&2
  exit 3
fi

xcodebuild -exportArchive -archivePath "$ARCHIVE_PATH" -exportOptionsPlist "$EXPORT_OPTIONS_PLIST" -exportPath "$IPA_EXPORT_PATH"

echo "IPA(s) exported to: $IPA_EXPORT_PATH"
ls -la "$IPA_EXPORT_PATH"

echo "Done. If you need help creating ExportOptions.plist or configuring signing, open the project in Xcode (open ios/App/App.xcworkspace) and set your team/code signing settings."
