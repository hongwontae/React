/* eslint-disable react/prop-types */

import { useMemo } from "react";
import { Link } from "react-router-dom";

function Pagination({ totalPage }) {
  const numberArray = useMemo(() => {
    return Array.from({ length: totalPage }, (_, i) => i + 1);
  }, [totalPage]);

  return (
    <>
      <div className="flex justify-center gap-4 mb-4">
        {numberArray.map((ele) => {
          return (
            <>
              <Link
                key={ele}
                to={`/play-result?page=${ele}`}
                className="border-[1px] p-2 rounded-lg text-lg"
              >
                {ele}
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Pagination;
