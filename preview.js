const social = {
  instagram: ['Instagram', '#C13584', '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.7" r="1" fill="currentColor"/>'],
  youtube: ['YouTube', '#CC0000', '<rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor"/><path d="m10 8.5 6 3.5-6 3.5z" fill="#CC0000"/>'],
  twitch: ['Twitch', '#9146FF', '<path fill="currentColor" d="M4 2h18v13l-5 5h-4l-3 3H7v-3H3V6zm2 2v13h4v3l3-3h4l3-3V4zm6 3h2v6h-2zm4 0h2v6h-2z"/>']
};

const copy = [
  ['Digital craft', 'Interfaces with a precise point of view.'],
  ['Interface design', 'Clear ideas for everyday products.'],
  ['Systems consulting', 'Calm solutions to complex problems.'],
  ['Creative direction', 'Art direction with a playful edge.'],
  ['Independent design', 'Grounded identities with room to grow.'],
  ['Motion and visuals', 'Bold visual stories with a warm edge.']
];

for (const [index, example] of brandExamples.entries()) {
  const item = document.createElement('article');
  item.className = 'card';
  const tone = example.tokens.dark;
  for (const [key, role] of [['a', '--primary'], ['b', '--secondary'], ['c', '--support']]) {
    item.style.setProperty('--' + key, tone[role]);
  }
  const [network, color, mark] = social[example.icon];
  const [subtitle, description] = copy[index];
  const faces = ['light', 'dark'].map(mode => {
    const tokens = Object.entries(example.tokens[mode]).map(([key, value]) => key + ':' + value).join(';');
    return `<div class="face" style="${tokens}">
      <small>${mode === 'light' ? 'Light' : 'Dark'}</small>
      <h3>${example.name}</h3><strong>${subtitle}</strong><p>${description}</p>
      <div class="actions">
        <span class="button">View work</span>
        <span class="social" role="img" aria-label="${network}" style="--social:${color}">
          <svg viewBox="0 0 24 24" aria-hidden="true">${mark}</svg>
        </span>
      </div>
    </div>`;
  });
  item.innerHTML = `<header><h2>${example.palette}</h2><button type="button" class="download">Download JSON</button></header>
    <div class="faces">${faces.join('')}</div><div class="harmony" aria-hidden="true"></div>`;
  item.querySelector('button').addEventListener('click', () => {
    const data = { _meta: { name: example.name }, tokens: example.tokens };
    const blob = new Blob([JSON.stringify(data, null, 2) + '\n'], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'brand-' + example.name.toLowerCase().replaceAll(' ', '-') + '.json';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  document.querySelector('#examples').append(item);
}
