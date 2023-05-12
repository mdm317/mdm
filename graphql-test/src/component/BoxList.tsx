import {
  useBoxListQuery,
  useChangeBoxTitleMutation,
  useChangeBoxTitleStrangeOutputMutation,
} from "@/gql";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function BoxList() {
  const { data, fetchMore } = useBoxListQuery();
  const [changeTitle] = useChangeBoxTitleMutation();
  const [changeTitle2] = useChangeBoxTitleStrangeOutputMutation();
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  useEffect(() => {
    if (inView && data && data.boxList.nxt) {
      fetchMore({
        variables: {
          nxt: data.boxList.nxt,
        },
      });
    }
  }, [inView]);

  if (!data) {
    return null;
  }
  const handleChangeTitle = (id: number) => {
    changeTitle({ variables: { id } });
  };
  // graphql 결과값이 좋지 않으면 이런식으로 변경해야함
  const handleChangeTitle2 = (id: number) => {
    changeTitle2({
      variables: { id },
      update(cache, { data }) {
        cache.modify({
          id: `Box:${id}`,
          fields: {
            title() {
              if (data && data.changeBoxTitleStrangeOutput) {
                return data.changeBoxTitleStrangeOutput;
              }
            },
          },
        });
      },
    });
  };

  return (
    <div>
      {data.boxList.data.map(({ id, title, color }) => (
        <div key={id}>
          <h1>{title}</h1>
          <button
            onClick={() => {
              handleChangeTitle(id);
            }}
          >
            change title
          </button>
          <button
            onClick={() => {
              handleChangeTitle2(id);
            }}
          >
            change title with strange output
          </button>
          <div
            style={{
              background: color,
              width: 300,
              height: 300,
            }}
          ></div>
        </div>
      ))}
      <div ref={ref} />
    </div>
  );
}

export default BoxList;
