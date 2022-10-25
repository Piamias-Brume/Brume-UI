import { XSWR } from "@hazae41/xswr"
import { ErrorProvider } from "components/context/error"
import { NetworkProvider } from "components/context/network"
import { PhisingProvider } from "components/context/phisng"
import { RouteProvider } from "components/context/router"
import { ThemeProvider } from "components/context/theme"
import { TutorialProvider } from "components/context/tutorial"
import { SelectAssetProvider } from "components/test/context/asset"
import { SelectWalletProvider } from "components/test/context/selectwallet"
import { WalletProvider } from "components/test/context/wallet"
import { ChildrenProps } from "libs/react/props"
import type { AppProps } from "next/app"
import "styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {

  return <Provider>
    <Component {...pageProps} />
  </Provider>
}


function Provider(props: ChildrenProps) {

  const { children } = props

  return <XSWR.CoreProvider>
    <ErrorProvider>
      <RouteProvider>
        <ThemeProvider>
          <WalletProvider>
            <SelectWalletProvider>
              <SelectAssetProvider>
                <NetworkProvider>
                  <TutorialProvider>
                    <PhisingProvider>
                      {children}
                    </PhisingProvider>
                  </TutorialProvider>
                </NetworkProvider>
              </SelectAssetProvider>
            </SelectWalletProvider>
          </WalletProvider>
        </ThemeProvider>
      </RouteProvider>
    </ErrorProvider>
  </XSWR.CoreProvider>
}