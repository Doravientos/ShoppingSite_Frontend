import { useCallback, useState } from "react";
// import { CategoryResp } from "../data/Category";
import { version } from "react-dom/server";
import { Category } from "../data/Category";
import CategoryRoot from "./CategoryRoot";
import { MenuIcon } from "../common/Icon";

const Menu = () => {
  const [category, setCategory] = useState<[Category]>();

  const handleMenuClick = useCallback(() => {
    category?.push({ name: "WOMEN", level: 0, collapse: true, sub: [] });
    category?.push({ name: "MEN", level: 0, collapse: true, sub: [] });
    category?.push({ name: "KIDS", level: 0, collapse: true, sub: [] });
    setCategory(category);
  }, [version]);

  category?.map((item) => {
    alert(item);
  });

  return (
    <>
      <div>
        <MenuIcon onClick={handleMenuClick} />
      </div>
      <div>
        <CategoryRoot
          name={"WOMEN"}
          level={0}
          collapse={true}
          sub={[]}
        ></CategoryRoot>
        <CategoryRoot
          name={"MEN"}
          level={0}
          collapse={true}
          sub={[]}
        ></CategoryRoot>
        <CategoryRoot
          name={"KIDS"}
          level={0}
          collapse={true}
          sub={[]}
        ></CategoryRoot>
      </div>
    </>
  );
};

export default Menu;
