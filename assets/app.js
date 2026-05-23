const prompts = {
  pro: `Create a 1440px desktop web app dashboard for an AI Design Studio in dark mode. The UI must contain bilingual text, Korean and English. Background #09090B, panels #18181B with 1px solid #27272A borders. Use Inter for UI text at 12px-14px and Fira Code for code blocks. Layout is a dense 3-column grid. Left column 300px: Brief Intake textarea and structured Stitch Prompt JSON editor. Center column 760px: scrollable area showing 3 generated UI variants stacked vertically, each with a #3B82F6 Select Variant button. Right column 380px: exported React code editor with syntax highlighting and Copy Code button. Professional, data-dense, developer-focused aesthetic.`,
  editorial: `Create a 1440px desktop web app for AI design review. Light mode with a calm, minimalist editorial aesthetic. Mix Korean and English text. Background #FDFCF8, card surfaces #F4F0EA, text #292524. Typography: Playfair Display for headings, Pretendard or sans-serif for body text at 15px-18px. Top: A 5-step progress indicator: Brief, Prompt, Variants, Review, Export. Center: a large horizontal scrolling carousel displaying 3 high-quality UI variant cards. Each card has 40px padding, subtle drop shadows, no borders, and a terracotta #E04F33 primary button labeled Approve & Export. Minimal UI chrome, focus entirely on generated designs.`,
  board: `Create a 1440px desktop spatial canvas UI for an AI design workflow, similar to FigJam or Miro. Bilingual text, Korean and English. Canvas background #F3F4F6. Typography: Space Grotesk. UI elements are floating white #FFFFFF panels with 12px border radius and soft large shadows. Left: floating toolbar panel 280px wide containing inputs for Design Brief and Generate button. Center canvas: 3 generated UI variant cards scattered organically like sticky notes, connected by curved dashed lines. Each variant has a bright purple #8B5CF6 Select button. Right: a green #10B981 dashed-border drop target labeled Export Zone. Playful, vibrant, interactive aesthetic.`
};

const toast = document.querySelector('.toast');
function showToast(message = '복사했습니다.') {
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => { toast.hidden = true; }, 1800);
}

async function copyText(text, message) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(message);
  } catch (error) {
    const area = document.createElement('textarea');
    area.value = text;
    document.body.appendChild(area);
    area.select();
    document.execCommand('copy');
    area.remove();
    showToast(message);
  }
}

document.querySelectorAll('[data-scroll-to]').forEach((button) => {
  button.addEventListener('click', () => document.getElementById(button.dataset.scrollTo)?.scrollIntoView({ behavior: 'smooth' }));
});

document.querySelectorAll('[role="tab"]').forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;
    document.querySelectorAll('[role="tab"]').forEach((item) => item.setAttribute('aria-selected', String(item === tab)));
    document.querySelectorAll('[data-panel]').forEach((panel) => {
      const active = panel.dataset.panel === target;
      panel.classList.toggle('active', active);
      panel.hidden = !active;
    });
  });
});

document.querySelectorAll('.copy-prompt').forEach((button) => {
  button.addEventListener('click', () => copyText(prompts[button.dataset.prompt], 'Stitch 프롬프트를 복사했습니다.'));
});

document.getElementById('copy-template')?.addEventListener('click', () => {
  copyText(document.getElementById('template-text').innerText, '요청 템플릿을 복사했습니다.');
});

const header = document.querySelector('.site-header');
const elevate = () => header?.setAttribute('data-elevated', String(window.scrollY > 12));
window.addEventListener('scroll', elevate, { passive: true });
elevate();
