"use client";
import Card from "@/app/components/statistics/Card";
import Icon1 from "@/app/assets/icons/icon_card1.png";
import Icon2 from "@/app/assets/icons/icon_card2.png";
import Icon3 from "@/app/assets/icons/icon_card3.png";
import Icon4 from "@/app/assets/icons/icon_card4.png";
import Icon5 from "@/app/assets/icons/icon_card5.png";

const Statistics = () => {
  return (
    <div className="w-full px-[29px] md:px-[37px] text-dark_text">
      <div className="cards_container -mt-[72px] grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <Card
          icon={Icon1}
          percentage={16.5}
          usd="12k"
          value="0.00%"
          valueType="APR"
        />
        <Card
          icon={Icon2}
          percentage={16.5}
          usd="12k"
          value="$ 6K"
          valueType="TVL"
        />
        <Card
          icon={Icon3}
          percentage={16.5}
          usd="12k"
          value="5"
          valueType="STAKERS"
        />
        <Card
          icon={Icon4}
          percentage={16.5}
          usd="12k"
          value="34k"
          valueSmall="ABDS"
          valueType="STAKING"
        />
        <Card
          icon={Icon5}
          percentage={16.5}
          usd="12k"
          value="500"
          valueType="LIMIT"
        />
      </div>
    </div>
  );
};

export default Statistics;
