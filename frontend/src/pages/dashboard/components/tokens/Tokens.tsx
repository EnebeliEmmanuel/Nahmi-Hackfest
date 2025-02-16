import React from "react";
import { TokenType } from "utils/types";
import symbol from "assets/png/nahmii-logo.png";

const tokens: TokenType[] = [
    {
        symbol: "NII",
        image: symbol,
        balance: 4.5,
    },
];
function Tokens(): JSX.Element {
    return (
        <section className="page-content min-w-[50%] max-w-[40rem] text-white">
            <h1>Tokens</h1>
            {tokens.length === 0 ? (
                <p>
                    Your wallet is empty. Please click the faucet button to
                    claim your free tokens.
                </p>
            ) : (
                <ul className="w-full">
                    {tokens.map((token) => (
                        <li
                            key={token.symbol}
                            className="flex-center-start py-2 w-full gap-x-8"
                        >
                            <img
                                src={token.image}
                                className="w-4 aspect-square"
                            />
                            <p>{token.balance}</p>
                            <p>{token.symbol}</p>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}

export default Tokens;
