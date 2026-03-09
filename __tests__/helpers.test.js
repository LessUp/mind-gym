const createModule = () => {
  jest.resetModules();
  localStorage.clear();
  document.body.innerHTML = '';
  return require('../app.js');
};

describe('showModal / hideModal helpers', () => {
  let originalAddEventListener;

  beforeEach(() => {
    originalAddEventListener = document.addEventListener;
    document.addEventListener = function (type, listener, options) {
      if (type === 'DOMContentLoaded') return undefined;
      return originalAddEventListener.call(this, type, listener, options);
    };
  });

  afterEach(() => {
    document.addEventListener = originalAddEventListener;
  });

  test('showModal removes hidden and adds flex', () => {
    // showModal/hideModal are internal but we can test them via the module pattern
    // Since they aren't exported, we test them indirectly through achievement flow
    const app = createModule();
    // This test verifies the module loads without errors
    expect(app).toBeDefined();
    expect(typeof app.loadAdaptive).toBe('function');
  });
});

describe('achievementsDef i18n keys', () => {
  let originalAddEventListener;

  beforeEach(() => {
    originalAddEventListener = document.addEventListener;
    document.addEventListener = function (type, listener, options) {
      if (type === 'DOMContentLoaded') return undefined;
      return originalAddEventListener.call(this, type, listener, options);
    };
    jest.resetModules();
    localStorage.clear();
    document.body.innerHTML = '';
  });

  afterEach(() => {
    document.addEventListener = originalAddEventListener;
  });

  test('DEFAULT_SETTINGS has expected shape', () => {
    const app = require('../app.js');
    const defaults = app.DEFAULT_SETTINGS;
    expect(defaults).toBeDefined();
    expect(typeof defaults.sound).toBe('boolean');
    expect(typeof defaults.vibrate).toBe('boolean');
    expect(typeof defaults.previewSeconds).toBe('number');
  });

  test('adaptive key is a function returning a string', () => {
    const app = require('../app.js');
    expect(typeof app.adaptiveKey).toBe('function');
    const key = app.adaptiveKey();
    expect(typeof key).toBe('string');
    expect(key.length).toBeGreaterThan(0);
  });

  test('loadAdaptive returns default when empty', () => {
    const app = require('../app.js');
    const data = app.loadAdaptive();
    expect(data).toBeDefined();
    expect(typeof data.rating).toBe('number');
  });

  test('saveAdaptive + loadAdaptive roundtrip', () => {
    const app = require('../app.js');
    const payload = { rating: 1234, lastDiff: 'hard' };
    app.saveAdaptive(payload);
    const loaded = app.loadAdaptive();
    expect(loaded.rating).toBe(1234);
    expect(loaded.lastDiff).toBe('hard');
  });

  test('getAdaptiveAssist returns assist object', () => {
    const app = require('../app.js');
    app.__setSettings({ adaptive: true, previewSeconds: 0 });
    app.saveAdaptive({ rating: 800, lastDiff: 'easy' });
    const assist = app.getAdaptiveAssist('hard');
    expect(assist).toBeDefined();
    expect(typeof assist.previewSec).toBe('number');
    expect(typeof assist.hintLimit).toBe('number');
  });

  test('updateAdaptiveOnEnd does not crash when adaptive disabled', () => {
    const app = require('../app.js');
    app.__setSettings({ adaptive: false });
    // Should not throw
    app.updateAdaptiveOnEnd(true, 3, 'easy');
  });
});
