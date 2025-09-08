import { UI_MESSAGES } from '@/lib/consts'
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputSubmit,
} from '@/components/ai-elements/prompt-input'

interface GameInputProps {
  input: string
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  isLoading: boolean
}

export function GameInput(props: GameInputProps) {

  const {
    input,
    isLoading,
    onSubmit,
    onInputChange,
  } = props

  const inputTrimmed = input.trim()
  const inputSubmitIsDisabled = isLoading || inputTrimmed === ''

  return (
    <PromptInput onSubmit={onSubmit} className='relative pr-8'>
      <PromptInputTextarea
        placeholder={UI_MESSAGES.PLACEHOLDERS.INPUT}
        value={input}
        onChange={onInputChange}
        disabled={isLoading}
      />
      <PromptInputSubmit
        className="absolute bottom-2 right-2"
        disabled={inputSubmitIsDisabled}
      />
    </PromptInput>
  )
}