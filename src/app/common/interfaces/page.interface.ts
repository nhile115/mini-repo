export interface IBasePageProps {
  params: { locale: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
