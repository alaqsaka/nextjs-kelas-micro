import React from "react";
import Link from "next/link";
import IconPlay from "public/images/icon-play.svg";
import Image from "next/image";

const RenderItem = ({ item }) => {
  console.log(item);
  return (
    <div className="w-1/4 px-4">
      <div className="item relative">
        <figure className="item-image">
          <IconPlay></IconPlay>
          <Image
            height="100%"
            width="100%"
            layout="responsive"
            src={item?.thumbnail ?? ""}
            alt={item?.name ?? "Some Information"}
            style={{
              maxHeight: "170px !important",
            }}
          />
        </figure>
        <div className="item-meta">
          <h4 className="text-lg text-gray-900">
            {item?.name ?? "Course Name"}
          </h4>
          <h5 className="text-lg text-gray-600">
            {item?.level ?? "Course Level"}
          </h5>
        </div>
        <Link href="/course/[slug]" as={`courses/${item.id}`}>
          <a className="link-wrapped"></a>
        </Link>
      </div>
    </div>
  );
};

export default RenderItem;
