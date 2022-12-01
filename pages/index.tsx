import Head from "next/head";
import Image from "next/image";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="gridContainer w-full justify-between ">
      <Card
        description="Go to the Gym"
        date="10-12-2022"
        bgColor="bg-[#F54768]"
      />
      <Card
        description="Go to the Gym"
        date="10-12-2022"
        bgColor="bg-[#FF9678]"
      />
      <Card
        description="Go to the Gym"
        date="10-12-2022"
        bgColor="bg-[#974063]"
      />
      <Card
        description="Go to the Gym"
        date="10-12-2022"
        bgColor="bg-[#41436A]"
      />
    </div>
  );
}
