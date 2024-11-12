const Anime = () => {
  const tags = [
    'Cмотрю',
    'Просмотрено',
    'Запланировано',
    'Брошено',
    'Отложено',
  ];

  const animeList = [
    { title: 'Test', year: 2024, gener: 'TV Series' },
    { title: 'Test', year: 2024, gener: 'TV Series' },
    { title: 'Test', year: 2024, gener: 'TV Series' },
    { title: 'Test', year: 2024, gener: 'TV Series' },
    { title: 'Test', year: 2024, gener: 'TV Series' },
    { title: 'Test', year: 2024, gener: 'TV Series' },
    { title: 'Test', year: 2024, gener: 'TV Series' },
    { title: 'Test', year: 2024, gener: 'TV Series' },
    { title: 'Test', year: 2024, gener: 'TV Series' },
    { title: 'Test', year: 2024, gener: 'TV Series' },
  ];

  return (
    <div className="flex flex-col gap-[30px]">
      <h1 className="text-[19px] font-semibold">Аниме</h1>

      <div className="flex gap-2 flex-wrap">
        {tags.map((tag, i) => (
          <div
            key={i}
            className="flex gap-3 items-center p-3 border rounded-[50px] bg-[rgba(255,255,255,0.02)]"
          >
            <div className="w-[8px] h-[8px] bg-[#BFF6F9] rounded-[100px]"></div>
            <p>{tag}</p>
            <span>1</span>
          </div>
        ))}
      </div>

      <div className="flex gap-[32px] flex-wrap">
        {animeList.map((item, index) => (
          <div key={index} className="w-[118px] flex flex-col gap-[17px]">
            <div className="w-full h-[169px] bg-[url('/anime1.png')] bg-cover" />
            <div className="flex flex-col gap-[7px]">
              <h1 className="text-[12px] text-white font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
                {item.title}
              </h1>

              <div className="flex items-center justify-start gap-[8px]">
                <h3 className="text-[#ABABAB] text-[12px] font-medium">
                  {item.year}
                </h3>
                <div className="w-[4px] h-[4px] rounded-full bg-[#ABABAB]" />
                <h3 className="text-[#ABABAB] text-[12px] font-medium">
                  {item.gener}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Anime;
