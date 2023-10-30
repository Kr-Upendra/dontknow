import { imgList } from "../utils/imgList";

export const useGetImage = (hteam, ateam) => {
  const defaultHometeam = isImageExist(imgList, hteam);
  const defaultAwayteam = isImageExist(imgList, ateam);
  return { defaultHometeam, defaultAwayteam };
};

const isImageExist = (list, teamname) => {
  if (list.includes(teamname)) return teamname;
  else return "DEF";
};
