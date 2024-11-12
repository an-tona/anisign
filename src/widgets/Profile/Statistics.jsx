import Activity from './icons/Activity';
import Time from './icons/Time';

const Statistics = () => {
  const activity = [100, 40, 80, 70, 20, 50, 10, 50, 100, 20, 35, 20, 20, 20];
  const BAR_HEIGHT = 40;

  return (
    <div className="flex flex-col gap-[30px]">
      <h1 className="text-[19px] font-semibold">Статистика</h1>

      <div className="min-[1400px]:grid flex max-[1250px]:flex-col grid-cols-2 gap-[30px]">
        <div className="min-[1250px]:w-[430px] p-[17px] flex flex-col gap-[16px] bg-[#FFFFFF05] border-[1px] border-[#FFFFFF0D] rounded-[8px]">
          <div className="flex items-center align-center gap-[8px]">
            <Activity />
            <h3 className="text-[#B9B9B9] text-[14px] font-medium">
              Активность
            </h3>
          </div>

          <div className="w-full max-[1250px]:justify-between h-[40px] flex min-[450px]:gap-[21px]">
            {activity.map((item, index) => (
              <div
                key={index}
                className="w-[8px] h-full bg-[#27272A4D] rounded-full relative"
              >
                <div
                  className="w-full absolute bottom-0 rounded-full bg-[#CCBAE4]"
                  style={{ height: `${(item * BAR_HEIGHT) / 100}px` }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full p-[17px] flex flex-col gap-[20px] bg-[#FFFFFF05] border-[1px] border-[#FFFFFF0D] rounded-[8px]">
          <div className="flex items-center align-center gap-[8px]">
            <Time />
            <h3 className="text-[#B9B9B9] text-[14px] font-medium">
              Время просмотра
            </h3>
          </div>

          <div className="flex flex-col gap-[11px]">
            <div className="flex max-[350px]:flex-col max-[350px]:items-start items-center justify-between">
              <h3 className="text-[#FAFAFA] text-[14px] font-semibold opacity-70">
                6 месяцев 5 дней
              </h3>
              <h4 className="text-[#B9B9B9] text-[12px] font-[400]">
                4465 часов
              </h4>
            </div>

            <div className="w-full h-[8px] relative bg-[#27272A] rounded-full">
              <div className="w-[20%] absolute top-0 left-0 bottom-0 my-auto rounded-full bg-[#CCBAE4]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
