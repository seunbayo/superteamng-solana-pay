import { FC } from "react";
import pkg from '../../package.json';
import { Heading } from "./Heading";
import { RequestAirdrop } from "./RequestAirdrop";
import { WalletSolBalance } from "./WalletSolBalance";

export const Layout: FC = ({ children }) => {
  return (
    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <Heading>
          Thank you for choosing to buy me cofee <span className='text-sm font-normal align-top text-slate-700'></span>
        </Heading>
        <h2 className="md:w-full text-center text-slate-300 my-2">
          <p>Please Scan the QR code or connect your wallet to proceed</p>
        </h2>
        {children}
        <div className="text-center">
          <RequestAirdrop />
          <WalletSolBalance />
        </div>
      </div>
    </div>
  )
}
