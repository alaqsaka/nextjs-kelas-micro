import React from "react";
import Link from "next/link";
import RenderItem from "./RenderItem";

const ListCourses = ({ data }) => {
  return (
    <>
      <div className="flex justify-between items-center px-2 md:px-0">
        <div className="w-auto">
          <h2 className="text-lg text-gray-600">New Classes</h2>
          <h3 className="text-xl text-gray-900">
            Summer <span className="text-teal-400">Productive</span>
          </h3>
        </div>
        <div className="w-auto">
          <Link href="/courses">
            <a className="text-gray-600 hover:underline text-sm">
              View All Course
            </a>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-6  px-2 md:px-0">
        {data?.length > 0 ? (
          data.map((item, index) => {
            return <RenderItem item={item} key={index}></RenderItem>;
          })
        ) : (
          <div className="w-full text-center py-12">No Course Found</div>
        )}
      </div>
    </>
  );
};

export default ListCourses;
