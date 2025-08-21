// import { ReactComponent as WeddingIcon } from "./icons/wedding.svg";
// import { ReactComponent as CommercialIcon } from "./icons/commercial.svg";
// import { ReactComponent as BTSIcon } from "./icons/bts.svg";

import { getAllDataFromTable } from "@/lib/storage";

export async function servicesData() {
  const { data, error } = await getAllDataFromTable(
    process.env.NEXT_PUBLIC_CATEGORIES_TABLE
  );
  if (error) {
    console.log("ERROR:", error);
  }
  return { data };
}
