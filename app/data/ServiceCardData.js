// import { ReactComponent as WeddingIcon } from "./icons/wedding.svg";
// import { ReactComponent as CommercialIcon } from "./icons/commercial.svg";
// import { ReactComponent as BTSIcon } from "./icons/bts.svg";

import { getAllDataFromTable } from "@/lib/storage";

export async function servicesData() {
  const { data } = await getAllDataFromTable(
    process.env.NEXT_PUBLIC_CATEGORIES_TABLE
  );
  console.log(data, "category data");
  return { data };
}
