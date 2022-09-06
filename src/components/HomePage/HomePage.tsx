interface Props {
  name: string;
}
export const HomePage = (props: Props) => {
  return (
    <>
      <div>Hello {props.name}</div>
    </>
  );
};
