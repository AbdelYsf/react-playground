interface Props {
  year: string;
}
export const AboutPage = (props: Props) => {
  return (
    <>
      <div>copyright {props.year} </div>
    </>
  );
};
