import { React, useObsidian } from '../../../deps.ts';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      div: any;
      br: any;
      pre: any;
      code: any;
      label: any;
      select: any;
      option: any;
      p: any;
      input: any;
    }
  }
}

const Query = (props: any) => {
  const { gqlRequest } = props;

  return (
    <div className="w-boxes h-boxes bg-black border shadow rounded-xl m-3 overflow-hidden">
      <div className="h-full rounded-xl overflow-auto">
        <div className="h-full w-maxcontent px-4 py-3 sm:p-6">
          <pre className="h-full w-maxcontent flex flex-column text-white overflow-hidden ">
            Query:
            <code className=" h-full text-green-500">{gqlRequest}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};
export default Query;
