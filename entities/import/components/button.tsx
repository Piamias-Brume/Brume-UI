
import { OppositeTextButton, TextButton } from "components/buttons/button";
import { OutlineChatBubbleBottomCenterTextIcon, OutlineKeyIcon, OutlineSwatchIcon } from "components/icons/heroicons";
import { StringHandleProps } from "libs/react/props";

export function ImportMethodButton(props: StringHandleProps) {

  const { stringHandle } = props

  return <div className="flex flex-col gap-4">
    {stringHandle?.current === "phrase"
      ? <OppositeTextButton oicon={OutlineChatBubbleBottomCenterTextIcon}>
        Secret recovery phrase
      </OppositeTextButton>
      : <TextButton className="dark:text-mauve10" onClick={() => stringHandle?.set("phrase")} oicon={OutlineChatBubbleBottomCenterTextIcon}>
        Secret recovery phrase
      </TextButton>}
    {stringHandle?.current === "key"
      ? <OppositeTextButton oicon={OutlineKeyIcon}>
        Private key
      </OppositeTextButton>
      : <TextButton className="dark:text-mauve10" onClick={() => stringHandle?.set("key")} oicon={OutlineKeyIcon}>
        Private key
      </TextButton>}
    {stringHandle?.current === "hardware"
      ? <OppositeTextButton oicon={OutlineSwatchIcon}>
        Hardware wallet
      </OppositeTextButton>
      : <TextButton className="dark:text-mauve10" onClick={() => stringHandle?.set("hardware")} oicon={OutlineSwatchIcon}>
        Hardware wallet
      </TextButton>}
  </div>
}