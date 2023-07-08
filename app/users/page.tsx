/*
  { success: boolean; error?: string }
  ↑だと if(!success) ブロックの中でもerrorは string | undefined
*/
type Result = { success: true } | { success: false; error: string };

/*
  if('data' in resultWithData)ブロックの中ではResultWithDataの型が{ data: { id: string, name: string } }に確定する。
  { data?: {...}, error?: {...} }という型にするより良い(ただ、少なくともVSCodeでは「resultWithData.」まで打った時にプロパティ名の補完が効かなくなる...)。
*/
type ResultWithData =
  | { data: { id: string; name: string } }
  | { error: string };

const fetch: () => Promise<Result> = () =>
  Promise.resolve({ success: false, error: 'sample error' });
const fetchData: () => Promise<ResultWithData> = () =>
  Promise.resolve({ data: { id: 'id', name: 'name' } });

const Page = async () => {
  const result = await fetch();
  if (!result.success) {
    const error = result.error;
    console.error(error);
  }

  const resultWithData = await fetchData();
  if ('data' in resultWithData) {
    const { id, name } = resultWithData.data;
    console.log(id, name);
  }

  return <p className="p-20 text-center">users</p>;
};

export default Page;
