import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

export function AsanaImage({imgSrc}: {readonly imgSrc: string}): JSX.Element {
  return (
    <>
      {imgSrc != '' ? (
        <img src={`${import.meta.env.VITE_BASE_NAME}${imgSrc}`} style={{maxWidth: '100%', maxHeight: '100%'}}></img>
      ) : (
        <SelfImprovementIcon color='primary' sx={{fontSize: 150}}></SelfImprovementIcon>
      )}
    </>
  );
}
