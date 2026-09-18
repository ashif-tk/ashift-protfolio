import * as icons from 'lucide-react';

const iconMap = {
  HTML5: icons.Code2,
  'CSS3': icons.Palette,
  JavaScript: icons.FileCode2,
  'React.js': icons.Layers3,
  'Tailwind CSS': icons.Sparkles,
  'React Router DOM': icons.Route,
};

function SkillCard({ name, description, level }) {
  const Icon = iconMap[name] || icons.Circle;

  return (
    <article className="group rounded-3xl border border-blue-100 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl">
      <div className="flex items-center justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-primary shadow-sm">
          <Icon size={22} />
        </div>
        {level && <span className="rounded-full bg-coralLight px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-secondary">{level}</span>}
      </div>
      <h3 className="mt-5 text-xl font-bold text-ink">{name}</h3>
      <p className="mt-3 text-sm leading-6 text-gray-600">{description}</p>
    </article>
  );
}

export default SkillCard;
