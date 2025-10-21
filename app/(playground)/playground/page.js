import { Button } from "@nextui-org/react";
import ActionButtons from "@/components/ActionButtons";

// import PlaygroundIDE from "@/components/PlaygroundIDE";
// import Auth0SilentAuth from "@/components/Auth0SilentAuth";
// import LoginButtons from "@/components/LoginButtons";
// import { Spinner } from "@nextui-org/spinner";

export const metadata = {
  title: "Playground",
  description: "Runme Playground",
};

// const AuthButtonsContainer = () => {
//   return (
//     <div className="md:border-3 md:shadow-xl md:shadow-purpleish-600 px-12 pt-12 pb-6 rounded-xl border-purpleish-500 flex flex-col space-y-2">
//       <h1 className="text-5xl text-center font-semibold">Runme Playground</h1>
//       <p className="text-center font-light font-mono">
//         Sign in to get your ephemeral Runme Notebook playground.
//       </p>
//       <div className="pb-8 pt-8">
//         <LoginButtons />
//       </div>
//       <div className="text-xs text-center text-gray-400">
//         Only used for verification against abuse.
//       </div>
//     </div>
//   );
// };

const Playground = () => {
  return (
    <div className="px-12 pt-12 pb-6 flex flex-col space-y-2">
      <h1 className="text-5xl text-center font-semibold">Playgrounds are no longer available</h1>
      <p className="text-center font-light font-mono">
        We are no longer offering playgrounds. Please install Runme to get started.
      </p>
      <ActionButtons />
    </div>
  );
};

export default Playground;
