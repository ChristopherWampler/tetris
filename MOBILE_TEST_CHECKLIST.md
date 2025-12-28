# Mobile Testing Checklist

## iOS Safari (iOS 15+)
- [ ] Game loads without errors
- [ ] Touch controls respond
- [ ] Swipe gestures work correctly
- [ ] Hold-to-repeat works on left/right buttons
- [ ] Safe area respected (notch/Dynamic Island)
- [ ] PWA installs correctly
- [ ] Haptic feedback works
- [ ] Audio plays after first touch interaction
- [ ] Orientation changes handled smoothly
- [ ] Mobile restart button appears after game over
- [ ] Pause button works
- [ ] No rubber-band scrolling
- [ ] Status bar styling correct (black-translucent)

## Android Chrome (Chrome 100+)
- [ ] Game loads without errors
- [ ] Touch controls respond
- [ ] Swipe gestures work correctly
- [ ] Hold-to-repeat works on left/right buttons
- [ ] PWA installs correctly
- [ ] Haptic feedback works (vibration)
- [ ] Audio plays after first touch interaction
- [ ] Orientation changes handled smoothly
- [ ] Mobile restart button appears after game over
- [ ] Pause button works
- [ ] "Add to Home Screen" prompt appears
- [ ] Theme color applied correctly

## Screen Sizes
- [ ] iPhone SE (375x667) - smallest iOS device
- [ ] iPhone 13/14/15 (390x844) - standard
- [ ] iPhone Pro Max (428x926) - largest
- [ ] Android small (360x640) - Pixel 5
- [ ] Android medium (412x915) - Pixel 6
- [ ] Android large (428x926) - Samsung S21
- [ ] Landscape mode on all sizes
- [ ] Tablet (iPad, 768x1024)

## Performance
- [ ] Consistent 60fps gameplay
- [ ] No lag on swipes
- [ ] Touch response <100ms
- [ ] No memory leaks during extended play
- [ ] Battery drain reasonable (test 30min session)
- [ ] No frame drops during line clears
- [ ] Canvas resizing smooth on orientation change

## Network Conditions
- [ ] Works offline after first visit
- [ ] Service worker caches correctly
- [ ] PWA works on slow 3G
- [ ] No errors when switching online/offline
- [ ] Updates service worker properly

## Accessibility
- [ ] Respects prefers-reduced-motion
- [ ] Haptics disabled when reduce motion enabled
- [ ] Touch targets minimum 44x44px
- [ ] Sufficient color contrast (WCAG AA)
- [ ] Game playable without sound

## PWA Installation
- [ ] Manifest loads correctly
- [ ] Icons display in all sizes
- [ ] Splash screen shows (Android)
- [ ] Standalone mode works (no browser UI)
- [ ] Can uninstall cleanly
- [ ] Re-installation works

## Edge Cases
- [ ] Low battery mode (iOS)
- [ ] Battery saver mode (Android)
- [ ] Different system fonts
- [ ] System dark mode
- [ ] Split screen mode (Android)
- [ ] Picture-in-picture doesn't break game
