import { Header } from "components/layout/header";
import { WalletInfoNaked } from "components/layout/informations";
import { TxDefi } from "components/test/data/defi";
import { SignButton } from "./components/button";
import { SignInfo } from "./components/information";


export function SignaturePage(props: { txDefi: TxDefi }) {

  const { txDefi } = props

  return <>
    <div className="flex flex-col h-full">
      <Header />
      <div className="my-2" />
      <WalletInfoNaked />
      <div className="my-2" />
      <SignInfo txDefi={txDefi} />
      <div className="h-[210px] p-md">
        <div className="h-full rounded-xl bg-contrast overflow-scroll">
          <div className="p-md">
            {"Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker."}
          </div>
        </div>
      </div>
      <div className="my-1" />
      <div className="p-md">
        <SignButton />
      </div>
      <div className="my-1" />
    </div >
  </>
}