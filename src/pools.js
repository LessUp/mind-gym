(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = factory();
  } else {
    root.RememberPools = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  const emojiPool = ["🍎","🍌","🍇","🍓","🍒","🍉","🍑","🍍","🥝","🍋","🍊","🍐","🍈","🥥","🥕","🍅","🌽","🥦","⭐","🌙","🔥","❄️","⚡","🌈","💧","🍄","🌻","🌵","🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🦁","🐯","🐷","🐸","🐵","🐔","🐧","🐦","🐤","🐙","🐠","🐳","🐬","🐝","🦋","🚗","✈️","🚀","🚲","🏀","⚽","🎲","🎯","🎵","🎧","🎁","🔑","🔔","💡","❤️","💎"];
  const numbersPool = Array.from({ length: 40 }, (_, i) => String(i + 1));
  const lettersPool = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  const shapesPool = ['▲','■','●','◆','★','⬤','⬟','⬢','⬣','⬥','◼','◻','◾','◽','▣','▧','▨','✦','✧','✪','✸','✹','✤','✥','⬠','⬡'];
  const colorsPool = ['#EF4444','#F97316','#F59E0B','#84CC16','#22C55E','#10B981','#06B6D4','#3B82F6','#6366F1','#8B5CF6','#A855F7','#EC4899','#F43F5E','#14B8A6','#EAB308','#0EA5E9','#4ADE80','#FB7185','#34D399','#60A5FA','#D946EF','#7C3AED','#0891B2'];

  function getPoolForTheme(theme) {
    if (theme === 'numbers') return numbersPool.map(v => ({ v, type: 'text' }));
    if (theme === 'letters') return lettersPool.map(v => ({ v, type: 'text' }));
    if (theme === 'shapes') return shapesPool.map(v => ({ v, type: 'text' }));
    if (theme === 'colors') return colorsPool.map(c => ({ v: c, type: 'color', color: c }));
    return emojiPool.map(v => ({ v, type: 'text' }));
  }

  return {
    emojiPool,
    numbersPool,
    lettersPool,
    shapesPool,
    colorsPool,
    getPoolForTheme,
  };
});
