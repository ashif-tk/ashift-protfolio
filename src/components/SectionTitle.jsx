function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <span className="section-badge">{eyebrow}</span>
      <h2 className="mt-5 text-3xl font-black tracking-tight text-ink sm:text-4xl lg:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base text-gray-600 sm:text-lg">{description}</p>}
    </div>
  );
}

export default SectionTitle;
