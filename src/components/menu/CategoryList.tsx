import { useState } from "react";
import { Category } from "../data/Category";
import CategoryItem from "./CategoryItem";

function CategoryList(props: Category) {
  const [collapse, setCollapse] = useState<boolean>();
  const [clickIndex, setClickIndex] = useState<number>();

  const handClickItem = (index: number) => {
    setClickIndex(index);
    setCollapse(collapse ? false : true);
  };

  return (
    <>
      {props.sub !== undefined &&
        props.sub.map((param) => {
          return (
            <div>
              <CategoryItem
                props={param}
                onclick={() => handClickItem(param.id)}
                key={param.id}
              ></CategoryItem>
              {param.sub.length > 0 ? (
                param.id === clickIndex &&
                collapse && (
                  <CategoryList {...param} key={900 + param.id}></CategoryList>
                )
              ) : (
                <></>
              )}
            </div>
          );
        })}
    </>
  );
}

export default CategoryList;
