type TPropsWithRef<T extends ElementType> = ComponentProps<T> & {
  ref?: Ref<T extends keyof JSX.IntrinsicElements ? HTMLElement : InstanceType<T>>;
};
