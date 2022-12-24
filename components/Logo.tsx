import Image from "next/image";
import React from "react";

const Logo = (props: any) => {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <Image
        className="rounded-full object-cover p-1"
        height={50}
        width={50}
        src="https://media.graphassets.com/DBqYljsQtm8vrJ8uG0aP"
        alt={`logo ${title}`}
      />
      <>{renderDefault(props)}</>
    </div>
  );
};

export default Logo;
