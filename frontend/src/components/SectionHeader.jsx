import React from 'react';

const SectionHeader = ({ title, subtitle, align = 'center' }) => (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
        <h2 className="text-base text-red-500 font-semibold tracking-wide uppercase mb-2">
            {subtitle}
        </h2>
        <p className="text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            {title}
        </p>
    </div>
);

export default SectionHeader;