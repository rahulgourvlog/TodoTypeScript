import {ReactNode} from "react";


interface BackgroundThemeProps {
    children:ReactNode
}

const BackgroundTheme:React.FC<BackgroundThemeProps> = ({ children }) => {
  return (
    <>
      <div className="bg-slate-500 flex justify-center h-screen">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white h-max text-center w-full">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundTheme;
