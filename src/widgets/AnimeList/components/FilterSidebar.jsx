'use client';
import React, { useState } from 'react';
import MultiSelect from '@/widgets/AnimeList/ui/Genre';
import Year from '@/widgets/AnimeList/ui/Year';
import { AButton } from '@/shared/anisign-ui/Button';

const frameworksList = [
  { value: 'react', label: 'React'},
  { value: 'angular', label: 'Angular'},
  { value: 'vue', label: 'Vue'},
  { value: 'svelte', label: 'Svelte'},
  { value: 'ember', label: 'Ember'}
];

const FilterSidebar = () => {

  const [selectedFrameworks, setSelectedFrameworks] = useState(['react', 'angular']);

  return (
    <aside className="hidden lg:block space-y-6 sticky top-20 opacity-60 hover:opacity-100 transition-all duration-300">
      <div className="bg-[rgba(255,255,255,0.02)] border border-white/5 p-6 rounded-[14px]">
        <h3 className="font-semibold opacity-80 mb-5 w-full">Сортировать по</h3>
        <div className="flex flex-wrap gap-2">
          {['Дате', 'Рейтингу', 'Названию', 'Просмотрам'].map((label) => (
            <div key={label}
                 className="flex items-center px-[15px] h-[39px] font-medium rounded-[34px] cursor-pointer hover:opacity-60 transition-all duration-300 ease-in-out bg-[rgba(255,255,255,0.02)]  text-[rgba(255,255,255,0.6)] border">
              {label}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.02)] border border-white/5 p-6 rounded-[14px]">
        <h3 className="font-semibold opacity-80 mb-5 w-full">Выбор жанра</h3>
        <MultiSelect
          className="py-4 px-2 rounded-[12px] hover:opacity-60 transition-all duration-300"
          options={frameworksList}
          onValueChange={setSelectedFrameworks}
          defaultValue={selectedFrameworks}
          placeholder="Выбор жанра..."
          variant="inverted"
          animation={2}
          maxCount={3}
        />
      </div>
      <div className="bg-[rgba(255,255,255,0.02)] border border-white/5 p-6 rounded-[14px]">
        <h3 className="font-semibold opacity-80  mb-5">Год выхода</h3>
        <Year />
      </div>
      <div className="bg-[rgba(255,255,255,0.02)] border border-white/5 p-6 rounded-[14px]">
        <h3 className="font-semibold opacity-80 mb-5 w-full">Тип</h3>
        <div className="flex flex-wrap gap-2">
          {['ТВ Сериал', 'Фильм', 'OVA', 'Спешл'].map((label) => (
            <div key={label}
                 className="flex items-center px-[15px] h-[39px] font-medium rounded-[34px] cursor-pointer hover:opacity-60 transition-all duration-300 ease-in-out bg-[rgba(255,255,255,0.02)]  text-[rgba(255,255,255,0.6)] border">
              {label}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[rgba(255,255,255,0.02)] border border-white/5 p-6 rounded-[14px]">
        <h3 className="font-semibold opacity-80 mb-5 w-full">Статус</h3>
        <div className="flex flex-wrap gap-2">
          {['Анонс', 'Вышел', 'Онгоинг'].map((label) => (
            <div key={label}
                 className="flex items-center px-[15px] h-[39px] font-medium rounded-[34px] cursor-pointer hover:opacity-60 transition-all duration-300 ease-in-out bg-[rgba(255,255,255,0.02)]  text-[rgba(255,255,255,0.6)] border">
              {label}
            </div>
          ))}
        </div>
      </div>
      <AButton className="w-full bg-[#DD8D8D]/10 text-[#DD8D8D] hover:bg-[#DD8D8D] hover:text-black">Очистить</AButton>
    </aside>
  );
};

export default FilterSidebar;
