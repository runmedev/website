import { InstallButton } from "./InstallButton";

export const ExtensionCTA = ({ label, extension }) => {
  const handle = `https://marketplace.visualstudio.com/items?itemName=stateful.${extension}`;
  return (
    <div className="container mx-auto max-w-7xxl sm:px-8 lg:px-16 md:mb-8">
      <div className="flex justify-center pt-8">
        <InstallButton name={label} href={handle} />
      </div>
      <div className="flex justify-center pt-2">
        or search <span className="px-1 font-bold">{extension}</span>inside VS Code
      </div>
    </div>
  );
};

export default ExtensionCTA;
