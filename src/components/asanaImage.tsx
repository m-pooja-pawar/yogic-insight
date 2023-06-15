import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

export function AsanaImage({imgSrc}: {readonly imgSrc: string}): JSX.Element {
  return (
    <>
      {imgSrc != '' ? (
        <img height='100%' src={imgSrc}></img>
      ) : (
        <SelfImprovementIcon color='primary' sx={{fontSize: 150}}></SelfImprovementIcon>
      )}
    </>
  );
}
