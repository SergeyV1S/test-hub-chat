type TPropsWithRef<T extends ElementType> = ComponentProps<T> & {
  ref?: Ref<T extends keyof JSX.IntrinsicElements ? HTMLElement : InstanceType<T>>;
};

interface IMutationSettings<Data = unknown> {
  config?: import("axios").AxiosRequestConfig;
  data: Data;
}

interface IQuerySettings<QueryParams = object> {
  config?: import("axios").AxiosRequestConfig;
  queryParams: QueryParams & { page: number };
}

interface IBaseResponse<T> {
  data: T;
  pages: number;
}
