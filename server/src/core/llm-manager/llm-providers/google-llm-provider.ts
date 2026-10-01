import AISDKRemoteLLMProvider from '@/core/llm-manager/llm-providers/ai-sdk-remote-llm-provider'
import type { ResolvedLLMTarget } from '@/core/llm-manager/llm-routing'

export default class GoogleLLMProvider extends AISDKRemoteLLMProvider {
  constructor(target: ResolvedLLMTarget) {
    super({
      name: 'Google Gemini LLM Provider',
      providerName: 'google',
      apiKeyEnv: 'GEMINI_API_KEY',
      model: target.model,
      baseURL: 'https://generativelanguage.googleapis.com/v1beta/openai/',
      flavor: 'openai-compatible'
    })
  }
}
